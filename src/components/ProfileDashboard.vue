<template>
    <div class="row mb-4">
      <!-- Connections Section -->
      <div class="col-md-6">
        <Connections />
      </div>
  
      <!-- Teams Section -->
      <div class="col-md-6">
        <Teams />
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
    import Connections from './ProfileConnections.vue';
    import Teams from './ProfileTeams.vue';
 
</script>
  