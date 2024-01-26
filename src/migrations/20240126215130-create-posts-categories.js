'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_id: {
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        type: Sequelize.INTEGER,
      }
    })
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('posts_categories')
  }
};
