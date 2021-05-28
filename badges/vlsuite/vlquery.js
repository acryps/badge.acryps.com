module.exports = app => {
    const logo = `<polygon fill="#5C2FB3" transform="translate(12.000000, 10.000000) rotate(-90.000000) translate(-10.000000, -10.000000) " points="5 10.2632207 5 5 15 5 15 8.33333333 8.76847892 8.33333333 15 11.6666667 15 15"></polygon>`;

    app.get("/vlquery", (req, res) => {
        require("../../badge")(res, logo, "Uses vlquery ORM", null, null, "https://github.com/levvij/vlquery");
    });
};