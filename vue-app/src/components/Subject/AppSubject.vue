<template>
<div id="app">
  <AddSubjectItem v-on:add-subject-event="addSubjectItem" v-on:edit-subject-event="editSubjectItemEvent" v-bind:editSubject="editSubject"/>
  <div>
  <Subjects v-bind:subjects="subjects" v-on:del-subject-event="deleteSubjectItem" v-on:edit-subject-event="editSubjectItem"/>
  </div>
</div>
</template>

<script>
import Subjects from "./Subjects"; 
import AddSubjectItem from "./AddSubjectItem"; 

export default {
  subname: 'App', 
  components: {
    Subjects, 
    AddSubjectItem
  }, 
  data () {
    return {
      subjects: [], 
      editSubject: {
        subname: '', 
        categoria: '',
        profname: '',
        id: ''
      }
    }
  }, 
  methods: {
    addSubjectItem(newSubject){
      this.subjects = [...this.subjects, newSubject];
    }, 
    deleteSubjectItem(id){
      this.subjects = this.subjects.filter(subject => subject.id !== id); 
    }, 
    editSubjectItem(id){
      let objIndex = this.subjects.findIndex(obj=> obj.id === id);
      this.editSubject.subname = this.subjects[objIndex].subname;
      this.editSubject.categoria = this.subjects[objIndex].categoria;
      this.editSubject.profname = this.subjects[objIndex].profname;
      this.editSubject.id = id; 
    }, 
    editSubjectItemEvent(subjectItem){
      let objIndex = this.subjects.findIndex(obj => obj.id === subjectItem.id)
      this.subjects[objIndex].subname = subjectItem.subname; 
      this.subjects[objIndex].categoria = subjectItem.categoria;
      this.subjects[objIndex].profname = subjectItem.profname;  
    }
  }, 
  watch: {
    subjects: {
      handler() {
        localStorage.setItem('subjects', JSON.stringify(this.subjects))
      }, 
      deep: true
    }
  }, 
  mounted() {
    if(localStorage.getItem("subjects")){
      this.subjects = JSON.parse(localStorage.getItem("subjects"))
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