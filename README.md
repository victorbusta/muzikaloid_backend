# Muzikaloid back-end

This repository contains the development environment of the Muzikaloid's back-end.

Muzikaloid is an association of curious synthesiser enthousiasts whoes goal is to share knowledge on sound synthesis.

This back-end is a **REST API** with **OPEN API** documentation served localy at **http://localhost:3000/api/**

## Dependencies

This projects uses **Node.js (v19.1)** backend environment with **Nest**, **Express** and **Prisma ORM**

## Development environment

To initiate project :
```bash
# clone repo if you did not cloned the fullstack repo
git clone https://github.com/victorbusta/muzikaloid_backend.git

# cd in the repo
cd muzikaloid_backend

# if you did not cloned the fullstack repo, create .env and change content according to your needs
mv .env.local .env

# install node dependencies
npm i

# initiate prisma and configure database (development database can by found in the full-stack repo)
npx prisma generate
npx prisma migrate deploy
npx prisma db seed

# start project in development
npm run start:dev

# start project in production
npm run start:prod

# build project
npm run build
```
## Related repos 
+ The [full-stack](https://github.com/victorbusta/muzikaloid_full)'s repository and documentation.
+ The [frontend](https://github.com/victorbusta/muzikaloid_frontend)'s repository and documentation.