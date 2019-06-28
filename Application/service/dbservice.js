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

    async query(queryStr) {
        try {
            sql.close();
            let connection = await this.connect();
            let result = await connection.query(queryStr);

            return result;
        } catch(err) {
            console.error(`query '${queryStr}' failed for error: '${err}'`);
        }
    }

    async close() {
        await sql.close();
    }
}

export default new DbService();
