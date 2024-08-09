# Server Status
by Phil Mass

Deployed at [https://philrmass.github.io/server-status/](https://philrmass.github.io/server-status/)

## To Install
- Clone the repo at `git@github.com:philrmass/server-status.git`
```
yarn
```

## To Run Locally
```
yarn dev
```

## To Run
```
yarn start
```

## To Deploy
```
yarn deploy
```

## Run on a server
```
ccm
cdp
cd server-status
yarn start-bg
```

## Keep running on a server
```
npm install pm2 -g
pm2 start "yarn start-bg"
pm2 list
pm2 stop 1
```
