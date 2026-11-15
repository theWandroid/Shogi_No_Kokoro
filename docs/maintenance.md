# Manteniment

Edita assets/data/eventos.json. Els dies són YYYY-MM-DD, les hores HH:mm i la zona Europe/Madrid. date=null permet guardar un avís sense data, amb month YYYY-MM. Aquests avisos mai entren a pròximes sessions.

Camps: id únic, title {ca,es}, date, month, type (dojo/workshop/festival), location (text o {ca,es}), start, end (opcionals), source HTTPS, notice {ca,es}, status, lastVerified.

status published indica una data publicada; no certifica que l’activitat se celebrés. confirmed exigeix comprovació expressa de la data i condicions. pending és un avís no confirmat. cancelled i postponed s’exclouen de pròximes.

Per afegir una sessió, duplica un registre, canvia id, títols, data, mes, horari, lloc i font. Marca confirmed només després de comprovar-la amb l’associació. En cancel·lar o ajornar, canvia l’estat i afegeix notice. Les dates passades entren automàticament a l’arxiu.

Fonts: calendari oficial consultat el 15/11/2026 i captures d’Instagram aportades. El 7/11 figura al calendari però un avís posterior esmenta que no es va obrir el dissabte anterior. Es manté amb advertiment, no com a celebració confirmada. L’avís posterior no té data absoluta verificable: es guarda sense dia. Alguns festivals mostren horari general, no franja de shogi.

La traducció està a assets/data/traduccions.json. La estructura és comuna: no existeixen carpetes ca/es. Sense JS queda el català inicial.
