#!/bin/bash

echo "Starting MongoDb"
mkdir -p $PWD/data/db
mongod --config $PWD/data/mongod.conf --dbpath $PWD/data/db | tee logs/mongod.log