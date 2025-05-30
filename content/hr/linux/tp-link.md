---
title: Install Tp Link driver for WIFI AC1300
summary: Drivar for TP-Link AC1300 Dual Band USB Adapter
date: 2025-05-30T17:57:55+02:00
lastmod: 2025-05-30T17:57:55+02:00
draft: false
author: helper4
categories:
  - Linux
  - Windows
tags:
  - tp-link
  - wifi
  - linux
  - debian
toc: true
autonumbering: falstruee 
thumbnail: images/linux.svg
translationKey: tp-link
---


{{< img_in_post "/images/TP-Link-AC1300.png" "dbeaver" >}}



## TP-Link AC1300

TP-Link-AC1300 WiFi Dual Band USB adapter je pouzdan i bogato opremljen bežični adapter koji ima za cilj poboljšati vaše iskustvo bežične povezivosti. Kao netko tko ga je intenzivno koristio, mogu s povjerenjem reći da ispunjava svoja obećanja i nudi izvrsne performanse s obzirom na svoju cjenovnu kategoriju. Dostiže brzine do 867 Mbps na frekvenciji od 5 GHz i do 400 Mbps na frekvenciji od 2,4 GHz.

## Instalacija Tp Link driver na Debian

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




#### Evo objašnjenja svake linije koda zasebno – red po red – s pojašnjenjem što točno radi:

`git clone https://github.com/cilynx/rtl88x2bu.git`

Preuzima (klonira) repozitorij sa službene GitHub stranice u trenutni direktorij. Repozitorij sadrži upravljački program (driver) za Realtek RTL88x2BU WiFi adapter.

`cd rtl88x2bu`

Ulazi u direktorij koji je prethodno kloniran, tj. prelazi u mapu rtl88x2bu, gdje se nalazi izvorni kod i konfiguracija upravljačkog programa.

`VER=$(sed -n 's/\PACKAGE_VERSION="\(.*\)"/\1/p' dkms.conf)`

Iz datoteke dkms.conf izdvaja verziju upravljačkog programa i sprema je u varijablu VER.
Konkretno:

  --koristi sed da pronađe liniju PACKAGE_VERSION="...",
  --izdvaja sadržaj između navodnika,
  --rezultat se sprema kao vrijednost varijable VER.

`sudo rsync -rvhP ./ /usr/src/rtl88x2bu-${VER}`

Kopira sve datoteke iz trenutnog direktorija u /usr/src/rtl88x2bu-${VER} koristeći rsync.

Opcije znače:

  -r – rekurzivno (kopira i poddirektorije),

  -v – verbose (prikazuje što se događa),

  -h – human-readable (čita iznose u razumljivom obliku),

  -P – prikazuje napredak prijenosa i omogućuje nastavak ako je prekinuto.

Ovo je važno jer dkms traži izvorni kod u /usr/src.

`sudo dkms add -m rtl88x2bu -v ${VER}`

Dodaje upravljački program u DKMS (Dynamic Kernel Module Support) sustav pod nazivom rtl88x2bu i verzijom ${VER}.
To omogućuje da se upravljački program automatski rekonstruira kada se nadogradi jezgra (kernel).

`sudo dkms build -m rtl88x2bu -v ${VER}`

Kompilira (gradi) upravljački program iz izvornog koda za trenutačnu verziju jezgre.

`sudo dkms install -m rtl88x2bu -v ${VER}`

Instalira izgrađeni (kompajlirani) upravljački program tako da se može koristiti s trenutnim kernelom.

`sudo modprobe 88x2bu`

Učitava upravljački program 88x2bu u jezgru (kernel), čime se uređaj aktivira i počinje raditi bez potrebe za ponovnim pokretanjem sustava.


