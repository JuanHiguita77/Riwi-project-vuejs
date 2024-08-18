<template>
    <div class="project-table bg-white">
      <div class="d-flex justify-content-between align-items-center project-header-container">
        <h5>Project List</h5>
        <input type="text" placeholder="Search Project"/>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>PROJECT</th>
            <th>LEADER</th>
            <th>TEAM</th>
            <th>PROGRESS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <ProjectRow
            v-for="project in projects"
            :key="project.id"
            :name="project.name"
            :type="project.type"
            :leader="project.leader"
            :team="project.team"
            :progress="project.progress"
            :icon="project.icon"
          />
        </tbody>
      </table>
      <nav class="navigation" aria-label="Page navigation">
        <ul class="pagination d-flex justify-content-end p-3 gap-2">
          <li class="page-item disabled"><a class="page-link" href="#">«</a></li>
          <li class="page-item disabled"><a class="page-link" href="#"> &lt; </a></li>

          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>

          <li class="page-item"><a class="page-link" href="#"> &gt; </a></li>
          <li class="page-item"><a class="page-link" href="#">»</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
<script lang="ts" setup>
  import ProjectRow from './ProjectRow.vue'
  import IProject from '@/interfaces/IProject'

       const projects:Array<IProject> =
        [
          {
            id: 1,
            name: 'BGC eCommerce App',
            type: 'React Project',
            leader: 'Eileen',
            team: 
            [
              require('@/assets/user-profile.jpg'), 
              require('@/assets/user-profile-1.jpg'), 
              require('@/assets/user-profile-2.jpg')
            ],
            progress: 78,
            icon: require('@/assets/icons/react-icon.png'),
          },
          {
            id: 2,
            name: 'Falcon Logo Desing',
            type: 'Figma Project',
            leader: 'Owen',
            team: 
            [
              require('@/assets/user-profile.jpg'), 
              require('@/assets/user-profile-1.jpg'), 
            ],
            progress: 25,
            icon: require('@/assets/icons/figma-icon.png'),
          },
          {
            id: 3,
            name: 'Dashboard Design',
            type: 'Vuejs Project',
            leader: 'Keith',
            team: 
            [
              require('@/assets/user-profile.jpg'), 
              require('@/assets/user-profile-1.jpg'), 
              require('@/assets/user-profile-2.jpg')
            ],
            progress: 62,
            icon: require('@/assets/icons/vue-icon.png'),
          },
          {
            id: 4,
            name: 'Foodista mobile app',
            type: 'Xamarin Project',
            leader: 'Merline',
            team: 
            [
              require('@/assets/user-profile.jpg'), 
              require('@/assets/user-profile-1.jpg'), 
              require('@/assets/user-profile-2.jpg'),
              require('@/assets/user-profile-3.jpg')
            ],
            progress: 8,
            icon: require('@/assets/icons/xamarin-icon.png'),
          },
          {
            id: 1,
            name: 'Dojo Email App',
            type: 'Python Project',
            leader: 'Harmonia',
            team: 
            [
              require('@/assets/user-profile.jpg'), 
              require('@/assets/user-profile-1.jpg'), 
              require('@/assets/user-profile-2.jpg')
            ],
            progress: 51,
            icon: require('@/assets/icons/python-icon.png'),
          }
        ]
</script>
  
<style lang="scss" scoped>
.project-table{

  box-shadow: $box-shadow-full;
  border-radius: $border-radius;
  
  .project-header-container{
    padding: 1.5rem;

    input{
      padding: 1.1rem;
      border: 1px solid #7a7979;
      border-radius: $border-radius;
      height: 30px;
      font-weight: 600;
      opacity: $opacity-soft;
    }
  }

  h5{
    opacity: $opacity-soft;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .table{
    margin-bottom: 0;

    tr{

      border-top-width: 1px;

      th{
        padding-left: 24px;
        padding-top: 18px;
        padding-bottom: 18px;
        font-size: 0.8rem;
        color: $font-color;

        input[type="checkbox"] {
          width: 16px;
          height: 16px;
          border-radius: 5px; /* Hace el checkbox redondo */
          border: 2px solid #7a79797c; /* Borde azul, por ejemplo */
          appearance: none; /* Remueve el estilo por defecto del checkbox */
          outline: none;
          cursor: pointer;
        }

        input[type="checkbox"]:checked {
          background-color: $primary-color; /* Cambia el fondo al estar marcado */
        }
      }
    }
  }

  .navigation{
    .pagination{
      .page-item{
        .page-link:focus {
          background-color: $primary-color; 
          color: white; 
          outline: none; 
          box-shadow: none; 
        }
        .page-link:hover{
          background-color: $primary-color;
          color: $background-white;
        }

        a{
          color: $font-color;
          border-radius: $border-radius;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
  