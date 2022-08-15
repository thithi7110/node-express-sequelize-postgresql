const db = require("../models");
const Jyuchuinf = db.jyuchuinf;
const Op = db.Sequelize.Op;

// Create and Save a new jyuchuinf
exports.create = (req, res) => {
  console.log("create");
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const id = req.body.id;

  // Create a jyuchuinf
  const jyuchuinf = {
    tokuicd: req.body.tokuicd,
    shincd: req.body.shincd,
    jyuchuymd: req.body.jyuchuymd,
    suryo: req.body.suryo,
    situryo: req.body.situryo,
    tani: req.body.tani,
    tanka: req.body.tanka,
    kingaku: req.body.kingaku,
    submitted: req.body.submitted,
  };
  if (!!id) {
    Jyuchuinf.update(jyuchuinf, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "jyuchuinf was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update jyuchuinf with id=${id}. Maybe jyuchuinf was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating jyuchuinf with id=" + id
        });
      });
  }
  else {
    // Save jyuchuinf in the database
    Jyuchuinf.create(jyuchuinf)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  }
};

// Retrieve all jyuchuinf from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = { id: { [Op.eq]: `${id}` } };

  Jyuchuinf.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jyuchuinf."
      });
    });
};

// Find a single jyuchuinf with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Jyuchuinf.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find jyuchuinf with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving jyuchuinf with id=" + id
      });
    });
};

// Update a jyuchuinf by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Jyuchuinf.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "jyuchuinf was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update jyuchuinf with id=${id}. Maybe jyuchuinf was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating jyuchuinf with id=" + id
      });
    });
};

// Delete a jyuchuinf with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Jyuchuinf.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "jyuchuinf was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete jyuchuinf with id=${id}. Maybe jyuchuinf was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete jyuchuinf with id=" + id
      });
    });
};

// Delete all jyuchuinf from the database.
exports.deleteAll = (req, res) => {
  Jyuchuinf.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} jyuchuinf were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all jyuchuinf."
      });
    });
};

// find all published jyuchuinf
exports.findAllPublished = (req, res) => {
  Jyuchuinf.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jyuchuinf."
      });
    });
};
