---
title: Skripta za optimiziaciju slika 
summary: Jednostavna skripta za optimiziaciju slika
date: 2025-05-30T16:38:51+02:00
lastmod: 2025-05-30T16:38:51+02:00
draft: false
author: helper4
categories:
  - Linux
  - Windows
tags:
  - image
  - linux
toc: true
autonumbering: true 
thumbnail: images/linux.svg
translationKey: optimiziranje-slika-skripta
---


Skripta za optimiziaciju slika. Img-optimizer + ImageMagick koristi više CLI alata kako bi postigao najbolje rezultate.

# Potrebno instalirati

```bash
sudo apt install jpegoptim optipng imagemagick webp -y
git clone https://github.com/VirtuBox/img-optimize.git $HOME/.img-optimize
sudo ln -s $HOME/.img-optimize/optimize.sh /usr/local/bin/img-optimize
sudo chmod +x /usr/local/bin/img-optimize
```

# Prilagođena skripta

Promijenite varijable za FOLDER, ŠIRINU (WIDTH) i VISINU (HEIGHT).


```bash
#!/bin/bash
# Dependancies
# - img-optimize - https://virtubox.github.io/img-optimize/
# - imagemagick
# - jpegoptim
# - optipng

FOLDER="/home/titus/github/website/content/images"

# max width
WIDTH=800

# max height
HEIGHT=600

#resize png or jpg to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.jpg' -o -iname '*.png' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;
img-optimize --std --path ${FOLDER}

```

**Reference:**
{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="Skripta za optimizaciju slika" url="https://christitus.com/script-for-optimizing-images/#dependencies" >}}
{{< a_blank target="_blank" title="Moje omiljene Linux naredbe za optimizaciju web slika" url="https://opensource.com/article/21/12/optimize-web-images-linux" >}}

{{< rawhtml >}} </div> {{< /rawhtml >}}

&nbsp;