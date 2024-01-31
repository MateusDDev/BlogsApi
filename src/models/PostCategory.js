module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
        'PostCategory',
        {
            postId: {
                type: DataTypes.INTEGER,
                primarykey: true,
                references: {
                    model: 'blog_posts',
                    key: 'id',
                }
            },
            categoryId: {
                type: DataTypes.INTEGER,
                primarykey: true,
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
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
            as: 'posts'
        });
        BlogPost.belongsToMany(Category, {
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
            as: 'categories'
        });
    }

    return PostCategory;
}