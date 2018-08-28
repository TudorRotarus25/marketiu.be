import KnexAdapter from '../adapters/KnexAdapter';

class BlogModel {
  /**
   * Return a list of articles
   * @param limit
   * @returns {Promise}
   */
  static getAllArticles(limit) {
    const knexAdapter = new KnexAdapter();

    const query = knexAdapter.getConnection()
      .select('identifier', { image: 'header_image' }, 'title', { description: 'short_description' })
      .orderBy('order')
      .from('marketiu_blogarticle');

    if (limit) {
      return query.limit(limit);
    }
    return query;
  }

  /**
   * Return an article with the selected identifier
   * @param identifier
   * @returns {Promise}
   */
  static getArticleByIdentifier(identifier) {
    const knexAdapter = new KnexAdapter();

    return knexAdapter.getConnection()
      .select('identifier', { image: 'header_image' }, 'title', { description: 'short_description' }, 'content')
      .from('marketiu_blogarticle')
      .where('identifier', identifier)
      .then((rows) => {
        if (rows.length === 1) {
          return rows[0];
        }
        return null;
      });
  }
}

module.exports = BlogModel;
