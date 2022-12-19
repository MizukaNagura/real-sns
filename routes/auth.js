const router = require("express").Router();

router.get("/", (res,req) => {
    req.send("auth router");
});

module.exports = router;