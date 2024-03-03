<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import Carousel2 from './Carousel2.vue';
import ModalTaquizas from './ModalTaquizas.vue';
import Servicios from './Servicios.vue';

</script>

<template>
    <div>
        <div class="app">
            <NavBar></NavBar>
        </div>
        <br>
        <div class="title">
            <div id="taqui">
                <h1>Taquizas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit magna ante, montes hac cras vivamus nascetur
                    sem odio suspendisse, maecenas viverra commodo ligula primis cum quisque faucibus. Consequat libero
                    convallis auctor taciti metus ligula rhoncus tellus iaculis posuere litora imperdiet id massa, ante
                    aptent egestas scelerisque aliquet primis augue vitae sagittis vehicula habitant erat. Facilisi
                    massa natoque quam odio montes porta eleifend cum nisi, netus imperdiet duis tincidunt cursus
                    conubia euismod aptent luctus, curabitur porttitor pellentesque ornare convallis id laoreet mollis.
                </p>
                <h2>COSTO: $10,0000 MXN</h2>

                <br>
                <ModalTaquizas></ModalTaquizas>
                
            </div>

            <div id="caru">
                <Carousel2></Carousel2>
            </div>

        </div>

        <Footer/>
    </div>
</template>

<style>
.title {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0%;
    height: 60%;
}

#taqui {
    width: 80%;
    height: auto;
    margin-left: 10%;
    align-items: stretch;
    margin-bottom: 0%;
}

.app{
    margin-bottom:0%;

}

#caru{
    margin-bottom: 0%;
}
</style>