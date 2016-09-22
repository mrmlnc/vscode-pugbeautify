# vscode-pugbeautify

> [pug-beautify](https://github.com/vingorius/pug-beautify) plugin for VS Code.

![vscode-pugbeautify](https://cloud.githubusercontent.com/assets/7034281/18758177/a593dace-80ff-11e6-86e9-07a1d3240081.gif)

## Install

  * Press `F1` and select `Extensions: Install Extensions`.
  * Search for and select `pugbeautify`.

See the [extension installation guide](https://code.visualstudio.com/docs/editor/extension-gallery) for details.

## Usage

Press `F1` and run the command named `Beautify pug/jade`.

## Supported languages

  * Jade
  * Pug

## Supported settings

**pugbeautify.fillTab**

  * Type: `Boolean|null`
  * Default: Obtained from the current document (`null`)

Indent with Tabs, if false, with spaces.

**pugbeautify.omitDiv**

  * Type: `Boolean`
  * Default: `false`

Omit div tag when it has id or class.

**pugbeautify.fillTab**

  * Type: `Boolean|null`
  * Default: Obtained from the current document (`null`)

When `fillTab` is false, fill `tabSize` spaces.

## Keyboard shortcuts

For changes keyboard shortcuts, create a new rule in `File -> Preferences -> Keyboard Shortcuts`:

```json
{
  "key": "ctrl+shift+c",
  "command": "pugbeautify.execute"
}
```

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/vscode-pugbeautify/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
