# Markdown Paste for Wayland

Smartly paste for Markdown, but for Wayland users who use any desktop envrionment, such GNOME, Hyprland, KDE or Sway.

This repository was forked from the original [Markdown Paste](https://github.com/telesoho/vscode-markdown-paste-image) repository by [@telesoho](https://github.com/telesoho/).

**Linux Wayland is supported co-officially**.

> [!NOTE]
> You can maintain the original “Markdown Paste” extension and use both of them in parallel. All the commands, configuration IDs, properties, and their titles have been renamed with the new `ForWayland` suffix, and the username prefix has been replaced in order to reduce all the conflicts. The keybindings have also been reassigned so you can use both extensions seamlessly without overlap.
> 
> Please give a look at the table of commands, IDs, properties, and their titles below to see what changed before and after.

> [!IMPORTANT]
> The core documentation for templates, regular expression matching rules, and AI parameters remains exactly the same as in the original repository. Please refer to the [original documentation](https://github.com/telesoho/vscode-markdown-paste-image) for detailed usage instructions. Just be aware that the configuration variables, command IDs, and keybindings have been changed for this Wayland version as detailed below.

## What has changed?

- **Removal of Prettier:** The Prettier dependency has been removed as the contributor is not interested in this plugin;
- **Migration to Luxon:** The `moment` dependency is depreciated, and has been removed, and replaced with `luxon`, and the files that depended on it have been refactored;
- **Upgraded dependencies:** All the dependencies have been upgraded;
- **Wayland-focused:** All the dependencies on X11, macOS, and Windows have been removed, as this repository is redesigned for Wayland users, and as the users can use the original extension in parallel.

## Commands and Properties Comparison

Here is a comparison of the original extension’s commands and configuration properties versus the new version:

### Commands

| Original Command (`telesoho.*`) | New Command (`gusbepapi.*`)   | Original Title           | New Title                       | Original Shortcut | New Shortcut        |
| :------------------------------ | :---------------------------- | :----------------------- | :------------------------------ | :---------------- | :------------------ |
| `telesoho.MarkdownDownload`     | `gusbepapi.MarkdownDownload`  | Markdown Download        | Markdown Download for Wayland   | `Ctrl+Alt+D`      | `Ctrl+Shift+Alt+D`  |
| `telesoho.MarkdownPaste`        | `gusbepapi.MarkdownPaste`     | Markdown Paste           | Markdown Paste for Wayland      | `Ctrl+Alt+V`      | `Ctrl+Shift+Alt+V`  |
| `telesoho.MarkdownPasteCode`    | `gusbepapi.MarkdownPasteCode` | Markdown Paste Code      | Markdown Paste Code for Wayland | `Ctrl+Alt+C`      | `Ctrl+Shift+Alt+C`  |
| `telesoho.MarkdownRuby`         | `gusbepapi.MarkdownRuby`      | Markdown Ruby            | Markdown Ruby for Wayland       | `Ctrl+Alt+T`      | `Ctrl+Shift+Alt+T`  |
| `telesoho.insertMathSymbol`     | `gusbepapi.insertMathSymbol`  | Insert latex math symbol | Insert LaTeX formula and symbol | `Ctrl+Alt+\\`     | `Ctrl+Shift+Alt+\\` |

### Configuration Properties

| Original Configuration (`MarkdownPaste.*`)      | New Configuration (`MarkdownPasteForWayland.*`)           |
| :---------------------------------------------- | :-------------------------------------------------------- |
| `MarkdownPaste.enableAI`                        | `MarkdownPasteForWayland.enableAI`                        |
| `MarkdownPaste.openaiConnectOption`             | `MarkdownPasteForWayland.openaiConnectOption`             |
| `MarkdownPaste.openaiCompletionTemplate`        | `MarkdownPasteForWayland.openaiCompletionTemplate`        |
| `MarkdownPaste.openaiCompletionTemplateFile`    | `MarkdownPasteForWayland.openaiCompletionTemplateFile`    |
| `MarkdownPaste.path`                            | `MarkdownPasteForWayland.path`                            |
| `MarkdownPaste.nameBase`                        | `MarkdownPasteForWayland.nameBase`                        |
| `MarkdownPaste.namePrefix`                      | `MarkdownPasteForWayland.namePrefix`                      |
| `MarkdownPaste.nameSuffix`                      | `MarkdownPasteForWayland.nameSuffix`                      |
| `MarkdownPaste.silence`                         | `MarkdownPasteForWayland.silence`                         |
| `MarkdownPaste.applyAllRules`                   | `MarkdownPasteForWayland.applyAllRules`                   |
| `MarkdownPaste.enableHtmlConverter`             | `MarkdownPasteForWayland.enableHtmlConverter`             |
| `MarkdownPaste.turndownOptions`                 | `MarkdownPasteForWayland.turndownOptions`                 |
| `MarkdownPaste.enableRulesForHtml`              | `MarkdownPasteForWayland.enableRulesForHtml`              |
| `MarkdownPaste.enableImgTag`                    | `MarkdownPasteForWayland.enableImgTag`                    |
| `MarkdownPaste.imageRules`                      | `MarkdownPasteForWayland.imageRules`                      |
| `MarkdownPaste.rules`                           | `MarkdownPasteForWayland.rules`                           |
| `MarkdownPaste.encodePath`                      | `MarkdownPasteForWayland.encodePath`                      |
| `MarkdownPaste.autoSelectClipboardType`         | `MarkdownPasteForWayland.autoSelectClipboardType`         |
| `MarkdownPaste.autoSelectClipboardTypePriority` | `MarkdownPasteForWayland.autoSelectClipboardTypePriority` |
| `MarkdownPaste.lang_rules`                      | `MarkdownPasteForWayland.lang_rules`                      |

## Requirements

- `wl-clipboard` (`wl-copy` and `wl-paste`) commands are required (Wayland).

## Features

- Paste smart
  > Smartly paste in Markdown by pressing `Ctrl+Shift+Alt+V` or `Markdown Paste for Wayland` command.
  - If you paste an image, the extension will create a new file for the image and insert link code to Markdown (disabled in SSH and developer container mode).
  - If you paste a text, it will test the text with customised regular expression, and replace matched content by regular expression.
  - If you paste a text containing the HTML tag, it will try to convert the HTML content to Markdown.
  - If you paste a rich text, it will try to convert the rich text to Markdown.
- Download file
  Use `Markdown Download for Wayland` command (`Ctrl+Shift+Alt+D`) to download file and insert link code into Markdown.
- Paste code
  Use `Markdown Paste Code for Wayland` command (`Ctrl+Shift+Alt+C`) to paste code with auto-detecting language.
- Ruby tag
  Also, if you want to write article for learning Asia language like Chinese or Japanese, ruby tag(for example:<ruby>聪明<rp>(</rp><rt>Cōngmíng</rt><rp>)</rp></ruby>) may be useful. Now a ruby tag snippet are prepare for you, select some text and press `Ctrl+Shift+Alt+T`.

  ```HTML
  <ruby>聪明<rp>(</rp><rt>pronunciation</rt><rp>)</rp></ruby>
  ```

  This extension will not get the pronunciation for you in this version. You have to replace pronunciation by yourself.

- Insert LaTeX formula, symbol, and/or emoji
  You can insert LaTeX formula, symbol, and/or emoji to any text file, such as Julia source file.
  Press `Ctrl+Shift+Alt+\\` or input "Insert LaTeX formula and symbol" in vscode command panel, then input latex symbol name and choose symbol you want.
- Embed Base64 image
  While you paste an image or download an image, you can force the extension to insert an embed Base64 image to Markdown by an empty filename.
- AI Parse Clipboard
  Use LLM AI to parse `text` or `HTML` clipboard content. You can also customise the AI clipboard parsing behaviour to better suit different use cases by using the AI configurations.

## Config

- Predefined variables
  - `${workspaceRoot}` or `${workspaceFolder}` - the path of the folder opened in VS Code
  - `${workspaceFolderBasename}` - the name of the folder opened in VSCode without any slashes (`/`)
  - `${fileWorkspaceFolder}` - the current opened file’s workspace folder
  - `${file}` or `${filePath}` - the current opened file
  - `${relativeFileDirname}` - the current opened file’s dirname relative to `$fileWorkspaceFolder`
  - `${fileBasename}` - the current opened file’s base name
  - `${fileBasenameNoExtension}` - the current opened file's base name with no file extension
  - `${fileExtname}` - the current opened file’s extension
  - `${fileDirname}` - the current opened file’s directory name
  - `${datetime}` - the current date and time formatted by `"yyyyMMddHHmmss"`. You can customise the format by format string, for example: `${datetime|yyyy-MM-dd_HH-mm-ss}`
  - `${selectedText}` - the current selected text. If the selected text contains illegal characters `\/:*?""<>|`, it will return `""`. You can also set the default text, for example: `${selectedText|default text}`. If the selected text contains illegal characters or the selected text is empty, it will return the default text.
  - `${uuid}` - a random UUID v4

For more information, refer to the original extension documentation regarding how to configure templates, regular expression matching rules, and AI parameters.

## Issues and Suggestions

1. Please submit bugs via the following link:
   https://github.com/gusbepapi/vscode-markdown-paste-for-wayland/issues

## Contributing

See [the contribution guidelines](./CONTRIBUTING.md) for ideas and guidance on how to improve the extension. Thank you!

## Credits

- Original Extension: [Markdown Paste](https://github.com/telesoho/vscode-markdown-paste-image) by WenHong Tan ([@telesoho](https://github.com/telesoho/)).
- Forked and adapted for Wayland by Gustavo Papi ([@gusbepapi](https://github.com/gusbepapi/)).

## License

The extension and source are licensed under the [MIT license](LICENSE.txt).
