// MAIL
// 1) chiedi all'utente la sua mail
// 2) CONTROLLA CHE SIA IN LISTA
// 3) stampa messaggio appropriato esito


function whitelist() {
    let mailList = ["filippo.giuliotti@gmail.com", "marco.andrei@gmail.it", "giorgio.muratore@gmail.it", "luca.paolini@gmail.it"];
    // 1)
    let newmail = document.getElementById('userInput').value;
    // 
    for ( let i = 0; i < mailList.length; i++) {
        if (mailList[i] == newmail){
            // 3)
            document.getElementById('result').innerHTML = 'La tua email è in lista, Benvenuto!';
            break;
        }
        else{
            document.getElementById('result').innerHTML = 'Sfortunatamente la tua email non risulta in lista';
        }
    }
}




