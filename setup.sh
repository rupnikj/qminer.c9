#!/bin/bash
. ~/.nvm/nvm.sh

nvm install 0.12
nvm use 0.12
nvm alias default v0.12
npm install qminer/qminer