#!/bin/bash

ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@47.240.77.251 -t "cd /root && rm -rf online-tools && git clone https://github.com/sky-builder/online-tools.git && cd online-tools && git checkout ci_config && yarn install && yarn run generate && rm -rf /var/www/online-tools && mkdir /var/www/online-tools && cp -r dist/* /var/www/online-tools && echo done"

# sftp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@47.240.77.251 << EOF
# put -r ./build/* /var/www/html

# EOF