const BlogDbModel = require('../DatabaseModels/BlogDatabaseModel');

class BlogModel {
  /**
   * Return a list of articles
   * @param limit
   * @returns {Promise}
   */
  static getAllArticles(limit) {
    return new Promise((resolve) => {
      const articles = BlogDbModel
        .query('1')
        .loadAll()
        .exec((data) => {
          resolve(data);
        });
    });
  }

  static getArticleById(articleId) {
    return {
      id: 1,
      content: 'content',
      identifier: 'identifier',
    };
  }

  static getArticleByIdentifier(identifier) {
    return {
      id: 1,
      content: 'content',
      identifier: 'identifier',
    };
  }
}

module.exports = BlogModel;
