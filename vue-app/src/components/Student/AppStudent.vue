<template>
<div id="app">
  <AddStudentItem v-on:add-student-event="addStudentItem" v-on:edit-student-event="editStudentItemEvent" v-bind:editStudent="editStudent"/>
  <div>
  <Students v-bind:students="students" v-on:del-student-event="deleteStudentItem" v-on:edit-student-event="editStudentItem"/>
  </div>
</div>
</template>

<script>
import Students from "./Students"; 
import AddStudentItem from "./AddStudentItem"; 

export default {
  name: 'App', 
  components: {
    Students, 
    AddStudentItem
  }, 
  data () {
    return {
      students: [], 
      editStudent: {
        name: '', 
        rg: '',
        datebd: '',
        id: ''
      }
    }
  }, 
  methods: {
    addStudentItem(newStudent){
      this.students = [...this.students, newStudent];
    }, 
    deleteStudentItem(id){
      this.students = this.students.filter(student => student.id !== id); 
    }, 
    editStudentItem(id){
      let objIndex = this.students.findIndex(obj=> obj.id === id);
      this.editStudent.name = this.students[objIndex].name;
      this.editStudent.rg = this.students[objIndex].rg;
      this.editStudent.datebd = this.students[objIndex].datebd;
      this.editStudent.id = id; 
    }, 
    editStudentItemEvent(studentItem){
      let objIndex = this.students.findIndex(obj => obj.id === studentItem.id)
      this.students[objIndex].name = studentItem.name; 
      this.students[objIndex].rg = studentItem.rg;
      this.students[objIndex].datebd = studentItem.datebd;  
    }
  }, 
  watch: {
    students: {
      handler() {
        localStorage.setItem('students', JSON.stringify(this.students))
      }, 
      deep: true
    }
  }, 
  mounted() {
    if(localStorage.getItem("students")){
      this.students = JSON.parse(localStorage.getItem("students"))
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