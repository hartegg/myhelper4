---
title: Optimiziranje slika iz terminala
summary: Optimiziranje slika iz terminala
date: 2025-05-30T17:24:13+02:00
lastmod: 2025-05-30T17:24:13+02:00
draft: false
author: helper4
categories:
  - Linux
tags:
  - linux
  - image
toc: true
autonumbering: true 
thumbnail: images/linux.svg
translationKey: optimiziranje-slika-iz-terminala
---


## Promjena veličine slika

Instalirajte ImageMagick

```bash
$ sudo apt install imagemagick
```

### Promjena veličine slike na širinu od 400px  i spremanje kao image.min.jpg

```bash
$ convert image.jpg -resize 400 image.min.jpg
```

### Kvaliteta

postavi veličinu na 400px i spremanje kao image.min.jpg

```bash
$ convert image.jpg -quality 75 -resize 400 image.min.jpg
```

### Uklanjanje(_strip_) svih metapodataka

ukloni sve metapodatake i postavi veličinu na 400px i spremanje kao image.min.jpg

```bash
convert image.jpg -quality 75 -resize 400 -strip image.min.jpg
```

### Za najbolju kvalitetu

```bash
convert image.jpg -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 converted.jpg
```

### Izrada bash skripte pod nazivom web/jpeg

```bash
# $1 - ulazna datoteka
# $2 - širina
# $3 - izlazna datoteka

# i dodaj niži kod


#!/bin/bash
convert $1 -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize $2 $3
```

u folder sa slikama

```bash
chmod +x webjpeg
webjpeg image.jpg 400 image.min.jpg
```


Za prikaz svih dostupnih opcija convert naredbe iz ImageMagicka pokrenite:

```bash
$ convert man
```

&nbsp;

## PNG slike

Konvertiraj sliku iz .png u .jpg foramt

```bash
convert screenshoot.png -strip -resize 400 screenshoot.min.png
```

za još manju veličinu datoteke možete ih pretvoriti iz .png u .jpg 

```bash
convert screenshoot.png 400 screenshoot.jpg
```

### Za grupnu obradu (batch) slika koristite ovo

**mogrify** - is part of imagemagick

```bash
mogrify -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 -path "min" *.jpg
```

&nbsp;

## OOptimizacija SVG datoteka

SVG:
Instalirajte JavaScript paket SVGO. Prvo instalirajte Node.js, zatim:

```html
sudo npm -g install svgo
```

### Optimizirajte SVG datoteku

```bash
sudo logo logo.svg -o logo.min.svg
```

### Primjer rezultata kompresije

```text
logo.svg:
Done in 39 ms!
4.111 KiB 60,8% = 1.61 KiB
```

### Za grupnu obradu SVG 

-f za mapu option\
-0 za izlaz

```html
svgo -f path/to/svgs -0 path/to/optimizesvgs
```

&nbsp;


**References:**  
{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

  {{< a_blank  target="_blank" title="Optimizing Images for the Web from the Command Line" url="https://www.youtube.com/watch?v=8zj44m0hAoU&list=PLnur5_dvCveGQtaSkjP0i-Fege25r5dHs&index=4" >}}
  {{< a_blank  target="_blank" title="ImageMUseful Linux Commandsagick JPEG script" url="https://github.com/ericmurphyxyz/dotfiles/blob/master/.local/bin/webjpeg" >}}
  
{{< rawhtml >}} </div> {{< /rawhtml >}}

&nbsp;