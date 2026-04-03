import { execFile } from "child_process";
import { promisify } from "util";
import * as fs from "fs";

const exec = promisify(execFile);

export enum ClipboardType {
  Text = "text",
  Html = "html",
  Image = "image",
  Unknown = "unknown",
}

export class Clipboard {
  public async getContentType(): Promise<Set<ClipboardType>> {
    try {
      const { stdout } = await exec("wl-paste", ["-l"]);
      const types = new Set<ClipboardType>();
      const lines = stdout.split("\n");
      for (const line of lines) {
        const t = line.trim();
        if (t.startsWith("text/html")) {
          types.add(ClipboardType.Html);
        } else if (t.startsWith("image/")) {
          types.add(ClipboardType.Image);
        } else if (
          t.startsWith("text/plain") ||
          t.startsWith("STRING") ||
          t.startsWith("UTF8_STRING")
        ) {
          types.add(ClipboardType.Text);
        }
      }
      return types.size > 0 ? types : new Set([ClipboardType.Unknown]);
    } catch (e) {
      return new Set([ClipboardType.Unknown]);
    }
  }

  public async getTextPlain(): Promise<string> {
    try {
      const { stdout } = await exec("wl-paste", ["-t", "text/plain"]);
      return stdout;
    } catch (e) {
      // Fallback
      try {
        const { stdout } = await exec("wl-paste", ["-t", "UTF8_STRING"]);
        return stdout;
      } catch (e2) {
        return "";
      }
    }
  }

  public async getTextHtml(): Promise<string> {
    try {
      const { stdout } = await exec("wl-paste", ["-t", "text/html"]);
      return stdout;
    } catch (e) {
      return "";
    }
  }

  public async getImage(imagePath: string): Promise<string> {
    try {
      const { stdout } = await exec("wl-paste", ["-t", "image/png"], {
        encoding: "buffer",
      });
      if (stdout && stdout.length > 0) {
        fs.writeFileSync(imagePath, stdout);
        return imagePath;
      }
      return "no image";
    } catch (e) {
      return "no image";
    }
  }

  public async copyText(text: string): Promise<void> {
    try {
      const child = execFile("wl-copy");
      child.stdin?.write(text);
      child.stdin?.end();
      await new Promise<void>((resolve, reject) => {
        child.on("close", resolve);
        child.on("error", reject);
      });
    } catch (e) {
      console.error("Failed to copy text", e);
    }
  }
}

export class Shell {
  getClipboard(): Clipboard {
    return new Clipboard();
  }
}

export function getShell(): Shell {
  return new Shell();
}
