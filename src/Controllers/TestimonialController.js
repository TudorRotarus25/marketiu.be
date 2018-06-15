const TestimonialModel = require('../Models/TestimonialModel');

class TestimonialController {
  /**
   *
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  static async getAllTestimonials(req, res) {
    const testimonials = await TestimonialModel.getAllTestimonials();
    return res.json(testimonials);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<*>}
   */
  static async getTestimonial(req, res) {
    const id = req.params.id;
    const testimonial = await TestimonialModel.getTestimonialById(id);
    return res.json(testimonial);
  }
}

module.exports = TestimonialController;
