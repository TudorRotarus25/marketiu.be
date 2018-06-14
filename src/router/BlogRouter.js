import Express from 'express';
import BlogController from '../Controllers/BlogController';

const router = Express.Router();

router.get('/', BlogController.getAllArticles);
router.get('/:articlePath/', BlogController.getBlogArticle);

module.exports = router;