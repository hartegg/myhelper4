---
title: Hugo Language and Syntax Support
summary: Makes Hugo templating fit in with the rest of your HTML. Includes 24
  completion snippets for Go Template, see full list below. Includes snippets
  for Hugo Shortcodes in Markdown and TOML file, list to come....
date: 2022-04-25T18:17:14+02:00
draft: false
author: helper4
thumbnail: images/hugo.svg
tags:
  - hugo
lastmod: 2022-05-23T15:04:09.038Z
---

Syntax highlighting and snippets for [Hugo](https://gohugo.io/ "https://gohugo.io/") websites.

## Features

Makes Hugo templating fit in with the rest of your HTML.
Includes 24 completion snippets for Go Template, see full list below.
Includes snippets for Hugo Shortcodes in Markdown and TOML file, list to come.

## Template Snippets

| Snippet       | Tab Trigger  | Output                                |
| ------------- | ------------ | ------------------------------------- |
| Curlies       | **x**        | `{{ }}`                               |
| Dot           | **xx**       | `{{ . }}`                             |
| If            | **if**       | `{{ if }} {{ end }}`                  |
| If Inline     | **ifi**      | `Same as above but inline`            |
| If/Else       | **ife**      | `{{ if }} {{ else }} {{ end }}`       |
| If/Else if    | **ifei**     | `{{ if }} {{ else if }} {{ end }}`    |
| With          | **with**     | `{{ with }} {{ end }}`                |
| With/Else     | **withe**    | `{{ with }} {{ else }} {{ end }}`     |
| Range         | **range**    | `{{ range }} {{ end }}`               |
| Partial       | **partial**  | `{{ partial "" . }}`                  |
| partialCached | **partialc** | `{{ partialCached "" . variant }}`    |
| Naked partial | **xpartial** | `partial "" .`                        |
| Block         | **block**    | `{{ block "main" . }} {{ end }}`      |
| Block define  | **define**   | `{{ define "block" }} {{ end }}`      |
| Scratch       | **scra**     | `{{ .Scratch.Set                      |
| String        | **str**      | `{{ printf "Something about %s" . }}` |
| printF        | **print**    | `printf "%s                           |
| Variable      | **vars**     | `{{ $var := what }}`                  |
| Return        | **ret**      | `{{ return $return }}`                |
| Debug         | **debug**    | `{{ printf "%#v" . }}`                |
| Error         | **error**    | `{{ errorf "%#v" . }}`                |
| Comment       | **comm**     | `{{/* */}}`                           |

## Known Issues

For Hugo Shortcode snippets to work in your Markdown files, enable `quickSuggestions` in your User Settings

```
"[markdown]": {  "editor.quickSuggestions": true}

```

## Release Notes

See the [Changelog](https://github.com/budparr/language-hugo-vscode/blob/master/CHANGELOG.md "https://github.com/budparr/language-hugo-vscode/blob/master/CHANGELOG.md")

## Roadmap

- More Snippets/Completions
- Add syntax highlighting for shortcodes in markdown files.
- Add support for Hugo syntax highlighting in JSON files

## Acknowledgments
