import express from 'express';
import dbservice from '../service/dbservice';

var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    let result = await dbservice.list();
    //res.send(result);
    res.json(result);
});

export default router;
