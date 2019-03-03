# Estimate Calculator

## Descrizione

Single Page Application per un ipotetico calcolatore di preventivi.

Si tratta di una versione preliminare in cui si vogliono esplorare le modalità di sviluppo usando solo JavaScript e API fornite nel browser [VanillaJs :)](http://VanillaJs). A questo scopo, anche se non supportate da tutti i browser, vengono usate le seguenti tecnologie:
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_components).
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

L'applicazione consuma una API RESTful implemetata con PHP.

I dati solo salvati su un database MySQL.

## Contatti

Slack clicca [qui](https://join.slack.com/t/vanillajs-workspace/shared_invite/enQtNTY1NzU4MzU2NDM2LTMxNTRlMjA2MWY3MGMwMTAwZTExNTViMGExMDQwNGVhNzJjZWYxOWE0NjNmOWFmMTQxYmUwNGY1YTA5NTY5YWE)

### UI

Il file Estimate *Calculator Page Wireframe.pdf* mostra la user interface implementata.

## Requisiti

L'idea è quella di creare un preventivatore.

Le voci principali sono quattro:
- Tipologia sito
- Aggiunta pagine
- Aggiunta Lingue
- Servizi Aggiuntivi

L'utente deve poter eseguire una prima selezione tra tre pacchetti, che determinerà il prezzo base:
- Sito Vetrina 000€
- E-commerce 000€
- Booking 000€

Questi tre pacchetti hanno alcune informazioni specifiche che l'utente deve visualizzare al momento della selezione del pacchetto:
- sito vetrina  "Pagina Home, Chi siamo, Contatti e I nostri servizi"
- Sito E-commerce "Pagina Home, i nostri Prodotti, Contatti, Termini di Servizio +  Gestione E-commerce"
- Sito Booking "Pagina Home, La struttura, Prenota, Contatti + Gestione Booking"

## Pagine aggiuntive

L'utente deve avere la possibilità di aggiungere nuove pagine al sito web:
il costo di ogni pagina aggiuntiva è di 000 euro cadauna e l'utente potrà digitare il nome della pagina da creare.

## Lingue aggiuntive

L'utente può richiedere di avere il sito web in più lingue:
il costo di base è di 000 euro per ogni lingua aggiunta; l'utente dovrà selezionare la lingua.
Se l'utente aveva richiesto pagine aggiuntive, oltre i 000€ base, ci sarà una maggiorazione di 00€ per ogni pagina aggiuntiva.

## Servizi aggiuntivi

Possibilità di aggiungere uno o più servizi tra i seguenti:
- Ottimizzazione 000€
- Logo 000€
- Video Promozionale 000€
- Gestione Social 000€
- Adwords da preventivare

### Servizio aggiuntivo AdWords

Riguardo il servizio aggiuntivo Adwords, selezionando il  servizio aggiuntivo l'utente dovrà riempire un campo in - cui inserire il credito che intende dedicare alla pubblicità, al quale sommare un costo fisso in base al credito selezionato

Per un credito inserito
- da 0 a 000 euro, al preventivo generale dovrà essere sommato un costo di 000€
- da 000 a 000 dovrà essere sommato un costo da 000€
- da 000 a 000 dovrà essere sommato un costo da 000€.

## Report

Al termine, oltre che a schermo, dovrà essere generato un file pdf con le info sui servizi preventivati.

## Requisiti tecnici
- front-end in VanillaJS o jQuery con chiamate AJAX
- back-end in PHP e accesso ai dati con PDO su database MySQL