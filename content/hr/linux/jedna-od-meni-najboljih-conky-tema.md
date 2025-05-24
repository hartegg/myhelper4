---
title: Jedna od meni najboljih Conky tema
summary: Conky je visoko prilagodljiv alat za nadzor sustava u Linuxu koji prikazuje informacije o performansama vašeg računala u stvarnom vremenu, direktno na radnoj površini
date: 2025-05-24T23:56:54+02:00
lastmod: 2025-05-24T23:56:54+02:00
draft: false
author: helper4
categories: 
  - Linux
menuItem:
  - Linux
tags:
  - conky
  - linux
  - debian
toc: true
autonumbering: true 
thumbnail: images/linux.svg
---

Conky je visoko prilagodljiv alat za nadzor sustava u Linuxu koji prikazuje informacije o performansama vašeg računala u stvarnom vremenu, direktno na radnoj površini. Bilo da ste strastveni Linux korisnik ili samo znatiželjni o praćenju svog sustava, Conky je svestran alat koji vrijedi imati. Evo kratkog vodiča kako instalirati Conky na vaš Linux sustav.

## Instaliraj Conky

Instaliraj Conky na distribuciju baziranom na debianu

```bash
sudo apt-get update
sudo apt install conky-all -y
```
Instalirajte Conky koristeći Nix upravitelj paketa

```bash
nix-env -iA nixpkgs.conky
```
ili preuzmite it https://sourceforge.net/projects/conky.mirror/

## Uninstall conky and it's dependencies

Nije vam se svidjelo? Ništa zato, ovako uklonite Conky

```bash
sudo apt-get -y autoremove conky
```

## Preuzmite i Instalirajte Conky Manager

Idite na Conky Manager GitHub stranicu https://github.com/teejee2008/conky-manager

Kada se preuzimanje završi, otvorite terminal i idite u mapu gdje je paket spremljen. Na primjer:

```bash
cd ~/Downloads
```

Instalirajte Conky Manager package pomoću slijedećih naredbi

```bash
sudo dpkg -i conky-manager*.deb
sudo apt --fix-broken install
```

## Tema Gotham
### Conky tema Gotham sa sekundama

{{< img_in_post "/images/gothamsec2.jpg" "Conky tema Gotham sa sekundama" >}}

Spremite kao GothamWithSeconds u mapu `/home/YourUsername/.conky/Gotham`

```text
 --[[
Conky, a system monitor, based on torsmo
Any original torsmo code is licensed under the BSD license
All code written since the fork of torsmo is licensed under the GPL

Please see COPYING for details
Copyright (c) 2004, Hannu Saransaari and Lauri Hakkarainen
Copyright (c) 2005-2019 Brenden Matthews, Philip Kovacs, et. al. (see AUTHORS)
All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

var memor = memtotal - memavailable
xinerama_head = 1,
]]

conky.config = {
   
	use_xft = true,
	font = 'GE_Inspira:size=12',
	xftalpha = 0,
    update_interval = 1,
	total_run_times = 0,
	xinerama_head = 1,
	
	
	own_window = true,
 	own_window_transparent = true,
    own_window_argb_visual = true,
    own_window_type = 'normal',
    
	own_window_hints = 'undecorated,below,skip_taskbar,skip_pager,sticky',
	
 	double_buffer = true,   
    draw_borders = false,
    draw_graph_borders = false,
    draw_outline = false,
    draw_shades = false,
    
    default_color = 'ccc',
    default_shade_color = 'black',
    default_outline_color = 'green',
    
    alignment = 'top_right',
    
    gap_x = 60,
    gap_y = 40,
	uppercase = false,
	cpu_avg_samples = 2,
	net_avg_samples = 1,
	override_utf8_locale = true, 
	no_buffers =true,
	
    border_width = 20,
	use_spacer = 'top,right' 
}

conky.text = [[
${voffset 10}${color ccc}${font GE Inspira:pixelsize=120}${time %H:%M}${offset -2}${font Sans:pixelsize=60}${time %S}${font}${voffset -84}${offset 10}${color FFA300}${font GE Inspira:pixelsize=42}${time %d} ${voffset -15}${color ccc}${font GE Inspira:pixelsize=22}${time  %B} ${time %Y}${font}${voffset 24}${font GE Inspira:pixelsize=50}${offset -148}${time %A}${font}
${voffset 30}${offset 12}${font Ubuntu:pixelsize=22}${color FFA300}HD ${offset 9}$color${fs_free /} / ${fs_size /}${offset 30}${color FFA300}RAM ${offset 9}$color$mem / $memmax ${offset 30}${color FFA300}CPU ${offset 9}$color${cpu cpu0}% 

]]

```

### Conky tema Gotham bez sekundi
 
{{< img_in_post "/images/gothamsec.jpg" "Conky theme Gotham Without seconds" >}}

Spremite kao GothamWithoutSeconds u mapu ```/home/YourUsername/.conky/Gotham```

```text

 --[[
Conky, a system monitor, based on torsmo
Any original torsmo code is licensed under the BSD license
All code written since the fork of torsmo is licensed under the GPL

Please see COPYING for details
Copyright (c) 2004, Hannu Saransaari and Lauri Hakkarainen
Copyright (c) 2005-2019 Brenden Matthews, Philip Kovacs, et. al. (see AUTHORS)
All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

var memor = memtotal - memavailable
xinerama_head = 1,
]]

conky.config = {
   
	use_xft = true,
	font = 'GE_Inspira:size=12',
	xftalpha = 0,
    update_interval = 1,
	total_run_times = 0,
	xinerama_head = 1,
	
	
	own_window = true,
 	own_window_transparent = true,
    own_window_argb_visual = true,
    own_window_type = 'normal',
    
	own_window_hints = 'undecorated,below,skip_taskbar,skip_pager,sticky',
	
 	double_buffer = true,   
    draw_borders = false,
    draw_graph_borders = false,
    draw_outline = false,
    draw_shades = false,
    
    default_color = 'ccc',
    default_shade_color = 'black',
    default_outline_color = 'green',
    
    alignment = 'top_right',
    
    gap_x = 60,
    gap_y = 40,
	uppercase = false,
	cpu_avg_samples = 2,
	net_avg_samples = 1,
	override_utf8_locale = true, 
	no_buffers =true,
	

    border_width = 20,
	use_spacer = 'top,right' 
}


conky.text = [[
${voffset 10}${color EAEAEA}${font GE Inspira:pixelsize=120}${time %H:%M}${font}${voffset -84}${offset 10}${color FFA300}${font GE Inspira:pixelsize=42}${time %d} ${voffset -15}${color EAEAEA}${font GE Inspira:pixelsize=24}${time  %B} ${time %Y}${font}${voffset 24}${font GE Inspira:pixelsize=58}${offset -148}${time %A}${font}
${voffset 30}${offset 12}${font Ubuntu:pixelsize=22}${color FFA300}HD ${offset 9}$color${fs_free /} / ${fs_size /}${offset 30}${color FFA300}RAM ${offset 9}$color$mem / $memmax${offset 30}${color FFA300}CPU ${offset 9}$color${cpu cpu0}%

]]


```