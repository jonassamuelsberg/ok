//opprette et array

let register = [];
let ut = '';

// gjennomfører kjøp
function kjop() {

    console.log("Starter kjøp");

    ut = "<table>"
        + "<tr>"
        + "<th> Film</th>"
        + "<th> Antall billetter </th>"
        + "<th> Navn </th>"
        + "<th> Telefonnr </th>"
        + "<th> Epost </th>"
        + "</tr>"


    // oppretter et billett objekt
    const billett = {
        film: document.getElementById('film').value,
        antall: document.getElementById('antall')?.value,
        fornavn: document.getElementById('fornavn')?.value,
        etternavn: document.getElementById('etternavn')?.value,
        telefonnr: document.getElementById('telefonnr')?.value,
        epost: document.getElementById('epost')?.value
    }


    console.log("Billett: " + JSON.stringify(billett));

    let error = false;

    // sjekke om alle input boksene er fylt ut

    if (billett.film == "") {
        document.getElementById('fil').innerHTML = 'Du må velge en av filmene';
        error = true;
    } else {
        document.getElementById('fil').innerHTML = "";
    }

    if (billett.antall == "") {
        document.getElementById('ant').innerHTML = 'Må skrive noe inn i antall';
        error = true;
    } else {
        document.getElementById('ant').innerHTML = "";

    }
    if (billett.fornavn == "") {
        document.getElementById('for').innerHTML = 'Må skrive noe inn i fornavn';
        error = true;
    } else {
        document.getElementById('for').innerHTML = "";
    }

        if (billett.etternavn == "") {
            document.getElementById('ette').innerHTML = 'Må skrive noe inn i etternavn';
            error = true;
        } else {
            document.getElementById('ette').innerHTML = "";
        }

    if (billett.telefonnr == "") {
        document.getElementById('tlf').innerHTML = 'Må skrive noe inn i telefonnr';
        error = true;
    } else {
        document.getElementById('tlf').innerHTML = "";
    }

    if (billett.epost == "") {
        document.getElementById('epo').innerHTML = 'Må skrive noe inn epost';
        error = true;
    } else {
        document.getElementById('epo').innerHTML = "";
    }

    if (error) {

        console.log("Error! Husk inputfeltene.");

    } else {

        console.log("All good!");

        // legger billett objektet inn i arrayet
        register.push(billett);

        // sørger for at feil meldingene forsvinner hvis feltene blir fylt inn
        document.getElementById('fil').innerHTML = "";
        document.getElementById('ant').innerHTML = "";
        document.getElementById('for').innerHTML = "";
        document.getElementById('ette').innerHTML = "";
        document.getElementById('tlf').innerHTML = "";
        document.getElementById('epo').innerHTML = "";

        // lister billettene på nettsiden
        for (let p of register) {

            ut += "<tr>"
                + "<td>" + p.film + " </td>"
                + "<td>" + p.antall + "</td>"
                + "<td>" + p.fornavn + ' ' + p.etternavn + "</td>"
                + "<td>" + p.telefonnr + "</td>"
                + "<td>" + p.epost + "</td>"
                + "<tr>";

            console.log("Film: " + p.film + " - " + p.antall);
        }

        ut += "</table>";
        document.getElementById('registerListet').innerHTML = ut;
    }
}

// nullstiller arrayet
function slett() {

    console.log("Sletter alle bestillingene!");

    document.getElementById('registerListet').innerHTML = "";

    register = [];
}
