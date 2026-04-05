# Changelog

## 1.4.6 (2026-02-08)

- fix: Pipe `|` in HTML table cells breaks Markdown structure #146
- fix: Nested list paste from HTML not working #145

## 1.4.5 (2025-08-29)

- fix: Paste Image is disabled in SSH and Dev Container remote modes.

## 1.4.4 (2025-04-14)

- fix: Timing issue when generating timestamps for `imageRules`.

## 1.4.3 (2025-04-14)

- fix: Cannot download redirected files.

## 1.4.2 (2025-03-29)

- feat: Allow shortcuts and option menu bindings for the mdx, quarto, and rmd languages.

## 1.4.0 (2025-02-12)

- feat: Support `imageRules` configuration.

## 1.3.1 (2024-11-21)

- feat: Support the OpenAI-compatible interface, and customize the baseURL.

## 1.1.2 (2024-08-29)

- feat: Added prompt file configuration for AI.

## 1.1.0 (2024-08-18)

- feat: Added functionality to analyze clipboard content using a large language model with Groq.

## 1.0.2 (2023-11-05)

- feat: New VSCode option for HTML to Markdown conversion.

## 1.0.1 (2023-09-10)

- fix: Variable expansion in rules and lang-rules. #125

## 1.0.0 (2023-05-03)

- feat: macOS support for rich text paste. #74
- fix: macOS Ventura: Command not found. #113

## 0.21.2 (2023-03-03)

- feat: Using selected text as alt text for images.

## 0.21.1 (2023-03-01)

- fix: Added default text for `${selectedText}`.

## 0.21.0 (2023-02-28)

- feat: Added `${selectedText}` predefined variable.

## 0.20.0 (2023-02-27)

- feat: Added `applyAllRules` configuration.
- feat: Added `enableHtmlConverter` and `enableRulesForHtml`.
- fix: Fixed spaces-after-image bug.
- fix: Fixed a bug in to-markdown.
- fix: Fixed Chinese character bug #87, using the method from #44.

## 0.19.4 (2022-12-17)

- feat: Added `${relativeFileDirname}`, `${workspaceFolderBasename}`, and `${file}` predefined variables. #89 #93

## 0.19.3 (2022-11-23)

- feat: Support `${datetime|format}`. #91

## 0.19.2 (2022-11-16)

- fix: Allow passing width only. #90

## 0.19.1 (2022-05-28)

- fix: Paste as base64 not working on Windows. #86

## 0.19.0 (2022-04-08)

- feat: Added macOS get clipboard content type script. #84

## 0.18.7 (2022-04-07)

- fix: Pasting does not work in WSL. #83

## 0.18.6 (2022-03-05)

- fix: Windows: Markdown Download always saved to `C:\`. #76

## 0.18.4 (2022-02-19)

- fix: Parse `lang_rules` output not correct.

## 0.18.3 (2022-02-12)

- fix: Windows: Images are always saved to `C:\`. #72

## 0.18.2 (2022-02-12)

- feat: Added `nameBase` option and predefined variable `${datetime}`.

## 0.18.1 (2022-02-12)

- fix: Markdown Download command renders incorrect path for downloaded images.

## 0.18.0 (2022-02-12)

- feat: Allow pasting of images in documents of languages other than Markdown (like asciidoc). #56

## 0.17.2 (2022-02-11)

- fix: Markdown `img` syntax is not used in mdx files. #70

## 0.17.1 (2022-02-11)

- feat: Added the option to use `${fileWorkspaceFolder}`. #71

## 0.16.1 (2022-01-04)

- fix: Newlines in path for WSL causing image saving failures. #65

## 0.16.0 (2022-01-04)

- feat: Support multi-root workspaces folder settings. #64

## 0.15.3 (2021-12-29)

- fix: Cannot paste images to paths containing whitespaces. #60

## 0.15.1 (2021-12-24)

- feat: Prioritise image pastes over HTML pastes over text pastes.

## 0.15.0 (2021-12-24)

- feat: Support WSL.

## 0.14.0 (2021-12-12)

- feat: Support for pasting code with auto-detecting language. #50

## 0.13.8 (2021-08-05)

- fix: Variable `${workspaceRoot}` looks resolved incorrectly. #46

## 0.13.7 (2021-08-02)

- fix: Command `telesoho.MarkdownPaste` not found. #45

## 0.13.4 (2021-08-02)

- fix: Files being saved to incorrect location. #42
- fix: `MarkdownPaste` shortcut only works in Markdown mode. #38

## 0.13.3 (2021-07-02)

- feat: Embedded base64 image supported.
- feat: Added `MarkdownPaste.encodePath` configuration.

## 0.12.3 (2019-09-19)

- fix: Fixed some grammar mistakes.

## 0.12.2 (2019-09-01)

- fix: Encode URL in Markdown. #25

## 0.12.0 (2019-02-08)

- feat: Pasting a local file path that is under the workspace folder will add a relative path link into Markdown.

## 0.11.1 (2018-12-21)

- fix: Paste text does not work on some Linux distributions.

## 0.11.0 (2018-12-03)

- feat: Changed setting name from `pasteImage` to `MarkdownPaste`.
- feat: Download URL file.

## 0.10.1 (2018-11-12)

- feat: Emoji supported.

## 0.10.0 (2018-11-05)

- feat: Paste image in HTML format. #20

## 0.9.5 (2018-10-25)

- fix: Cannot get all content in the clipboard.
- feat: Optimised converting HTML tables (colspan supported) to Markdown.

## 0.9.2 (2018-10-13)

- feat: Support more predefined variables.

## 0.9.1 (2018-09-12)

- chore: Removed `devDependencies` `clipboardy` for Windows and Linux.
- feat: Optimised converting HTML to Markdown.

## 0.9.0 (2018-09-08)

- feat: Convert rich text to Markdown.
- fix: Paste path adds `./`, and file name verification supports Chinese. #18

## 0.8.0 (2018-08-12)

- feat: Insert LaTeX formula or symbol into the current editor.

## 0.7.5 (2018-04-23)

- fix: Downgraded `clipboardy` to v1.1.4. #13

## 0.7.4 (2018-04-20)

- chore: Updated all dependencies.
- docs: Added requirements section to README.

## 0.7.3 (2017-11-10)

- fix: Chinese encoding problem. #10

## 0.7.1 (2017-10-14)

- feat: Convert HTML to Markdown for pasting HTML content.
- feat: Added a snippet for adding a Ruby tag.

## 0.6.2 (2017-10-04)

- feat: Parse and replace content for pasting text.

## 0.5.0 (2017-09-15)

- feat: Auto-select filename for easier renaming (thanks to @huhk-sysu). #8

## 0.4.9 (2017-08-28)

- fix: Fix encoding problem in non-English languages on Windows OS. #7

## 0.4.7 (2017-05-21)

- fix: Enable upper case as a file name. #5
- feat: Added `pasteImage.silence` configuration option.

## 0.4.3 (2017-05-21)

- fix: Cannot create first-level subfolder of the root folder on Windows. #4

## 0.4.1 (2017-05-20)

- fix: Use forward slashes `/` in the image URL. #2

## 0.4.0 (2017-05-19)

- feat: Support renaming images after pasting.

## 0.3.0 (2016-12-31)

- feat: Support configuring the path (absolute or relative) to save images.

## 0.2.0 (2016-11-13)

- feat: Added Linux support by `xclip`.
- feat: Support using the selected text as the image name.

## 0.1.0 (2016-11-12)

- feat: Added Windows support by PowerShell.

## 0.0.1 (2016-11-01)

- Initial release. Only supports macOS.