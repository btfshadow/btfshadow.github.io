# Hosting notes for Galaxy Shooter Pro (Unity WebGL)

Error seen: "Unable to parse Build/space-web.framework.js.gz! This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header \"Content-Encoding: gzip\" present."

Cause

- The Unity WebGL build contains pre-compressed files (e.g. `*.js.gz`, `*.wasm.gz`, `*.data.gz`) when Compression is enabled in Unity. The browser must receive these files with `Content-Encoding: gzip` so it can decompress them. If the server serves the `.gz` file without that header the browser tries to parse compressed bytes as JS and fails.

Quick fixes

- If you control the web server, configure it to send `Content-Encoding: gzip` for `*.gz` files and correct `Content-Type` for the underlying file (e.g. `.js` → `application/javascript`, `.wasm` → `application/wasm`).
- If you are deploying to Netlify, this repo contains a `netlify.toml` with header rules to serve the Build files correctly; deploy as usual and Netlify will apply those headers.
- If you use GitHub Pages, it does not allow custom headers — prefer building without compression (disable Compression in Unity) or host the Build assets behind a server/CDN that sets headers (S3+CloudFront, Netlify, Vercel with custom headers, etc.).

Local testing

- For quick local testing you can run the included Node server which sets `Content-Encoding` when `*.gz` files are present:

```bash
# from repo root
node scripts/serve-galaxy-build.js
# open http://localhost:8080
```

Recommended server header rules (Netlify example)

See `netlify.toml` in repo root — it sets `Content-Encoding: gzip` and `Content-Type` for common compressed file patterns under `galaxy-shoter-pro/Build/`.

If you prefer to avoid configuring headers, rebuild the Unity project with Compression = Disabled (Build Settings → WebGL → Compression Format = Disabled) so no `.gz` files are generated.
