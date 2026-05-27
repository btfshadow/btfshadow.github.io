#!/usr/bin/env node
// Simple static server to serve galaxy-shoter-pro build and respect pre-compressed .gz files.
// Usage: `node scripts/serve-galaxy-build.js` then open http://localhost:8080

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'galaxy-shoter-pro');
const port = process.env.PORT || 8080;

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.wasm': 'application/wasm',
  '.json': 'application/json',
  '.data': 'application/octet-stream',
  '.unityweb': 'application/octet-stream',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  try {
    let reqUrl = decodeURIComponent(req.url.split('?')[0]);
    if (reqUrl === '/') reqUrl = '/index.html';
    let filePath = path.join(root, reqUrl);

    // If path is directory, serve index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const acceptEncoding = (req.headers['accept-encoding'] || '');
    const gzPath = filePath + '.gz';

    // If client accepts gzip and compressed file exists, serve it with Content-Encoding
    if (acceptEncoding.includes('gzip') && fs.existsSync(gzPath)) {
      const ct = contentTypeFor(filePath);
      res.writeHead(200, {
        'Content-Type': ct,
        'Content-Encoding': 'gzip',
        'Cache-Control': 'public, max-age=31536000, immutable'
      });
      fs.createReadStream(gzPath).pipe(res);
      return;
    }

    // Serve uncompressed file if exists
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ct = contentTypeFor(filePath);
      res.writeHead(200, { 'Content-Type': ct });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // As a fallback, if compressed exists but client didn't ask for gzip, still serve compressed and set headers
    if (fs.existsSync(gzPath)) {
      const ct = contentTypeFor(filePath);
      res.writeHead(200, {
        'Content-Type': ct,
        'Content-Encoding': 'gzip'
      });
      fs.createReadStream(gzPath).pipe(res);
      return;
    }

    res.writeHead(404);
    res.end('Not found');
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
