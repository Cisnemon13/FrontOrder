<template>
    <div class="footer">
        <div>
            <h2>ORDER.COM</h2>
            <div>SERVICIOS DE BUFFETS, TRANSPORTE, UTILERIA Y MÁS...</div>
            <div>CONTACTO: 777888999</div>

        </div>

        <div>
            <h2>SIGUENOS</h2>
            <div>NUESTRAS REDES SOCIALES</div>
            <div>
                <img src="../assets/facebookIcon.png" alt="" class="icons">
                <img src="../assets/instagramIcon.png" alt="" class="icons">
                <img src="../assets/xIcon.png" alt="" class="icons">
            </div>
        </div>

        <div class="copyright">
            TODOS LOS DERECHOS RESERVADOS
        </div>
    </div>
</template>

<style scoped>
.footer {
  background-color: #d9d9d9;
  font-family: 'Monserrat', sans-serif;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  display: flex;
  justify-content: space-around;
  padding: 2.5vh;
  margin-bottom: 0%;
}

.icons{
    width: 4vh;
    height: 4vh;
    margin: 2.5vh;
}

.copyright{
    margin-top: 7.5vh;
}
</style>