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
    return res.json(article);
  };

  /**
   * Get a list of all the articles
   * @param req
   * @param res
   * @returns {*}
   */
  static async getAllArticles(req, res) {
    const articles = await BlogModel.getAllArticles(3);

    return res.json(articles);
  };
}

module.exports = BlogController;

