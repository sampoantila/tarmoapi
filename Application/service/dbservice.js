import sql from 'mssql';
import config from '../config';

class DbService {
    async connect() {
        // Create connection to database
        var cfg = 
        {
            server: config.database.hostname,
            database: config.database.name,
            user: config.database.username,
            password: config.database.password,

            options: {
                encrypt: true
            }
        }

        return await sql.connect(cfg);
    }

    async list() {
        try {
            let connection = await this.connect();
            let result = await connection.request().query('SELECT * FROM [user]');

            console.dir(result.recordset);

            return result.recordset;
        } catch(err) {
            console.error("query failed: user - list. error:", err);
        }
    }
}

export default new DbService();
