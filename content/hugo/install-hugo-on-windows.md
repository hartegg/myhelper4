---
title: Install Hugo on Windows
summary:  Install Hugo on Windows
date: 2023-08-28T22:19:19+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Windows
  - Hugo
tags:
  - Hugo
  - Windows
toc: true
autonumbering: false
author: helper4
thumbnail: images/hugo.svg
---


Hugo is a powerful and flexible static site generator that allows you to build fast and efficient websites with ease. If you're a Windows user looking to get started with Hugo, you're in the right place. In this guide, we'll walk you through the steps to install Hugo on a Windows machine.

## Installing Hugo Using Chocolatey 

Using Chocolatey simplifies the Hugo installation process. 
In cmd or PowerShell window with administrator privileges for:

# Install Hugo via Chocolatey

```bash
choco install hugo -confirm
```
# To verify Installation

```bash
hugo version
```

## Installing Hugo Manually from Github

- Download Hugo: Visit the {{< a_blank target="_blank" title="Hugo releases page" url="https://github.com/gohugoio/hugo/releases" >}}  on GitHub and download the Windows 64-bit version (ending in .zip) of the latest Hugo release

- Set Up Environment Variables (Optional): To make it easier to run Hugo from the command prompt, you can add the Hugo binary path to your system's PATH environment variable. Here's how you can do it:

    - Right-click on ```This PC" or "My Computer``` and select ```Properties```
    - Click on ```Advanced system settings``` on the left-hand side.
    - Click the ```Environment Variables``` button.
    - Under ```System Variables``` find the ```Path``` variable and click "Edit."
    - Click ```New``` and add the path to the directory where you extracted the Hugo binary (e.g., C:\Hugo\bin).
    - Then click ```OK``` to save changes.

# And to verify Installation

```bash
hugo version
```
&nbsp;

| **References:**  |
| :--- |
| {{< a_blank target="_blank" title="Hugo releases page" url="https://github.com/gohugoio/hugo/releases" >}}  |
| {{< a_blank target="_blank" title="Hugo official documentation" url="https://gohugo.io/documentation/" >}}  |


&nbsp;














