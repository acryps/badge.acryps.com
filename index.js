const express = require("express");
const latestVersion = require("latest-version");

const app = express();

const packages = {};

app.get("/npm/:package", async (req, res) => {
    const name = req.params.package;
    let version;

    if (name in packages && packages[name].loaded < new Date() + 1000 * 60 * 15) {
        version = packages[name].version;
    } else {
        version = await latestVersion(name);

        packages[name] = {
            version,
            loaded: new Date()
        }
    }

    const widthPerCharacter = 6;
    const nameWidth = name.length * widthPerCharacter;
    const versionWidth = version.length * widthPerCharacter;

    res.header("content-type", "image/svg+xml");
    res.end(`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 ${20 + nameWidth + 15 + versionWidth + 4} 20" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect fill="black" x="0" y="0" width="100%" height="20"></rect>
    <rect fill="white" x="1" y="1" width="${20 + nameWidth + 10 - 2}" height="18"></rect>

    <rect fill="#2CB343" x="${20 + nameWidth + 10 - 2}" y="1" width="${10 + versionWidth}" height="18"></rect>

    <rect fill="#CB0000" x="4" y="4" width="12" height="12"></rect>
    <polygon fill="#FFFFFF" points="14 14 12 14 12 8 10 8 10 14 6 14 6 6 14 6"></polygon>

    <text font-family="monospace" x="22.5" y="10" font-size="10" font-weight="bold" dominant-baseline="central" fill="#000000">
        ${name}
    </text>

    <text font-family="monospace" x="${20 + nameWidth + 15 - 2}" y="10" font-size="10" font-weight="normal" dominant-baseline="central" fill="#000000">
        ${version}
    </text>
</svg>`);
});

app.get("/go/npm/:package", (req, res) => {
    res.redirect(`https://npmjs.org/${req.params.package}`);
});

app.get("*", (req, res) => {
    res.redirect("https://github.com/levvij/gitbadge");
})

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`started on ${port}`);
});