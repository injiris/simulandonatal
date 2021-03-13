<template>
  <v-container class="home">
    <h2 class="text-h5 text-center mb-3 mt-5">Flamengo</h2>
    <div>
      <v-img
        class="mx-auto"
        max-width="225"
        src="https://seeklogo.com/images/C/cr-flamengo-new-logo-09941B2530-seeklogo.com.png"
      >
      </v-img>
    </div>
    <div class="texto">
      <p>
        O Flamengo, popularmente conhecido pelos apelidos de Mengo, Mengão e Fla
        tornou-se um dos clubes mais bem-sucedidos e populares do futebol
        brasileiro. Tem como seus maiores rivais esportivos o Vasco da Gama, o
        Fluminense e o Botafogo.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Flamengo"
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
