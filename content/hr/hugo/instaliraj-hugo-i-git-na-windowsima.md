---
title: Instaliraj Hugo i Git na Windowsima
summary: Hugo je moćan i fleksibilan generator statičkih web stranica koji vam omogućuje jednostavnu izgradnju brzih i učinkovitih web stranica. Ako koristite Windows i želite početi raditi s Hugom, na pravom ste mjestu.
date: 2025-05-25T00:23:07+02:00
lastmod: 2025-05-25T00:23:07+02:00
draft: false
author: helper4
categories:
  - Windows
  - Hugo
tags:
  - Hugo
  - Windows
  - git
toc: true
autonumbering: false 
thumbnail: images/hugo.svg
translationKey: instaliraj-hugo-i-git-na-windowsima
---

Hugo je moćan i fleksibilan generator statičkih web stranica koji vam omogućuje jednostavnu izgradnju brzih i učinkovitih web stranica. Ako koristite Windows i želite početi raditi s Hugom, na pravom ste mjestu. U ovom vodiču ćemo vas provesti kroz korake za instalaciju Huga na Windows računalo.

## Instaliraj Hugo sa Chocolatey 

Korištenje Chocolateyja pojednostavljuje proces instalacije Huga.
U cmd ili PowerShell prozoru s administratorskim ovlastima pokrenite:

##### Instaliraj Hugo sa Chocolatey

```bash
choco install hugo -confirm
```
##### Za verifikaciju Instalacije pokreni

```bash
hugo version
```
## Ručna instalacija Huga s Githuba

- Preuzmite Hugo: Posjetite {{< a_blank target="_blank" title="Hugo stranica s izdanjima" url="https://github.com/gohugoio/hugo/releases" >}} na GitHubu i preuzmite Windows 64-bitnu verziju (s nastavkom .zip) najnovijeg Hugovog izdanja

- Postavite _varijable okruženja_ (opcijonalno): Da biste olakšali pokretanje Huga iz _Naredbenog Retka(command prompt)_, možete dodati putanju do Hugove izvršne datoteke u PATH varijablu okruženja sustava. Evo kako to možete učiniti:

  - Desnim klikom na `Ovo računalo` ili `Moje računalo` odaberite `Svojstva`
  - Kliknite na `Napredne postavke sustava` na lijevoj strani
  - Kliknite gumb `Varijable okruženja`
  - U odjeljku `Sistemske varijable` pronađite varijablu `Path` i kliknite "Uredi"
  - Kliknite `Novo` i dodajte putanju do direktorija gdje ste raspakirali Hugovu izvršnu datoteku (npr. C:\Hugo\bin)
  - Zatim kliknite `OK` za spremanje promjena

##### Da biste provjerili instalaciju pokrenite

```bash
hugo version
```

## Instalirajte Git pomoću winget alata

Ako već nemate {{< a_blank target="_blank" title="winget alat" url="https://docs.microsoft.com/en-us/windows/package-manager/winget" >}}, prvo ga instalirajte, zatim pokrenite sljedeću naredbu u naredbenom retku (Command Prompt) ili Powershellu

```bash
winget install --id Git.Git -e --source winget
```

## Instalacija grafičkih(GUI) klijenata

Sada ste spremni za preuzimanje i instalaciju {{< a_blank target="_blank" title="GUI klijenti" url="https://git-scm.com/downloads/guis" >}}

&nbsp;

## Reference

{{< rawhtml >}}<div class="lnkRef">{{< /rawhtml >}}

{{< a_blank_rel title="Hugo stranica s izdanjima" url="https://github.com/gohugoio/hugo/releases" >}}
{{< a_blank_rel title="Hugo službena dokumentacija" url="https://gohugo.io/documentation/" >}}
{{< a_blank_rel title="Git" url="https://git-scm.com/downloads" >}}

{{< rawhtml >}}</div>{{< /rawhtml >}}

&nbsp;



