module.exports = function(sequelize, DataTypes) {
  const Articles = sequelize.define("Articles", {
    article_title: DataTypes.STRING,
    article_author: DataTypes.STRING,
    article_source: DataTypes.STRING,
    article_body: DataTypes.STRING(10000000),
    article_type: DataTypes.STRING,
  });
  return Articles;
};
