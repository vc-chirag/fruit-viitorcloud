import * as Dotenv from 'dotenv-webpack';
import path from 'path';
module.exports = {
  plugins: [new Dotenv()],
  path: path.join(__dirname, "/.env")
};
