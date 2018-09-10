import ENV from "./env"
import startExpress from "express-blueforest"

const debug = require('debug')('mock:server')
const errorMapper = err => {
    if (err.code === "bf400") {
        err.status = 400
        err.body = {errorCode: 400, message: "requête de test imprévue"}
    }
}

debug("starting")

export default Promise.resolve(true)
    .then(startExpress(ENV, errorMapper))
