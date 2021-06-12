<template> 
<div class="float-right">
<span class="float-right">
    {{student.name}}
    {{student.rg}}
    {{student.datebd}}
    <i class="glyphicon glyphicon-pencil" @click="$emit('edit-student-item', student.id)">Editar</i>
    <i class="glyphicon glyphicon-trash" @click="$emit('del-student-item', student.id)">Deletar</i> 
</span>
</div>
</template>

<script>
export default {
    name: "StudentItem", 
    props: ["student"]
}
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px; 
        padding: 4px;
    }
</style>