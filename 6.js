// Csomag definíció
const getinput = require("ricsi-getinput");

// Függvény deklaráció

async function main()
{
    let ricsi1 = Number(await getinput("Kérlek adj meg egy számot"));
    let ricsi2 = Number(await getinput("Kérlek adj meg egy számot"));
    
    osszead(ricsi2, ricsi1);

    console.log("Valami");
}

function osszead(szam1, szam2)
{
    let eredmeny = szam1 + szam2;
    console.log(`${szam1} + ${szam2} = ${eredmeny}`);
}

function szamol(szam1, szam2, szam3, szam4, szam5)
{
    let eredmeny = szam1 + szam2 + szam3 + szam4 + szam5;
    console.log(`${szam1} + ${szam2} + ${szam3} + ${szam4} + ${szam5} = ${eredmeny}`);
}

// Tényleges kód, ami csinál is valamit
main();