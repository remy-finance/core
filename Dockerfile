FROM node:14-stretch

# Create app directory
WORKDIR /usr/src/app

# Copy 
COPY package.json .

COPY yarn.lock .


COPY dishes ./dishes

COPY utensils ./utensils


COPY lerna.json .

RUN npm install -g lerna

RUN lerna bootstrap


COPY scripts ./scripts


RUN bash scripts/deps.sh
RUN bash scripts/build.sh

CMD [ "yarn", "test" ]