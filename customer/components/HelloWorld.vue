<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <test />
    <test-customer />
    I win!!!!
  </div>
</template>

<script>
import Test from "c4/components/Test.vue";
import TestCustomer from "c4/components/TestCustomer.vue";
export default {
  name: "HelloWorld",
  components: {
    Test,
    TestCustomer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
