# Boksøk: Arbeidskrav 4 i faget Utvikling av interaktive nettsider

**Installasjon**
1. Naviger til mappen uin23ak4_booksearch_Larsen i en ny terminal
2. Kjør følgende kommandoer:
   - npm i
   - npm run dev

**Følgende pakker blir også bli installert**
- Sass
- react-router-dom
- react-simple-star-rating


**Side-notes** 
- Favourites knapper er bare til pynt.
- Flyttet knapp som leder til Amazon søk til profilsiden for en bestemt bok.
- Mange bøker hadde ikke id_amazon, bruker første resultat i isbn array.
- Bruker Search API til å fetche en bestemt bok istedenfor Works & Edition API da det ga meg flere egenskaper. For eksmepel fikk jeg bare ut forfatter ID, men ikke navnet i Works API.