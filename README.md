# project bookingcare

👉 init npm: run npm init
👉 install expressjs: npm i express
👉 npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1 (body-parser: viet api, toi gian cac tham so tu client gui len server, dotenv: lay cac tham so tu env)
👉 npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7

👉 1. Cài đặt các thư viện: sequlize-cli, sequelize và mysql2
👉 npm install --save-dev sequelize-cli or run: npm install sequelize (using sequelize handle DB)
👉 npx sequelize-cli init (auto create config/config.json, models/index.js, /migrations, /seeders)
👉 npm install --save mysql2

👉 3. Tạo model: 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

👉 4: Tạo migrations:
npx sequelize-cli db:migrate

👉 5. Tạo Seeder: npx sequelize-cli seed:generate --name demo-user  => execute seed file: npx sequelize-cli db:seed:all