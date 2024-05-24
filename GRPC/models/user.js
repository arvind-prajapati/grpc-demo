const connection = require('./index');
module.exports = {
    getUsers : (call, callback) => {
    const query = `SELECT 
    u.name, 
FROM 
    users u
LEFT JOIN 
    posts p ON u.id = p.user_id
GROUP BY 
    u.id, u.name;


`
    connection.execute(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }   
        console.log(results)
        return callback(null, { data: results });
    });
    },
    createUser : (call, callback) => {
        console.log(call.request)
        const query = `INSERT INTO users (name, email) VALUES ('${call.request.name}', '${call.request.email}')`;   
        console.log(query) 
        connection.execute(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, {});
        });
    }
}

