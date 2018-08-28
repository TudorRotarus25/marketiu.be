const BlogModel = require('../Models/BlogModel');

class BlogController {
  /**
   * Get an article
   * @param req
   * @param res
   * @returns {*}
   */
  static async getBlogArticle(req, res) {
    const articlePath = req.params.articlePath;
    const article = await BlogModel.getArticleByIdentifier(articlePath);

    if (article) {
      return res.json(article);
    } else {
      return res.status(404).json({
        'error': 'Article not found',
      });
    }
  };

  /**
   * Get a list of all the articles
   * @param req
   * @param res
   * @returns {*}
   */
  static async getAllArticles(req, res) {
    const limit = req.query.limit;
    const articles = await BlogModel.getAllArticles(limit);

    return res.json(articles);
  };
}

module.exports = BlogController;

