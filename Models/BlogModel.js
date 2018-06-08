class BlogModel {
  /**
   * Return a list of articles
   * @param limit
   * @returns {*[]}
   */
  static getAllArticles(limit) {
    return [
      {
        id: 1,
        content: 'content',
        identifier: 'identifier',
      },
    ];
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
