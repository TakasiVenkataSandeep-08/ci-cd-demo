<template>
  <div>
    <h1>Staging Site Login Form</h1>
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm";
export default {
  components: {
    LoginForm,
  },
  mounted() {
    console.log(process.env.VUE_APP_SECRET_KEY);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 20px;
}
</style>