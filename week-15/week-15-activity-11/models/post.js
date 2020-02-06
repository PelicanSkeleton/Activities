module.exports = function(sequelize, DataTypes) {
    // Add code here to create a Post model
    // This model needs a title, a body, and a category
    // Don't forget to 'return' the post after defining
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.TEXT

        },
        category: {
            type: DataTypes.STRING
        }
    });
    Post.associate = function(models){
        models.Post.belongsTo(models.Author,{
          onDelete: "CASCADE",
          foreignKey: {
              allowNull: false
          }
        });
    };
    return Post;

  };

  