function getComputerChoice(){
    let randZahl = Math.floor(Math.random()*3);
    switch (randZahl){
        case 0:
            return 'ROCK';
            
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
        default:
            return 'Fehler';

    }


}

function ermittlerWinner(user, comp){
    if(user.toUpperCase()==="ROCK"){
        switch (comp){
            case 'ROCK':
                return 'Ihr spielt Unentschieden! Stein trifft Stein';
            case 'SCISSORS':
                return 'Du gewinnst! Stein schlägt Schere';
            case 'PAPER':
                return 'Du verlierst! Papier schlägt Stein';
            default:
                return 'Fehler bei Vergelich';
            
        }
    }else if(user.toUpperCase()==="PAPER"){
        switch (comp){
            case 'ROCK':
                return 'Du gewinnst! Papier schlägt Stein';
            case 'SCISSORS':
                return 'Du verlierst! Schere schlägt Papier';
            case 'PAPER':
                return 'Ihr spielt Unentschieden! Papier trifft Papier';
            default:
                return 'Fehler bei Vergelich';
            
        }
    }else if(user.toUpperCase()==="SCISSORS"){
        switch (comp){
            case 'ROCK':
                return 'Du verlierst! Stein schlägt Schere';
            case 'SCISSORS':
                return 'Ihr spielt Unentschieden! SChere trifft Schere';
            case 'PAPER':
                return 'Du gewinnst! Schere schlägt Papier';
            default:
                return 'Fehler bei Vergelich';
            
        }
    }else{
        return "Fehler bei USer Eingabe";
    }
}

function game(){
    let zaehlerGew = 0;
    let zaehlerVer = 0;
    for(let i = 0; i < 5; i++){
        let playerSelec = prompt("Deine Wahl", "Schere");
        let computerSelec = getComputerChoice();
        let text = ermittlerWinner(playerSelec, computerSelec);

        if(text.search('gewinnst')!=-1){
            console.log(text);
            zaehlerGew ++;
            
        }else if(text.search('verlierst')!=-1){
            console.log(text);
            zaehlerVer ++;
        }else if(text.search('Ihr')!=-1){
            console.log(text);
        }else{
            console.error(text);
        }
        
    }
    if(zaehlerGew > zaehlerVer){
        console.log(`Du gewinnst mit ${zaehlerGew} zu ${zaehlerVer}!`);
    }else if(zaehlerGew < zaehlerVer){
        console.log(`Du verlierst mit ${zaehlerGew} zu ${zaehlerVer}!`);
    }else{
        console.log(`Unentschieden: ${zaehlerGew} zu ${zaehlerVer}`)
    }
}

game();


