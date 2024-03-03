<script  setup>
import NavBar from './NavBar.vue';
</script>
<template>
    <div class="app">
      <NavBar />
  
      <div class="content">
        <div class="image-container">
            <img src="../assets/buffe.PNG" alt="nose">
        </div>
  
        <div class="forms">
          <h1>Iniciar sesión</h1>
  
          <div class="form">
            <label for="email">Correo Electrónico</label>
            <input id="email" type="text" placeholder="Correo electrónico" />
          </div>
  
          <div class="form">
            <label for="password">Contraseña</label>
            <input id="password" type="password" placeholder="Contraseña" />
          </div>
  
          <div class="button-container">
            <b-button>Iniciar sesión</b-button>
          </div>
  
          <div class="message">
            <label>¿No eres usuario? 
                <router-link to="/register" class="msg">registrate</router-link>
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavBar from './NavBar.vue';
  </script>
  
  <style scoped>
  body,
  h1,
  h2,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures app fills the viewport height */
    justify-content: center;
    align-items: center;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10vh 15%;
    box-shadow: 10px 5px 5px rgba(109, 109, 109, 0.5); /* Consistent box-shadow formatting */
    border-radius: 20px;
  }
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 2.5vh;
    margin-bottom: 5vh;
    text-align: center; /* Center text within heading */
  }
  
  label {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    text-align: center; /* Align labels to the center */
    margin-bottom: 2.5vh;
  }
  
  .forms {
    position: relative;
    text-align: center; /* Center form elements horizontally */
  }
  
  .form {
    margin-bottom: 2vh;
  }
  
  input {
    width: 80%;
    height: 5vh;
    border-radius: 20px;
    margin-bottom: 4vh;
    border: 3px solid #AE0505; /* Consistent border color formatting */
  }
  
  .btn {
    width: 50%;
    height: 10vh;
    background-color: #2D2A2A;
    color: white;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    cursor: pointer; /* Indicate interactive element with cursor */
  }
  
  .msg {
    color: #AE0505;
  }
  
  .message {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
  }
  </style>
  