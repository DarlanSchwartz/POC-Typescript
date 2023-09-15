"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var db = new pg_1.Pool({
    host: process.env.DATABASE_URL,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.NODE_ENV == "production" ? true : true
});
db.connect(function (error, client, done) {
    if (error) {
        console.error('Error connecting to PostgreSQL', error);
    }
    else {
        console.log('--------------- Conected to PostgreSQL');
        done();
    }
});
exports.default = db;
