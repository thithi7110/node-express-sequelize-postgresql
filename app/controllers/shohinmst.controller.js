const db = require("../models");
const Shohinmst = db.shohinmst;
const Op = db.Sequelize.Op;

// Find a single jyuchuinf with an id

exports.findAll = (req, res) => {
  const shohincd = req.query.shohincd;
console.log(shohincd);

  var condition = shohincd ? { shohincd: { [Op.iLike]: `%${shohincd}%`} } : null;

  Shohinmst.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shohinmst."
      });
    });
};