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
                return 'Ihr spielt Unentschieden! Schere trifft Schere';
            case 'PAPER':
                return 'Du gewinnst! Schere schlägt Papier';
            default:
                return 'Fehler bei Vergelich';
            
        }
    }else{
        return "Fehler bei USer Eingabe";
    }
}

function game(text){
    



    if(text.search('gewinnst')!=-1){

        zaehlerGew ++;
        
    }else if(text.search('verlierst')!=-1){

        zaehlerVer ++;
    }
        
    if(zaehlerGew<5 && zaehlerVer<5)return "";
    if(zaehlerGew > zaehlerVer){
        return(`Du gewinnst mit ${zaehlerGew} zu ${zaehlerVer}!`);
    }else if(zaehlerGew < zaehlerVer){
        return(`Du verlierst mit ${zaehlerGew} zu ${zaehlerVer}!`);
    }else{
        return(`Unentschieden: ${zaehlerGew} zu ${zaehlerVer}`)
    }
}

let zaehlerGew = 0;
let zaehlerVer = 0;
const buttons = document.querySelectorAll('button');
const divBut = document.querySelector('.buttons');
const ergebnis = document.createElement('div');
const bod = document.querySelector('body');
const endstand = document.createElement('h1');
const stand = document.createElement('h3');
stand.textContent = `Stand: ${zaehlerGew}:${zaehlerVer}`;
console.log(divBut);
divBut.style.cssText = "display: flex;"
divBut.appendChild(stand);
buttons.forEach(btn => btn.style.cssText="flex: 1;")
buttons.forEach(btn => btn.addEventListener('click', function(e){

    ergebnis.textContent = ermittlerWinner(`${btn.classList.value}`, getComputerChoice());
    bod.appendChild(ergebnis);
    let end = game(ergebnis.textContent);
    stand.textContent = `Stand: ${zaehlerGew}:${zaehlerVer}`
    if(end){
        endstand.textContent = end;
        bod.appendChild(endstand);
    }

}

));