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
  import ProjectCard from './TeamProjectCard.vue';
  import IProject from '@/interfaces/IProjectFull';
  
  const projects: Array<IProject> = [
    {
      title: 'Social Banners',
      client: 'Christian Jimenez',
      budget: '$24.8k',
      spent: '$18.2k',
      startDate: '14/2/21',
      deadline: '28/2/22',
      description: 'We are Consulting, Software Development and Web Development Services.',
      allHours: '380/244',
      tasks: '290/344',
      daysLeft: '28',
      daysLeftBadge: 'badge-success',
      progress: 95,
      team: [
        require('@/assets/user-profile.jpg'),
        require('@/assets/user-profile-1.jpg'),
        require('@/assets/user-profile-2.jpg')
      ],
      teamCount: '280 members',
      comments: '15',
      icon: '/path/to/icon1.png'
    },
    {
      title: 'Admin Template',
      client: 'Jeffrey Phillips',
      budget: '$2.4k',
      spent: '$1.8k',
      startDate: '18/8/21',
      deadline: '21/6/22',
      description: 'Time is our most valuable asset, that\'s why we want to save it by creating...',
      allHours: '98/135',
      tasks: '12/90',
      daysLeft: '15',
      daysLeftBadge: 'badge-warning',
      progress: 42,
      team: [
        require('@/assets/user-profile.jpg'),
        require('@/assets/user-profile-1.jpg'),
        require('@/assets/user-profile-2.jpg')
      ],
      teamCount: '1.1k members',
      comments: '236',
      icon: '/path/to/icon2.png'
    },
    {
      title: 'App Design',
      client: 'Ricky McDonald',
      budget: '$980',
      spent: '$420',
      startDate: '24/7/21',
      deadline: '8/10/21',
      description: 'App design combines the user interface (UI) and user experience (UX).',
      allHours: '880/421',
      tasks: '22/140',
      daysLeft: '45',
      daysLeftBadge: 'badge-danger',
      progress: 68,
      team: [
        require(  '@/assets/user-profile.jpg'),
        require('@/assets/user-profile-1.jpg'),
        require('@/assets/user-profile-2.jpg')
      ],
      teamCount: '458 members',
      comments: '98',
      icon: '/path/to/icon3.png'
    }
  ];
  </script>
  
  <style scoped lang="scss">
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  </style>
  