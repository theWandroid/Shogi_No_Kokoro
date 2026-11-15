# Shogi No Kokoro · Tinta i Fusta

Un HTML per pàgina, català i castellà mitjançant JavaScript. No cal compilar ni instal·lar dependències.

## Obrir
Obre la carpeta amb VS Code i inicia Live Server a index.html. Alternativament: `python -m http.server 8000`. Cal un servidor HTTP perquè es carreguen fitxers JSON. Sense JavaScript queda el contingut inicial en català; l’agenda dinàmica no es carrega.

## Estructura
- index.html, asociacion.html, aprender.html, dojo.html, agenda.html, contacto.html
- assets/css/styles.css: disseny adaptable
- assets/js/i18n.js: idioma, URL ?lang=ca/es i preferència local
- assets/js/main.js: menú
- assets/js/agenda.js: agenda, filtres i propera sessió
- assets/data/traduccions.json: textos per clau en català i castellà
- assets/data/eventos.json: activitats
- assets/img/: les dues il·lustracions amb les últimes correccions

## Modificar
Busca la clau data-i18n de l’element i edita les dues traduccions al JSON. Mantén el català inicial de l’HTML sincronitzat per al cas sense JavaScript. No canviïs les claus sense actualitzar-les a l’HTML. L’agenda es tradueix amb el seu diccionari JavaScript i els camps localitzats dels esdeveniments.

## Agenda
Mostra el mes actual de Madrid per defecte. Filtres: mes, pròximes, arxiu i totes les dates; activitat: dojo, taller i festival. Les properes sessions de portada requereixen status confirmed, tipus dojo i una data no passada. No s’infereixen recurrències. Consulta docs/maintenance.md.

## Validació
Comprovats en navegador el canvi d’idioma, la navegació mantenint-lo i els filtres de mes i arxiu. Sintaxi JavaScript i rutes locals comprovades. No s’han verificat tots els enllaços externs ni mòbils reals. Projecte per revisar, sense publicar.

## GitHub
Crea un repositori i afegeix el contingut d’aquesta carpeta. No hi ha secrets ni backend. L’allotjament estàtic és opcional i s’ha de configurar per separat.
