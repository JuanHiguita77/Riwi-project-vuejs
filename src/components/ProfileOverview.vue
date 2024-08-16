<template>
    <div class="overview-card p-4">
      <h5 class="mb-3">Overview</h5>
      <ul class="list-unstyled">
        <li class="mt-2"> <i class="bi bi-check2 me-2"></i>
          <strong class="me-2">Task Compiled:</strong>  {{ overview.taskCompiled }}k
         </li>
         <li class="mt-2"> <i class="bi bi-person me-2"></i> 
          <strong class="me-2">connections:</strong>  {{ overview.connections }}
         </li>
         <li class="mt-2"> <i class="bi bi-grid me-2"></i>
          <strong class="me-2">Projects Compiled:</strong>  {{ overview.projectsCompiled }}
         </li>
      </ul>
    </div>
  </template>
  
<script lang="ts" setup>
  import IOverview from '@/interfaces/IOverview'

  const overview:IOverview =
  {
    taskCompiled: 13.5,
    connections: 897,
    projectsCompiled: 146
  }
</script>
  
<style scoped lang="scss">

.overview-card {
  background-color: $background-white;
  color: $font-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow-full;
  
  ul{
      opacity: 0.8;

      i{
          font-size: 1.2rem;
      }
  }

  h5 {
    opacity: 0.4;
  }
}
</style>
  