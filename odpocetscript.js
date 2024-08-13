setInterval(() => {
    var today = new Date();
    const blyat = new Date("Aug 15,2024 00:00:00").getTime();
    Timeleft = blyat - today
    var day = Math.floor(Timeleft / (1000 * 60 * 60 * 24));
    var hour = Math.floor((Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((Timeleft % (1000 * 60 * 60)) / (1000 * 60));

    var sekundy = Math.floor((Timeleft % (1000 * 60)) / (1000));
    //roky
    var roky = Math.floor(day / 365);
    var zvyšokRoky = Math.floor(day % 365);
    //mesiace
    var mesiace = Math.floor(zvyšokRoky / 30);
    var zvyšokMesiace = Math.floor(zvyšokRoky % 30);
    //ez clap dni
    // asi nič ignor plz var zvyšokDni = Math.floor(zvyšokMesiace % 7)
    /* if (zvyšokMesiace != 1) {
         výsledek = `18 budeš mať o ${roky} rok(y) ${mesiace} mesiac(e) a ${day} dní,  ${hour}hodín ${minute} minút a ${sekundy} sekúnd -t.j. ${day}dní`
     }
     //elify opraviť nemám na to nervy REEEEEEEEEEEEE
     else if (zvyšokMesiace = 2) {
         výsledek = `18 budeš mať o ${roky} rok(y) ${mesiace} mesiac(e) a 2 dni,  ${hour}hodín ${minute} minút a ${sekundy} sekúnd -t.j. ${day}dní`
     } else if (zvyšokMesiace = 3) {
         výsledek = `18 budeš mať o ${roky} rok(y) ${mesiace} mesiac(e) a ${zvyšokMesiace} dniBLYAT,  ${hour}hodín ${minute} minút a ${sekundy} sekúnd -t.j. ${day}dní`
     }
     //TO HERE
     else {
     }*/
    výsledek = `18 budeš mať o ${roky} rok(y) ${mesiace} mesiac(e) a ${day} deň,  ${hour}hodín ${minute} minút a ${sekundy} sekúnd -t.j. ${day}dní`

    //test= ""
    document.getElementById("chuj").textContent = výsledek
        // document.getElementById("blyat").textContent = test

}, 1)