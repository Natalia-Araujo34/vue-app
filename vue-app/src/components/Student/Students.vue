<template>
<div>
    <h2>Cadastro de Alunos</h2>
    <div v-bind:key="student.id" v-for="student in students">
        <StudentItem v-bind:student="student" v-on:del-student-item="delStudentMethod" v-on:edit-student-item="editStudentMethod"/>
    </div>
    <div v-if="!students.length">
       <p>Não há nenhum aluno cadastrado.</p>
    </div>
</div>
</template>

<script>
import StudentItem from "./StudentItem";
export default {
    name: "Students", 
    props: ["students"], 
    components: {
        StudentItem
    }, 
    methods: {
        delStudentMethod(id){
            this.$emit('del-student-event', id);
        },
        editStudentMethod(id){
            this.$emit('edit-student-event', id)
        }
    }
}

</script>

<style scoped>
</style>