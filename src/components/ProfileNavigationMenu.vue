<template>
  <div class="sidebar mx-auto mt-4">
    <ul class="d-flex">
      <router-link :to="{ name: 'Profile' }" class="btn btn-lg me-2" :class="{ active: $route.name === 'Profile' }">
        <i class="bi bi-person-check mx-1"></i>
        Profile
      </router-link>

      <router-link :to="{ name: 'Team' }" class="btn btn-lg me-2" :class="{ active: $route.name === 'Team' }">
        <i class="bi bi-people-fill mx-1"></i>
        Team</router-link>

      <button class="btn btn-lg me-2">
        <i class="bi bi-grid mx-1"></i>
        Projects</button>
        
      <button class="btn me-2">
        <i class="bi bi-link-45deg mx-1"></i>
        Connections</button>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.sidebar {

  width: 70%;
  background-color: $background-color;
  border-radius: $border-radius;

  ul {
    list-style: none;
    padding: 0;

    .btn{
      color: $font-color;
      font-size: 1rem;
      font-weight: 500;
      transition: $transition;

      i{
        font-size: 1.2rem;
      } 
    }

    .active{
      background-color: $primary-color;
      color: $background-white;
    }

    .btn:hover {
      color: $background-color;
      cursor: pointer;
      background-color: $primary-color;
    }
  }
}
</style>
