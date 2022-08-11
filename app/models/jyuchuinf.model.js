"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const jyuchuinf = sequelize.define("jyuchuinf", {
    tokuicd: {
      type: DataTypes.STRING
    },
    shincd: {
      type: DataTypes.STRING
    },
    jyuchuymd: {
      type: DataTypes.DATE
    },
    suryo: {
      type: DataTypes.DECIMAL(10, 0)
    },
    situryo: {
      type: DataTypes.DECIMAL(10, 2)
    },
    tani: {
      type: DataTypes.STRING
    },
    tanka: {
      type: DataTypes.DECIMAL(10, 2)
    },
    kingaku: {
      type: DataTypes.DECIMAL(10, 0)
    }
  });

  return jyuchuinf;
};
