<template>
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <div class="d-flex align-items-center">
          <img :src="icon" alt="" class="icon" /> 
        
          <div class="d-flex flex-column project-title-container">
            <span>{{ name }}</span>
            <small>{{ type }}</small>
          </div>
        </div>
      </td>
      
      <td>
        <span class="leader-text">{{ leader }}</span>
      </td>
      <td>
        <div class="team-avatars d-flex align-items-center">
          <img v-for="member in team" :src="member" :key="member" class="img-fluid rounded-circle avatar" />
          <span v-if="team && team.length >= 3">+{{team.length * 2}}</span>
        </div>
      </td>
      <td>
        <div class="d-flex align-items-center">
        <div class="progress">
              <div class="progress-bar"
              role="progressbar"
              :style="{ width: progress + '%' }"
              aria-valuenow="progress"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
        </div>
          <span class="ps-3">{{ progress }}%</span>
        </div>
      </td>
      <td class="pe-4">
        <button class="btn text-center"><i class="bi bi-three-dots-vertical"></i></button>
      </td>
    </tr>
  </template>
  
<script lang="ts" setup> 
    import { defineProps } from 'vue'

    const props = defineProps({
            name: { type: String, required: true },
            type: { type: String, required: true },
            leader: { type: String, required: true },
            team: { type: Array as () => string[], required: true },
            progress: { type: Number, required: true },
            icon: { type: String, required: true }
          });
  </script>
  
  <style lang="scss" scoped>

  tr{
    td{
      padding-left: 23px;
      color: $font-color;
      font-weight: 600;
      vertical-align: middle;

      .leader-text{
        color: $font-color-soft;
      }

      input[type="checkbox"] {
        width: 16px;
        height: 16px;
        border-radius: 5px; 
        border: 2px solid #7a79797c; 
        appearance: none;
        outline: none;
        cursor: pointer;
      }

      input[type="checkbox"]:checked {
        background-color: $primary-color; 
      }

      .project-title-container{
        small{
          color: $font-color-soft;
        }
      }

      .team-avatars{
        padding-left: 15px;
        .avatar{
          width: 30px;
          height: 30px;
          margin-left: -17px;
          border: 1px solid $background-white;
        }

        span{
          border: 2px solid $background-white;
          border-radius: 50px;
          padding: 2px 5px; 
          background-color: #d1d1d1;
          color: $font-color;
          margin-left: -17px;
        }
      }

      .progress{
        width: 75px;
        height: 7px;

        .progress-bar {
          background-color: #5a67d8;
        }
      }
    }
  }
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }

  </style>
  