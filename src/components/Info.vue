<template>
  <div class="info mt-30">
    <p class="title">
      <i></i>
      病毒信息
    </p>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    infoData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  mounted() {
    this.$store.dispatch("ncovaBroad/ncovaBroad/getNcovaInfo", {
      name: "ncova", //名称
      attribute: "dangerous" //属性
    });
  },
};
</script>

<style scoped>
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.title {
  font-size: 0.17rem;
}

.title i {
  display: inline-block;
  width: 0.04rem;
  height: 0.16rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background: #4169e2;
}
.content {
  padding: 0.06rem 0.16rem;
}

.content p {
  font-size: 13px;
  margin: 5px 0;
}
</style>