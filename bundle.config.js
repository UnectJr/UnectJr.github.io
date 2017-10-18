// bundle.config.js
module.exports = {
    bundle: {
      vendor: {
        scripts: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/particles.js/particles.js',
            './node_modules/fullpage.js/dist/jquery.fullpage.js',            
        ],
        styles:[
            "./node_modules/fullpage.js/dist/jquery.fullpage.css",
            "./node_modules/animate.css/animate.css"
        ]
      }
    },
  };