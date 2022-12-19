const router = require("express").Router();

router.get("/", (res,req) => {
    req.send("posts router");
});

module.exports = router;