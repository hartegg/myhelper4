---
title: Instalacijski paket Nix
summary: Instalacijski paket Nix omogućuje jednostavno postavljanje alata za upravljanje softverom
date: 2025-05-30T16:52:15+02:00
lastmod: 2025-05-30T16:52:15+02:00
draft: false
author: helper4
categories:
  - Linux
tags:
  - linux
  - nix
toc: true
autonumbering: true 
thumbnail: images/linux.svg
translationKey: instalacijski-paket-nix
---

Instalacijski paket Nix omogućuje jednostavno postavljanje alata za upravljanje softverom.Pruža sve potrebne komponente za instalaciju na različite operativne sustave (Linux, macOS, Windows), uključujući konfiguraciju okruženja i osnovne alate. Nix instalacijski paket često se koristi za brzo pokretanje izoliranih razvojnih okruženja i kontrolu verzija paketa.

## Instalacija

Na Linuxu/macOS-u: Nix se može instalirati pokretanjem jedne naredbe u terminalu:

``` bash
curl -L https://nixos.org/nix/install | sh

```
Ova naredba će instalirati Nix i postaviti potrebne varijable okruženja. Slijedite upute prikazane tijekom instalacije.

Na Windowsima: Nix se može instalirati putem instalacijskog programa za Windows. Posjetite službenu stranicu Nix-a:(https://nixos.org/nix/download.html) preuzmite i instalirajte odgovarajuću verziju za vaš sustav.

## Pronalaženje paketa

- koristite njihovu web stranicu za pretraživanje paketa:

https://search.nixos.org/packages

- u terminalu možete prikazati sve pakete pomoću: ```nix-env -qaP``` a zatim _grep_ filtrirati traženi paket ```nix-env -qaP | grep hugo```

- također možete koristiti:

```bash
nix search <package_name>

```

## Upravljanje paketima pomoću Nix-a

### Popis instaliranih paketa
```bash
nix-env -q
```

### Instalacija paketa
```bash
nix-env -iA nixpkgs.packagename
```

### Deinstalacija paketa
```bash
nix-env -e <package_name>
```

### Brisanje paketa (potpuno)
```bash
nix-env -e packagename
```

### Sakupljanje smeća (Garbage Collection)
```bash
nix-collect-garbage
```

### Ažuriranje svih paketa
```bash
nix-env -u
```

### Ažuriranje određenog paketa
```bash
nix-env -u packagename
```

### Zadržavanje paketa (Hold)
```bash
nix-env --set-flag keep true packagename
```

### Popis sigurnosnih kopija (Generations)
```bash
nix-env --list-generations
```

### Povratak na zadnju verziju
```bash
Backup nix-env --rollback
```

### Povratak na određenu generaciju
```bash
nix-env --switch-generation #
```

## Rješavanje problema
### Programi se ne prikazuju u izborniku Start

```bash
ln -s /home/$USER/.nix-profile/share/applications/* /home/$USER/.local/share/applications/

```


# Reference  
 
{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="Nix" url="https://nixos.org/" >}} 
{{< a_blank target="_blank" title="Nix Instalacijski Paket" url="https://christitus.com/nix-package-manager/" >}} 

{{< rawhtml >}} </div> {{< /rawhtml >}}


&nbsp;