const fs = require("fs");
const path = require("path");

const nextDir = path.join(process.cwd(), ".next");
const removableEntries = [
  "app",
  "cache",
  "server",
  "static",
  "app-build-manifest.json",
  "build-manifest.json",
  "package.json",
  "react-loadable-manifest.json",
  "prerender-manifest.js",
  "prerender-manifest.json",
  "routes-manifest.json",
];

function removePath(targetPath) {
  const maxAttempts = 5;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      fs.rmSync(targetPath, {
        recursive: true,
        force: true,
        maxRetries: 10,
        retryDelay: 150,
      });
      return;
    } catch (error) {
      if (attempt === maxAttempts) {
        console.warn(`Warning: could not remove ${path.basename(targetPath)}.`);
        console.warn(error instanceof Error ? error.message : error);
        return;
      }

      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200);
    }
  }
}

if (fs.existsSync(nextDir)) {
  for (const entry of removableEntries) {
    const targetPath = path.join(nextDir, entry);

    if (fs.existsSync(targetPath)) {
      removePath(targetPath);
    }
  }
}
