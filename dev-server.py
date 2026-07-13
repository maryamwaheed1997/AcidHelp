#!/usr/bin/env python3
"""Local dev server mirroring vercel.json's rewrites/redirects.

Opening index.html directly (file://) can't resolve absolute clean-URL
links like /map — those only work through a real HTTP server, which is
what Vercel provides once deployed. This script replicates the same
rewrite/redirect rules from vercel.json so the site behaves identically
on your machine before you push.

Usage:
    python3 dev-server.py
    (then open http://localhost:8000/ in a browser)
"""
import http.server
import os
import socketserver

PORT = 8000

# Keep these in sync with vercel.json.
REWRITES = {
    "/map": "/map.html",
    "/resources": "/resources.html",
    "/blog": "/blog.html",
    "/about": "/about.html",
    "/joinus": "/joinus.html",
}
REDIRECTS = {
    "/map.html": "/map",
    "/resources.html": "/resources",
    "/blog.html": "/blog",
    "/about.html": "/about",
    "/joinus.html": "/joinus",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path, _, query = self.path.partition("?")
        if path in REDIRECTS:
            self.send_response(301)
            location = REDIRECTS[path] + (f"?{query}" if query else "")
            self.send_header("Location", location)
            self.end_headers()
            return
        if path in REWRITES:
            self.path = REWRITES[path] + (f"?{query}" if query else "")
        super().do_GET()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving http://localhost:{PORT}/  (Ctrl+C to stop)")
        httpd.serve_forever()
