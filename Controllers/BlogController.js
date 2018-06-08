const BlogModel = require('../Models/BlogModel');

class BlogController {
  /**
   * Get an article
   * @param req
   * @param res
   * @returns {*}
   */
  static getBlogArticle(req, res) {
    const articlePath = req.params.articlePath;

    return res.json({
      articlePath,
    });
  };

  /**
   * Get a list of all the articles
   * @param req
   * @param res
   * @returns {*}
   */
  static async getAllArticles(req, res) {
    const articles = await BlogModel.getAllArticles();

    return res.json(articles);
  };
}

module.exports = BlogController;

