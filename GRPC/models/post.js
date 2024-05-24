const connection = require('./index');
module.exports = {
 
    createPost : (call, callback) => {
        const query = `INSERT INTO posts (title, user_id) VALUES ('${call.request.title}', ${call.request.user_id})`;    
        connection.execute(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, {});
        });
    }
}

