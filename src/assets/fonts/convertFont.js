const fs = require("fs");
const path = require("path");

const fontPath = path.join(__dirname, "THSarabunNew.ttf"); // path ไปไฟล์ TTF
const base64 = fs.readFileSync(fontPath).toString("base64");

const output = `const THSarabunNewBase64 = "${base64}";\nexport default THSarabunNewBase64;`;

fs.writeFileSync(path.join(__dirname, "THSarabunNew.js"), output);
console.log("THSarabunNew.js created successfully!");
