module.exports = (sequelize, Sequelize) => {
  const jyuchuinf = sequelize.define("jyuchuinf", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return jyuchuinf;
};
