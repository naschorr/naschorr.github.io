# nickschorr.com (via naschorr.github.io)
Source code for my personal site

## Building and Serving
- `cd` to the root directory
- Run `npm start` or `ng serve` to build and host the site locally. To expose the site to your local network, use `ng serve --host 0.0.0.0`.
- Connect to the page at [localhost:4200](localhost:4200), or [<host's IP address>:4200](localhost:4200) if you're accessing the site from a phone or something else.

## Deployment
- `cd` to the root directory
- Make sure the Angular CLI GH Pages package is installed: `ng add angular-cli-ghpages`
- `ng deploy --base-href=/`

This builds the app and pushes it to the `gh-pages` branch on GitHub. GitHub Pages is already configured to serve from that branch, and has it's custom domain set up to serve from `nickschorr.com` as well.