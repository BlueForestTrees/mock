import {Router} from "express-blueforest"
import {param} from 'express-validator/check'
import {run} from 'express-blueforest'

const debug = require('debug')('mock:tree')

const router = Router()
router.get('/api/tree/:_id/owner/:oid',
    param("_id").exists(),
    param("oid").exists(),
    run(({_id, oid}) => {
        if (oid === "123123123123123313212332" && _id === "5a6a03c03e77667641d2d2c3") {
            return false
        }
        if (oid === "987987987987987987987987" && _id === "5a6a03c03e77667641d2d2c3") {
            return true
        }
        throw {code: "bf400"}
    })
)

module.exports = router