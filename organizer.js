const fs = require("fs");
const path = require("path");

const EXTENSION_MAP = {
    images: ["jpg", "jpeg", "png", "gif"],
    pdf: ["pdf"],
    zip: ["zip", "rar"],
    docs: ["doc", "docx", "txt"]
};

function getFolder(extension) {
    for (let folder in EXTENSION_MAP) {
        if (EXTENSION_MAP[folder].includes(extension)) {
            return folder;
        }
    }
    return "others";
}

function organizeFiles(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.error("Directory does not exist");
        return;
    }

    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);

        if (fs.statSync(fullPath).isDirectory()) return;

        const ext = path.extname(file).slice(1).toLowerCase();
        const folder = getFolder(ext);
        const folderPath = path.join(dirPath, folder);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        fs.renameSync(fullPath, path.join(folderPath, file));
    });

    console.log("✅ Downloads folder organized successfully!");
}

module.exports = { organizeFiles };
