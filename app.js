import express from 'express'
import bodyParser from 'body-parser';
import placeOrderRouter from './server/routes/placeOrderRoute';
import router from './server/routes/homePageRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', placeOrderRouter);
app.use('/', router);

const port = process.env.PORT || 5400;

app.listen(port, () => console.log(`MailXpress is listening on port ${port}`));

export default app;