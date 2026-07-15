const player = {

    name: "Єва"

};


function setPlayerName(name){

    if(name.trim() !== ""){

        player.name = name.trim();

    }


    localStorage.setItem(
        "dreamwalkerPlayer",
        JSON.stringify(player)
    );

}



function loadPlayer(){

    let saved =
    localStorage.getItem("dreamwalkerPlayer");


    if(saved){

        Object.assign(
            player,
            JSON.parse(saved)
        );

    }

}


loadPlayer();
