<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Campeonato Brasileiro</h1>

    <v-img
      class="inicio-imagem mb-4"
      src="https://www.fnvsports.com.br/wp-content/uploads/2021/01/brasileirao.jpg"
    >
    </v-img>
    <p>
      A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente
      Brasileirão Assaí – Série A 2020 por motivos de patrocínio.
    </p>

    <div class="wrapper">
      <router-link to="/Internacional">
        <div class="first-item teal darken-4">
          <img
            class="team-shield"
            :src="inicio[0].escudo"
            :alt="inicio[0].nome"
          />
        </div>
      </router-link>
      <div class="two-columns-wrapper">
        <router-link to="/Flamengo">
          <div class="item teal darken-4">
            <img
              class="team-shield"
              :src="inicio[1].escudo"
              :alt="inicio[1].nome"
            />
          </div>
        </router-link>

        <router-link to="/Corinthians">
        <div class="item teal darken-4">
          <img
            class="team-shield"
            :src="inicio[2].escudo"
            :alt="inicio[2].nome"
          />
        </div>
        </router-link>

        <router-link to="/Santos">
        <div class="item teal darken-4">
          <img
            class="team-shield"
            :src="inicio[3].escudo"
            :alt="inicio[3].nome"
          />
        </div>
        </router-link>

        <router-link to="/Fortaleza">
        <div class="item teal darken-4">
          <img
            class="team-shield"
            :src="inicio[4].escudo"
            :alt="inicio[4].nome"
          />
        </div>
        </router-link>
      </div>
    </div>
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
        console.log(this.inicio);
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

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.first-item,
.item {
  height: 50px;
  width: 40vw;
  border-radius: 40px;
  margin: 5px;
}

.two-columns-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.team-shield {
  height: 45px;
  margin-left: 45px;
  margin-top: 3px;
}
</style>
