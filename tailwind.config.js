const spacings = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const widths = [12, 14, 36, 40, 44];
const heights = [1, 12, 14, 18];
const fontSizes = [0, 36, 40, 48, 56, 64, 26]; //字体配数组。
// https://nerdcave.com/tailwind-cheat-sheet  查询文档
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  separator: '__',
  theme: {
    extend: {
      width: {
        ...widths.reduce((pre, cur) => {
          pre[cur] = cur + 'rpx';
          return pre;
        }, {})
      },
      heights: {
        ...heights.reduce((pre, cur) => {
          pre[cur] = cur + 'rpx';
          return pre;
        }, {})
      },
    },
    spacing: {
      ...spacings.reduce((pre, cur) => {
        pre[cur] = cur + 'rpx';
        return pre;
      }, {})
    },

    fontSize: {
      //字号和行高
      sm: ['14px', '20px'],
      base: ['16px', '20px'],
      lg: ['32px', '48px'],
      ...fontSizes.reduce((pre, cur) => {
        pre[cur] = [cur + 'px', 1];
        return pre;
      }, {})
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
