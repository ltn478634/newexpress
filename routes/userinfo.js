var express = require('express');
var router = express.Router();
const pool = require('../mysql/connect')
const sql = require('../mysql/sql')

/* GET users listing. */
router.get('/api/userinfo', function(req, res, next) {
    pool.getConnection(function(err, conn) {
        if(err) { throw err }
        conn.query(sql.getUserInfo, function(error, result, fields) {
            conn.release()
            let apiRes = {
                code: 0,
                message: '成功',
                data: result
            }
            
            res.send(apiRes)
        })
    })
});

module.exports = router;