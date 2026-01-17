#!/usr/bin/env node

const path = require("path");
const { organizeFiles } = require("./organizer");

const args = process.argv.slice(2);
const pathIndex = args.indexOf("--path");

if (pathIndex === -1 || !args[pathIndex + 1]) {
  console.error("Usage: node organize.js --path <directory>");
  process.exit(1);
}

const targetPath = path.resolve(args[pathIndex + 1]);
organizeFiles(targetPath);
