#!/bin/bash
# ends a request to that URL displays the size of the response body
curl -sI "$1" | grep -i Content-length | cut -d " " -f2
