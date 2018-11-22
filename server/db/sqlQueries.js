const createUser = 'insert into users (name, email, phone, password, address) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createOrder = 'insert into orders (user_id, trackingID, sentTo, pickup, destination, weight, price, parcelContent, currentLocation, status, duration, distance) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *';

const selectAllOrders = `select orders.id, orders.sentTo, orders.TrackingID, orders.parcelContent, orders.weight,orders.pickup,orders.destination, orders.currentLocation, orders.price, orders.sentOn, users.phone, orders.user_id, users.email,
orders.status from orders left join users on orders.user_id = users.user_id order by id desc`;




export {
    createUser, queryUsersByEmail, queryUsersByPhone, createOrder, selectAllOrders
};