# Markdown Pages

Quickly create and deploy static markdown pages with Next.js

## Quick start

### Clone this repository

```
git clone https://github.com/mrkvon/mdpages.git
```

### Create contents

- add and change content in `src/content`
- change logo in `src/assets/logo.png`, favicon will be generated from it
- change 404 page in `src/app/404/page.tsx`

### Configure

Copy `.env.local.sample` to `.env.local` and change the variables

You can set up the same variables in your GitHub repository for production

### Preview

```sh
yarn dev
```

### Deploy to GitHub pages

- push the code with your new content to your repository
- set up environment variables in your repository settings
- set up github pages in your repository settings
- if you have custom domain, you need to create DNS records pointing it to github pages, make sure to also set up `HOSTNAME` environment variable
- re-run _Build & Deploy to gh_pages_ workflow
