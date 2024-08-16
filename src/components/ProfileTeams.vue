<!-- /src/components/Teams.vue -->
<template>
    <div class="card">
      <div class="card-body p-4">
        <div class="title-container d-flex mb-4"> 
          <h5 class="card-title">Teams</h5>
          <i class="bi bi-three-dots-vertical ms-auto me-2"></i>
        </div>
        
        <ul class="list-group list-group-flush">
          <TeamItem
            v-for="(team, index) in teams"
            :key="index"
            :name="team.name"
            :members="team.members"
            :badge="team.badge"
            :icon="team.icon"
          />
        </ul>
        
        <a class="btn btn-link w-100 text-decoration-none text-center">View all Teams</a>
         
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import TeamItem from './TeamItem.vue'
  import ITeam from '@/interfaces/ITeam'

        const teams:Array<ITeam> = 
        [
            { 
                name: 'React Developers', 
                members: '72 Members', 
                badge: 'Developer', 
                icon: require("@/assets/icons/react-icon.png")
            },
            { 
                name: 'Support Team', 
                members: '122 Members', 
                badge: 'Support', 
                icon: require("@/assets/icons/team-icon.png")
            },
            { 
                name: 'UI Designer', 
                members: '7 Members', 
                badge: 'Designer', 
                icon: require("@/assets/icons/figma-icon.png")
            },
            { 
                name: 'Vue.js Developers', 
                members: '289 Members', 
                badge: 'Developer', 
                icon: require("@/assets/icons/vue-icon.png")
            },
            { 
                name: 'Digital Marketing', 
                members: '24 Members', 
                badge: 'Marketing', 
                icon: require("@/assets/icons/twitter-icon.png")
            }
        ]
  </script>
  
<style lang="scss" scoped>
.card
{
  box-shadow: $box-shadow-full;
  border: none;

  .card-body{

      .title-container{
        .card-title{
          opacity: 0.8;
          font-size: 1.1rem;
          font-weight: 700;
        }

        i {
          opacity: 0.8;
          cursor: pointer;
          font-size: 1.1rem;
        }
      }

    a{
      color: $primary-color;
      font-weight: 600;
      margin-top: 10px;
    }
  }
}
</style>