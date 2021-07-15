module.exports = (res, logo, title, value, color, link) => {
    const widthPerCharacter = 6;
    const titleWidth = title.length * widthPerCharacter;
    const valueWidth = value && value.length * widthPerCharacter;

    res.header("Content-Type", "image/svg+xml");
    res.header("Cache-Control", "no-cache");

    res.end(`<?xml version="1.0" encoding="UTF-8" ?>
    <svg version="1.1" viewBox="0 0 ${20 + titleWidth + (value ? 15 + valueWidth + 4 : 10)} 20" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <a xlink:href="${link}">
            <rect fill="black" x="0" y="0" width="100%" height="20"></rect>
            <rect fill="white" x="1" y="1" width="${20 + titleWidth + 10 - 2}" height="18"></rect>
        
            ${value ? `<rect fill="${color}" x="${20 + titleWidth + 10 - 2}" y="1" width="${10 + valueWidth}" height="18"></rect>` : ""}
        
            ${logo}
        
            <text font-family="monospace" x="22.5" y="10" font-size="10" font-weight="bold" dominant-baseline="central" fill="#000">${title}</text>
            ${value ? `<text font-family="monospace" x="${20 + titleWidth + 15 - 2}" y="10" font-size="10" font-weight="normal" dominant-baseline="central" fill="#fff">${value}</text>` : ""}
        </a>
    </svg>`);
};