<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4" v-for="(profile, index) in profiles" :key="index">
                <ProfileCard
                :avatar="profile.avatar"
                :name="profile.name"
                :role="profile.role"
                :skills="profile.skills"
                :projects="profile.projects"
                :tasks="profile.tasks"
                :connections="profile.connections"
                :isConnected="profile.isConnected"
              />
            </div>
        </div>
    </div>    
  </template>
  
<script lang="ts" setup>
    import ProfileCard from '@/components/ConnectionsProfileCard.vue';
    import IProfile from '@/interfaces/IProfile';

    const profiles: Array<IProfile> = 
    [
        {
            avatar: require('@/assets/user-profile.jpg'),
            name: 'Mark Gilbert',
            role: 'UI Designer',
            skills: ['Figma', 'Sketch'],
            projects: 18,
            tasks: '834',
            connections: '129',
            isConnected: true
        },
        {
            avatar: require('@/assets/user-profile-1.jpg'),
            name: 'Eugenia Parsons',
            role: 'Developer',
            skills: ['Angular', 'React'],
            projects: 112,
            tasks: '2.31k',
            connections: '1.28k',
            isConnected: false
        },
        {
            avatar: require('@/assets/user-profile-2.jpg'),
            name: 'Francis Byrd',
            role: 'Developer',
            skills: ['HTML', 'React'],
            projects: 32,
            tasks: '1.25k',
            connections: '890',
            isConnected: false
        },
        {
            avatar: require('@/assets/user-profile-3.jpg'),
            name: 'Francis Byrd',
            role: 'Developer',
            skills: ['HTML', 'React'],
            projects: 32,
            tasks: '1.25k',
            connections: '890',
            isConnected: false
        },
        {
            avatar: require('@/assets/user-profile-4.jpg'),
            name: 'Francis Byrd',
            role: 'Developer',
            skills: ['HTML', 'React'],
            projects: 32,
            tasks: '1.25k',
            connections: '890',
            isConnected: false
        },
        {
            avatar: require('@/assets/user-profile-2.jpg'),
            name: 'Francis Byrd',
            role: 'Developer',
            skills: ['HTML', 'React'],
            projects: 32,
            tasks: '1.25k',
            connections: '890',
            isConnected: false
        }
    ]
  </script>
  