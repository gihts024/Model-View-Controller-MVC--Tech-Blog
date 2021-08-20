const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Show interelatedness of the post, comment and user
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade',
  hooks: true
})
Post.hasMany(Comment,{
  foreignKey: 'post_id',
  onDelete: 'cascade',
  hooks:true
})

module.exports = { User, Comment,Post };
