module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
        'BlogPost',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
            },
            content: {
                type: DataTypes.STRING,
            },
            userId: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            },
            published: {
                type: DataTypes.DATE,
            },
            updated: {
                type: DataTypes.DATE,
            },
        },
        {
            underscored: true,
            tableName: 'blog_posts',
            timestamps: false,
        }
    )

    BlogPost.associate = ({ User }) => {
        BlogPost.belongsTo(User, {
            foreignKey: 'id',
            as: 'user',
        });
    }

    return BlogPost;
}