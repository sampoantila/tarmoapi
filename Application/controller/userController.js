import dbservice from '../service/dbservice';
import HttpStatus from 'http-status-codes';
import moment from 'moment';

class UserController {

    async list(req, res) {
        let sql = await dbservice.connect();
        let result = await sql.query`SELECT * FROM [user]`;
        dbservice.close();
        res.json(result.recordset);
    }

    async create(req, res) {
        var sql = await dbservice.connect();

        var result = await sql.query`
        INSERT INTO [dbo].[user]
           ([firstname],[nickname],[lastname],[address],[zipcode],[country],[city],[ssn],[profession],[email]
            ,[phone],[barcode],[info],[invitation],[deceased],[veteran],[gender_id])
         VALUES
           (${req.body.firstname},${req.body.nickname},${req.body.lastname},${req.body.address},${req.body.zipcode}
           ,${req.body.country},${req.body.city},${req.body.ssn},${req.body.profession},${req.body.email},${req.body.phone}
           ,${req.body.barcode},${req.body.info},${req.body.invitation ? 1 : 0},${req.body.deceased ? 1 : 0},${req.body.veteran ? 1 : 0}
           ,${req.body.gender_id})
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
        var result = await sql.query`SELECT * FROM [user] WHERE id = ${req.params.userId}`;
        dbservice.close();

        if (result.recordset.length == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.json(result.recordset[0]);
        }
    }

    async update(req, res) {
        var sql = await dbservice.connect();
        var result = await sql.query`SELECT * FROM [user] WHERE id = ${req.params.userId}`;

        if (result.recordset.length == 0) {
            dbservice.close();
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            let user = result.recordset[0];

            user.firstname = req.body.firstname !== undefined ? req.body.firstname : user.firstname;
            user.nickname = req.body.nickname !== undefined ? req.body.nickname : user.nickname;
            user.lastname = req.body.lastname !== undefined ? req.body.lastname : user.lastname;
            user.address = req.body.address !== undefined ? req.body.address : user.address;
            user.zipcode = req.body.zipcode !== undefined ? req.body.zipcode : user.zipcode;
            user.country = req.body.country !== undefined ? req.body.country : user.country;
            user.city = req.body.city !== undefined ? req.body.city : user.city;
            user.ssn = req.body.ssn !== undefined ? req.body.ssn : user.ssn;
            user.profession = req.body.profession !== undefined ? req.body.profession : user.profession;
            user.email = req.body.email !== undefined ? req.body.email : user.email;
            user.phone = req.body.phone !== undefined ? req.body.phone : user.phone;
            user.barcode = req.body.barcode !== undefined ? req.body.barcode : user.barcode;
            user.info = req.body.info !== undefined ? req.body.info : user.info;
            user.invitation = req.body.invitation !== undefined ? req.body.invitation : user.invitation;
            user.deceased = req.body.deceased !== undefined ? req.body.deceased : user.deceased;
            user.veteran = req.body.veteran !== undefined ? req.body.veteran : user.veteran;
            user.gender_id = req.body.gender_id !== undefined ? req.body.gender_id : user.gender_id;

            var result = await sql.query`
                UPDATE [dbo].[user]
                SET [firstname] = ${user.firstname},[nickname] = ${user.nickname},[lastname] = ${user.lastname},
                    [address] = ${user.address},[zipcode] = ${user.zipcode},[country] = ${user.country},
                    [city] = ${user.city},[ssn] = ${user.ssn},[profession] = ${user.profession},
                    [email] = ${user.email},[phone] = ${user.phone},[barcode] = ${user.barcode},
                    [info] = ${user.info},[invitation] = ${user.invitation ? 1 : 0},[deceased] = ${user.deceased ? 1 : 0},
                    [veteran] = ${user.veteran ? 1 : 0},[gender_id] = ${user.gender_id}
                WHERE id = ${req.params.userId}
                `;

            dbservice.close();

            res.sendStatus(HttpStatus.OK);
        }
    }

    async delete(req, res) {
        var sql = await dbservice.connect();
        var result = await sql.query`DELETE FROM [user] WHERE id = ${req.params.userId}`;
        dbservice.close();
        
        if (result.rowsAffected[0] == 0) {
            res.sendStatus(HttpStatus.NOT_FOUND);
        } else {
            res.sendStatus(HttpStatus.OK);
        }
    }

    async getPicture(req, res) {
        console.log(`get picture for userId: ${req.params.userId}`);
        // TODO sql query for picture missing

        res.json({ picture: "0xfe234ead738f8c8a27e1fa2", picturedate: moment.utc().format() });
    }

    async storePicture(req, res) {
        console.log(`store picture for userId: ${req.params.userId}`);
        // TODO sql update for picture missing

        // let picturedate = req.body.picturedate;
        // if (req.body.picture != null && (picturedate == null || picturedate == undefined)) {
        //     picturedate = moment.utc().format();
        //     console.log(picturedate);
        // }

        res.sendStatus(HttpStatus.OK);
    }
}

export default new UserController();