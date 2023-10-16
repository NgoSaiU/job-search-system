// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: 'http://localhost:3000/',
//   }
// })

//checked
// module.exports = {
//   devServer: {
//     proxy: {
//       '^/users': {
//         target: 'http://localhost:3000/',
//         ws: true,
//         changeOrigin: true
//       },
//     }
//   }
// }

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000/'
  }
}
