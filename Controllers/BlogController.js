const BlogModel = require('../Models/BlogModel');

class BlogController {
  /**
   * Get an article
   * @param req
   * @param res
   * @returns {*}
   */
  static getBlogArticle(req, res) {
    return res.json({});
  };

  /**
   * Get a list of all the articles
   * @param req
   * @param res
   * @returns {*}
   */
  static getAllArticles(req, res) {
    const articles = BlogModel.getAllArticles();
    return res.json(articles);
  };
}

module.exports = BlogController;

