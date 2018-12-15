import {Router} from "express-blueforest"
import {param} from 'express-validator/check'
import {run} from 'express-blueforest'

const debug = require('debug')('mock:tree')

const router = Router()
router.get('/api/user/mail/:mail',
    param("mail").exists(),
    run(({mail}) => {
        if (mail === "ademe@ademe.fr") {
            return {_id: "5b94f96cd5939d56d0333498"}
        }else if (mail === "fr.openfoodfacts.org") {
            return {_id: "5b94f96cd5939d56d0333498"}
        }
        throw {code: "bf400"}
    })
)

module.exports = router