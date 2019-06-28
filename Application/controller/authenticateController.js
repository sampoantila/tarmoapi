import dbservice from '../service/dbservice';
import HttpStatus from 'http-status-codes';
import bcrypt from 'bcrypt';

class AuthenticateController {

    async authenticate(req, res) {
        const sql = await dbservice.connect();
        const result = await sql.query`
            SELECT [password]
            FROM [login]
            WHERE username = ${req.body.username}
            `;
        await dbservice.close();

        const validPassword = await bcrypt.compare(req.body.password, result.recordset[0].password);

        if (result.recordset.length > 0 && validPassword) {
            res.sendStatus(HttpStatus.OK);
        } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    }
}

export default new AuthenticateController();