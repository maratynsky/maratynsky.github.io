#!/bin/sh
awhile=3
sleep $awhile && open http://localhost:3000/ & python -m SimpleHTTPServer 3000