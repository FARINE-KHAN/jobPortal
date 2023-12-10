import express from 'express';
export const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).json("Api is working");
})