const testMixin = {
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getData() {
      console.log(
        '我是mixin中的数据'
      )
      var myPromise = new Promise(
        (
          resolve,
          reject
        ) => {
          resolve()
          reject()
        }
      )
      // 成功/失败(一般使用成功)
      myPromise.then(
        () => {
          console.log(
            'success'
          )
        },
        () => {
          console.log(
            'failed'
          )
        }
      )

      // 失败时执行
      myPromise.catch(
        () => {}
      )

      myPromise
        .then(
          () => {}
        )
        .catch(
          () => {}
        )
    },
  },
}
export default testMixin
