<template>
    <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Corinthians</h2>
    <div>
    <v-img
      class="img"
      src="https://http2.mlstatic.com/D_NQ_NP_818583-MLB31205518515_062019-O.jpg">
    </v-img>
    </div>
    <div class="texto">
    <p>O Corinthians (mais conhecido como Corinthians, e pelos apelidos de "Timão" e "Coringão") é um clube multiesportivo brasileiro da cidade de São Paulo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro.</p>
    </div>
  </v-container>
</template>

<script>
export default {
    name: "Corinthians"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap');

.home-image {
  border-radius: 3px;
}

p{
  font-family: 'Sulphur Point', sans-serif;
  text-align: center;
  font-size: 20px;
}

.texto{
  margin-left:30px;
  margin-right:30px;
}

h2{
  font-family: 'Sulphur Point', sans-serif;
  text-align: center;
}

.img{
  margin-bottom:16px;
  border-radius: 3px;
  width: 225px;
  height: 250px;
  margin-left: 65px;
}


</style>