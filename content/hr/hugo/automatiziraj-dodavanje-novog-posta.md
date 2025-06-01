---
title: Automatiziraj dodavanje novog posta
summary: Automatiziraj dodavanje novog posta
date: 2025-05-25T11:52:07+02:00
lastmod: 2025-05-25T11:52:07+02:00
draft: false
author: helper4
categories: 
  - Linux
tags:
  - Linux
  - hugo
toc: true
autonumbering: true 
thumbnail: images/linux.svg
---

## Kreiraj tasks.json

Prvo kreiraj datoteku `tasks.json` i spremi je u `.vscode/tasks.json`

```bash
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "📝 New Hugo Post",
      "type": "shell",
      "command": "${workspaceFolder}/newpost.sh",
      "args": [
        "${input:postNameHR}",
        "${input:postNameEN}",
        "${input:menuItem}",
        "${input:langChoice}"
      ],
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "postNameHR",
      "type": "promptString",
      "description": "Unesi ime datoteke za HR (npr. nova-objava)",
      "default": "nova-objava"
    },
    {
      "id": "postNameEN",
      "type": "promptString",
      "description": "Unesi ime datoteke za EN (npr. new-post)",
      "default": "new-post"
    },
    {
      "id": "menuItem",
      "type": "promptString",
      "description": "Unesi naziv foldera (npr. linux, hugo, js)",
      "default": "linux"
    },
    {
      "id": "langChoice",
      "type": "pickString",
      "description": "Odaberi jezik (hr, en, all)",
      "options": [
        "hr",
        "en",
        "all"
      ],
      "default": "all"
    }
  ]
}

```

## Kreiraj newpost.sh

Pa kreiraj datoteku `newpost.sh` spremi u root projekta npr. ovaj projekt je u mapi `myhelper4` u kojem se nalazi `newpost.sh`, `package.json` i druge datoteke i mape

```bash
#!/bin/bash

# Argumenti: naziv posta za HR, za EN, menuItem, i jezik
POST_NAME_HR=$1
POST_NAME_EN=$2
MENU_ITEM=$3
LANG_CHOICE=${4:-all}

# Provjera argumenata
if [ -z "$POST_NAME_HR" ] || [ -z "$POST_NAME_EN" ] || [ -z "$MENU_ITEM" ]; then
  echo "⚠️  Korištenje: ./newpost.sh <ime-posta-hr> <ime-posta-en> <menuItem> [jezik: hr|en|all]"
  exit 1
fi

# Kapitaliziraj menuItem
# CAP_MENU_ITEM="$(echo ${MENU_ITEM:0:1} | tr '[:lower:]' '[:upper:]')${MENU_ITEM:1}"
CAP_MENU_ITEM="$(printf '%s' "$MENU_ITEM" | awk '{ print toupper(substr($0,1,1)) substr($0,2) }')"

# Datum i vrijeme
NOW=$(date -Iseconds)

# Funkcija za kreiranje posta
create_post() {
  LANG=$1
  POST_NAME=$2
  TITLE="$(echo "$POST_NAME" | sed 's/-/ /g' | sed 's/.*/\u&/')"
  PATH_VAR="content/${LANG}/${MENU_ITEM}/${POST_NAME}.md"

  mkdir -p "content/${LANG}/${MENU_ITEM}"

  cat <<EOF > "$PATH_VAR"
---
title: $TITLE
summary: ""
date: $NOW
lastmod: $NOW
draft: false
author: helper4
categories: 
  - ${CAP_MENU_ITEM}
menuItem:
  - ${CAP_MENU_ITEM}
tags:
  - ${CAP_MENU_ITEM}
  - tag2
  - tag3
toc: false
autonumbering: false 
thumbnail: images/${MENU_ITEM}.svg
---
EOF

  echo "✅ Kreiran: $PATH_VAR"
}

# Odabir jezika
case "$LANG_CHOICE" in
  hr)
    create_post hr "$POST_NAME_HR"
    ;;
  en)
    create_post en "$POST_NAME_EN"
    ;;
  all)
    create_post hr "$POST_NAME_HR"
    create_post en "$POST_NAME_EN"
    ;;
  *)
    echo "⚠️  Neispravan jezik: koristi hr, en ili all"
    exit 1
    ;;
esac
```

## Dodaj zapis u package.json

U _package.json_ datoteci pod _"scripts"_ dodati `"newpost": "node ./newpost-wrapper.js"` vidi sliku

{{< image-resize "/images/package-newpost.jpeg"  "403x"  >}}

Nakon toga dodano je vidljivo pod **NPM SCRIPTS**
<!-- {{< img_in_post "/images/npm-scripts.jpeg" "npm scripts" >}} prikazuje sliku kakva je i fita je po širini -->
{{< image-resize "/images/npm-scripts.jpeg"  "300x"  >}}

&nbsp;

## Primjer dodavanja novog posta 

<!-- {{< iframe "https://www.youtube.com/watch?v=RWv5yDKmotU" >}} -->


---

<!-- <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/RWv5yDKmotU"
  title="YouTube video player"
  frameborder="0"
  allow="fullscreen; encrypted-media""640x360"
  allowfullscreen
></iframe> -->

{{< youtube-lazy RWv5yDKmotU  >}}



Datoteka kreirana s potrebnim frontmater svojstvima pod nazivom\
automatiziraj-dodavanje-novog-posta.md

```toml
---
title: Automatiziraj dodavanje novog posta
summary: Automatiziraj dodavanje novog posta
date: 2025-05-25T11:52:07+02:00
lastmod: 2025-05-25T11:52:07+02:00
draft: false
author: helper4
categories: 
  - Linux
tags:
  - Linux
  - hugo
toc: true
autonumbering: true 
thumbnail: images/linux.svg
---
```

