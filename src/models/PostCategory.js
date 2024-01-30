module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'blog_posts',
                    key: 'id',
                }
            },
            categoryId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'categories',
                    key: 'id',
                }
            }
        },
        {
            tableName: 'posts_categories',
            underscored: true,
            timestamps: false,
        },
    );

    PostCategory.associate = ({ BlogPost, Category }) => {
        Category.belongsToMany(BlogPost, {
            through: 'posts_categories',
            foreignKey: 'postId',
            otherKey: 'id',
            as: 'posts'
        });
        BlogPost.belongsToMany(Category, {
            through: 'posts_categories',
            foreignKey: 'categoryId',
            otherKey: 'id',
            as: 'categories'
        });
    }

    return PostCategory;
}