const dynamo = require('dynamodb');
const Joi = require('joi');

const Blog = dynamo.define('Blog', {
  hashKey: 'id',
  schema: {
    id: Joi.string(),
    identifier: Joi.string(),
    title: Joi.string(),
    content: Joi.string(),
    image: Joi.string(),
  }
});

Blog.config({
  tableName: 'Marketiu_BlogPost',
});

module.exports = Blog;
