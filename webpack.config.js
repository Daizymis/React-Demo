// webpack.config.js

const path = require('path');

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 将样式插入 HTML 中
                    'css-loader', // 处理 CSS 文件，如 @import 和 url()
                    'sass-loader' // 将 SCSS 文件编译成 CSS 文件
                ]
            }
        ]
    }
    // ...
};
