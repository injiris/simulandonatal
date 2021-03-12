<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    <v-card class="mx-auto" max-width="400" tile dark>
      <v-list-item>
        <v-list-item-icon>Escudo</v-list-item-icon>
        <v-list-item-title>Clube</v-list-item-title>
        <span>Pontos</span>
      </v-list-item>
      <v-list-item v-for="clube of ordernarClubes" :key="clube.id">
        <v-list-item-icon size="24">
          <img :src="clube.escudo" :alt="clube.nome" />
        </v-list-item-icon>
        <v-list-item-title class="mr-2">{{ clube.nome }}</v-list-item-title>
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
td {
  border: none;
}
</style>
