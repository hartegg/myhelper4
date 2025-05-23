---
title: Mastering Bluetooth Control with rfkill in Linux
summary: There are times when you may need to temporarily disable or enable Bluetooth for various reasons. In the world of Linux, the "rfkill" command is your trusty companion for handling this task efficiently.
date: 2023-11-08T22:56:23+01:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
tags:
  - bluetooth
  - linux
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---

## What is rfkill?

"rfkill" is a command-line utility in Linux that manages the state of various radio frequency (RF) devices, including Bluetooth. It allows you to easily toggle the power state of your Bluetooth adapter. Whether you need to save battery life, troubleshoot connectivity issues, or ensure privacy, rfkill is the tool to use.

## How to Use rfkill

Let's walk through a simple example of how to use "rfkill" to turn Bluetooth on and off in Linux:

### Check the Current rfkill Status

For check the status of your Bluetooth adapter type the following command:

```bash
rfkill list
```

This will display a list of all RF devices on your system, along with their current status. Look for the entry that corresponds to your Bluetooth adapter, often labeled as "Bluetooth" or something similar.

Output:

```text
0: hci0: Bluetooth
        Soft blocked: no
        Hard blocked: no
1: phy0: Wireless LAN
        Soft blocked: no
        Hard blocked: no
```


## Disable Bluetooth

To disable your Bluetooth adapter, use the following command, replacing X with the number associated with your Bluetooth adapter as shown in the previous output:

```bash
sudo rfkill block X
```

For example, if your Bluetooth adapter is listed as "1," you would run:

```bash
sudo rfkill block 1
```

## Enable Bluetooth

To re-enable your Bluetooth adapter, use the following command:

```bash
sudo rfkill unblock 1
```

## Conclusion

Linux users have a powerful tool at their disposal with the "rfkill" command. It simplifies the process of managing Bluetooth and other RF devices, ensuring that you can have full control over your system's connectivity. Whether you're conserving battery life on your laptop or troubleshooting Bluetooth issues on your desktop, "rfkill" is your go-to solution for mastering Bluetooth control in Linux.

So, the next time you need to toggle Bluetooth on or off, don't forget about "rfkill." It's a simple, yet invaluable utility for Linux users that allows you to manage your RF devices with ease.