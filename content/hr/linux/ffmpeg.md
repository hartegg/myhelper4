---
title: FFmpeg
summary: FFmpeg je moćan multimedijski okvir koji se može koristiti za konvertiranje, smanjivanje i manipulaciju audio i video datotekama. Bilo da radite s visokodefiniranim snimkama ili jednostavnim audio zapisima, FFmpeg nudi alate potrebne za brzo i učinkovito obavljanje zadatka
date: 2023-03-05T00:39:01+01:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - ffmpeg
  - linux
  - debian
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
translationKey: ffmpeg
---

FFmpeg je moćan multimedijski okvir koji se može koristiti za konvertiranje, smanjivanje i manipulaciju audio i video datotekama. Bilo da radite s visokodefiniranim snimkama ili jednostavnim audio zapisima, FFmpeg nudi alate potrebne za brzo i učinkovito obavljanje zadatka.

U ovom članku istražit ćemo neke praktične primjere korištenja FFmpeg-a za konverziju i smanjivanje audio i video datoteka, kao i pružiti poveznice na korisne vodiče i video resurse.

## Instalacija FFmpeg-a na Linuxu:

- Otvorite terminal.
- Pokrenite naredbu `sudo apt-get update` kako biste ažurirali popis paketa.
- Pokrenite naredbu `sudo apt-get install ffmpeg` kako biste instalirali FFmpeg.
- Pričekajte da se instalacija dovrši.
- Provjerite instalaciju pokretanjem naredbe `ffmpeg -version`.

## Instalacija FFmpeg-a na Windowsu:

- Preuzmite najnoviju verziju FFmpeg-a sa {{< a_blank target="_blank" title="službene web stranice" url="https://ffmpeg.org/download.html" >}} .
- Raspakirajte preuzetu arhivu u mapu na svom računalu.
- Dodajte mapu `bin` unutar FFmpeg direktorija u sistemsku varijablu okruženja PATH. To možete učiniti slijedeći ove korake:

   * Otvorite izbornik Start i potražite ```Environment Variables``` (Varijable okruženja).
   * Kliknite na ```Edit the system environment variables```.
   * Kliknite na ```Environment Variables```.
   * U dijelu ```System variables```, potražite varijablu ```Path```.
   * Kliknite ```Edit```.
   * Kliknite ```New``` i dodajte putanju do `bin` direktorija, npr. ```C:\ffmpeg\bin```.
   * Kliknite ```OK``` da biste spremili promjene. Otvorite novi prozor naredbenog retka i provjerite instalaciju pokretanjem naredbe `ffmpeg -version`.

Ovi koraci trebali bi vam omogućiti da pokrenete FFmpeg na Linuxu i Windowsu. Međutim, imajte na umu da mogu postojati dodatni koraci ili zahtjevi ovisno o vašem operativnom sustavu i konfiguraciji.

## Primjeri

### Konverzija audio datoteka

Da biste to učinili pomoću FFmpeg-a, prvo se morate premjestiti u direktorij u kojem se nalazi vaša audio datoteka koristeći naredbeni redak. Kada ste tamo, možete koristiti sljedeću naredbu za konverziju datoteke:


```bash
ffmpeg -i input_file.wav output_file.mp3
```


### Konverzija audio datoteka

Za ovu operaciju s FFmpeg-om, najprije se morate pozicionirati u direktorij u kojem se nalazi vaša audio datoteka pomoću naredbenog retka. Kada se nalazite u ispravnom direktoriju, upotrijebite sljedeću naredbu:

```bash
ffmpeg -i input_file.wav output_file.mp3
```

U ovom primjeru, „input\_file.wav” je naziv vaše originalne WAV datoteke, a „output\_file.mp3” je naziv nove MP3 datoteke koju želite stvoriti. FFmpeg će automatski odrediti odgovarajuće postavke za izlaznu datoteku na temelju ulazne, ali možete ručno specificirati dodatne opcije poput bitrate-a i sample rate-a, ako je potrebno.



### Smanjivanje video datoteka

Ako želite smanjiti veličinu velike MP4 video datoteke, možete koristiti sljedeću naredbu:

```bash
ffmpeg -i input_file.mp4 -vcodec libx264 -crf 24 -preset medium -acodec copy output_file.mp4
```

Za još manju datoteku koristite naredbu s većom CRF vrijednosti (-crf 40):

```bash
ffmpeg -i "Chapter 6.mp4" -vcodec libx265 -crf 40 Chapter-6-smaller.mp4
```

U ovom primjeru koristimo H.264 kodek za kompresiju videa (`-vcodec libx264`) i "medium" preset za razinu kompresije. Također koristimo opciju `-crf` za određivanje kvalitete videa (niže vrijednosti znače višu kvalitetu) i `-acodec copy` za zadržavanje originalnog audio zapisa bez ponovne kompresije.



### Konverzija videa u drugi format

Sljedeća naredba konvertira ulaznu MP4 video datoteku u izlaznu MP4 datoteku koristeći H.264 video kodek, AAC audio kodek i audio bitrate od 128 kbps:

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k output.mp4
```



### Izvlačenje zvuka iz videa

Ova naredba izvlači audio zapis iz MP4 video datoteke i sprema ga kao MP3 datoteku:

```bash
ffmpeg -i input.mp4 -vn -acodec copy output.mp3
```

Još jedan primjer:

```bash
ffmpeg -i video.avi -f mp3 audio.mp3
```



### Spajanje više video datoteka

```bash
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0" -c:v libx264 -preset slow -crf 22 output.mp4
```

Ova naredba spaja dvije MP4 video datoteke u jednu koristeći `filter_complex` opciju FFmpeg-a.



### Skaliranje videa

```bash
ffmpeg -i input.mp4 -vf scale=640:360 -c:v libx264 -preset slow -crf 22 output.mp4
```

Ova naredba skalira MP4 video na rezoluciju 640x360 i sprema ga kao novu datoteku.


### Krojenje (cropanje) videa

```bash
ffmpeg -i input.mp4 -filter:v "crop=in_w/2:in_h/2:in_w/4:in_h/4" -c:v libx264 -preset slow -crf 22 output.mp4
```

Ova naredba izrezuje video na polovicu njegove originalne veličine i sprema ga kao novu MP4 datoteku.



### Konverzija videa u GIF

```bash
ffmpeg -i input.mp4 -vf "scale=320:-1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```

Ova naredba konvertira MP4 video u GIF animaciju širine 320 piksela i beskonačnim ponavljanjem.



### Dodavanje vodenog žiga u video

```bash
ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" -c:v libx264 -preset slow -crf 22 output.mp4
```

Ova naredba dodaje PNG vodeni žig u gornji lijevi kut videa.



### Izvlačenje slika iz videa

```bash
ffmpeg -i input.mp4 -r 1 -f image2 output-%03d.jpg
```

Ova naredba izdvaja jednu sliku u sekundi iz video datoteke i sprema ih kao JPG datoteke.



### Konverzija stereo zvuka u mono

```bash
ffmpeg -i input.mp3 -ac 1 output.mp3
```

Ova naredba konvertira stereo MP3 audio datoteku u mono verziju.



### Ubrzavanje ili usporavanje videa

```bash
ffmpeg -i input.mp4 -filter:v "setpts=0.5*PTS" -filter:a "atempo=2.0" -c:v libx264 -preset slow -crf 22 output.mp4
```

Ova naredba ubrzava video 2x koristeći filtre `setpts` i `atempo`.


### Istražujte dalje

{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="FFmpeg dokumentacija " url="https://ffmpeg.org/documentation.html" >}} 
{{< a_blank target="_blank" title="FFmpeg Wiki" url="https://trac.ffmpeg.org/wiki" >}} 
{{< a_blank target="_blank" title="FFmpeg Dokumentacija Filtera" url="https://ffmpeg.org/ffmpeg-filters.html" >}} 
{{< a_blank target="_blank" title="FFmpeg Trac sustav za prijavu grešaka" url="https://trac.ffmpeg.org/" >}} 
{{< a_blank target="_blank" title="Stack Overflow (pretraga za FFmpeg)" url="https://stackoverflow.com/search?q=FFmpeg&s=764b4d0b-7c94-4f80-b405-4351c0e920e0" >}} 
{{< a_blank target="_blank" title="FFmpeg Crash Course (YouTube)" url="https://www.youtube.com/watch?v=yieG9DZQ_vM" >}} 
{{< a_blank target="_blank" title="FFmpeg SubReddit " url="https://www.reddit.com/r/ffmpeg/" >}} 


{{< rawhtml >}} </div> {{< /rawhtml >}}



Ovi resursi pružili su obilje informacija i primjera koji su mi pomogli pri sastavljanju ovog vodiča. Oni su izvrsna polazišna točka za svakoga tko želi naučiti više o FFmpeg-u i njegovim mogućnostima.




