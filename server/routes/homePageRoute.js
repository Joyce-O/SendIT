import express from 'express';

const router = express.Router();

router.get('/api/v1', (request, response) =>{
    return response.status(200)
    .json({
        message: 'Welcome to MailXpress, your package is safe with us'
    });
});

export default router;