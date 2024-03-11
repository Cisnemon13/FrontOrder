<template>
<div id="container">
    <div>
  <b-card
    header="Carrillo Puto"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Buena Experiencia"
    style="max-width: 20rem;"
    id="card-1"
  >
  <b-card-text>
      Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9...
    </b-card-text>
  <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  </b-card>
</div>
<div>
  <b-card
    header="Jesús Ramírez"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Me gustó, pero no"
    style="max-width: 20rem;"
    id="card-2"
  >
  <b-card-text>
      Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9...
    </b-card-text>
  <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  </b-card>
</div>

<div>
  <b-card
    header="Moroni Rodriguez"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Pésima Experiencia"
    style="max-width: 20rem;"
    id="card-1"

  >
  <b-card-text>
      Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9...
    </b-card-text>
  <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  </b-card>
</div>
<div>
  <b-card
    header="Sergio Gómez"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Gran experiencia"
    style="max-width: 20rem;"
    id="card-2"
  >
  <b-card-text>
      Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9, Number 9...
    </b-card-text>
  <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
  </b-card>
</div>
  
</div>


</template>

<style>


#container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10vh;
    width: 100%;
    margin: 0;
}

#card-2{
    margin-bottom: 5%;
}

#card-1{
    margin-bottom: 25%;
}
</style>