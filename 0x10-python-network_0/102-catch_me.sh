#!/bin/bash
# makes a req to 0.0.0.0:5000/catch_me for a response "You got me!"
curl -sx PUT -L -d "user_id=98" --header "origin: HolbertonSChool" 0.0.0.0:5000/ catch_me
