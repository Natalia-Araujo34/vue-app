<template>
<div>
<form @submit="addProva">
    <h3>Cadastrar Prova</h3>
    <h6>Insira ou atualize os dados nos campos abaixo.</h6>
      <label>Matéria</label>
      <br>
      <input type="text" name="name" v-model="name" placeholder="Insira a matéria da prova...">
      <br>
      <br>
      <label>Número de perguntas</label>
      <br>
      <input type="text" name="notamax" v-model="numques" placeholder="Ex.: 10">
      <br>
      <br>
      <label>Data da Prova</label>
      <br>
      <input type="text" name="dataprova" v-model="dataprova" placeholder="Ex.: 00/00/0000">
      <br>
      <br>
      <input type="submit" value="Submit" class="btn btn-info">
</form>
</div>
</template>

<script>
   export default {
       name: "AddProvaItem",
       props: ['editProva'],
       data () {
           return {
               name: '', 
               numques: '', 
               dataprova: '',
               id: '', 
               edit: false
           }
       }, 
       methods: {
            addProva(e){
                e.preventDefault();
                if (this.edit === false){
                    
                    const newProva = {
                        name: this.name,
                        numques: this.numques, 
                        dataprova: this.dataprova,
                        id: Math.floor(Math.random() * 100)
                    };
                    if (newProva.name !== ''){
                        this.$emit('add-prova-event', newProva);
                    }
                    this.name = '',
                    this.numques = '',
                    this.dataprova = ''
                }else{
                    
                    const provaItem = {
                        name: this.name,
                        numques: this.numques, 
                        dataprova: this.dataprova,
                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-prova-event', provaItem);
                    // clear input field
                    this.name = '';
                    this.numques = ''; 
                    this.dataprova = '';
                    this.edit = false;
                }
            }
        },
        watch: {
            editProva: {
                handler() {
                    this.name = this.editProva.name; 
                    this.id = this.editProva.id; 
                    this.numques = this.editProva.numques;
                    this.dataprova = this.editProva.dataprova
                    this.edit = true
                }, 
                deep: true
            }, 
            name:{
                handler(){
                    if(this.name === ''){
                        this.edit = false; 
                    }
                }
            }
        }
       }
   
</script>

<style scoped>
</style>