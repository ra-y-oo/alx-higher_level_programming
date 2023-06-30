#!/bin/bash
#curl sends POST req to URL, display response body
curl -s -X POST -d "email=test@gmail.com&gmail.comsubject=I will always be here for PLD" "$1"
