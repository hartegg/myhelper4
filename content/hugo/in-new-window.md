---
title: Opens link in new browser window or tab
summary:
date: 2022-04-23T03:24:46+02:00
draft: false
author: helper4
categories:
  - hugo
tags:
  - markdown
  - shortcode
  - hugo
thumbnail: images/hugo.svg
lastmod: 2022-05-23T15:04:44.773Z
---

{{< text_to_img "zuja nije zakon" >}}

Create a shortcode layouts/shortcode/a_blank.htnl
``` text
<a href="{{ .Get "url" }}" target="_blank" rel="noopener">{{ with .Get "title" }}{{.}}{{else}}{{.Get "url"}}{{end}}</a>
```
&nbsp;



```text
[Coding N Concepts](https://codingnconcepts.com/)
Opens in same browser window
```
 [Opens link in same window / tab](https://codingnconcepts.com/)



```text
for use remove two \ backslash

{{\< a_blank title="Opens link in new window" url=" https://codingnconcepts.com/ " >\}}
```
 {{< a_blank title="Opens link in new window / tab" url="https://codingnconcepts.com/" >}}

&nbsp;

{{< a_blank_self_role_link target="_self" title="some link2 _self" url="https://codingnconcepts.com/" >}}

---

{{< a_blank_self_role_link target="_blank" title="some link2 _blank" url="https://codingnconcepts.com/" >}}

---
&nbsp;