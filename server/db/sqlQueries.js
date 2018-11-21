const createUser = 'insert into users (name, email, phone, password, address) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createOrder = 'insert into orders (placedBy, sentTo, weight,from, to, total) values ($1, $2, $3, $4, $5, $6) returning *';



export {
    createUser, queryUsersByEmail, queryUsersByPhone, createOrder
};