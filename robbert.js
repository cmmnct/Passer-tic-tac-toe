
/* stap 10: maak een functie die uitgevoerd word als op he field geklikt wordt (zie vorig spel!) */

function onClickField(evt) {
// stap 11: maak een let 'clickedsquare' aan die het vlakje opvangt waarop geklikt is (zie vorig spel!)
    let clickedsquare = evt.target;
    // stap 12: voer de volgende regels code uit ALS (IF) het aangeklikte vlak als class 'cover' heeft:
    if (evt.target.className === "cover") {
        evt.target.style.visibility = "hidden";
    }

}