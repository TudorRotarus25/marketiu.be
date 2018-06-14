import Express from 'express';
import BlogController from '../Controllers/BlogController';

const router = Express.Router();

router.get('/', (req, res) => {
  res.json(BlogController.getAllArticles)
});

router.get('/:articlePath/')
  .get(BlogController.getBlogArticle);

module.exports = router;