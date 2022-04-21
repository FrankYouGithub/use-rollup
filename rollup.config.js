/*
 * @Author       : frank
 * @Date         : 2022-04-21 09:23:56
 * @LastEditTime : 2022-04-21 10:25:23
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
import resolve from '@rollup/plugin-node-resolve'; // 支持加载第三方依赖，否则像import React from 'react' 的依赖导入语句将不会被 Rollup 识别。
import commonjs from '@rollup/plugin-commonjs'; // 支持使用导出为commonjs的包
import { terser } from 'rollup-plugin-terser'; // 代码压缩
import cleanup from 'rollup-plugin-cleanup'; // 去除无用代码


// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],
  output: [{
    // 产物输出目录
    dir: "dist/es",
    // 产物格式
    format: "esm",
  }, {
    format: 'cjs',
    dir: 'dist/cjs'
  }],
  // 通过 plugins 参数添加插件
  plugins: [resolve(), commonjs(), terser(), cleanup()],
};

export default buildOptions;



// 如果不同入口对应的打包配置不一样，我们也可以默认导出一个配置数组，如下所示:
// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildIndexOptions = {
//   input: ["src/index.js"],
//   output: [{
//     // 产物输出目录
//     dir: "dist/es",
//     // 产物格式
//     format: "esm",
//   }, {
//     format: 'cjs',
//     dir: 'dist/cjs'
//   }],
// };

// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildUtilOptions = {
//   input: ["src/util.js"],
//   output: [{
//     // 产物输出目录
//     dir: "dist/es",
//     // 产物格式
//     format: "esm",
//   }],
// };

// export default [buildIndexOptions, buildUtilOptions];