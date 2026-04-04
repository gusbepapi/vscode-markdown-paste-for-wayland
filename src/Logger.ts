import * as vscode from "vscode";
import { DateTime } from "luxon";

export default class Logger {
  static channel: vscode.OutputChannel;

  static log(...message: any[]) {
    if (this.channel) {
      const time = DateTime.now().toFormat("MM-dd HH:mm:ss");
      for (const m of message) {
        const logmsg = `[${time}] ${m.substring(0, 256)}`;
        this.channel.appendLine(logmsg);
      }
    }
  }

  static showInformationMessage(
    message: string,
    ...items: string[]
  ): Thenable<string> {
    this.log(message);
    return vscode.window.showInformationMessage(message, ...items);
  }

  static showErrorMessage(
    message: string,
    ...items: string[]
  ): Thenable<string> {
    this.log(message);
    return vscode.window.showErrorMessage(message, ...items);
  }
}
