# Shogi No Kokoro

Web de l’associació Shogi No Kokoro, orientada a donar a conèixer el shogi, facilitar la primera visita al dojo i consultar les activitats de la comunitat.

El projecte combina una identitat visual inspirada en la tinta i la fusta amb una arquitectura estàtica, adaptable i bilingüe. Cada pàgina comparteix una única estructura HTML per a català i castellà.

> Estat: versió de desenvolupament per a revisió. Aquest repositori no substitueix el web oficial de l’associació.

## Funcionalitats

- Pàgines d’inici, associació, aprenentatge, dojo, agenda i contacte.
- Selector de català i castellà amb persistència de la preferència i suport del paràmetre `?lang=ca` o `?lang=es`.
- Agenda amb filtres per període i tipus d’activitat, i consulta de l’arxiu històric.
- Bloc de pròxima sessió vinculat a les activitats confirmades del dojo.
- Menú mòbil, enllaç per saltar al contingut i estils de focus per a la navegació amb teclat.
- Disseny amb il·lustracions locals i sense dependències de biblioteques externes.

## Tecnologies

| Tecnologia | Ús |
| --- | --- |
| HTML5 | Estructura i contingut de les pàgines |
| CSS | Disseny visual i adaptació a diferents pantalles |
| JavaScript natiu | Idiomes, menú i agenda |
| JSON | Traduccions i dades d’activitats |

No requereix compilació, gestor de paquets, backend ni base de dades. Cal servir els fitxers per HTTP perquè les traduccions i l’agenda es carreguen amb `fetch`.

## Execució local

### Visual Studio Code

1. Descarrega o clona el repositori.
2. Obre la carpeta arrel amb **File → Open Folder**.
3. Instal·la l’extensió **Live Server**, si encara no la tens.
4. Obre `index.html` amb **Open with Live Server**.

### Servidor amb Python

Amb Python 3 instal·lat, executa aquesta ordre des de l’arrel del projecte:

```bash
python -m http.server 8000
```

Accedeix a [http://localhost:8000](http://localhost:8000). En sistemes on l’executable es diu `python3`, utilitza `python3 -m http.server 8000`.

Obrir l’HTML directament amb `file://` pot impedir la càrrega dels JSON. Sense JavaScript es conserva el contingut inicial en català, però el canvi d’idioma i l’agenda dinàmica no estan disponibles.

## Estructura del projecte

| Ruta | Contingut |
| --- | --- |
| `index.html` | Portada |
| `asociacion.html` | Presentació de l’associació |
| `aprender.html` | Introducció i recursos per aprendre shogi |
| `dojo.html` | Informació del dojo i primera visita |
| `agenda.html` | Activitats i arxiu |
| `contacto.html` | Canals de contacte |
| `assets/css/styles.css` | Estils compartits |
| `assets/js/main.js` | Interaccions de navegació |
| `assets/js/i18n.js` | Selecció i aplicació de l’idioma |
| `assets/js/agenda.js` | Càrrega, filtres i representació d’activitats |
| `assets/data/traduccions.json` | Diccionaris de català i castellà |
| `assets/data/eventos.json` | Agenda i referències de les activitats |
| `assets/img/` | Recursos gràfics |
| `docs/` | Documentació de manteniment, anàlisi i migració |
| `ASSETS.md` | Procedència i estat dels recursos visuals |

## Edició del contingut

### Textos i idiomes

Els atributs `data-i18n` de l’HTML identifiquen les claus de `assets/data/traduccions.json`. Per modificar un text:

1. Localitza la clau a l’element HTML.
2. Actualitza el valor als blocs `ca` i `es` del JSON.
3. Sincronitza el text inicial en català de l’HTML, utilitzat abans de carregar les traduccions o si falla JavaScript.

No canviïs una clau sense actualitzar-ne les referències. Alguns missatges de l’agenda es defineixen a `assets/js/agenda.js`; els títols i avisos de cada activitat són al fitxer d’esdeveniments.

### Disseny i imatges

Modifica els estils compartits a `assets/css/styles.css`. Desa els recursos a `assets/img/` i actualitza les rutes, dimensions i textos alternatius corresponents. Documenta la procedència i els permisos a `ASSETS.md`.

### Activitats

L’agenda es manté a `assets/data/eventos.json`. Cada registre conté un identificador únic, títols localitzats, data, tipus, ubicació, font, estat i data de verificació; també pot incloure horari i avisos.

- Dates: `YYYY-MM-DD`; mes: `YYYY-MM`; hores: `HH:mm`.
- Zona horària del conjunt: `Europe/Madrid`.
- Tipus actuals: `dojo`, `workshop` i `festival`.
- `published`: data anunciada en una font, sense acreditar que l’activitat se celebrés.
- `confirmed`: data i condicions comprovades expressament.
- `pending`: informació pendent de confirmar.
- `cancelled` i `postponed`: activitats cancel·lades o ajornades.

Els avisos sense data utilitzen `date: null` i un mes de referència. No s’utilitzen per anunciar pròximes sessions. La portada selecciona activitats futures del dojo amb estat `confirmed`; les dates passades es consulten des de l’arxiu. No es generen recurrències automàtiques.

Consulta la [guia de manteniment](docs/maintenance.md) abans d’afegir o modificar registres.

## Comprovació dels canvis

Abans d’obrir una proposta de canvis o preparar una versió:

- Revisa les pàgines i els enllaços interns des d’un servidor HTTP.
- Comprova els dos idiomes, els títols de pàgina i la persistència de la selecció en navegar.
- Prova el menú en una pantalla estreta, amb teclat i amb Escape.
- Revisa la llegibilitat, el focus i possibles desbordaments en mòbil, tauleta i escriptori.
- Comprova la càrrega dels JSON i els filtres de l’agenda, inclosos els resultats buits.
- Revisa dates, estats i fonts abans de presentar una activitat com a confirmada.
- Comprova que no hi hagi errors a la consola ni recursos locals absents.

Aquestes indicacions són una guia de revisió, no una certificació de comprovacions superades. La revisió en dispositius mòbils reals i la verificació completa dels enllaços externs continuen pendents.

## Col·laboració

Treballa en una branca per a cada canvi i descriu-ne l’objectiu a la proposta d’integració. Mantén les traduccions sincronitzades i inclou captures quan modifiquis el disseny. Per als canvis d’agenda, aporta la font i la data de verificació.

El repositori conté els fitxers estàtics de la web. Evita incorporar credencials, dades privades o recursos sense autorització de distribució.

## Allotjament

El projecte es pot servir en un allotjament estàtic. Per utilitzar GitHub Pages, puja els fitxers al repositori i configura **Settings → Pages** amb la branca i la carpeta que continguin `index.html`.

Les rutes dels recursos són relatives. Comprova la navegació i la càrrega de dades a l’URL final, especialment si es publica dins d’un subdirectori. Revisa la visibilitat de l’allotjament abans d’activar-lo: compartir el codi i publicar la web són accions diferents.

## Documentació

- [Manteniment editorial](docs/maintenance.md)
- [Anàlisi i decisions pendents](docs/analysis.md)
- [Guia de migració](docs/migration.md)
- [Propostes d’evolució](docs/propostes.md)
- [Procedència dels recursos visuals](ASSETS.md)

## Recursos i drets d’ús

Les il·lustracions incorporades són generades amb IA i tenen una funció decorativa. El segell tipogràfic és provisional i s’ha de revisar amb l’associació abans d’una publicació definitiva.

No s’atorga cap llicència sobre marques, continguts o recursos de tercers. Consulta `ASSETS.md` i confirma els permisos aplicables abans de reutilitzar-los o distribuir-los.
