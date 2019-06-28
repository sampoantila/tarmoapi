import dbservice from '../service/dbservice';
import HttpStatus from 'http-status-codes';

class GroupController {

    async list(req, res) {
        let sql = await dbservice.connect();
        let result = await sql.query`SELECT * FROM [group]`;
        dbservice.close();
        res.json(result.recordset);
    }

    async create(req, res) {
        var sql = await dbservice.connect();

        var result = await sql.query`
        INSERT INTO [dbo].[group]
           ([name])
         VALUES
           (${req.body.name})
        `;

        dbservice.close();

        if (result.rowsAffected[0] == 0) {
            res.sendStatus(HttpStatus.BAD_REQUEST);
        } else {
            res.sendStatus(HttpStatus.CREATED);
        }
    }

    async get(req, res) {
        var sql = await dbservice.connect();
        var result = await sql.query`SELECT * FROM [group] WHERE id = ${req.params.groupId}`;
        dbservice.close();

        if (result.recordset.length == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.json(result.recordset[0]);
        }
    }

    async update(req, res) {
        var sql = await dbservice.connect();
        var result = await sql.query`SELECT * FROM [group] WHERE id = ${req.params.groupId}`;

        if (result.recordset.length == 0) {
            dbservice.close();
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            let group = result.recordset[0];

            group.name = req.body.name !== undefined ? req.body.name : group.name;

            var result = await sql.query`
                UPDATE [dbo].[group]
                SET [name] = ${group.name}
                WHERE id = ${req.params.groupId}
                `;

            dbservice.close();

            res.sendStatus(HttpStatus.OK);
        }
    }

    async delete(req, res) {
        var sql = await dbservice.connect();
        var result = await sql.query`DELETE FROM [group] WHERE id = ${req.params.groupId}`;
        dbservice.close();
        
        if (result.rowsAffected[0] == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.sendStatus(HttpStatus.OK);
        }
    }
}

export default new GroupController();