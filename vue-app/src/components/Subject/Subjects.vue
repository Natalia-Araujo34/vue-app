<template>
<div>
    <h2>Cadastro de Matérias</h2>
    <div v-bind:key="subject.id" v-for="subject in subjects">
        <SubjectItem v-bind:subject="subject" v-on:del-subject-item="delSubjectMethod" v-on:edit-subject-item="editSubjectMethod"/>
    </div>
    <div v-if="!subjects.length">
       <p>Não há nenhuma matéria cadastrada.</p>
    </div>
</div>
</template>

<script>
import SubjectItem from "./SubjectItem";
export default {
    name: "Subjects", 
    props: ["subjects"], 
    components: {
        SubjectItem
    }, 
    methods: {
        delSubjectMethod(id){
            this.$emit('del-subject-event', id);
        },
        editSubjectMethod(id){
            this.$emit('edit-subject-event', id)
        }
    }
}

</script>

<style scoped>
</style>