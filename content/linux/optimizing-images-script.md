---
title: Optimizing Images Script
summary: Optimizing images is easy with this script! Img-optimizer + ImageMagicK leverages multiple CLI tools to give the best results
date: 2023-08-09T23:57:15+02:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - image
  - linux
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---

Optimizing images is easy with this script! Img-optimizer + ImageMagicK leverages multiple CLI tools to give the best results

# Dependencies

```bash
sudo apt install jpegoptim optipng imagemagick webp -y
git clone https://github.com/VirtuBox/img-optimize.git $HOME/.img-optimize
sudo ln -s $HOME/.img-optimize/optimize.sh /usr/local/bin/img-optimize
sudo chmod +x /usr/local/bin/img-optimize
```

# Custom Script

Change the variables for FOLDER, WIDTH, and HEIGHT.

Current script used on this website: https://raw.githubusercontent.com/ChrisTitusTech/website/master/content/images/opti

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

{{< a_blank target="_blank" title="Script for Optimizing Images" url="https://christitus.com/script-for-optimizing-images/#dependencies" >}}
{{< a_blank target="_blank" title="My favorite Linux commands for optimizing web images" url="https://opensource.com/article/21/12/optimize-web-images-linux" >}}

{{< rawhtml >}} </div> {{< /rawhtml >}}

&nbsp;