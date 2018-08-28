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

    if (testimonial) {
      return res.json(testimonial);
    }
    return res.status(404).json({
      error: 'Testimonial does not exist',
    });
  }
}

module.exports = TestimonialController;
