import express from 'express';

const router = express.Router();

router.get('/api/v1', (request, response) => {
    return response.status(200)
    .json({
        message: 'Welcome to MailXpress, your package is safe with us'
    });
});

router.all('*', (request, response) => {
    response.status(404)
    .json({
        message: 'Sorry! This page does not exist'
    });
});

export default router;