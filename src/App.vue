<template>
  <div class="hello">
    <h5>http-request-mock: Unit test</h5>
    <div class="request">
      <p>
        假设有3个请求, 请求逻辑有依赖关系, 这里面成功/错误的组合会有很多种。
        例如其中测试案例是: <br />
        req1 返回成功(正常的数据), <br />
        req2 返回逻辑错误, <br />
        req3 返回req2对应逻辑错误的处理。
      </p>
      <p>
        We assume that there are three requests, and the request logic is order
        dependent. For example:<br />
        req1 returns success (normal data),<br />
        req2 returns an error,<br />
        req3 returns the processing result of the error returned from [req2].
      </p>
      <div class="result">
        <div>result1: {{ result1 }}</div>
        <div>result2: {{ result2 }}</div>
        <div>result3: {{ result3 }}</div>
        <br /><br />
        Try to click it -> <button @click="req123">{{ text }}</button>
      </div>
      <div>Hit F12 to access Developer Tools and view the console logs.</div>
      <hr />
      <div>
        <b>mock case: mock/samples/req1.js</b>:
        <div><img src="/img/req1.png" /></div>
        <b>mock case: mock/samples/req2.js</b>:
        <div><img src="/img/req2.png" /></div>
        <b>mock case: mock/samples/req3.js</b>
        <div><img src="/img/req3.png" /></div>
      </div>
      <hr />
      <div>
        <b>test case: test/demo.test.js</b>:
        <div><img src="/img/unittest-code.png" /></div>
        <b>test case: test/use.test.js (An alternative way to test.)</b>:
        <div><img src="/img/unittest-use.png" /></div>
        <div><img src="/img/unittest-res.png" /></div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "req1 -> req2 -> req3",
      result1: "",
      result2: "",
      result3: "",
    };
  },

  mounted() {},

  methods: {
    async req123() {
      if (this.text === "loading...") return;
      this.setLoading();

      const res1 = await axios.get("https://www.api.com/req1");
      this.result1 = res1.data.result;

      const res2 = await axios.get("https://www.api.com/req2");
      this.result2 = res2.data.result;

      const res3 = await axios.post("https://www.api.com/req3", {
        err: this.result2,
      });
      this.result3 = res3.data.result;
      this.text = "req1 -> req2 -> req3";
    },

    setLoading() {
      this.text = "loading...";
      this.result1 = "loading...";
      this.result2 = "loading...";
      this.result3 = "loading...";
    },
  },
};
</script>

<style type>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
}
h5 {
  font-size: 14px;
}
.request {
  margin: 30px;
  width: 750px;
  margin: 0 auto;
  min-width: 750px;
  text-align: left;
}
.request img {
  width: 750px;
}
.result {
  padding: 10px;
  border: 1px solid red;
}
</style>
