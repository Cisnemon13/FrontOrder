<template>
        <div class="servicios">     
        <div class="card" >
            <h3>Transporte</h3>
            <img src="../assets/transporteIcon.png" alt="" class="iconService">
            <b-button class="btn">Ver más</b-button>
        </div>
        <div class="card2">
            <h3>Comida</h3>
            <img src="../assets/comidaIcon.png" alt="" class="iconService">
            <b-button class="btn">Ver más</b-button>
        </div>
        <div class="card3">
            <h3>Utileria</h3>
            <img src="../assets/utileriaIcon.png" alt="" class="iconService">
            <b-button class="btn" >Ver más</b-button>
        </div>
    </div>
</template>

<style>

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
  height: 50vh;
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
    margin-top: 5vh;
}
</style>