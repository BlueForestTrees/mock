import {Router} from "express-blueforest"
import {param} from 'express-validator/check'
import {run} from 'express-blueforest'

const debug = require('debug')('mock:tree')
const router = Router()

//_id : oid
const owns = {
    "5a6a03c03e77667641d2d2c3": "987987987987987987987987",
    "5a6a03c03e77667641d2d2c1": "987987987987987987987987"
}

router.get('/api/tree/:_id/owner/:oid',
    param("_id").exists(),
    param("oid").exists(),
    run(({_id, oid}) => owns[_id] === oid)
)

module.exports = router