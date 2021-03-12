<template>
  <div></div>
</template>
<script>
export default {
  name:'Tabela',
  computed: {
    ordernarClubes(){
      const ordernar = this.clubesTabela.slice(0).sort((a,b)=> a.pontos > b.pontos ? -1 : 1 )
      return ordernar;
    }
  },
  data(){
    return {
      clubesTabela: []
    }
  },
  created(){
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
    .then(res => res.json()
    .then(json => {this.clubesTabela = json}))
  }
}
</script>
<style scoped>

</style>