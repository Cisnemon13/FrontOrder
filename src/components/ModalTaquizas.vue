<template>
    <div style="margin-left: auto">
        <b-button v-b-modal.modal-1>Hacer Pedido</b-button>
        <b-modal id="modal-1" title="Información de Pedido" hide-footer @shown="clearErrors">
            <template #modal-header="{ close }">
                <h5 style="color: #AE0505; margin-left: 25%;">Información de Pedido</h5>
                <b-button size="sm" variant="outline-danger" @click="close()">
                    X
                </b-button>
            </template>
            <form id="form" @submit.prevent="checkForm">
                <div v-if="errors.length">
                    <b-alert show variant="danger">
                        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </b-alert>
                </div>

                <div class="fieldContainer">
                    <div class="labelContainer">
                        <label for="name" style="font-weight: bold; color: #AE0505;" >Lugar del Evento </label>
                    </div>
                    <div class="inputContainer">
                        <input id="name" v-model="name" type="text" name="name" placeholder="Ej.Cuernavaca"/>
                    </div>
                </div>

                <div class="fieldContainer">
                    <div class="labelContainer">
                        <label for="publicationDate" style="font-weight: bold; color: #AE0505;">Fecha: </label>
                    </div>
                    <div class="inputContainer">
                        <input id="publicationDate" v-model="publicationDate" name="publicationDate" type="date" />
                    </div>
                </div>
                <div class="buttonsContainer">
                    <button type="submit" id="botonEnviar">Enviar</button>
                    <button type="button" @click="closeModal" id="botonCancelar">
                        Cancelar
                    </button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Modal",
    data() {
        return {
            errors: [],
            name: null,
            description: null,
            selected_category: null,
            directorName: null,
            publicationDate: null,
            categories: [],
        };
    },
    methods: {
        checkForm() {
            if (
                this.name &&
                this.description &&
                this.selected_category &&
                this.directorName &&
                this.publicationDate
            ) {
                this.sendForm();
                return true;
            }
            this.errors = [];
            if (!this.name) {
                this.errors.push("El lugar es obligatorio.");
            }
            if (!this.description) {
                this.errors.push("La fecha es obligatoria.");
            }
        },
        sendForm() {
            axios
                .post("http://localhost:8080/api/movies", {
                    name: this.name,
                    description: this.description,
                    directorName: this.directorName,
                    publicationDate: this.publicationDate,
                    category: {
                        id: this.selected_category,
                    },
                })
                .then((response) => {
                    this.name = null;
                    this.description = null;
                    this.selected_category = null;
                    this.publicationDate = null;
                    this.directorName = null;
                    this.errors = [];
                    this.$emit("registroExitoso");
                    this.$swal({
                        title: "Agregada",
                        text: "La pelicula ha sido agregada con exito",
                        icon: "success",
                    });
                    this.$root.$emit("bv::hide::modal", "modal-1");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        closeModal() {
            this.$root.$emit("bv::hide::modal", "modal-1");
            this.name = null;
            this.description = null;
            this.selected_category = null;
            this.publicationDate = null;
            this.directorName = null;
        },
        clearErrors() {
            this.errors = [];
        },
    },
    mounted() {
        axios
            .get("http://localhost:8080/api/categories")
            .then((response) => {
                this.categories = response.data;
            })
            .catch((e) => {
                console.error("Error en la peticion: ", e);
            });
    },
};
</script>

<style scoped>
.buttonsContainer {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.buttonsContainer button {
    width: 30%;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    margin-top: 10px;
    transition: width 0.3s;
}

.buttonsContainer button:hover {
    width: 35%;
}

#botonEnviar {
    background-color: rgb(32, 184, 40);
    color: white;
}

#botonCancelar {
    background-color: rgb(240, 51, 51);
    color: white;
}

#form {
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 10px;
}

.fieldContainer {
    width: 100%;
    margin-bottom: 20px;
}

.labelContainer {
    margin-bottom: 10px;
}

.inputContainer {
    width: 100%;
}

.inputContainer input {
    padding: 10px;
    width: 100%;
    border: 2px solid #AE0505;
    border-radius: 10px;
    background-color: #f9f9f9;
    color: #333;
    outline: none;
}

.inputContainer input:focus {
    border-color: #2b2b2b;
}

.inputContainer textarea {
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    color: #333;
    outline: none;
}

.inputContainer textarea:focus {
    border-color: #2b2b2b;
}

.inputContainer select {
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    color: #333;
    outline: none;
}

.inputContainer select:focus {
    border-color: #2b2b2b;
}
</style>