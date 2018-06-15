const testimonialsData = require('../staticData/testimonials');

class TestimonialModel {
  /**
   * Get all testimonials
   * @returns {Promise}
   */
  static getAllTestimonials() {
    return Promise.resolve(testimonialsData);
  }

  /**
   * Get testimonial by id
   * @param id
   * @returns {Promise}
   */
  static getTestimonialById(id) {
    const intId = parseInt(id, 10);

    return Promise.resolve(
      testimonialsData.find((element) => {
        return element.id === intId;
      })
    )
  }
}

module.exports = TestimonialModel;
