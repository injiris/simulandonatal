<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Fortaleza</h2>
    <div>
      <v-img
        class="mx-auto"
        max-width="225"
        src="https://seeklogo.com/images/F/fortaleza-esporte-clube-logo-5385E978D0-seeklogo.com.png"
      >
      </v-img>
    </div>
    <div class="texto">
      <p>
        Fortaleza Esporte Clube é um clube poliesportivo que está sediado na
        cidade de Fortaleza, no Nordeste do Brasil. Foi fundado em 18 de outubro
        de 1918, por Alcides Santos, um dos maiores esportistas cearenses, que
        se apaixonou pelo futebol durante o período em que estudou no College
        Stella, na Suíça.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Fortaleza",
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
