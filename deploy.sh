#!/bin/bash

ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@47.240.77.251 -t "1"

# sftp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@47.240.77.251 << EOF
# put -r ./build/* /var/www/html

# EOF