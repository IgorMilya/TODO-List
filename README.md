# Rsbuild Project

## Deployment
The deployment was implemented via Firebase hosting, however, I encountered with problem in 404 page. Here is a link: [Firebase](https://todolist-40c79.firebaseapp.com)

So, Primary Hosting was implemented via vercel link: [Vercel](https://todo-list-puce-iota.vercel.app)

## Short documentation

This is TODO List website was written with the help of Redux Toolkit and RTK Query, React, TS and Firebase. Initially, when you open the website you see the login page and if you are in the first time you can sign up by clicking on the Signup link and then you visit signup page. You can login or signup via email and password or via Google Account. When you logged your data is stored in the database and by default the new user has permission to edit the task and only in the database you can change that. For the test, I created two users where one has no permission to edit, and another one has permission to edit tasks.

## Testing users
Has permission
test@test.com:Test1234

No permission
Error@error.ua:qwerT124

Also, all todos are sorted according to the date of their creation. The one that was created earlier will be higher and the others below. Also, when we do a click-by-click shuffle on the checkbox, our task goes to the bottom, and the ones that are not done stay at the top. You can open a sidebar by clicking on the arrow in the card and editing or dragging if you have access.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
