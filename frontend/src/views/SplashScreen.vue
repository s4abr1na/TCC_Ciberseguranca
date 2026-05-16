<template>
  <div class="splash">
    <div class="logo-area">
      <img src="@/assets/logo-fundo-branco.png" alt="Logo Ciber Guardião" class="logo-img" />
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
.splash {
  background-color: #071c43;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-img {
  width: 350px;
  height: auto;
  margin-bottom: -80px
}

.logo-globo-img{
  width: 400px;
  height: auto;
}

.splash {
  background-color: #0d2a5e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideOut 0.3s ease 2.7s forwards;
}

@keyframes slideOut {
  to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>