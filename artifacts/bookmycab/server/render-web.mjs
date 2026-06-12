import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dist/ is expected at artifacts/bookmycab/dist (relative to this file)
const root = path.resolve(__dirname, '..', 'dist');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
};

function safeJoin(base, targetPath) {
  // Prevent path traversal
  const normalized = targetPath.replace(/\\/g, '/');
  const fullPath = path.normalize(path.join(base, normalized));
  if (!fullPath.startsWith(base)) return null;
  return fullPath;
}

const server = http.createServer((req, res) => {
  try {
    const url = (req.url || '/').split('?')[0];
    const reqPath = url === '/' ? '/index.html' : url;

    const fp = safeJoin(root, reqPath.startsWith('/') ? reqPath.slice(1) : reqPath);
    if (!fp) {
      res.statusCode = 400;
      res.end('Bad Request');
      return;
    }

    fs.readFile(fp, (err, data) => {
      if (err) {
        // SPA fallback
        if (reqPath !== '/index.html') {
          const indexPath = path.join(root, 'index.html');
          fs.readFile(indexPath, (err2, indexData) => {
            if (err2) {
              res.statusCode = 404;
              res.end('Not found');
              return;
            }
            res.setHeader('Content-Type', mime['.html']);
            res.end(indexData);
          });
          return;
        }
        res.statusCode = 404;
        res.end('Not found');
        return;
      }

      const ext = path.extname(fp);
      res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
      res.end(data);
    });
  } catch (e) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
server.listen(port, () => {
  console.log(`✅ Web server listening on ${port}. Serving: ${root}`);
});

