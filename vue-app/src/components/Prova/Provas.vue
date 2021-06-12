<template>
<div>
    <h2>Cadastro de Provas</h2>
    <div v-bind:key="prova.id" v-for="prova in provas">
        <ProvaItem v-bind:prova="prova" v-on:del-prova-item="delProvaMethod" v-on:edit-prova-item="editProvaMethod"/>
    </div>
    <div v-if="!provas.length">
       <p>Não há nenhuma prova cadastrada.</p>
    </div>
</div>
</template>

<script>
import ProvaItem from "./ProvaItem";
export default {
    name: "Provas", 
    props: ["provas"], 
    components: {
        ProvaItem
    }, 
    methods: {
        delProvaMethod(id){
            this.$emit('del-prova-event', id);
        },
        editProvaMethod(id){
            this.$emit('edit-prova-event', id)
        }
    }
}

</script>

<style scoped>
</style>