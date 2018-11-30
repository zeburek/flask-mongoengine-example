#!/bin/sh
cd /app
sed -i 's|=null|="'${BACKEND_HOST:-http://localhost:4000}'"|g' /app/build/index.html
python3 app.py