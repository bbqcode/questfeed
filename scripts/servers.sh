#!/bin/bash

mkdir -p logs

express () {
    echo "Starting express server"
    nodemon server/express.js 2>&1 | tee logs/express.log
}

webpack () {
    echo "Starting webpack server"
    nodemon server/webpack.js 2>&1 | tee logs/webpack.log
}

mongo () {
    echo "Starting MongoDb"
    mkdir -p $PWD/data/db
    mongod --config $PWD/data/mongod.conf --dbpath $PWD/data/db | tee logs/mongod.log
}

case "$1" in
    express)
        express
        ;;
    webpack)
        webpack
        ;;
    mongo)
        mongo
        ;;
esac