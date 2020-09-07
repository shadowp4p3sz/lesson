const getInput = require("ricsi-getinput");

async function main()
{
    let Elsoszam = Number (await getInput("kérlek adj meg egy számot"));
    let Masodikszam = Number (await getInput("kérlek adj meg egy számot"));
    let Harmadikszam = Number (await getInput("kérlek adj meg egy számot"));
    let Negyedikszam = Number (await getInput("kérlek adj meg egy számot"));
    let Otodikszam = Number (await getInput("kérlek adj meg egy számot"));
    let Vegosszeg = Elsoszam + Masodikszam + Harmadikszam + Negyedikszam + Otodikszam;
    console.log(Elsoszam + " + " + Masodikszam + " + " + Harmadikszam + " + " + Negyedikszam + " + " + Otodikszam + " = " + Vegosszeg);
    //console.log(`${ Elsoszam } + ${ Masodikszam } + ${ Harmadikszam } + ${ Negyedikszam } + ${ Otodikszam } = ${ Vegosszeg }`)
    process.exit();
}
main();
   /*  let Elsoszam = 4;
    let Masodikszam = 5; 
    let Harmadikszam = 6;
    let Negyedikszam = 2;
    let Otodikszam = 2;
    let Vegeredmeny = Elsoszam + Masodikszam + Harmadikszam + Negyedikszam + Otodikszam;
    console.log(Elsoszam + " + " +  Masodikszam +  " + " +  Harmadikszam + " + " +  Negyedikszam +  " + " +  Otodikszam + " = " +  Vegeredmeny);
    process.exit();*/
