FROM node:14-stretch

# Create app directory
WORKDIR /usr/src/app

# Copy 
COPY package.json .

COPY yarn.lock .


COPY ingredients ./ingredients

COPY utensils ./utensils


COPY lerna.json .

RUN npm install -g lerna

RUN lerna bootstrap


COPY techniques ./techniques


RUN bash techniques/deps.sh
RUN bash techniques/build.sh

CMD [ "yarn", "test" ]