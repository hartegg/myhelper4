---
title: Podesi bluetooth pomoću rfkill na linuxu
summary: rfkill je naredbeni alat u Linuxu koji upravlja stanjem različitih radio frekvencijskih (RF) uređaja, uključujući Bluetooth. Omogućuje vam jednostavno uključivanje i isključivanje Bluetooth adaptera.
date: 2025-05-24T23:27:21+02:00
lastmod: 2025-05-24T23:27:21+02:00
draft: false
author: helper4
categories: 
  - Linux
menuItem:
  - Linux
tags:
  - Linux
  - rfkill
  - bluetooth
toc: true
autonumbering: true 
thumbnail: images/linux.svg
translationKey: podesi-bluetooth-pomocu-rfkill-na-linuxu
---


## Što je rfkill?

"rfkill" je naredbeni alat u Linuxu koji upravlja stanjem različitih radio frekvencijskih (RF) uređaja, uključujući Bluetooth. Omogućuje vam jednostavno uključivanje i isključivanje Bluetooth adaptera. Bilo da želite uštedjeti bateriju, riješiti probleme s povezivanjem ili osigurati privatnost, rfkill je alat koji trebate koristiti.

## Kako koristiti rfkill

Prođimo kroz jednostavan primjer kako koristiti "rfkill" za uključivanje i isključivanje Bluetootha u Linuxu:
Provjera trenutnog rfkill stanja

Za provjeru stanja Bluetooth adaptera upišite sljedeću naredbu:

```bash
rfkill list
```

Ovo će prikazati popis svih RF uređaja na vašem sustavu, zajedno s njihovim trenutnim stanjem. Potražite unos koji odgovara vašem Bluetooth adapteru, obično označen kao "Bluetooth" ili nešto slično.

Prikazjue:

```text
0: hci0: Bluetooth
        Soft blocked: no
        Hard blocked: no
1: phy0: Wireless LAN
        Soft blocked: no
        Hard blocked: no
```


## Isključite(disable) Bluetooth

Da biste isključili Bluetooth adapter, upotrijebite sljedeću naredbu, zamijenivši X brojem povezanim s vašim Bluetooth adapterom (kao što je prikazano u prethodnom izlazu):

```bash
sudo rfkill block X
```

Na primjer, ako je vaš Bluetooth adapter označen kao "1", pokrenuli biste:

```bash
sudo rfkill block 1
```

## Uključi (enable) Bluetooth

Da biste ponovno uključili Bluetooth adapter, upotrijebite sljedeću naredbu:

```bash
sudo rfkill unblock 1
```

## Zaključak

Linux korisnici imaju moćan alat na raspolaganju s naredbom "rfkill". Pojednostavljuje upravljanje Bluetoothom i drugim RF uređajima, omogućujući vam potpunu kontrolu nad povezivošću vašeg sustava. Bilo da štedite bateriju na prijenosnom računalu ili rješavate probleme s Bluetoothom na stolnom računalu, "rfkill" je alat koji trebate koristiti za savladavanje upravljanja Bluetoothom u Linuxu.

Dakle, sljedeći put kada trebate uključiti ili isključiti Bluetooth, ne zaboravite na "rfkill". To je jednostavan, ali neprocjenjiv alat za Linux korisnike koji vam omogućuje upravljanje RF uređajima s lakoćom.