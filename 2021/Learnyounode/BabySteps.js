//console.log(process.argv);
var sum = 0;

for (let i = 2; i < process.argv.length; i++)
{
    let elem = process.argv[i];

    if (!isNaN(elem)) {
        sum += parseInt(elem);
    }
}

console.log(sum);