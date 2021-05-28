module.exports = app => {
    const logo = `<polygon fill="#0F05A0" transform="translate(10.000000, 10.000000) rotate(-270.000000) translate(-10.000000, -10.000000) " points="5 10.2632207 5 5 15 5 15 8.33333333 8.76847892 8.33333333 15 11.6666667 15 15"></polygon>`;

    app.get("/acryps-cloud", (req, res) => {
        require("../badge")(res, logo, "Hosted on acryps cloud", null, null, "https://cloud.acryps.com");
    });

    app.get("/acryps-cloud/:host", (req, res) => {
        require("../badge")(res, logo, "Hosted on acryps cloud", `${req.params.host}`, "#0F05A0", `https://${req.params.host}.cloud.acryps.com`);
    });
};