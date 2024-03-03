<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Inicio Bienvenido </h1>
    <div>
      <img src="../assets/buffe.PNG" alt="nose">
    </div>

    <div>
      <router-link to="/main" class="bym">Formulario</router-link>
      <router-link to="/pagination" class="bym">Paginación</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#'
          },

        ]
      }
    }
  }
</script>
<style>
.btn-inicio {
  padding: 20px;
  margin: 10px;
}

.btn-inicio a {
  text-decoration: none;
  color: white;
}

.bym {
  margin: 5vh;
}
</style>
