const fs = require("fs");
const url = require("url");
const matchAll = require("match-all");

const timestamp = +new Date();

fs.readFile("./build/index.html", function (err, buf) {
    if (err) return console.log(err);
    let data = buf.toString();
    const all = matchAll(data, /<script[\s\w="'/]*src\s*=\s*['"](.*?)["']>|<link[/\s\w="\d]*href=['"](.*?)['"][\s\w="'/]*>/gi);
    all.toArray().map((file) => {
        newUrl = `${url.parse(file).pathname}?t=${timestamp}`;
        console.log(`'${newUrl}'`);
        data = data.split(file).join(newUrl);
    });
    fs.writeFile("./build/index.html", data, (err) => {
        if (err) return console.log(err);
        console.log("Versionlama işlemi başarıyla yapıldı.");
    });
});
