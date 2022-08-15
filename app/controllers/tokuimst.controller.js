const db = require("../models");
const Tokuimst = db.tokuimst;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const tokuicd = req.query.tokuicd;
  var condition = { tokuicd: { [Op.eq]: `${tokuicd}`} };

  Tokuimst.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tokuimst."
      });
    });
};