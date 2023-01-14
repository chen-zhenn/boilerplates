FROM node:18.12

WORKDIR /front-end

COPY jest.config.ts.sample ./jest.config.ts
COPY tsconfig.json.sample ./tsconfig.json
COPY .eslintrc.json .
COPY jest.config.ts .
COPY .gitignore .
COPY package.json .
COPY yarn.lock .
COPY src/ src/

RUN yarn install
RUN yarn transpile:all

CMD ["yarn", "dev"]
