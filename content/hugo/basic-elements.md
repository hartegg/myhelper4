---
title: "Basic HTML Elements"
description: "Example test article that contains basic HTML elements for text formatting on the Web."
date: 2018-04-16
author: "helper4"
categories:
  - "Hugo"
tags:
  - "HTML"
  - "Hugo"
draft: false
# menu:
#   main:
#     name: Basic Elements
#     weight: 4
toc: true
autonumbering: true
thumbnail: "images/hugo.svg"
lastmod: 2022-05-23T15:04:44.773Z
---

The main purpose of this article is to make sure that all basic HTML Elements are decorated with CSS so as to not miss any possible elements when creating new themes for Hugo.

## Headings

Let's start with all possible headings. The HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Paragraph

According to the [HTML5 specification](https://www.w3.org/TR/html5/dom.html#elements) by [W3C](https://www.w3.org/), **HTML documents consist of a tree of elements and text**. Each element is denoted in the source by a [start tag](https://www.w3.org/TR/html5/syntax.html#syntax-start-tags), such as `<body>`, and an [end tag](https://www.w3.org/TR/html5/syntax.html#syntax-end-tags), such as `</body>`. (_Certain start tags and end tags can in certain cases be omitted and are implied by other tags._)

Elements can have attributes, which control how the elements work. For example, hyperlink are formed using the `a` element and its `href` attribute.

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list
{{< rawhtml  >}}
<ul>
  <li>First item</li>
  <li>Second item
    <ul>
      <li>Second item First subitem</li>
      <li>Second item second subitem
        <ul>
          <li>Second item Second subitem First sub-subitem</li>
          <li>Second item Second subitem Second sub-subitem</li>
          <li>Second item Second subitem Third sub-subitem</li>
        </ul>
      </li>
      <li>Second item Third subitem
        <ol>
          <li>Second item Third subitem First sub-subitem</li>
          <li>Second item Third subitem Second sub-subitem</li>
          <li>Second item Third subitem Third sub-subitem</li>
        </ol>
    </ul>
  </li>
  <li>Third item</li>
</ul>
{{< /rawhtml  >}}

### Definition List

HTML also supports definition lists.

{{< rawhtml  >}}
<dl>
  <dt>Blanco tequila</dt>
  <dd>The purest form of the blue agave spirit...</dd>
  <dt>Reposado tequila</dt>
  <dd>Typically aged in wooden barrels for between two and eleven months...</dd>
</dl>

{{< /rawhtml  >}}

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

> Quoted text.\
> This line is part of the same quote.\
> Also you can _put_ **Markdown** into a blockquote.

Blockquote with a citation.

> My goal wasn't to make a ton of money. It was to build good computers. I only started the company when I realized I could be an engineer forever.
>
> > Steve Wozniak

> Do or do not there is not trying
>
> > Yoda

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports them.

| ID  | Make    | Model   | Year |
| --- | ------- | ------- | ---- |
| 1   | Honda   | Accord  | 2009 |
| 2   | Toyota  | Camry   | 2012 |
| 3   | Hyundai | Elantra | 2010 |

Colons can be used to align columns.

| Tables      |      Are      |         Cool |
| :---------- | :-----------: | -----------: |
| align: left | align: center | align: right |
| align: left | align: center | align: right |
| align: left | align: center | align: right |

You can also use inline Markdown.

| Inline    | Markdown | In                | Table  |
| --------- | -------- | ----------------- | ------ |
| _italics_ | **bold** | ~~strikethrough~~ | `code` |

## Code

```text
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example HTML5 Document 11</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```




## Other stuff — abbr, sub, sup, kbd, etc.

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>X</kbd> to win. Or press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>F</kbd></kbd> to show FPS counter.

<mark>As a unit of information in information theory, the bit has alternatively been called a shannon</mark>, named after Claude Shannon, the founder of field of information theory.
