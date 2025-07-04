---
title: Optimizing images for web from command line
summary: Optimizing images for web from command line
date: 2023-08-09T23:02:33+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
tags:
  - linux
  - image
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
translationKey: optimiziranje-slika-iz-terminala
---

## Resize images

Install ImageMagick

```bash
$ sudo apt install imagemagick
```

### Resize to 400px width into image.min.jpg

```bash
$ convert image.jpg -resize 400 image.min.jpg
```

### Quality

resize with quality to 400px width into image.min.jpg

```bash
$ convert image.jpg -quality 75 -resize 400 image.min.jpg
```

### Strip all metadata

resize with quality to 400px width into image.min.jpg

```bash
convert image.jpg -quality 75 -resize 400 -strip image.min.jpg
```

### For the best quality

```bash
convert image.jpg -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 converted.jpg
```

### Make a bash script with a name web/jpeg

```bash
$1 - input file
$2 - width
$3 - output file

#and put the following code in it


#!/bin/bash
convert $1 -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize $2 $3
```

in folder with images

```bash
chmod +x webjpeg
webjpeg image.jpg 400 image.min.jpg
```

\
To see all 'convert' (ImageMagick) options run

```bash
$ convert man
```

&nbsp;

## PNG image

convert image from .png to . jpg

```bash
convert screenshoot.png -strip -resize 400 screenshoot.min.png
```

and then for evan smaller file you can convert it from .png to .jpg

```bash
convert screenshoot.png 400 screenshoot.jpg
```

### For batch images run this

mogrify - is part of imagemagick

```bash
mogrify -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 -path "min" *.jpg
```

&nbsp;

## Optimize SVG

SVG\
install js package SVGO\
first install nodejs then

```html
sudo npm -g install svgo
```

### Optimaze svg file

```bash
sudo logo logo.svg -o logo.min.svg
```

### Example output of compression

```text
logo.svg:
Done in 39 ms!
4.111 KiB 60,8% = 1.61 KiB
```

### For batch use

-f for the folder option\
-0 for output

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

