import sql from 'mssql';
import config from '../config';

class DbService {
    async connect() {
        // Create connection to database
        const cfg = 
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
            await sql.close();
            const connection = await this.connect();
            const result = await connection.query(queryStr);

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
