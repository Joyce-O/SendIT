const createUser = 'insert into users (name, email, phone, password, address) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createOrder = 'insert into orders (user_id, trackingID, sentTo, pickup, destination, weight, price, parcelContent, currentLocation, status, duration, distance) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *';




export {
    createUser, queryUsersByEmail, queryUsersByPhone, createOrder
};