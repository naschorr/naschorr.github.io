# nickschorr.com (via naschorr.github.io)
Source code for my personal site

## Getting Started
- Clone the repo: `git clone https://github.com/naschorr/naschorr.github.io`
- `cd` into the root directory
- Install the dependencies: `npm install`
- Run `npm start` or `ng serve` to build and host the site locally. To expose the site to your local network, use `ng serve --host 0.0.0.0`.
    - Alternatively, feel free to use the `ng serve` launch option in VS Code.
- Connect to the page at [localhost:4200](localhost:4200), or [<host's IP address>:4200](localhost:4200) if you're accessing the site from a phone or something else.

## Deployment (Automated)
Just merge the changes into the `main` branch. The `.github/workflows/angular_build_deploy.yml` action will handle building and deploying the Angular app.

## Deployment (Manual)
- `cd` into the root directory
- Make sure the Angular CLI GH Pages package is installed: `ng add angular-cli-ghpages`
- `ng deploy`

This builds the app and pushes it to the `gh-pages` branch on GitHub. GitHub Pages is already configured to serve from that branch, and has it's custom domain set up to serve from `nickschorr.com` as well.
