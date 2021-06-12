<template>
<div id="app">
    <h1>Cadastro: </h1>
    <h5>Selecione o cadastro que deseja realizar...</h5>
    <router-link to="/subject" tag="button">Cadastrar Matéria</router-link>
    <router-link to="/student" tag="button">Cadastrar Estudantes</router-link>
    <router-link to="/prova" tag="button">Cadastrar Provas</router-link>
    <router-view />
</div>
</template>



<style> 
#app {
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px; 
}
</style>