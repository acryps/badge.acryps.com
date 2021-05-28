module.exports = app => {
    const logo = `<polygon fill="#B3A52F" transform="translate(12.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) " points="5 10.2632207 5 5 15 5 15 8.33333333 8.76847892 8.33333333 15 11.6666667 15 15"></polygon>`;

    app.get("/vlcluster", (req, res) => {
        require("../../badge")(res, logo, "Ready for vlcluster", null, null, "https://github.com/levvij/vlcluster");
    });
};