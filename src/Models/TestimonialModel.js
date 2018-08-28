import KnexAdapter from '../adapters/KnexAdapter';

class TestimonialModel {
  /**
   * Get all testimonials
   * @returns {Promise}
   */
  static getAllTestimonials() {
    const knexAdapter = new KnexAdapter();

    return knexAdapter.getConnection()
      .select('id', { image: 'logo' }, { clientName: 'name' }, { clientDescription: 'business_type' }, 'testimonial')
      .orderBy('order')
      .from('marketiu_client');
  }

  /**
   * Get testimonial by id
   * @param id
   * @returns {Promise}
   */
  static getTestimonialById(id) {
    const knexAdapter = new KnexAdapter();
    const intId = parseInt(id, 10);

    return knexAdapter.getConnection()
      .select('id', { image: 'logo' }, { clientName: 'name' }, { clientDescription: 'business_type' }, 'testimonial')
      .from('marketiu_client')
      .where('id', intId)
      .then((rows) => {
        if (rows.length === 1) {
          return rows[0];
        }
        return null;
      });
  }
}

module.exports = TestimonialModel;
