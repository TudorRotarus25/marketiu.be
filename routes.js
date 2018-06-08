const BlogController = require('./controllers/BlogController');

module.exports = function(app) {
  app.route('/blog/get/')
    .get(BlogController.getAllArticles);

  app.route('/blog/get/:articlePath/')
    .get(BlogController.getBlogArticle);
};

