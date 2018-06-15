import Express from 'express';
import TestimonialController from '../Controllers/TestimonialController';

const router = Express.Router();

router.get('/', TestimonialController.getAllTestimonials);
router.get('/:id/', TestimonialController.getTestimonial);

module.exports = router;