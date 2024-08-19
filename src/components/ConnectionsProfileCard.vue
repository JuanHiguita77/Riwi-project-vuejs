<template>
    <div class="card profile-card text-center shadow-sm">
      <div class="card-body">
        <img :src="avatar" alt="Profile Image" class="avatar img-fluid rounded-circle mb-3" />
        <h5 class="card-title">{{ name }}</h5>
        <p class="text-muted">{{ role }}</p>
        
        <div class="d-flex justify-content-center mb-3">
          <span v-for="(skill, index) in skills" :key="index" class="badge me-2" :class="getSkillBadgeClass(skill)">
            {{ skill }}
          </span>
        </div>
        
        <div class="d-flex justify-content-around text-muted mb-3">
          <div>
            <h6>{{ projects }}</h6>
            <small>Projects</small>
          </div>
          <div>
            <h6>{{ tasks }}</h6>
            <small>Tasks</small>
          </div>
          <div>
            <h6>{{ connections }}</h6>
            <small>Connections</small>
          </div>
        </div>
        
        <div class="d-flex justify-content-center footer-card-container">
          <button class="btn btn-sm me-2" :class=" isConnected ? 'connected' : 'connect'">
            <i class="bi bi-person-check"></i> {{ isConnected ? 'Connected' : 'Connect' }}
          </button>
          <button class="btn btn-sm btn-mail">
            <i class="bi bi-envelope mx-auto"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
    import { defineProps } from 'vue'
    import IProfile from '@/interfaces/IProfile'
  
    defineProps<IProfile>();

    const getSkillBadgeClass = (skill: string):string => {
        switch (skill.toLowerCase()) 
        {
          case 'figma':
          case 'html':
            return 'badge-figma';
          case 'sketch':
            return 'badge-sketch';
          case 'angular':
            return 'badge-angular';
          case 'react':
            return 'badge-react';
          default:
            return 'badge-figma';
        }
    }
  </script>
  
  <style scoped lang="scss">
  .profile-card {

    color: $font-color;

    .card-body{
        .text-muted{
            h6{
                font-weight: 600;
            }

            small{
                font-weight: 600;
            }
        }

        .footer-card-container{
            button{
                font-weight: 600;
            }

            .btn-mail{
                background-color: #90909047;
                color: $font-color;
            }

            .connected{
                background-color: $primary-color;
                color: $background-white;
            }

            .connect{
                background-color: #7267f046;
                color: $primary-color;
            }
        }

        .badge-sketch{
            background-color: #ff520e37;
            color: #dc3e0077;
        }

        .badge-react{
            background-color: #4425f62e;            
            color: $primary-color;
        }

        .badge-figma{
            background-color: #90909059;
            color: $font-color;
        }

        .badge-angular{
            background-color: rgba(255, 32, 32, 0.2352941176);
            color: rgba(255, 0, 0, 0.3411764706);
        }
    }

    .avatar {
      width: 70px;
      height: 70px;
    }
  
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
    }
  
    .badge {
      font-size: 0.75rem;
      padding: 0.5em 0.75em;
      border-radius: 0.5rem;
    }
  
    .btn {
      i {
        margin-right: 0.5em;
      }
    }
  }
  </style>
  