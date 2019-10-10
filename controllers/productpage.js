
// Route for pagination implementation
var Posts = require('../collections/posts');
var Post = require('../models/models');


// Task 4.1
router.route('/product_page/')
  /*
   * GET /
  **/
  .get(function (req, res, next) {
    var posts = new Posts();
    var page = parseInt(req.query.p, 10);
    var limit = parseInt(req.query.limit, 10) || 5;
    var order = req.query.order || "asc";
    var currentpage = page || 1;

    var opts = {
      limit: limit,
      page: currentpage,
      order: order
    };

    posts.fetchBy('product_id', opts)
    .then(function (data) {
      res.render('posts', {
        title: 'Posts',
        pagination: data.pagination,
        posts: data.collection.toJSON()
      });
    })
    .otherwise(function (error) {
      console.error(error.stack);
      req.flash('errors', {'msg': error.message});
      res.redirect('/');      
    });
  })


  /*
   * GET /posts/:slug
   */
  router.route('/product/:slug')
  .get(function (req, res) {
    var slug = req.params.slug;

    return Post.forge({slug: slug})
    .fetch({
      withRelated: ['Product', 'Category']
    })
    .then(function (post) {
      res.render('post', {
        title: 'Post',
        post: post.toJSON()
      });
    })
    .otherwise(function (error) {
      req.flash('errors', {'msg': error.message});
      res.redirect('/');
    });
  })

  module.exports = router;
