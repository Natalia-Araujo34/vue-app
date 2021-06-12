<template>
<div>
<form @submit="addStudent">
    <h3>Dados do Aluno</h3>
    <h6>Insira ou atualize os dados nos campos abaixo.</h6>
      <label>Nome do Aluno</label>
      <br>
      <input type="text" name="name" v-model="name" placeholder="Insira o nome do aluno...">
      <br>
      <br>
      <label>RG do Aluno</label>
      <br>
      <input type="text" name="rg" v-model="rg" placeholder="Ex.: 00.000.000-00">
      <br>
      <br>
      <label>Data de Nascimento</label>
      <br>
      <input type="text" name="datebd" v-model="datebd" placeholder="Ex.: 00/00/0000">
      <br>
      <br>
      <input type="submit" value="Submit" class="btn btn-info">
</form>
</div>
</template>

<script>
   export default {
       name: "AddStudentItem",
       props: ['editStudent'],
       data () {
           return {
               name: '', 
               rg: '', 
               datebd: '',
               id: '', 
               edit: false
           }
       }, 
       methods: {
            addStudent(e){
                e.preventDefault();
                if (this.edit === false){
                    
                    const newStudent = {
                        name: this.name,
                        rg: this.rg, 
                        datebd: this.datebd,
                        id: Math.floor(Math.random() * 100)
                    };
                    if (newStudent.name !== ''){
                        this.$emit('add-student-event', newStudent);
                    }
                    this.name = '',
                    this.rg = '',
                    this.datebd = ''
                }else{
                    
                    const studentItem = {
                        name: this.name,
                        rg: this.rg, 
                        datebd: this.datebd,
                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-student-event', studentItem);
                    // clear input field
                    this.name = '';
                    this.rg = ''; 
                    this.datebd = '';
                    this.edit = false;
                }
            }
        },
        watch: {
            editStudent: {
                handler() {
                    this.name = this.editStudent.name; 
                    this.id = this.editStudent.id; 
                    this.rg = this.editStudent.rg;
                    this.datebd = this.editStudent.datebd
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