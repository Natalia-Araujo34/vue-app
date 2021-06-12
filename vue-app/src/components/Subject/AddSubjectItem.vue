<template>
<div>
<form @submit="addSubject">
    <h3>Dados da Matéria</h3>
    <h6>Insira ou atualize os dados nos campos abaixo.</h6>
      <label>Nome da Matéria</label>
      <br>
      <input type="text" subname="subname" v-model="subname" placeholder="Insira o nome do materia...">
      <br>
      <br>
      <label>Categoria</label>
      <br>
      <input type="text" subname="categoria" v-model="categoria" placeholder="Ex.: Exatas, Humanas...">
      <br>
      <br>
      <label>Professor Responsável</label>
      <br>
      <input type="text" subname="profname" v-model="profname" placeholder="Insira o nome do professor...">
      <br>
      <br>
      <input type="submit" value="Submit" class="btn btn-info">
</form>
</div>
</template>

<script>
   export default {
       subname: "AddSubjectItem",
       props: ['editSubject'],
       data () {
           return {
               subname: '', 
               categoria: '', 
               profname: '',
               id: '', 
               edit: false
           }
       }, 
       methods: {
            addSubject(e){
                e.preventDefault();
                if (this.edit === false){
                    
                    const newSubject = {
                        subname: this.subname,
                        categoria: this.categoria, 
                        profname: this.profname,
                        id: Math.floor(Math.random() * 100)
                    };
                    if (newSubject.subname !== ''){
                        this.$emit('add-subject-event', newSubject);
                    }
                    this.subname = '',
                    this.categoria = '',
                    this.profname = ''
                }else{
                    
                    const subjectItem = {
                        subname: this.subname,
                        categoria: this.categoria, 
                        profname: this.profname,
                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-subject-event', subjectItem);
                    // clear input field
                    this.subname = '';
                    this.categoria = ''; 
                    this.profname = '';
                    this.edit = false;
                }
            }
        },
        watch: {
            editSubject: {
                handler() {
                    this.subname = this.editSubject.subname; 
                    this.id = this.editSubject.id; 
                    this.categoria = this.editSubject.categoria;
                    this.profname = this.editSubject.profname
                    this.edit = true
                }, 
                deep: true
            }, 
            subname:{
                handler(){
                    if(this.subname === ''){
                        this.edit = false; 
                    }
                }
            }
        }
       }
   
</script>

<style scoped>
</style>