#!/bin/bash

# Argumenti: naziv posta za HR, za EN, menuItem, i jezik
POST_NAME_HR=$1
POST_NAME_EN=$2
POST_FOLDER=$3
LANG_CHOICE=${4:-all}

# Provjera argumenata
if [ -z "$POST_NAME_HR" ] || [ -z "$POST_NAME_EN" ] || [ -z "$POST_FOLDER" ]; then
  echo "⚠️  Korištenje: ./newpost.sh <ime-posta-hr> <ime-posta-en> <menuItem> [jezik: hr|en|all]"
  exit 1
fi

# Kapitaliziraj menuItem
# CAP_POST_FOLDER="$(echo ${POST_FOLDER:0:1} | tr '[:lower:]' '[:upper:]')${POST_FOLDER:1}"
CAP_POST_FOLDER="$(printf '%s' "$POST_FOLDER" | awk '{ print toupper(substr($0,1,1)) substr($0,2) }')"

# Datum i vrijeme
NOW=$(date -Iseconds)

# Funkcija za kreiranje posta
create_post() {
  LANG=$1
  POST_NAME=$2
  TITLE="$(echo "$POST_NAME" | sed 's/-/ /g' | sed 's/.*/\u&/')"
  PATH_VAR="content/${LANG}/${POST_FOLDER}/${POST_NAME}.md"

  mkdir -p "content/${LANG}/${POST_FOLDER}"

  # Odredi translationKey prema jeziku i opciji
  if [[ "$LANG_CHOICE" == "all" ]]; then
    TRANSLATION_KEY="$POST_NAME_HR"
  else
    if [[ "$LANG" == "hr" ]]; then
      TRANSLATION_KEY="$POST_NAME_HR"
    else
      TRANSLATION_KEY="$POST_NAME_EN"
    fi
  fi

  cat <<EOF > "$PATH_VAR"
---
title: $TITLE
summary: ""
date: $NOW
lastmod: $NOW
draft: false
author: helper4
categories: 
  - ${CAP_POST_FOLDER}
tags:
  - ${CAP_POST_FOLDER}
  - tag2
  - tag3
toc: false
autonumbering: false 
thumbnail: images/${POST_FOLDER}.svg
translationKey: $TRANSLATION_KEY
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

# echo "POST_NAME_HR: $POST_NAME_HR"
# echo "POST_NAME_EN: $POST_NAME_EN"
# echo "POST_FOLDER: $POST_FOLDER"
# echo "LANG_CHOICE: $LANG_CHOICE"