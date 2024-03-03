<template>
    <div id="navbar">
      <img src="../assets/logo.png" class="logo">
      <b-button class="btn" @click="goToLogin">Iniciar sesión</b-button>
    </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
#navbar{
    background-color:  #AE0505;
    height: 15vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.logo{
    height: 10vh;
    width: 10vh;
    margin-top: 2.5vh;
    margin-left: 10%;
}

.btn{
    margin-left: 60%;
    margin-top: 2.5vh;
    width: 20vh;
    height: 10vh;
    background-color: #D9D9D9;
    color: black;

}
</style>
