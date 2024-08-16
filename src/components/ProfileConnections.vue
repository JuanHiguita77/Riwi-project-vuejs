<!-- /src/components/Connections.vue -->
<template>
    <div class="card">
      <div class="card-body p-4">
        <div class="title-container d-flex mb-4">
            <h5 class="card-title">Connection</h5>
            <i class="bi bi-three-dots-vertical ms-auto me-2"></i>  
        </div>

        <ul class="list-group list-group-flush">
          <ConnectionItem
            v-for="(connection, index) in connections"
            :key="index"
            :name="connection.name"
            :connections="connection.connections"
            :image="connection.image"
            :online="connection.online"
          />
        </ul>

        <a href="#" class="btn btn-link w-100 text-decoration-none text-center">View all connections</a>
        
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
  import ConnectionItem from './ConnectionItem.vue';
  import IConnections from '@/interfaces/IConnections'

    const connections:Array<IConnections> = 
    [
        {
            name: 'Cecilia Payne',
            connections: '45 Connections',
            image: require('@/assets/user-profile.jpg'),
            online: true
        },
        {
            name: 'Curtis Fletcher',
            connections: '1.32k Connections',
            image: require('@/assets/user-profile-1.jpg'),
            online: false
        },
        {
            name: 'Alice Stone',
            connections: '125 Connections',
            image: require('@/assets/user-profile-2.jpg'),
            online: false
        },
        {
            name: 'Darrell Barnes',
            connections: '456 Connections',
            image: require('@/assets/user-profile-3.jpg'),
            online: true
        },
        {
            name: 'Eugenia Moore',
            connections: '1.2k Connections',
            image: require('@/assets/user-profile-4.jpg'),
            online: true
        }
    ]
</script>

<style lang="scss" scoped>
    .card{
        box-shadow: $box-shadow-full;
        border: none;
        .card-body{
            .title-container{
                .card-title{
                    opacity: $opacity;
                    font-size: 1.1rem;
                    font-weight: 700;
                }
                
                i{
                    opacity: $opacity;
                    cursor: pointer;
                    font-size: 1.1rem;
                }
            }
            
            a{
                margin-top: 10px;
                font-weight: 600;
                color: $primary-color;
            }
        }
    }
    </style>