import dbservice from '../service/dbservice';
import HttpStatus from 'http-status-codes';

class GroupController {

    async list(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            SELECT *
            FROM [group]
            `;
        await dbservice.close();
        res.json(result.recordset);
    }

    async create(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            INSERT INTO [group]
                ([name])
            VALUES
                (${req.body.name})
            `;
        await dbservice.close();

        if (result.rowsAffected[0] == 0) {
            res.sendStatus(HttpStatus.BAD_REQUEST);
        } else {
            res.sendStatus(HttpStatus.CREATED);
        }
    }

    async get(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            SELECT *
            FROM [group]
            WHERE id = ${req.params.groupId}
            `;
        await dbservice.close();

        if (result.recordset.length == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.json(result.recordset[0]);
        }
    }

    async update(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            SELECT *
            FROM [group]
            WHERE id = ${req.params.groupId}
            `;

        if (result.recordset.length == 0) {
            await dbservice.close();
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            const group = result.recordset[0];

            group.name = req.body.name !== undefined ? req.body.name : group.name;

            const updateResult = await sql.query`
                UPDATE [group]
                SET [name] = ${group.name}
                WHERE id = ${req.params.groupId}
                `;
            await dbservice.close();

            if (updateResult.rowsAffected[0] == 1) {
                res.sendStatus(HttpStatus.OK);
            }
            else {
                res.sendStatus(HttpStatus.BAD_REQUEST);
            }
        }
    }

    async delete(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            DELETE FROM [group]
            WHERE id = ${req.params.groupId}
            `;
        await dbservice.close();
        
        if (result.rowsAffected[0] == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.sendStatus(HttpStatus.OK);
        }
    }
}

export default new GroupController();
