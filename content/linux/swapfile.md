---
title: Swapfile - craete, resize, remove
summary:
  A swapfile allows Linux to simulate the disk space as RAM. When your system
  starts running out of RAM, it uses the swap space to and swaps some content of
  the RAM
date: 2022-04-19T20:29:22+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
tags:
  - swapfile
  - linux
  - debian
keywords:
  - Linux
  - swapfile
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
lastmod: 2022-06-20T15:06:14.473Z
---

## Create swapfile

A swapfile allows Linux to simulate the disk space as RAM. When your system starts running out of RAM, it uses the swap space to and swaps some content of the RAM on to the disk space. This frees up the RAM to serve more important processes. When the RAM is free again, it swaps back the data from the disk.

**First unmount swap partition if any**

**-- turn off swap**

```bash
$ swapoff -a -v
```

**-- create swapfile**

```bash
$ sudo fallocate -l 12G /swapfile
```

**-- set only root have access to it**

```bash
$ sudo chmod 600 /swapfile
```

**-- make a swapfile**

```bash
$ sudo mkswap /swapfile
```

**-- enable the swap file**

```bash
$ sudo swapon /swapfile
```

**-- To verify if the new swap file is created**

```bash
$ swapon -s
```

**Make the changes permanent**\
**-- backup fstab to fstab.back**

```bash
$ sudo cp /etc/fstab /etc/fstab.back
```

**-- Add the newly created swapfile to /etc/fstab**

```bash
$ sudo nano /etc/fstab
```

**-- add the following line**

```bash
/swapfile none swap sw 0 0
```

## Resizing swapfile

**-- turn it off**

```bash
$ sudo swapoff /swapfile
```

**-- create new swap file with different size**

```bash
$ sudo fallocate -l 10G /swapfile
```

**-- make a swapfile**\

```bash
$ sudo mkswap /swapfile
```

**-- And turn the swap on**

```bash
$ sudo swapon /swapfile
```

## Removing swapfile

**-first swapoff**

```bash
$ sudo swapoff /swapfile
```

**-- then remove /swapfile\
This will remove entry from the /etc/fstab file**

```bash
$ sudo rm /swapfile
```

## Set swappiness

**-- open sysctl.conf**

```bash
$ sudo nano /etc/sysctl.conf
```

**-- put at the end of file**

```md
vm.swappiness=10
```

**-- add this on old computers with low RAM**

```md
vm.swappiness=60
```

## Check content of fstab
```bash
$ cat /etc/fstab
```

### Edit fstab with Nano
```bash
$ sudo nano /etc/fstab\
```
and add folowing line to end of fstab
```bash
/swapfile none swap sw 0 0
```
-- use **Ctrl+O** for save, then press **Enter**\
-- use **Ctrl+C** for **Exit Nano**


&nbsp;
| **Reference:**  |
| :--- |
| {{< a_blank_self_role_link target="_blank" title="Create swap file" url="https://itsfoss.com/create-swap-file-linux" >}} |
| {{< a_blank_self_role_link target="_blank" title="How to use swap file instead of swap" url="https://www.linuxuprising.com/2018/08/how-to-use-swap-file-instead-of-swap.html" >}} |
| {{< a_blank_self_role_link target="_blank" title="Linux Swap - Different Kinds and How to Use It" url="https://www.youtube.com/watch?v=HKy-KEtCT9o" >}} |

&nbsp;
