tables
- henkilot -> user
- info
- infotila
- keikkakortit
- korttikaytto
- login -> login
- majoitus
- majoitushuoneet
- majoituskohteet
- postinumerot -> saisko jostain api:sta?
- ryhmakortit
- ryhmaotsikko
- seurakunnat
- syssettings
- tehtavanimikkeet
- tulostus -> tulostusjono käytössä, toivottavasti poistetaan
- tyopisteet
- tyot

- palaute -> poistetaan- raportit -> poistetaan
- syslogingroups -> poistetaan
- sysmenu -> poistetaan
- sysrights -> poistetaan
- syssection -> poistetaan
- systab -> poistetaan
- systabrights -> poistetaan
- talkoovaki -> poistetaan
- temp_id_table -> poistetaan
- test -> poistetaan
- todo -> poistetaan
- tyontekijat -> poistetaan

new tables
- group
'ei_asetettu','tyontekija','leirinta','esimies','yhteyshenkilo','kanslia','kanslia2','yllapito','muut','majoitus','selailu'
- gender
'ei_asetettu','mies','nainen'

viewsgroups
id title name 
"1"	    "Henkilöt"	"person"
"2"	    "Työpisteet"	"workunit"
"3"	    "Raportit"	"report"
"4"	    "Majoitus"	"accomodation"
"5"	    "Tilannekatsaus"	"status"
"6"	    "Sisäänkirjaus"	"login"
"7"	    "Ylläpito"	"admin"
"8"	    "Uloskirjaus"	"logout"
"9"     "Seurakunta"	"church"
"10"    "Valokuvaus"	"photo"

views
id title name section_id ui_order alt_link
"1"	    "Yhteenveto"	"summary"	"1"	"1"	"/data/Person.php?action=edit"
"2"	    "Henkilötiedot"	"basic"	"1"	"2"	"/data/Person.php?action=edit"
"3"	    "Työtiedot"	"work"	"1"	"3"	"/data/Person.php?action=edit"
"4"	    "Majoitus"	"accomodation"	"1"	"4"	"/data/Person.php?action=edit"
"45"    "Leirintä"	"camping"	"1"	"5"	"/data/Person.php?action=edit"
"5"	    "Historia"	"history"	"1"	"6"	"/data/Person.php?action=edit"
"46"	"Dup"	"duplicate"	"1"	"7"	"/data/Person.php?action=edit"

"7"	    "Yhteenveto"	"summary"	"2"	"1"	"/data/WorkUnit.php?action=edit"
"8"	    "Kohdetiedot"	"unitinfo"	"2"	"2"	"/data/WorkUnit.php?action=edit"
"9"	    "Tehtävät"	"roles"	"2"	"3"	"/data/WorkUnit.php?action=edit"
"10"	"Henkilöt"	"staff"	"2"	"4"	"/data/WorkUnit.php?action=edit"
"42"	"Jonossa"	"pending"	"2"	"5"	"/data/WorkUnit.php?action=edit"
"11"	"Infoboxi"	"info"	"2"	"6"	"/data/WorkUnit.php?action=edit"

"12"	"Esimieslistat"	"lists"	"3"	"1"	"/data/Reports.php?action=edit"
"14"	"Ryhmäkortit"	"groupcards"	"3"	"2"	"/data/Reports.php?action=edit"
"15"	"Laajennetut"	"advanced"	"3"	"3"	"/data/Reports.php?action=edit"

"17"	"Yhteenveto"	"summary"	"4"	"1"	"/data/Accomodation.php?action=edit"
"18"	"Kohteet"	"places"	"4"	"2"	"/data/Accomodation.php?action=edit"
"19"	"Huoneet"	"rooms"	"4"	"3"	"/data/Accomodation.php?action=edit"
"20"	"Jonossa"	"pending"	"4"	"4"	"/data/Accomodation.php?action=edit"
"38"	"Majoita"	"book"	"4"	"5"	"/data/Accomodation.php?action=edit"

"22"	"Infoboxi"	"info"	"5"	"1"	\N
"44"	"Toimintaohjeet"	"policy"	"5"	"2"	\N
"43"	"Jonossa"	"pending"	"5"	"3"	\N
"23"	"Tarpeet"	"needs"	"5"	"4"	\N
"24"	"Tilastot"	"statistic"	"5"	"5"	\N

"26"	"Sisäänkirjaus"	"login"	"6"	"1"	\N

"28"	"Ylläpito"	"admin"	"7"	"1"	\N
"29"	"Login tunnukset"	"login"	"7"	"2"	\N
"31"	"Todo"	"todo"	"7"	"3"	\N
"30"	"SQL"	"sql"	"7"	"4"	\N

"36"	"Uloskirjaus"	"logout"	"8"	"1"	\N

"39"	"Jonossa"	"pending"	"9"	"1"	"/data/Church.php?action=edit"
"40"	"Yhteystiedot"	"contactinfo"	"9"	"2"	"/data/Church.php?action=edit"
