---
title: Install Tp Link driver for WIFI AC1300
summary:Drivar for TP-Link AC1300 Dual Band USB Adapter
date: 2023-08-06T00:29:53+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - tp-link
  - linux
  - debian
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---

Install Tp Link driver in Debian

```bash
git clone https://github.com/cilynx/rtl88x2bu.git
cd rtl88x2bu
VER=$(sed -n 's/\PACKAGE_VERSION="\(.*\)"/\1/p' dkms.conf)
sudo rsync -rvhP ./ /usr/src/rtl88x2bu-${VER}
sudo dkms add -m rtl88x2bu -v ${VER}
sudo dkms build -m rtl88x2bu -v ${VER}
sudo dkms install -m rtl88x2bu -v ${VER}
sudo modprobe 88x2bu

```

## Explore yourself

- {{< a_blank_self_role_link target="_blank" title="Install TP Link" url="https://community.tp-link.com/en/home/forum/topic/208022" >}} 