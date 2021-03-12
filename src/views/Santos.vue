<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Santos</h2>
    <div>
      <v-img
        class="mx-auto"
        max-width="225"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1045px-Santos_logo.svg.png"
      >
      </v-img>
    </div>
    <div class="texto">
      <p>
        O Santos Futebol Clube, popularmente conhecido como Santos, é um clube
        poliesportivo brasileiro da cidade de Santos. Manda as suas partidas em
        seu próprio estádio, a Vila Belmiro, mas ocasionalmente desloca seus
        jogos ao Pacaembu. Seu maior rival no futebol é o Corinthians.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Santos",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap");

.home-image {
  border-radius: 3px;
}

p {
  font-family: "Sulphur Point", sans-serif;
  text-align: center;
  font-size: 20px;
}

.texto {
  margin-left: 30px;
  margin-right: 30px;
}

h2 {
  font-family: "Sulphur Point", sans-serif;
  text-align: center;
}

.img {
  margin-bottom: 16px;
  border-radius: 3px;
  width: 225px;
  height: 225px;
}
</style>
