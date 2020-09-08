    const getinput = require("ricsi-getinput");

    async function main()
    {
    let szam1 = Number(await getinput("Kérlek adj meg egy számot"));
    let szam2 = Number(await getinput("kérlek adj meg egy számot"));
    let szorzat = szam1 * szam1;
    let szorzat2 = szam2 * szam2;
    let eredmeny = szam1 * szam1 + szam2 * szam2;
    console.log(`${szorzat} + ${szorzat2} = ${eredmeny}`);



    process.exit();
    }
    main();