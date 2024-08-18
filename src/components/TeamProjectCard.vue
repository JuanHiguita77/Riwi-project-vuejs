<template>
    <div class="col-md-4 mb-4">
        <div class="card project-card h-100">
            <div class="card-body pb-0">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex">
                        <img :src=icon alt="icon" class="img-fluid rounded-circle"> 
                        <div class="header-container">
                            <div class="d-flex w-100 align-items-center justify-content-between">
                              <h5 class="card-title">{{ title }}</h5>
                              <i class="bi bi-three-dots-vertical"></i> 
                            </div>
                            <p class="card-text text-muted">Client: {{ client }}</p>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="budget">
                        <strong>{{ budget }}</strong> / <span class="text-muted">{{ spent }}</span>
                        <p class="card-text text-muted">Total Budget</p>
                    </div>
                    
                    <div class="dates d-flex">
                        <div>
                            <p class="card-text"><strong>Start Date: </strong> {{ startDate }}</p>
                            <p class="card-text"><strong>Deadline: </strong> {{ deadline }}</p>
                        </div>
                    </div>
                </div>    

                <p class="description">{{ description }}</p>

                <div class="hours-tasks">
                  <div class="d-flex justify-content-between">
                    <p class="card-text"><strong> All Hours:</strong> {{ allHours }}</p>
                    <div :class="daysLeftBadge">{{ daysLeft }} Days left</div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <p class="card-text-task">Task: {{ tasks }}</p>
                    <span>{{ progress }}% Completed</span>
                  </div>
                </div>

                <div class="progress-bar-container">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }"></div>
                    </div>
                </div>

                <div class="team d-flex align-items-center justify-content-between">
                    <div class="team-member">
                        <img v-for="(member, index) in team" :key="index" :src="member" alt="Team Member" class="avatar">
                        <span class="ps-4 team-count">{{ teamCount }}</span>
                    </div>
                    
                    <div class="comments">
                      <span><i class="bi bi-chat-left-text"></i> {{ comments }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import IProjectFull from '@/interfaces/IProjectFull';
    import { defineProps } from 'vue'

    defineProps<IProjectFull>();
</script>
  
<style scoped lang="scss">
  .project-card {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    .project-icon {
      width: 40px;
      height: 40px;
    }
  
    .budget {
      margin-top: 10px;
    }
  
    .dates {
      margin-top: 10px;

      .card-text{
        margin: 0;
      }
    }
  
    .description {
      margin-top: 15px;
    }
  
    .hours-tasks {
      margin-top: 10px;

      .card-text-task{
        font-size: 0.9rem;
        margin-bottom: 0;
      }
    }
  
    .progress-bar-container {
      margin-top: 5px;
  
      .progress {
        height: 5px;
        background-color: #e9ecef;
      }
  
      .progress-bar {
        background-color: #007bff;
      }
  
      span {
        display: block;
        margin-top: 5px;
        font-weight: bold;
      }
    }
  
    .team {
      margin-top: 15px;
  
      .team-member {
  
        .avatar {
          width: 30px;
          height: 30px;
          margin-right: -17px;
          border-radius: 50%;
        }
      }

    }
  
    .comments {
      display: flex;
      align-items: center;
  
      i {
        margin-right: 5px;
      }
    }
  }
</style>
  