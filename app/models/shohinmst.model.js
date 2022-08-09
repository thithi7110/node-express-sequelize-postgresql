module.exports = (sequelize, Sequelize) => {
  const shohinmst = sequelize.define("shohinmst", {
    shohincd: {
      type: Sequelize.STRING
    },
    shohinname: {
      type: Sequelize.STRING
    },
    tanka: {
      type: Sequelize.STRING
    }
  });

  return shohinmst;
};
