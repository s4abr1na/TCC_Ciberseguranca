<script setup>
// Importamos a página "Home" criada na pasta views
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app-container">
    <RouterView />
  </div>
</template>

<style>
/* Estilos globais para o aplicativo inteiro */
body {
  margin: 0;
  background-color: #f4f7f6; /* Um cinza bem clarinho, descansa os olhos */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app-container {
  max-width: 412px; /* Largura máxima de um celular */
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

</style>