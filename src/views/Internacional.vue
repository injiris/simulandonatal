<template>
    <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Internacional</h2>
    <div>
    <v-img
      class="img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/604px-Escudo_do_Sport_Club_Internacional.svg.png">
    </v-img>
    </div>
    <div class="texto">
    <p>O Internacional é um clube multiesportivo brasileiro com sede na cidade de Porto Alegre. Seus torcedores são conhecidos como colorados. Seu rival histórico é o Grêmio Foot-Ball. No futebol, é um dos clubes mais bem-sucedidos do Brasil e das Américas, sendo o terceiro maior campeão internacional do país.</p>
    </div>
  </v-container>
</template>

<script>
export default {
    name: 'Internacional'
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
  height: 225px;
  margin-left: 65px;
}


</style>