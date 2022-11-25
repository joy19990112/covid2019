const spacings = [
  0, 1, 2, 2.5, 3, 3.5, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 22, 23, 24, 25, 26, 27, 28, 30, 32, 34, 35, 36,
  38, 40, 42, 44, 45, 48, 50, 52, 53, 54, 58, 60, 64, 72, 79, 80, 84, 87, 90, 102, 110, 122, 128, 130, 137, 150, 158,
  160, 204, 256, 265
];
const widths = [12, 14, 36, 40, 44, 125, 128, 143, 200, 209, 240, 266, 300, 315, 326, 375, 400, 480];
const heights = [1, 12, 14, 18, 24, 104, 200, 300, 36];
const fontSizes = [0, 36, 40, 48, 56, 64, 26]; //字体配数组。
// https://nerdcave.com/tailwind-cheat-sheet  查询文档
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  separator: '__', // 兼容小程序，将 : 替换成 __
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

      borderColor: {
        blue: '#0078FF',
        gray: 'rgba(60, 96, 94, 0.1)',
        gray_50: 'rgba(60, 96, 94, 0.05)'
      },
      backgroundColor: {
        blue: '#0078FF',
        filter: 'rgba(60, 96, 94, 0.05)',
        filterLine: 'rgba(60, 96, 94, 0.1)'
      },
      textColor: {
        primary: 'rgba(34, 34, 34, 0.9)',
        tips: 'rgba(60, 96, 94, 0.5)',
        tipsInput: 'rgba(60,96,94,0.9)',
        black: '#3C605E',
        back00: '#000000',
        rate: 'rgba(0, 33, 64, 0.6)',
        blue: '#1CBAB9',
        topic: '#0087FF',
        white: '#FFFFFF',
        orange: '#FF8F28',
        listBlack: '#39302d',
        listTitle: '#3C605E',
        red: '#FA6566',
        main: '#0078FF',
        gray: '#999999',
        error: 'rgba(250, 101, 102, 0.9)',
        add: 'rgba(0, 33, 64, 0.7)',
        agreementTitleColor: 'rgba(0, 44, 84, 0.54)',
        passwordTitleColor: 'rgba(0, 33, 64, 0.9)',
        filterColor: 'rgba(60, 96, 94, 0.7)',
        whiteTips: 'rgba(255, 255, 255, 0.5)',
        cardColor: 'rgba(255, 255, 255, 0.5)'
      }
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
      lg: ['32px', '48px'], // 以上三种为项目中主要字号，不以数字命名，其他特殊字号以数字命名
      10: ['10px', '15px'],
      paymentLimit: ['10px', '10px'],
      payment: ['10px', '20px'],
      transactionTime: ['12px', '10px'],
      12: ['12px', '20px'],
      cardType: ['12px', '15px'],
      transactionHead: ['12px', '18px'],
      14: ['14px', '22px'],
      14_26: ['14px', '26px'],
      beneficiaryAnchor: ['14px', '36px'],
      cardLimit: ['16px', '20px'],
      transactionAmount: ['16px', '24px'],
      16: ['16px', '26px'],
      18: ['18px', '26px'],
      transactionDate: ['18px', '20px'],
      cardName: ['18px', '22px'],
      paymentTitle: ['18px', '28px'],
      20: ['20px', '26px'],
      passwordTitle: ['20px', '30px'],
      22: ['22px', '26px'],
      24: ['24px', '26px'],
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
