const path = require("path");
const express = require('express');
const axios = require('axios')
let app = express()
let apiRoutes = express.Router()
app.use('/api', apiRoutes)
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"))
      .set("api", resolve("src/api"))
      .set("base", resolve("src/base"))
      .set("public", resolve("public"));
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    before: function(app) {
      app.get('/api/getDiscList', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
    }
  }
}