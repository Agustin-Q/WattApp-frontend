<template>
  <div class="home">
    <div class="jumbotron">
  <h1 class="display-3">⚡ WattApp ⚡</h1>
  <p class="lead">
    This is a simple sensor logging app! 📈🎉
    </p>
  <hr class="my-4">
  <p>Created to lern web development! 🤓</p>
  <p class="lead">
    <router-link
    class="btn btn-primary btn-lg"
    :to="{name:'signup'}"
    role="button">Sign Up</router-link>
  </p>
</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
