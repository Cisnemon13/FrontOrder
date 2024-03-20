<template>
    <div id="navbar">
      <img src="../assets/logo.png" class="logo">

      <div class="msg">
        <router-link to="/" class="msg1">Servicios</router-link>
        <router-link to="/" class="msg1">Administradores</router-link>
        <router-link to="/" class="msg1">Trabajadores</router-link>
        <router-link to="/" class="msg1">Paquetes</router-link>
        <router-link to="/" class="msg1">Solicitudes</router-link>
      </div>

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
    display: grid;
    grid-template-columns: 1fr fr 1fr;
}

.logo{
    height: 10vh;
    width: 10vh;
    margin-top: 2.5vh;
    margin-left: 10%;
}

.btn{
    margin-left: 50%;
    margin-top: 3.75vh;
    width: 20vh;
    height: 7.5vh;
    background-color: #D9D9D9;
    color: black;
}

.msg{
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-left: 0;
    margin-top: 5vh;
}

.msg1{
    color: #D9D9D9;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}
</style>
