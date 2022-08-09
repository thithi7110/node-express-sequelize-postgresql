module.exports = (sequelize, Sequelize) => {
  const tokuimst = sequelize.define("tokuimst", {
    tokuicd: {
      type: Sequelize.STRING
    },
    tokuiname: {
      type: Sequelize.STRING
    },
    biko: {
      type: Sequelize.STRING
    }
  });

  return tokuimst;
};
