<template>
  <div class="splash">
    <div class="logo-area">
      <img src="@/assets/logo-fundo-branco.png" class="logo-img" />
      <img src="@/assets/logo-lupa-globo.png" class="logo-globo-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
  mounted() {
    setTimeout(() => {
      this.$router.push('/pagina-onboarding')
    }, 3000)
  }
}
</script>

<style scoped>
@import '@/assets/style.css';

@keyframes slideOut {
  to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>