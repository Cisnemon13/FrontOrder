<script setup>
import NavBar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue';
import Carousel from '../../components/Carousel.vue'
</script>

<template>
    <div>
      <div class="app">
        <Navbar/>
      </div>
  
      <div class="imageBack">
        <img src="../../assets/Banner.png" alt="">
    </div>
    <Carousel/>
    
    <div class="title">
        <h1>Servicios populares</h1>
    </div>
    <div class="servicios">     
        <div class="card" >
            <h3>Transporte</h3>
            <img src="../../assets/transporteIcon.png" alt="" class="iconService">
            <b-button class="btn" id="transporte"><router-link to="/transporte" class="msg">Ver más</router-link></b-button>
        </div>
        <div class="card2">
            <h3>Comida</h3>
            <img src="../../assets/comidaIcon.png" alt="" class="iconService">
            <b-button class="btn" id="transporte"><router-link to="/comida" class="msg">Ver más</router-link></b-button>
        </div>
        <div class="card3">
            <h3>Utileria</h3>
            <img src="../../assets/utileriaIcon.png" alt="" class="iconService">
            <b-button class="btn" id="transporte"><router-link to="/utileria" class="msg">Ver más</router-link></b-button>
        </div>


    </div>
    <Footer/>
    </div>
  </template>
  
  
<style scoped>
body,
h2,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

h1{
    margin-top: 15vh;
}

#navbar {
  background-color: #AE0505;
  height: 15vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card{
    background-color: #AE0505;
    height: 50vh;
    width: 60%;
    border-radius: 16px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-left: 40%;
    padding:5vh;
}

.card2{
    background-color: #2D2A2A;
    height: 50vh;
    width: 60%;
    border-radius: 16px;
    color:white;
    font-family: 'Montserrat', sans-serif;
    margin-left: 20%;
    margin-right: 20%;
    padding: 5vh;
}
.card3{
    background-color: #AE0505;
    height: 50vh;
    width: 60%;
    border-radius: 16px;
    color:white;
    font-family: 'Montserrat', sans-serif;
    margin-right: 40%;
    padding: 5vh;

}

img {
  width: 100%;
  height: 75vh;
  margin-bottom: 5vh;
}

.title{margin-top: 1vh;}

.iconService{
    height: 25vh;
    width: 25vh;
}

.servicios{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10vh;
}

.btn{
    background-color: #d9d9d9;
    color:#2D2A2A;
    width: 15vh;
}

#transporte{
    margin-left: 7vh;
    margin-top: 2.5vh;
}
</style>
