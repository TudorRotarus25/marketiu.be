const articlesData = require('../staticData/blogArticles');

class BlogModel {
  /**
   * Return a list of articles
   * @param limit
   * @returns {Promise}
   */
  static getAllArticles(limit) {
    return Promise.resolve(
      articlesData.map(article => ({
        image: article.image,
        title: article.title,
        identifier: article.identifier,
        description: article.description,

      }))
    );
  }

  /**
   * Return an article with the selected identifier
   * @param identifier
   * @returns {Promise}
   */
  static getArticleByIdentifier(identifier) {
    return Promise.resolve(
      articlesData.find(article => {
        return article.identifier = identifier;
      })
    );
  }
}

module.exports = BlogModel;
