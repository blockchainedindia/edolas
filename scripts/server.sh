#!/usr/bin/env bash

echo "Starting Edolas Blockchain" &
truffle serve &
node index.js &
figlet "Edolas"
