#!/usr/bin/env bash
echo "Creating users..."
mongo admin --host localhost -u root -p root --eval "db.createUser({user: 'appuser', pwd: 'supersecret',roles: [{role: 'readWrite', db: 'MyAppDb'}]}); db.createUser({user: 'administrator', pwd: 'no1willguess', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
echo "Users created."