<template> 
<div class="float-right">
<span class="float-right">
    {{subject.subname}}
    {{subject.categoria}}
    {{subject.profname}}
    <i class="glyphicon glyphicon-pencil" @click="$emit('edit-subject-item', subject.id)">Editar</i>
    <i class="glyphicon glyphicon-trash" @click="$emit('del-subject-item', subject.id)">Deletar</i> 
</span>
</div>
</template>

<script>
export default {
    name: "SubjectItem", 
    props: ["subject"]
}
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px; 
        padding: 4px;
    }
</style>