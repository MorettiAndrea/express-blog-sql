// # setup router
const express = require("express");
const router = express.Router();

// import

const postsController = require("../controllers/postsControllers");

// # index visualizza gli elementi

router.get("/", postsController.index);

// # show visualizza un elemento

router.get("/:id", postsController.show);

// # store crea un elemento

router.post("/", postsController.store);

// # update modifica completamente un elemento

router.put("/:id", postsController.update);

// # modify modifica parzialmente un elemento

router.patch("/:id", postsController.modify);

// # destroy cancella un elemento

router.delete("/:id", postsController.destroy);

module.exports = router;
