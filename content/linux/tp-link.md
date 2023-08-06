---
title: Install Tp Link driver for WIFI AC1300
summary: Drivar for TP-Link AC1300 Dual Band USB Adapter
date: 2023-08-06T00:29:53+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - tp-link
  - wifi
  - linux
  - debian
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---


{{< img_in_post "/images/TP-Link-AC1300.png" "dbeaver" >}}



## TP-Link AC1300

The TP-Link-AC1300 WiFi Dual Band USB Adapter is a feature-packed and reliable wireless adapter that aims to enhance your wireless connectivity experience. As someone who has used this adapter extensively, I can confidently say that it delivers on its promises and offers excellent performance for its price range.




### Dual-Band Performance

One of the standout features of this adapter is its dual-band capabilities. It supports both the 2.4GHz and 5GHz bands, allowing users to choose the less crowded frequency for their wireless connections. This dual-band functionality significantly improves the overall network performance, especially in areas with many WiFi networks.

### Impressive Speed and Range

The AC1300 adapter provides reliable and fast wireless speeds, reaching up to 867Mbps on the 5GHz band and 400Mbps on the 2.4GHz band. During my testing, I experienced smooth and uninterrupted streaming, lag-free online gaming, and quick downloads. The adapter also maintains a stable connection even at a distance from the router, thanks to its strong signal reception and decent range.

### Easy Setup and Compatibility

Setting up the TP-Link AC1300 WiFi Dual Band USB Adapter is a breeze. It's compatible with various operating systems, including Windows, macOS, and Linux, which makes it versatile and suitable for a wide range of devices. The plug-and-play functionality eliminates the need for complicated installations, and the adapter is usually recognized by the system without any driver downloads.

### Install Tp Link driver in Debian

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




#### Let's break down the provided commands line by line:

$```git clone https://github.com/cilynx/rtl88x2bu.git```

This command clones a Git repository from the URL https://github.com/cilynx/rtl88x2bu.git. It essentially downloads all the source code and files from the repository to your local machine.

$```cd rtl88x2bu```

This command changes the current working directory to the newly cloned repository directory named rtl88x2bu. Now, you are inside the directory where the source code of the driver is located.

$```VER=$(sed -n 's/\PACKAGE_VERSION="\(.*\)"/\1/p' dkms.conf)```

This command extracts the version number of the driver from the dkms.conf file and assigns it to the variable VER. The sed command uses regular expressions to find the line containing PACKAGE_VERSION in dkms.conf and extracts the version number between the double quotes.

$```sudo rsync -rvhP ./ /usr/src/rtl88x2bu-${VER}```

This command copies the contents of the current directory (./) to the /usr/src/rtl88x2bu-${VER} directory. The ${VER} part in the destination path is replaced with the version number extracted in the previous step. This is done to prepare the source files for DKMS (Dynamic Kernel Module Support) installation.

$```sudo dkms add -m rtl88x2bu -v ${VER}```

This command adds the driver to the DKMS system. DKMS allows the driver to be automatically rebuilt and installed whenever a new kernel version is installed or updated.

$```sudo dkms build -m rtl88x2bu -v ${VER}```

This command builds the kernel module for the rtl88x2bu driver using DKMS. The module will be compiled for the current kernel version.

$```sudo dkms install -m rtl88x2bu -v ${VER}```

This command installs the rtl88x2bu driver module into the kernel for the current version. After this step, the driver should be ready to be used.

$```sudo modprobe 88x2bu```

This command loads the 88x2bu kernel module into memory, making it available for use by the system. Once this command is executed, the driver should be active and ready to use.

In summary, the provided set of commands is used to clone, build, and install the rtl88x2bu driver from a Git repository, using DKMS to ensure its compatibility with different kernel versions. It is a common sequence of steps to install a custom kernel driver in Linux systems.














### Conclusion

Overall, the TP-Link AC1300 WiFi Dual Band USB Adapter is a reliable and high-performing solution for improving your wireless connectivity. Its compact design, impressive dual-band capabilities, fast speeds, and ease of use make it a fantastic addition to any setup. Whether you need a wireless adapter for your laptop, desktop, or even a gaming console, the AC1300 adapter is a worthy choice that won't disappoint. I highly recommend it to anyone seeking a dependable and affordable wireless networking solution.


| **Reference:**  |
| :--- |
| - {{< a_blank target="_blank" title="Install TP Link" url="https://community.tp-link.com/en/home/forum/topic/208022" >}} | 