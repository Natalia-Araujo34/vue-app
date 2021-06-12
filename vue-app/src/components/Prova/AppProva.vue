<template>
<div id="app">
  <AddProvaItem v-on:add-prova-event="addProvaItem" v-on:edit-prova-event="editProvaItemEvent" v-bind:editProva="editProva"/>
  <div>
  <Provas v-bind:provas="provas" v-on:del-prova-event="deleteProvaItem" v-on:edit-prova-event="editProvaItem"/>
  </div>
</div>
</template>

<script>
import Provas from "./Provas"; 
import AddProvaItem from "./AddProvaItem"; 

export default {
  name: 'App', 
  components: {
    Provas, 
    AddProvaItem
  }, 
  data () {
    return {
      provas: [], 
      editProva: {
        name: '', 
        numques: '',
        dataprova: '',
        id: ''
      }
    }
  }, 
  methods: {
    addProvaItem(newProva){
      this.provas = [...this.provas, newProva];
    }, 
    deleteProvaItem(id){
      this.provas = this.provas.filter(prova => prova.id !== id); 
    }, 
    editProvaItem(id){
      let objIndex = this.provas.findIndex(obj=> obj.id === id);
      this.editProva.name = this.provas[objIndex].name;
      this.editProva.numques = this.provas[objIndex].numques;
      this.editProva.dataprova = this.provas[objIndex].dataprova;
      this.editProva.id = id; 
    }, 
    editProvaItemEvent(provaItem){
      let objIndex = this.provas.findIndex(obj => obj.id === provaItem.id)
      this.provas[objIndex].name = provaItem.name; 
      this.provas[objIndex].numques = provaItem.numques;
      this.provas[objIndex].dataprova = provaItem.dataprova;  
    }
  }, 
  watch: {
    provas: {
      handler() {
        localStorage.setItem('provas', JSON.stringify(this.provas))
      }, 
      deep: true
    }
  }, 
  mounted() {
    if(localStorage.getItem("provas")){
      this.provas = JSON.parse(localStorage.getItem("provas"))
    }
  }
}

</script>

<style> 
#app {
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px; 
}
</style>