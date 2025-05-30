---
title: Swapfile stvaranje, promjena veličine, uklanjanje
summary: Swapfile datoteka omogućuje Linuxu da koristi prostor na disku kao RAM
date: 2025-05-30T12:02:57+02:00
lastmod: 2025-05-30T12:02:57+02:00
draft: false
author: helper4
categories: 
  - Linux
tags:
  - swapfile
  - linux
  - debian
toc: true
autonumbering: true 
thumbnail: images/linux.svg
translationKey: swapfile
---

## Stvori swap datoteku

Swap datoteka omogućuje Linuxu da koristi prostor na disku kao RAM. Kada sustavu počne ponestajati RAM-a, koristi swap prostor i premješta dio sadržaja RAM-a na disk. To oslobađa RAM kako bi mogao služiti važnijim procesima. Kada se RAM ponovno oslobodi, podaci se vraćaju natrag s diska.

### Prvo _unmount_ postojeću swap particiju, ako postoji

-- isključi swap `$ swapoff -a -v`

-- stvori swapfile `$ sudo fallocate -l 12G /swapfile`

-- postavi da samo root ima pristup `$ sudo chmod 600 /swapfile`

-- napravi swapfile `$ sudo mkswap /swapfile`

-- omogući swapfile `$ sudo swapon /swapfile`

-- provjera da je li novi swapfile uspješno stvoren `$ swapon -s`

### Učini promjene trajnim

-- napravi sigurnosnu kopiju **fstab** kao **fstab.back** `$ sudo cp /etc/fstab /etc/fstab.back`

-- dodaj novo kreirani **swapfile** u **/etc/fstab** `$ sudo nano /etc/fstab`

-- pa dodaj sljedeći redak `/swapfile none swap sw 0 0`

## Promjena veličine swapfile

-- turn it off `$ sudo swapoff /swapfile`

-- stvori novu swapfile s drugačijom veličinom `$ sudo fallocate -l 10G /swapfile`

-- napravi swapfile `$ sudo mkswap /swapfile`

-- uključi swap `$ sudo swapon /swapfile`

## Ukloni swapfile

-- najprije isključi swapfile `$ sudo swapoff /swapfile`

-- zatim ukloni swapfile iz datoteke /etc/fstab file `$ sudo rm /swapfile`

## Postavljanje swappiness

-- otvori sysctl.conf `$ sudo nano /etc/sysctl.conf`

-- dodaj na kraj datoteke `vm.swappiness=10`

-- koristi na starijim računalima s malo RAM-a `vm.swappiness=60`

## Provjera sadržaja fstab datoteke
-- u terminal upiši `$ cat /etc/fstab`

### Promijeni fstab pomoću Nano editora

-- otvori Nano `$ sudo nano /etc/fstab`

i dodaj slijedeću liniju na kraj fstab-a `/swapfile none swap sw 0 0`

-- koristi **Ctrl+O** za spremanje, zatim pritisni  Enter\
-- koristi **Ctrl+C** za izlazak iz **Nano** editora


# Reference

{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="Stvori swap datoteku" url="https://itsfoss.com/create-swap-file-linux" >}} 
{{< a_blank target="_blank" title="Kako koristiti swap datoteku umjesto swap particije" url="https://www.linuxuprising.com/2018/08/how-to-use-swap-file-instead-of-swap.html" >}}
{{< a_blank target="_blank" title="Linux swap – različite vrste i kako ih koristiti" url="https://www.youtube.com/watch?v=HKy-KEtCT9o" >}} 

{{< rawhtml >}} </div> {{< /rawhtml >}}

&nbsp;
