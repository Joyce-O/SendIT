import usersTable from './userAuthTables';
import ordersTable from './orderTable'
import createAdmin from './adminUser'


usersTable()
.then(() => createAdmin()
    .then(() => ordersTable()))
    .catch(error => response.status(500)
    .json({
      success: false,
      message: error.message
    }));
    
