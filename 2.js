const getInput = require("ricsi-getinput");
const { type } = require("os");

async function main()
{
    console.log(getInput)
    let name = await getInput("Kérlek add meg a Neved: ");
    let date = Number(await getInput("kérlek add meg a korod"));
    console.log(typeof date);
    console.log(date);
    console.log("Üdvözöllek " + name + "!");
    console.log(typeof name);
    process.exit();

}

main();