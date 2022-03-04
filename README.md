# typescript-node-server

## Run

### Development

- `yarn build`
- `yarn dev`

alternatively:

- `yarn start`

### Production

- `docker build -t <your-namespace>/ts-node-server:<version> .`
- `docker run -p 3000:3000 -d <your-namespace>/ts-node-server:<version>`

See logs:

- `docker container ls`
- `docker container logs <CONTAINER ID>`

Stop container:

- `docker container stop <CONTAINER ID>`

Other commands:

- `docker image ls`

## How this project was first initialized

- `npm init -y`
- `yarn add -D typescript`
- `npx tsc --init`
- `yarn add -D ts-node ts-node-dev nodemon`
- `yarn add express`
- `yarn add -D @types/node @types/express`
- Create .gitignore in project root to ignore `dist` and `node_modules`
- Create Dockerfile in project root
