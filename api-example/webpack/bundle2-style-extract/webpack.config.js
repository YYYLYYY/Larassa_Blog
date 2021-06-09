

/**
 * webpack.config.js 是webpack的配置文件
 * 作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 * 所有构建工具都是基于 node.js 平台运行的 模块化默认采用commonjs
 */

 // resplve 用来拼接绝对路径的方法
 const { resolve } = require('path')

 const HtmlWebpackPlugins = require('html-webpack-plugin')

 // 将css单独打包成一个文件夹
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 
 
 module.exports = {
 
	 mode: 'development',
	 //  mode: 'production'
 
	 // webpack 配置
	 // 入口起点
	 // entry: resolve(__dirname, '../样式资源/src/index.js'),
	 entry: './src/index.js',
	 output: {
		 // 输出文件名
		 filename: 'bundle.js',
 
		 // 输出路径
		 // __dirname是nodejs的变量，代表当前文件目录的绝对路径
		 path: resolve(__dirname, 'dist')
	 },
	 // loader的配置
	 module: {
		 rules: [
			 // 详细loader的配置
			 {
				 test: /\.(css|less|sass|scss)$/,
				 use: [
					 // 这个 loader 取代 style-loader。作用：提取js中的css成单独文件
					 MiniCssExtractPlugin.loader,
 
					 // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
					 'css-loader',
 
					 // 将 less 文件编译成 css 文件
					 // 需要下载 less 和 less-loader
					 'less-loader',
 
					 // 将 sass | scss 文件编译成 css 文件
					 // 需要下载 sass 和 sass-loader
					 'sass-loader'
				 ]
			 }
		 ]
	 },
	 // plugins的配置
	plugins: [
		new HtmlWebpackPlugins({
			template: './src/index.html'
		}),
		// 详细plugins的配置
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:10].css'
		})
	],
 }