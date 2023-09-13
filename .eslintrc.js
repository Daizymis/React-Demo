module.exports = {
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module' // 使用模块化的文件结构
  },
  env: {
    browser: true, // 启用浏览器环境
    es2021: true, // 使用 ES2021 版本的特性
    commonjs: true // 启用 CommonJS 模块规范
  },
  parser: '@typescript-eslint/parser', // 使用 '@typescript-eslint/parser' 作为解析器，用于解析 TypeScript 代码
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的基本规则
    'plugin:react/recommended', // 使用 react 插件推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 插件推荐的规则
    'plugin:prettier/recommended' // eslint-plugin-prettier
  ],
  plugins: ['react'], // 启用 react 插件
  rules: {
    quotes: ['error', 'single'], // 强制使用单引号
    'no-var': 1, //禁用var，用let和const代替0 = off, 1 = warn, 2 = error
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: true, //分号
        tabWidth: 2, //一个tab代表几个空格数
        singleQuote: true, //字符串必须使用单引号
        trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: false, // jsx > 是否另起一行
        arrowParens: 'avoid', //箭头函数只有一个参数时省略小括号
        proseWrap: 'preserve' //代码超出是否要换行 preserve保留
      }
    ]
  }
};
