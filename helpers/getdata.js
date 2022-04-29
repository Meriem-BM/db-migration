module.exports = function getData (model, limit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        model.find({}).limit(limit).exec((err, best) => {
          return resolve(best)
        })
      }, 300);
    });
  }