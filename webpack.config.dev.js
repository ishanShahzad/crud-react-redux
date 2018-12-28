// module.exports = {
// 	entry:['./src/js/index.jsx','./src/css/styles.scss'],
// 	output:{
// 		path:`${__dirname}/dist/js`,
// 		filename:'bundle.js',
// 		publicPath: '/js'
// 	},
// 	module:{
// 		rules:[
// 			{
// 				test:/\.js$/,
// 				exclude:/node_modules/,
// 				use:{
// 					loader:'babel-loader',
// 					options:{
// 						presets:['env'],
// 						plugins:['transform-class-properties']
// 					}
// 				}
// 			},
// 			{
// 				test:/\.jsx$/,
// 				exclude:/node_modules/,
// 				use:{
// 					loader:'babel-loader',
// 					options:{
// 						presets:['env','react'],
// 						plugins:['transform-class-properties']
// 					}
// 				}
// 			},
// 			{
// 				test:/\.scss$/,
// 				use:[
// 					'style-loader',
// 					{
// 						loader:'css-loader',
// 						options:{
// 							url:false
// 						}
// 					},
// 						'sass-loader'
// 				]
// 			},
// 			{
// 				test:/\.css$/,
// 				use:[
// 					'style-loader',
// 					{
// 						loader:'css-loader',
// 						options:{
// 							url:false
// 						}
// 					},
// 				]
// 			},

// 		]
// 	},
// 	devServer: {
//     contentBase: "./dist",
//     historyApiFallback: true,
//     watchContentBase:true
//   },
// 	devtool:'source-map',
// 	resolve:{extensions:['.js','.jsx']}
// }


module.exports = {
  entry: [
    './src/js/index.jsx',
    './src/css/styles.scss'
  ],
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
    publicPath: '/js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [
                'transform-object-rest-spread',
                'transform-class-properties'
              ]
            }
          },
          // {
          //   loader: 'eslint-loader'
          // }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react','env'],
              plugins: [
                'transform-object-rest-spread',
                'transform-class-properties'
              ]
            }
          },
          // {
          //   loader: 'eslint-loader'
          // }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  watch: true,

  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },

  devtool: 'source-map',

  resolve: { extensions: ['.js', '.jsx'] }
};