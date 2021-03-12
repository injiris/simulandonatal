<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Campeonato Brasileiro</h2>

    <v-img
      class="inicio-imagem mb-4"
      src="https://www.fnvsports.com.br/wp-content/uploads/2021/01/brasileirao.jpg"
    >
    </v-img>
    <p>
      A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente
      Brasileirão Assaí – Série A 2020 por motivos de patrocínio.
    </p>

    <router-link to="/">
    <div class="d-flex flex-wrap" v-for="clube of inicio" :key="clube.escudo">
        
    </div>
      
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Inicio",
  components: {},
  data() {
    return {
      inicio: [],
    };
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((response) => response.json())
      .then((json) => {
        this.inicio = json;
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");

h2,
p {
  font-family: "Sulphur Point";
  text-align: center;
  font-size: 15px;
}

.rounded-pill {
  display: flex;
  background-color: green;
  width: 40vw;
  justify-content: center;
}


</style>

