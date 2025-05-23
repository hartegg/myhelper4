---
title: Install GitHub Desktop on Linux
summary:  Install GitHub Desktop on Linux
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - GitHub
tags:
  - linux
  - debian
  - GitHub
toc: false
autonumbering: false
author: helper4
thumbnail: images/linux.svg
date: 2022-08-15T19:48:53+02:00
---

## GitHub Desktop

With GitHub Desktop, you can interact with GitHub using a GUI instead of the command line or a web browser. You can use GitHub Desktop to complete most Git commands from your desktop, such as pushing to, pulling from, and cloning remote repositories, attributing commits, and creating pull requests, with visual confirmation of changes.

## Following commands work for me on Debian

```bash
$ wget https://github.com/shiftkey/desktop/releases/download/release-3.0.0-linux2/GitHubDesktop-linux-3.0.0-linux2.deb
$ sudo apt-get install gdebi-core
$ sudo gdebi GitHubDesktop-linux-3.0.0-linux2.deb\
```
&nbsp;

**References:**  
{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="To install Github Desktop for Ubuntu" url="https://gist.github.com/berkorbay/6feda478a00b0432d13f1fc0a50467f1" >}}
{{< a_blank target="_blank" title="Official website" url="https://desktop.github.com/">}}

{{< rawhtml >}} </div> {{< /rawhtml >}}

&nbsp;