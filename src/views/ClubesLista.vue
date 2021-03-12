<template>
  <v-container>
   
    <v-card class="mx-auto card-fodase" max-width="80vw">
      <div class="borda-fodase">
       <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
      </div>
      <v-list-item class="titulo-fodase">
        <v-list-item-icon class="titulo-fodase">Escudo</v-list-item-icon>
        <v-list-item-title class="d-flex justify-center titulo-fodase" id="clube-fodase2">Clube</v-list-item-title>
        <span class="titulo-fodase">Pontos</span>
      </v-list-item>
      <v-list-item v-for="clube of ordernarClubes" :key="clube.id">
        <v-list-item-icon size="24">
          <img :src="clube.escudo" :alt="clube.nome" />
        </v-list-item-icon>
        <v-list-item-title class="d-flex justify-center clube-fodase">{{ clube.nome }}</v-list-item-title>
        <span class="mr-3">{{ clube.pontos}}</span>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ClubesLista",
  computed: {
    ordernarClubes() {
      const ordernar = this.clubesTabela
        .slice(0)
        .sort((a, b) => (a.pontos > b.pontos ? -1 : 1));
      return ordernar;
    },
  },
  data() {
    return {
      clubesTabela: [],
    };
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json").then(
      (res) =>
        res.json().then((json) => {
          this.clubesTabela = json;
        })
    );
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap');

.titulo-fodase {
  font-size: 20px;
}

body {
  font-family: 'Sulphur Point', sans-serif;
}

td {
  border: none;
}

.card-fodase {
  border-radius: 40px;
  border: 1px solid #00E676;
  padding: 10px;
}

.borda-fodase {
  border-bottom: 1px solid #00E676;
}

.clube-fodase {
  margin-right: 20px;
}


</style>
