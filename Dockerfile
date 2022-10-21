FROM node:16

# ARG app_name
# Create app directory
WORKDIR /srv

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
#RUN npm install --legacy-peer-deps

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# COPY docker/web/entrypoint.sh /usr/bin/entrypoint.sh

# RUN chown -R root:$(whoami) /var/www/${app_name}
# RUN chmod -R 775 /var/www/${app_name}

CMD ["yarn", "watch"]

# ENTRYPOINT ["/usr/bin/entrypoint.sh"]