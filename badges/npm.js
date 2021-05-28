const latestVersion = require("latest-version");

module.exports = app => {
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

        require("../badge")(
            res, 
            `<rect fill="#cb0000" x="4" y="4" width="12" height="12"></rect><polygon fill="#fff" points="14 14 12 14 12 8 10 8 10 14 6 14 6 6 14 6"></polygon>`,
            name,
            version,
            "#00894d",
            `https://badge.acryps.com/go/npm/${package}`
        );
    });
    
    app.get("/go/npm/:package", (req, res) => {
        res.redirect(`https://npmjs.org/${req.params.package}`);
    });
};