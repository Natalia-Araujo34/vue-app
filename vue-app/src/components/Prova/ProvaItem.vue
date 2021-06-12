<template> 
<div class="float-right">
<span class="float-right">
    {{prova.name}}
    {{prova.numques}}
    {{prova.dataprova}}
    <i class="glyphicon glyphicon-pencil" @click="$emit('edit-prova-item', prova.id)">Editar</i>
    <i class="glyphicon glyphicon-trash" @click="$emit('del-prova-item', prova.id)">Deletar</i> 
</span>
</div>
</template>

<script>
export default {
    name: "ProvaItem", 
    props: ["prova"]
}
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px; 
        padding: 4px;
    }
</style>