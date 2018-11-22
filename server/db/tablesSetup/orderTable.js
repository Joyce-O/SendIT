import pool from '../connection';

const createOrderTable = `DROP TABLE IF EXISTS orders CASCADE;
  CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) references users (user_id) on delete cascade,
    sentTo CHARACTER VARYING(50) NOT NULL,
    TrackingID CHARACTER VARYING(100) NOT NULL, 
    parcelContent CHARACTER VARYING(100) NOT NULL,
    weight CHARACTER VARYING(7) NOT NULL,
    pickup CHARACTER VARYING(100) NOT NULL,
    destination CHARACTER VARYING(100) NOT NULL,
    currentLocation CHARACTER VARYING(100) NOT NULL,
    price INTEGER NOT NULL,
    duration CHARACTER VARYING(10) NOT NULL,
    distance CHARACTER VARYING(10) NOT NULL,
    sentOn TIMESTAMP NOT NULL DEFAULT (NOW()),
    status CHARACTER VARYING(10) NOT NULL DEFAULT ('Pending')
)`;

class OrderTableHandler {
  static ordersTable() {
    const create = pool.query(createOrderTable)
    .then(result =>  result)
    .catch(error => response.status(500)
    .json({
      success: false,
      message: error.message
    }))
    
    return create;
  }
}

const { ordersTable } = OrderTableHandler;

export default ordersTable;
