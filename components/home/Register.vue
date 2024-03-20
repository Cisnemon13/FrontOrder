<script  setup>
import NavBarLanding from './NavbarLanding.vue'
</script>
<template>
    <div class="app">
      <NavBarLanding/>
  
      <div class="content">
        <div>
            <img src="../../assets/buffe.PNG" alt="" class="buffet">
        </div>

        <div class="forms">
            <h1>Registro</h1>

            <div class="nombre">

                <div>
                    <div class="form">
                        <label>Nombre(s)</label>
                    </div>
        
                    <input type="text"> 
                </div>

                <div>
                    <div class="form">
                        <label>Apellido P.</label>
                    </div>
        
                    <input type="text"> 
                </div>

                <div>
                    <div class="form">
                        <label>Apellido M.</label>
                    </div>
        
                    <input type="text"> 
                </div>
               
            </div>
            


            <div class="form">
                <label>Correo Electronico</label>
            </div>
            
            <input type="text">

            <div class="form">
                <label>Celular</label>
            </div>
            
            <input type="text">

            
            <div class="contraseña">

                <div>
                    <div class="form">
                        <label>Contraseña</label>
                    </div>
        
                    <input type="text"> 
                </div>

                <div>
                    <div class="form">
                        <label>Repetir contraseña</label>
                    </div>
        
                    <input type="text"> 
                </div>
               
            </div>
            


            <div class="button-container">
            <b-button>Registrar</b-button>
          </div>
            
        </div>
    </div>
    </div>
  </template>
  
  <script setup>
import NavbarLanding from './NavbarLanding.vue'
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
    height: 675px;
  }
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 1.5vh;
    margin-bottom: 2.5vh;
    text-align: center; /* Center text within heading */
  }
  
  label {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    text-align: center; /* Align labels to the center */
    margin-bottom: 1.5vh;
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
    margin-bottom: 2.5vh;
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
    margin: 2.5vh;
  }
  
  a {
    color: #AE0505;
  }
  
  .nombre{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}

.contraseña{
    display:grid;
    grid-template-columns: 1fr 1fr ;
    
}



.buffet{
    height: 675px;
}
  </style>
  