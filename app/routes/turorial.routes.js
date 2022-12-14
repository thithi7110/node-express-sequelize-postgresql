module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const jyus001 = require("../controllers/jyuchuinf.controller.js");
  const shohinmst = require("../controllers/shohinmst.controller.js");
  const tokuimst = require("../controllers/tokuimst.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
////////////////////
  
  var router2 = require("express").Router();
  
  // Retrieve a single jyus001 with id
  router2.get("/shohin", shohinmst.findAll);
  router2.get("/tokui", tokuimst.findAll);

  app.use("/api/mst", router2);

  
////////////////////////

  var router3 = require("express").Router();
  // Create a new jyus001
  router3.post("/jyu", jyus001.create);

  // Retrieve all jyus001s
  router3.get("/jyu", jyus001.findAll);

  // Retrieve all published jyus001s
  router3.get("/jyu/published", jyus001.findAllPublished);

  // Retrieve a single jyus001 with id
  router3.get("/jyu/:id", jyus001.findOne);

  // Update a jyus001 with id
  router3.put("/jyu/:id", jyus001.update);

  // Delete a jyus001 with id
  router3.delete("/jyu/:id", jyus001.delete);

  // Delete all jyus001s
  router3.delete("/jyu/", jyus001.deleteAll);
  app.use("/api", router3);
};
