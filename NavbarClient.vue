<template>
<div>
  <b-navbar type="dark" class="navbar">
    <b-navbar-nav>
      <b-nav-item href="#">
        <img src="../assets/logo.png" class="logo">
      </b-nav-item>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->


      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
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
  .navbar{
    background-color: #AE0505
  }

  .logo{
    height: 7.5vh;
    width: 7.5vh;
  }

  .nav-item.b-nav-dropdown {
  margin-left: auto;
}

.navbar-nav {
  width: 100%; /* Asegura que el ul ocupa todo el ancho posible */
  padding-left: 5vh;
  padding-right: 10vh;
}

.b-navbar-nav, .navbar-nav {
  display: flex;
  align-items: center;
}

</style>
