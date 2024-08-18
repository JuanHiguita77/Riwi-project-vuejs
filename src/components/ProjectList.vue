<template>
    <div class="container">
      <div class="row">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index" 
          v-bind="project"
        />
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
  import ProjectCard from './ProjectCards.vue'
  import IProject from '@/interfaces/IProjectFull'
  import ProjectsDB from '@/assets/helpers/ProjectsDB'

    const projects: Array<IProject> = ProjectsDB.map((project:IProject):IProject => ({
    ...project,
    team: project.team.map((member:string) => require(`@/assets/${member}`)),
    icon: require(`@/assets/${project.icon}`)
  }));
  </script>
  
  <style scoped lang="scss">
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  </style>
  