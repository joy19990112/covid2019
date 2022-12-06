<template>
  <div class="case-num">
    <div class="num">
      <ul class="count">
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(247, 76, 49)">
                  {{ parseFloat(caseNumData.addVal) > 0 ? "+" : ""
                  }}{{ caseNumData.addVal }}</em
                >
              </b>
            </div>
            <strong style="color: rgb(247, 76, 49)">{{
              caseNumData.totalVal
            }}</strong>
            <span>{{ caseNumData.title }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseNum",
  props: {
    caseNumData: {
      type: Object,
      default: () => {},
    },
    // test1: {
    //   type: String,
    //   default: '',
    // },
    // test2: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      inheritAttrs: false,
    };
  },
  mounted() {
    console.log("this.$attrs C", this.$attrs);
    this.$emit("getTestOne", "test $listeners");
  },
};
</script>

<style scoped>
.case-num {
  padding: 0.16rem;
  background: #fff;
}
.container {
  margin: -0.16rem 0 0;
  font-size: 0.12rem;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.08rem 0 0.07rem;
  line-height: 0.24rem;
}
.title span {
  color: #666;
}
.title em {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.24rem;
  margin-right: -0.16rem;
  padding: 0 0.08rem;
  color: #666;
  font-style: normal;
  background-color: #f7f7f7;
  border-radius: 0.12rem 0 0 0.12rem;
}
.title em img {
  width: 0.123rem;
  height: 0.123rem;
  margin-right: 0.037rem;
}
.num {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.num::after {
  position: absolute;
  top: -0.01rem;
  left: -0.01rem;
  display: block;
  width: 200%;
  height: 200%;
  border: 0.01rem solid #ebebeb;
  border-radius: 0.08rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
  transform: scale(0.5);
  transform-origin: 0 0;
  content: "";
}
.num ul li .create-item {
  position: relative;
  text-align: center;
}
.num ul li .create-item .create-count {
  display: flex;
  align-items: center;
  height: 0.12rem;
  margin-bottom: 0.02rem;
  color: #666;
  font-weight: 400;
  font-size: 0.09rem;
}
.num ul li .create-item .create-count em {
  font-weight: 400;
  font-style: normal;
}
.num ul li strong {
  margin-bottom: 0.01rem;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 0.25rem;
}
.num ul li span {
  display: block;
  color: #333;
  font-weight: 700;
  font-size: 0.11rem;
  line-height: 0.15rem;
}
</style>