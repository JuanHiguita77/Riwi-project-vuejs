<template>
    <div class="col-md-4 mb-4">
        <div class="card project-card h-100">
            <div class="card-body pb-0">
                <div>
                    <div class="d-flex justify-content-between">
                      <div class="d-flex header-container">
                        <div>
                          <img :src=icon alt="icon" class="img-fluid rounded-circle me-2 project-icon">
                        </div>
                        <div>
                          <h5 class="card-title">{{ title }}</h5>  
                          <p class="card-text text-muted"><strong>Client:</strong> {{ client }}</p>
                        </div>
                      </div>
                      <div>
                        <i class="bi bi-three-dots-vertical"></i>
                      </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <div class="budget">
                        <strong>{{ budget }}</strong> / <span class="text-muted">{{ spent }}</span>
                        <p class="card-text">Total Budget</p>
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
                    <div class="days-left-container" 
                    :class="daysLeft >= 30 ? 'days-left-success' : 
                            daysLeft >= 15 ? 'days-left-alert' :
                            daysLeft <= 10 ? 'days-left-danger' : 'days-left-end'">
                      <span>{{ daysLeft }} Days left</span>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between task-completed">
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
                    
                    <div class="d-flex align-items-center comments">
                      <span>
                        <i class="bi bi-chat-left-text"></i> 
                        {{ comments }}
                      </span>
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
    color: $font-color;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: $border-radius;
    box-shadow: $box-shadow-full;
  
    .project-icon {
      width: 40px;
      height: 40px;
    }
  
    .budget {
      margin-top: 10px;
      background-color: #90909036;
      border-radius: $border-radius;
      padding: 8px;

      .card-text{
        font-weight: 600;
      }
    }
  
    .dates {
      margin-top: 10px;

      .card-text{
        margin: 0;
      }
    }
  
    .description {
      margin-top: 15px;
      font-size: 0.95rem;
      font-weight: 600;
    }
  
    .hours-tasks {

      .card-text-task{
        font-size: 0.9rem;
        margin-bottom: 0;
      }

      .task-completed{
        font-weight: 600;
      }

      .days-left-container{
        height: 28px;
        padding: 0 8px;
        border-radius: $border-radius;

        span{
          font-weight: 600;
        }
      }

      .days-left-success{
        background-color: rgba(40, 199, 111, 0.2705882353);
        color: #28C76F;
      }

      .days-left-alert{
        background-color: rgba(255, 82, 14, 0.2156862745);
        color: rgba(220, 62, 0, 0.4666666667);
      }

      .days-left-danger{
        background-color: rgba(255, 32, 32, 0.2352941176);
        color: rgba(255, 0, 0, 0.3411764706);
      }

      .days-left-end{
        background-color: rgba(144, 144, 144, 0.3490196078);
        color: #6E6B7B;
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

        .team-count{
          color: $font-color-soft;
        }
      }

    }
  
    .comments {
      color: $font-color-soft;

      i {
        margin-right: 5px;
      }
    }
  }
</style>
  