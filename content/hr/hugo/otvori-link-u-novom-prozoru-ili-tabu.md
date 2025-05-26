---
title: Otvori link u novom prozoru ili tabu
summary: Kako pomoću shortcoda prilagoditi otvaranja linka u _self i _blank prozoru/tabu preglednika
date: 2025-05-24T23:46:58+02:00
lastmod: 2025-05-24T23:46:58+02:00
draft: false
author: helper4
categories: 
  - Hugo
menuItem:
  - Hugo
tags:
  - Hugo
  - markdown
  - shortcode
toc: false
autonumbering: false 
thumbnail: images/hugo.svg
translationKey: link-in-new-window-tab
---


Kreiraj _shortcode_ layouts/shortcode/a_blank.html
``` go
<a href="{{ .Get "url" }}" target="_blank" rel="noopener">{{ with .Get "title" }}{{.}}{{else}}{{.Get "url"}}{{end}}</a>
```
&nbsp;



```md
[Coding N Concepts](https://codingnconcepts.com/)
Otvara u istom prozoru preglednika
```
 [Otvori u istom prozoru / tabu](https://codingnconcepts.com/)



```go
for use remove two \ backslash

{{\< a_blank title="Otvari u novom prozoru preglednika" url=" https://codingnconcepts.com/ " >\}}
```
 {{< a_blank title="Otvari u novom prozoru preglednika / taba" url="https://codingnconcepts.com/" >}}

&nbsp;

{{< a_blank_self_role_link target="_self" title="Codingn Concepts _self" url="https://codingnconcepts.com/" >}}

---

{{< a_blank_self_role_link target="_blank" title="Codingn Concepts _blank" url="https://codingnconcepts.com/" >}}

---
&nbsp;