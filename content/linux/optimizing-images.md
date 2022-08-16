---
title: Optimizing images for web from command line
summary: Optimizing images for web from command line
date: 2022-04-29T02:41:54+02:00
draft: false
categories:
  - Linux
tags:
  - Linux
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
keywords:
  - Linux
  - Optimizing images
lastmod: 2022-05-23T15:04:44.773Z
---

## Resize images

Install ImageMagick

```html
$ sudo apt install imagemagick
```

### Resize to 400px width into image.min.jpg

```html
$ convert image.jpg -resize 400 image.min.jpg
```

### Quality

resize with quality to 400px width into image.min.jpg

```html
$ convert image.jpg -quality 75 -resize 400 image.min.jpg
```

### Strip all metadata

resize with quality to 400px width into image.min.jpg

```html
convert image.jpg -quality 75 -resize 400 -strip image.min.jpg
```

### For the best quality

```html
convert image.jpg -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 converted.jpg
```

### Make a bash script with a name web/jpeg

$1 - input file\
$2 - widfh\
$3 - output file\
\
and put the followinc code in it

```html
#!/bin/bash
convert $1 -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize $2 $3
```

in folder with images

```html
chmod +x webjpeg
webjpeg image.jpg 400 image.min.jpg
```

\
To see all 'convert' (ImageMagick) options run

```html
$ convert man
```

&nbsp;

## PNG image

```html
convert screenshoot.png -strip -resize 400 screenshoot.min.png
```

### And then for evan smaller file you can convert it from .png to .jpg

```html
convert screenshoot.png 400 screenshoot.png
```

### For batch images run this

mogrify - is part of imagemagick

```html
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

```html
sudo logo logo.svg -o logo.min.svg
```

### Example output of compression

```html
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

\
reference:\
{{< a_blank title="Optimizing Images for the Web from the Command Line" url="https://www.youtube.com/watch?v=8zj44m0hAoU&list=PLnur5_dvCveGQtaSkjP0i-Fege25r5dHs&index=4" >}}

&nbsp;
