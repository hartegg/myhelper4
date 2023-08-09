---
title: Package Manager Nix
summary: Nix Package Manager is a powerful, purely functional package manager designed to manage software packages and configurations in a declarative and reproducible manner
date: 2023-08-09T23:02:33+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - package-manager
  - linux
  - windows
  - debiannix
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---

Nix Package Manager is a powerful, purely functional package manager designed to manage software packages and configurations in a declarative and reproducible manner. It was initially developed for the NixOS operating system but has since gained popularity as a package manager that can be used on various Unix-like systems, including Linux and macOS.

## Installation

On Linux/macOS: Nix can be installed by running a single command in your terminal:

``` bash
curl -L https://nixos.org/nix/install | sh

```
This command will install Nix and set up the necessary environment variables. Follow the on-screen instructions during the installation process.

On Windows: Nix can be installed via the Nix package manager installer for Windows. Visit the Nix website (https://nixos.org/nix/download.html) to download and install the appropriate version for your system.

## Finding Packages

- use their website to find packages to install

https://search.nixos.org/packages

- in terminal list all packages with ```nix-env -qaP``` and then grep what you are looking for ```nix-env -qaP | grep hugo```

- You can also use nix search to find packages

```bash
nix search <package_name>

```

## Managing Packages with Nix

### List Installed packages 
```bash
nix-env -q
```

### Install Packages 
```bash
nix-env -iA nixpkgs.packagename
```

### Uninstalling Packages 
```bash
nix-env -e <package_name>
```

### Erase Packages 
```bash
nix-env -e packagename
```

### Garbage Collection 
```bash
nix-collect-garbage
```

### Update All Packages 
```bash
nix-env -u
```

### Update Specific Packages 
```bash
nix-env -u packagename
```

### Hold Specific Package 
```bash
nix-env --set-flag keep true packagename
```

### List Backups (Generations)
```bash
nix-env --list-generations
```

### Rollback to Last
```bash
Backup nix-env --rollback
```

### Rollback to Specific Generation 
```bash
nix-env --switch-generation #
```

## Troubleshooting
### Programs not showing up in start menu

NIX stores all the .desktop files for the programs it installs @ ```/home/$USER/.nix-profile/share/applications/``` and a simple symlink will fix them not showing up in your start menu.

```
ln -s /home/$USER/.nix-profile/share/applications/* /home/$USER/.local/share/applications/

```


| **Reference:**  |
| :--- |
| - {{< a_blank target="_blank" title="Nix" url="https://nixos.org/" >}} | 
| - {{< a_blank target="_blank" title="Nix Package Manager" url="https://christitus.com/nix-package-manager/" >}} | 


&nbsp;




