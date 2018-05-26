const getBlogArticle = (req, res) => {
  return res.json({
    'success': true,
  });
};

const getAllArticles = (req, res) => {
  return res.json({});
};

exports.getBlogArticle = getBlogArticle;
exports.getAllArticles = getAllArticles;
