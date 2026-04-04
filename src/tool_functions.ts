import axios from "axios";
import { toMarkdown } from "./toMarkdown";
import { Paster } from "./paster";
import Logger from "./Logger";
import * as HTMLParser from "node-html-parser";

export async function fetchWeb({ url }: { url: string }): Promise<any> {
  try {
    const response = await axios.get(url);
    const html = HTMLParser.parse(response.data);
    const body = html.querySelector("body").toString();
    const title = html.querySelector("title").toString();
    return { url, title, body };
  } catch (e) {
    return {
      error: e,
    };
  }
}

export async function htmlToMarkdown({ html }: { html: string }): Promise<any> {
  Logger.log("htmlToMarkdown:", JSON.stringify(html));
  const turndownOptions = Paster.config.turndownOptions;
  const content = toMarkdown(html, turndownOptions);
  return { content };
}
