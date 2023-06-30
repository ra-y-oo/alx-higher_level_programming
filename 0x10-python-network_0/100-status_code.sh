#!/bin/bash
# sends a req to $1 URL, display response status code only
curl -s -0 /dev/null -w "%{http_code}" "$1"
