<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <br>
    <br>
    <h1>Formulario Vehicular</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="marca" class="form-label">Marca</label>
        <input v-model="vehicle.marca" type="text" class="form-control on" id="marca" required >
      </div>
      <div class="mb-3">
        <label for="modelo" class="form-label">Modelo</label>
        <input v-model="vehicle.modelo" type="text" class="form-control on" id="modelo" required>
      </div>
      <div class="mb-3">
        <label for="anio" class="form-label">Año</label>
        <input v-model.number="vehicle.anio" type="text" class="form-control on" id="anio" required>
      </div>
      <div class="mb-3">
        <label for="numeroSerie" class="form-label">Número de Serie</label>
        <input v-model="vehicle.numeroSerie" type="text" class="form-control on" id="numeroSerie" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-danger" @click.prevent="resetForm">Reset</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "VehicleForm",
  data() {
    return {
      vehicle: {
        marca: "",
        modelo: "",
        anio: null,
        numeroSerie: "",
      },
      message: "",
      items: [
          {
            text: 'Inicio',
            href: '/inicio'
          },

          {
            text: 'Formulario',
            active: true
          }
        ]
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (!this.hasErrors) {
        this.message = "Form submitted successfully!";
        // Pass `this.vehicle` to another component
      }
    },
    validateForm() {
      const currentYear = new Date().getFullYear();
      const regex = /^[A-Za-z0-9]+$/;
      const serialRegex = /^[A-Z]{4}000-00[A-Z]{2}$/;

      this.hasErrors = false;

      if (!regex.test(this.vehicle.marca)) {
        this.addError("marca", "La marca solo puede contener letras y números.");
      }

      if (!regex.test(this.vehicle.modelo)) {
        this.addError("modelo", "El modelo solo puede contener letras y números.");
      }

      if (this.vehicle.anio > currentYear) {
        this.addError("anio", "El año de fabricación no puede ser mayor al actual.");
      }

      if (!serialRegex.test(this.vehicle.numeroSerie)) {
        this.addError(
          "numeroSerie",
          "El número de serie debe tener el formato XXXX000-00XX, donde X son letras y 0 números."
        );
      }
    },
    addError(field, message) {
      this.$set(this.vehicle, `${field}Error`, message);
      this.hasErrors = true;
    },
    resetForm() {
      this.vehicle.marca = "";
      this.vehicle.modelo = "";
      this.vehicle.anio = null;
      this.vehicle.numeroSerie = "";
      this.message = "";
      this.validateForm();
    },
  },
};



</script>



<style scoped>
.message {
  color: green;
}

.on{
  width: 50%;
  margin-left: 25%;
}

button{
  margin: 5vh;
}
</style>