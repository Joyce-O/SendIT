const createUser = 'insert into users (name, email, phone, password, address) values ($1, $2, $3, $4, $5) returning *';

export default createUser;