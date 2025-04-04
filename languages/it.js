const language = {
    loadevent: "Evento giocatore caricato",
    loadcmd: "Comando caricato",
    ready: " Connesso con successo",
    loadslash: "Ricaricata con successo l'applicazione [/] comandi",
    error1: "Il token bot inserito nel progetto non è corretto o gli INTENTI del bot sono disattivati!",
    error2: "Impostare il token del bot in token.js o nel file .env del progetto!",
    loadclientevent: "Evento client caricato",
    embed1: "Per utilizzare questo comando è necessario avere il ruolo <@&{djRole}>(DJ) impostato su questo server. Gli utenti senza questo ruolo non possono usare la {cmdMAP}",
    message1: "Non si è connessi a un canale audio. ❌",
    message2: "Non sei sullo stesso canale audio. ❌",
    message3: "Autorizzazione mancante",
    msg4: "Qualcosa è andato storto",
    msg5: "Non c'è musica in riproduzione. ❌",
    msg6: "Salva musica",
    msg7: "Scrivi il nome della playlist",
    msg8: "Questo brano è in diretta streaming, non ci sono dati sulla durata da visualizzare. 🎧",
    msg9: "**✅ Successo:** Dati sulla durata aggiornati.",
    msg10: "Non esiste già una playlist con questo nome. ❌",
    msg11: "Questa musica è già presente in questa playlist. ❌",
    msg12: "aggiunto alla playlist musicale",
   error3: "Errore nel ricaricare i comandi dell'applicazione [/]: ",
   error4: "ATTENZIONE: Sembra che non sia stato scritto l'url di mongodb? Se non si inserisce un url mongodb valido nel file config.js, non sarà possibile utilizzare il bot",
   msg13: `🎵 In riproduzione: **{track?.title}** -> Canale: **{queue?.connection.channel.name}** 🎧`,
   msg14: "La coda è vuota. Puoi riprodurre altra musica, arrivederci...",
   msg15: "Mi sono disconnesso perché non c'è più nessuno nel mio canale. ❌",
   msg16: "Ho problemi di connessione al canale vocale. ❌ Come se qualcuno mi avesse disconnesso? Sono molto triste. 😔",
   msg17: "Non c'è nessun brano precedente! ❌",
   msg18: "In riproduzione **{queue.previousTracks[1].title}**. ✅",
   msg19: "Statistiche del bot",
   msg20: "Aggiorna",
   msg21: "**Il tuo tempo è finito!**",
   msg22: "**Dati aggiornati!**",
   msg23: "La coda è vuota. ❌",
   msg24: "La coda è stata appena svuotata. 🗑️",
   msg26: "Se non si specifica un ruolo DJ, non sarà possibile utilizzare il comando!",
   msg25: "Il ruolo DJ è stato impostato con successo su <@&{role}>",
   msg27: "Il ruolo DJ è stato eliminato con successo",
   msg28: "Il ruolo DJ non è già impostato",
   msg29: `Inserire un nome di filtro valido. ❌\n{filters}`,
   msg30: `Non ho trovato un filtro con quel nome. ❌\n{filters}`,
   msg31: `Applicato: **{filter}**, Stato del filtro: **{status}**\n **Ricordate, se la musica è lunga, il tempo di applicazione del filtro potrebbe essere più lungo di conseguenza.**`,
   msg32: "È il momento di ascoltare la musica sul tuo server discord con un'interfaccia completamente gratuita e avanzata. Un bot musicale che supporta la riproduzione di musica su molte piattaforme e che farà sentire il vostro server speciale. Crea il tuo bot musicale: https://github.com/ati/MusicBot",
   msg33: "Comandi bot",
   msg34: "Hai già un comando attivo qui. ❌",
   msg35: "In coda",
   msg36: "Musica in riproduzione",
   msg37: "Chiudi loop",
   msg38: "Sistema di loop",
   msg39: `> **Che ne dite di fare una scelta?
   > **Coda: ** Manda in loop la coda.
   > **Musica in riproduzione:** Manda in loop il brano corrente.
   > **Chiudi Loop:** Chiude il loop.`,
   msg40: "Modalità Loop della coda",
   msg41: "Qualcosa è andato storto. ❌",
   msg42: "Modalità loop musica in riproduzione",
   msg43: "La modalità Loop è già inattiva. ❌",
   msg44: `Modalità loop **chiusa** 🔁`,
   msg45: "Tempo scaduto",
   msg46: "Sistema Loop - Terminato",
   msg47: "Salva playlist",
   msg48: "Musica in pausa! ✅",
   msg49: `Messaggio Ping`,
   msg50: `Latenza del messaggio`,
   msg51: `Latenza API`,
   msg52: `Non c'è una playlist. ❌`,
   msg53: `Non hai il permesso di riprodurre questa playlist. ❌`,
   msg54: `Non hai già una musica con questo nome. ❌`,
   msg55: `Non posso unirmi al tuo canale vocale. ❌`,
   msg56: `Caricamento della playlist... ✅`,
   msg57: `<@{interaction.member.id}>, Aggiunte **{music_filter.length}** tracce alla coda. ✅`,
   msg58: `Non esiste una playlist con questo nome. ❌`,
   msg59: `Scrivere il nome del brano che si desidera cercare. ❌`,
   msg60: `Nessun risultato trovato! ❌`,
   msg61: "Caricamento musica/e... 🎧",
   msg62: "Elenco nomi aggiunto alla playlist. ✅",
   msg63: `La coda è vuota. ❌`,
   msg64: "Elenco musicale del server",
   msg65: "In riproduzione",
   msg66: "Richiesto da",
   msg67: "Pagina",
   msg68: `Il processore di comandi è stato annullato. ✅`,
   msg69: `Lista musicale del server - Tempo scaduto!`,
   msg70: `Il tempo a disposizione per utilizzare questo comando è scaduto, è possibile digitare \`/queue\` per utilizzare nuovamente il comando.`,
   msg71: `Qualcosa è andato storto. È come se non avessi mai fermato la musica prima d'ora`,
   msg72: "Traccia ripresa! ✅",
   msg73: `Inserire un nome di brano valido. ❌`,
   msg74: `Nessun risultato di ricerca trovato! ❌`,
   msg75: "Musica cercata",
   msg76: "Scegliere un brano da **1** a **{maxTracks.length}** ⬇️",
   msg77: `Ricerca musicale annullata. ✅`,
   msg78: `Caricamento... 🎧`,
   msg79: "aggiunto alla coda. ✅",
   msg80: `Tempo di ricerca del brano scaduto ❌`,
   msg81: "Annulla",
   msg82: `Il numero inserito è superiore alla quantità di brani in coda. ❌`,
   msg83: "Canzone saltata ✅",
   msg84: `Questo brano è in diretta streaming, non ci sono dati sulla durata da visualizzare. 🎧`,
   msg85: `Musica interrotta. Alla prossima volta! ✅`,
   msg86: "Aggiornamento",
   msg87: `Volume attuale: **{queue.volume}** 🔊\n**Per modificare il volume, con \`1\` a \`{maxVol}\` digitare un numero tra.**`,
   msg88: `Il volume che si desidera modificare è già quello attuale ❌`,
   msg89: `**Digitare un numero compreso tra \`1\` e \`{maxVol}\` per modificare il volume .** ❌`,
   msg90: "Volume modificato:",
   msg91: `Scrivere il nome della playlist che si desidera creare. ❌`,
   msg92: `Una playlist con questo nome esiste già. ❌`, 
   msg93: `Non è possibile avere più di 30 playlist. ❌`,
   msg94: "Creazione playlist... 🎧",
   msg95: "Playlist creata! 🎧",
   msg96: `Non esiste già una playlist con questo nome. ❌`,
   msg97: "Eliminazione della playlist... 🎧",
   msg98: "Playlist cancellata! 🎧",
   msg99: `Scrivere il nome del brano che si desidera cercare. ❌`,
   msg100: `Scrivere il nome della playlist a cui si vuole aggiungere la musica. ❌`,
   msg101: `Non si possono avere più di {max_music} musiche in una playlist. ❌`,
   msg102: "Caricamento della tua musica in corso... 🎧",
   msg103: "Tutti i brani musicali aggiunti alla playlist! 🎧",
   msg104: `Questa musica è già presente in questa playlist. ❌`,
   msg105: "aggiunto alla playlist! 🎧",
   msg106: `Scrivere il nome della playlist in cui si desidera eliminare la musica. ❌`,
   msg107: `Non esiste già una musica con questo nome. ❌`,
   msg108: "Eliminazione della musica... 🎧",
   msg109: "Musica cancellata! 🎧",
   msg110: "Scrivere il nome della playlist che si desidera cercare. ❌",
   msg111: `Non c'è musica in questa playlist. ❌`,
   msg112: "Top Playlist pubbliche",
   msg113: `Il tempo a disposizione per utilizzare questo comando è scaduto, è possibile digitare \`/playlist top\` per utilizzare nuovamente il comando`,
   msg114: `Non c'è nessuna playlist pubblica. ❌`,
   msg115: "Le tue playlist",
   msg116: `canzoni`,
   msg117: `Non c'è nessuna playlist. ❌`,
   msg118: "Il tempo a disposizione per usare questo comando è scaduto, si può digitare  \`/playlist list {name}\`  per usare di nuovo il comando",
   msg119: "Usare il comando **/play playlist <list-name>** per ascoltare queste playlist.\nType **/playlist list <list-name>** per vedere la musica in un elenco.",
   msg120: "Specificare un canale di testo",
   msg121: "<#{channel}> aggiunto all'elenco dei canali di utilizzo del comando, ora il comando bot può essere usato solo sui canali dell'elenco",
   msg122: "Non ci sono dati già registrati",
   msg123: "<#{channel}> cancellato dall'elenco dei canali di utilizzo dei comandi",
   msg124: "Questo canale è già presente nell'elenco dei canali di utilizzo dei comandi",
   msg125: "Questo canale non è un canale di testo",
   msg126: "❌ Ecco l'elenco dei canali che si possono comandare su questo server: {channel_filter}",
   msg127: "Il comando non è definito",
   error7: "Riprovare questo comando più tardi. Possibile bug, segnala agli sviluppatori del bot",
   msg128: "Mi hai silenziato mentre la musica era in corso. Per questo ho interrotto la musica. Se annulli il silenziamento, continuerò. 😔",
   msg129: "volte ascoltata",
   msg130: "Si prega di scrivere un numero valido",
   msg131: "per utilizzare i comandi dell'elenco, è necessario votare per il bot",
   msg132: "Nessuna musica già in pausa",
   msg133: "Ho cambiato l'ordine nella playlist",
   msg134: "Utilizzo non corretto. Esempio: `5:50` | `1:12:43`",
   msg135: "Il tempo di riproduzione è stato impostato su {queue.formattedCurrentTime} con successo",
   msg136: "L'autoplay è ora attivato. D'ora in poi attiverò la musica casuale",
   msg137: "L'autoplay è ora disattivato",
   }
   module.exports = language;