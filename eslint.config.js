import * as eslint from '@eslint/js'
import VueEslint from 'eslint-plugin-vue'

import tsEslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

import { FlatCompat } from '@eslint/eslintrc'

import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ESLint 配置文件，用于Vue.js项目代码风格和质量检查
export default tsEslint.config({
  vue: VueEslint.configs.recommended,
  prettierRecommended,
  ...tsEslint.configs.recommended,
  ignores: [
    'src/assets/translations/*',
    '**/android',
    '**/ios',
    '**/package.json',
    '**/__mocks__',
    '**/jest-setup',
    '**/app.json',
    '**/.eslintrc.js',
    '**/*.config.js',
    '**/coverage',
    '**/node_modules',
    '**/*.d.ts',
    'src/utils/graphql/generated.ts',
    'src/dev-only-purpose',
    '**/__generated__'
  ],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        // 限制单行上的属性数量
        singleline: 10, // 单行上的属性最大数量
        multiline: {
          max: 1, // 多行上的每个属性独占一行
          allowFirstLine: false // 不允许在多行元素的第一行放置属性
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off', // 不强制单行元素内容在新行上
    'vue/multiline-html-element-content-newline': 'off', // 不强制多行元素内容在新行上
    'vue/name-property-casing': ['error', 'PascalCase'], // 组件名称必须为PascalCase
    'vue/no-v-html': 'off', // 允许使用v-html指令
    'accessor-pairs': 2, // 访问器对必须成对出现
    'arrow-spacing': [
      2,
      {
        // 箭头函数的箭头前后必须有空格
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'always'], // 代码块的花括号前后必须有空格
    'brace-style': [
      2,
      '1tbs',
      {
        // 强制花括号风格为1tbs，允许单行花括号
        allowSingleLine: true // 强制花括号风格为1tbs，允许单行花括号
      }
    ],
    camelcase: [
      0,
      {
        // 变量名必须为驼峰式，不检查属性名
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'comma-spacing': [
      2,
      {
        // 逗号前无空格，后有空格
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'], // 逗号放在行末
    'constructor-super': 2,
    // if语句中的花括号必须换行
    curly: [2, 'multi-line'],
    // 点操作符必须放在属性上
    'dot-location': [2, 'property'],
    // 文件末尾必须有换行
    'eol-last': 2,
    // 必须使用全等
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // generator函数的星号前后必须有空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 回调函数中必须处理err参数
    'handle-callback-err': [2, '^(err|error)$'],
    // 使用2个空格缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1 // switch语句中的case缩进
      }
    ],
    // JSX属性值使用单引号
    'jsx-quotes': [2, 'prefer-single'],
    // 对象字面量中冒号前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 关键字前后必须有空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 构造函数名必须大写，调用new时首字母不需要大写
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // new关键字后必须有小括号
    'new-parens': 2,
    // 禁止使用Array构造函数
    'no-array-constructor': 2,
    // 禁止使用arguments.caller和arguments.callee
    'no-caller': 2,
    // 允许使用console
    'no-console': 'off',
    // 禁止给类赋值
    'no-class-assign': 2,
    // 禁止在条件表达式中赋值
    'no-cond-assign': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 不禁用控制字符的正则表达式
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止函数参数同名
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    // 禁止对象字面量中有重复的键
    'no-dupe-keys': 2,
    // 禁止case语句中有重复的测试表达式
    'no-duplicate-case': 2,
    // 禁止在字符类语法中出现空字符
    'no-empty-character-class': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁止使用eval
    'no-eval': 2,
    // 禁止给catch语句中的异常参数赋值
    'no-ex-assign': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止不必要的函数绑定
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止switch语句中的穿透
    'no-fallthrough': 2,
    // 禁止浮点小数
    'no-floating-decimal': 2,
    // 禁止给函数赋值
    'no-func-assign': 2,
    // 禁止使用隐式的eval
    'no-implied-eval': 2,
    // 禁止在嵌套的块中出现函数声明
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    // 禁止不规则的空白字符
    'no-irregular-whitespace': 2,
    // 禁止使用__iterator__属性
    'no-iterator': 2,
    // 禁止使用label名作为变量名
    'no-label-var': 2,
    // 禁止使用label语句
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止多余的空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串
    'no-multi-str': 2,
    // 禁止连续多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    // 禁止重新分配原生对象
    'no-native-reassign': 2,
    // 禁止在in表达式中出现否定操作符
    'no-negated-in-lhs': 2,
    // 禁止使用new关键字调用Object构造函数
    'no-new-object': 2,
    // 禁止使用new关键字调用require函数
    'no-new-require': 2,
    // 禁止使用new关键字调用Symbol函数
    'no-new-symbol': 2,
    // 禁止使用new关键字调用包装对象
    'no-new-wrappers': 2,
    // 禁止使用对象作为函数调用
    'no-obj-calls': 2,
    // 禁止使用八进制字面量
    'no-octal': 2,
    // 禁止使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止使用__dirname和__filename进行字符串连接
    'no-path-concat': 2,
    // 禁止使用__proto__属性
    'no-proto': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在返回语句中赋值
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自我比较
    'no-self-compare': 2,
    // 禁止使用逗号操作符
    'no-sequences': 2,
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 2,
    // 禁止函数调用前面有空格
    'no-spaced-func': 2,
    // 禁止稀疏数组
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,

    // 禁止抛出异常字面量
    'no-throw-literal': 2,
    // 禁止行尾空白
    'no-trailing-spaces': 2,
    // 禁止使用未定义的变量
    'no-undef': 2,
    // 禁止将undefined作为标识符
    'no-undef-init': 2,
    // 禁止使用undefined变量
    'no-undefined': 0,
    // 禁止不必要的变量初始化
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 禁止在变量声明前使用
    'no-use-before-define': 2,
    // 禁止使用void操作符
    'no-void': 2,
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [2, 'single', 'avoid-escape'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 要求或禁止使用分号而不是ASI
    semi: [2, 'always'],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    // 强制在注释中//或/*使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    // 要求或禁止使用严格模式指令
    // 要求或禁止使用严格模式指令
    strict: [2, 'never'],
    // 要求或禁止Yoda条件
    yoda: [2, 'never'],
    // 要求或禁止使用yield*表达式中的星号前后的空格
    'yield-star-spacing': [2, 'both'],
    // 要求或禁止使用const声明变量，如果它们没有被重新分配
    'prefer-const': 2,
    // 禁止使用debugger语句
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 禁止混合使用不同的操作符
    'no-mixed-operators': 2,
    // 禁止使用with语句
    'no-with': 2,
    // 要求或禁止在变量声明时使用初始化
    'one-var': [
      2,
      {
        initialized: 'never' // 变量声明时不得初始化
      }
    ],

    // 强制操作符使用一致的换行符风格
    'operator-linebreak': [
      2,
      'after',
      {
        // 要求操作符后换行
        overrides: {
          '?': 'before', // 三元操作符 '?' 前换行
          ':': 'before' // 三元操作符 ':' 前换行
        }
      }
    ],

    // 要求或禁止块内填充
    'padded-blocks': [2, 'never'], // 禁止块内填充

    // 要求或禁止语句块之前的空格
    'space-before-blocks': [2, 'always'], // 要求语句块之前总是有空格

    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有空格

    // 要求或禁止圆括号内的空格
    'space-in-parens': [2, 'never'], // 禁止圆括号内出现空格

    // 要求中缀操作符周围有空格
    'space-infix-ops': 2, // 中缀操作符周围必须有空格

    // 要求或禁止在一元操作符之前或之后存在空格
    'space-unary-ops': [
      2,
      {
        words: true, // 一元单词操作符后必须有空格，如：typeof
        nonwords: false // 一元非单词操作符后不得有空格，如：++
      }
    ],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [2, 'never'], // 禁止模板字符串中的嵌入表达式周围有空格

    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2, // 必须使用 isNaN() 来检查 NaN

    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2, // typeof 表达式必须与合法字符串进行比较

    // 要求 IIFE 使用括号括起来
    'wrap-iife': [2, 'any'] // IIFE 可以使用括号括起来，也可以不括
  }
})
