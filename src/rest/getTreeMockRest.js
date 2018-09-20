import {Router} from "express-blueforest"
import {param} from 'express-validator/check'
import {run} from 'express-blueforest'

const debug = require('debug')('mock:tree')
const router = Router()

const trees = {
    "111111111111111111111111": [
        {_id: "111111111111111111111111", bqt: 1},
        {_id: "666666666666666666666666", bqt: 11},
        {_id: "555555555555555555555555", bqt: 100},
        {_id: "444444444444444444444444", bqt: 10},
        {_id: "333333333333333333333333", bqt: 7}
    ],
    "5a6a03c03e77667641d2d2c3": [
        {_id: "5a6a03c03e77667641d2d2c3", bqt: 1},
        {_id: "5a6a03c03e77667641d2d2c2", bqt: 0.02},
        {_id: "5a6a03c03e77667641d2d2c1", bqt: 200},
        {_id: "5a6a03c03e77667641d2d2c0"}
    ],
    "aaaaaaaaaaaaaaaaaaaaaaaa": [
        {_id: "aaaaaaaaaaaaaaaaaaaaaaaa", bqt: 1},
        {_id: "cccccccccccccccccccccccc", bqt: 10},
        {_id: "dddddddddddddddddddddddd", bqt: 10},
        {_id: "bbbbbbbbbbbbbbbbbbbbbbbb", bqt: 10},
        {_id: "e2e2e2e2e2e2e2e2e2e2e2e2", bqt: 20002100},
        {_id: "dbdbdbdbdbdbdbdbdbdbdbdb", bqt: 100},
        {_id: "dadadadadadadadadadadada", bqt: 100},
        {_id: "b2b2b2b2b2b2b2b2b2b2b2b2", bqt: 100},
        {_id: "babababababababababababa", bqt: 100},
        {_id: "dbadbadbadbadbadbadbadba", bqt: 1000},
        {_id: "babbabbabbabbabbabbabbab", bqt: 1000},
        {_id: "baabaabaabaabaabaabaabaa", bqt: 1000},
        {_id: "dbaadbaadbaadbaadbaadbaa", bqt: 10000},
        {_id: "e1e1e1e1e1e1e1e1e1e1e1e1", bqt: 510}
    ],
    "5ba367a5d10cc530f82c2fcf": [
        {_id: "5ba367a5d10cc530f82c2fcf", bqt: 1}
    ]
}

router.get('/api/tree/nodes/:trunkId',
    param("trunkId").exists(),
    run(({trunkId}) => trees[trunkId])
)

module.exports = router