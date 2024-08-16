<!-- /src/components/ActivityTimeline.vue -->
<template>
  <div class="activity-timeline mb-4">
    <h5 class="mb-4"><i class="bi bi-bar-chart-line"></i> Activity Timeline</h5>

      <div class="activity-content">    
        <div class="activity-header d-flex">
          <strong><i class="bi bi-circle-fill i-1 icon-with-line icon-with-line-1"></i> 12 Invoices have been paid</strong>
          <span class="activity-time ms-0">12 min ago</span>
        </div>
        <p class="activity-description">Invoices have been paid to the company</p>
        <div class="pdf p-1">
          <span class="d-flex align-items-center"><i class="bi bi-file-pdf-fill mx-2"></i>
          Invoice.pdf</span>
        </div>
      </div>

      <div class="activity-content">    
        <div class="activity-header d-flex">
          <strong><i class="bi bi-circle-fill i-2 icon-with-line icon-with-line-2"></i> Client meeting</strong>
          <span class="activity-time ms-0">45 min ago</span>
        </div>
        <p class="activity-description">Project meeting with john @10:15am</p>

        <div class="client-meeting-user d-flex align-items-center">
          <img src="@/assets/user-profile.jpg" class="img-fluid rounded-circle" alt="meeting">
          <div>
            <p>Lester McCarthy (Client)</p>
            <span>CEO of Pixivent</span>
          </div>
        </div>
        
      </div>

      <div class="activity-content">    
        <div class="activity-header d-flex">
          <strong><i class="bi bi-circle-fill i-3 icon-with-line icon-with-line-3"></i> Create a new project for client</strong>
          <span class="activity-time ms-0">2 Day ago</span>
        </div>
        <p class="activity-description">6 team members in a project</p>
        <div class="team-users-img-container d-flex align-items-center">
          <img src="@/assets/user-profile.jpg" class="img-fluid rounded-circle" alt="meeting">
          <img src="@/assets/user-profile-1.jpg" class="img-fluid rounded-circle" alt="meeting">
          <img src="@/assets/user-profile-2.jpg" class="img-fluid rounded-circle" alt="meeting">
          <span>+3</span>
        </div>
      </div>
      
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.activity-timeline 
{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  color: $font-color;
  box-shadow: $box-shadow-full;
  
  h5 {
    font-weight: bold;
    margin-bottom: 20px;
  }

  .activity-content {
    margin-top: 26px;

    .activity-description {
      margin: 8px 0 10px 37px;
      font-weight: 600;
      opacity: $opacity-soft;
    }

    .pdf{
      width: 140px;
      height: auto;
      background-color: #aeaeae38;
      border-radius: 8px;
      font-weight: 700;
      margin-left: 37px;
      opacity: 0.7;
      cursor: pointer;
      transition: $transition;
      
      i{
        font-size: 1.25rem;
        color: #ff0000;
      }
    }

    .pdf:hover{
      opacity: 1;
    }

    .client-meeting-user{ 
      
      img{
        width: 40px;
        height: 40px;
        margin-left: 35px;
      }

      div{
        margin-left: 15px;
        opacity: $opacity-soft;

        p{
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 0;
          
        }

        span{
          font-weight: 600;
        }
      }
    }

    .team-users-img-container{
      margin-left: 35px;
      padding-left: 15px;

      img{
        width: 40px;
        height: 40px;
        margin-left: -12px;
      }

      span{
        border: 2px solid #fff;
        border-radius: 50px;
        padding: 9px 12px;
        background-color: #d1d1d1;
        color: #6E6B7B;
        margin-left: -12px;
      }
    }
    .activity-header {
      justify-content: space-between;
      align-items: center;

      .i-1{
        font-size: 13px;
        margin-right: 12px;
        color: $primary-color;
      }

      .i-1::before{
        border: 2px solid #87c7ff4a;
        border-radius: 50%;
      }

      .i-2{
        font-size: 13px;
        margin-right: 12px;
        color: $secondary-color;
      }

      .i-2::before{
        border: 2px solid #87c7ff4a;
        border-radius: 50%;
      }

      .i-3{
        font-size: 13px;
        margin-right: 12px;
        color: #007bff;
      }

      .i-3::before{
        border: 2px solid #87c7ff4a;
        border-radius: 50%;
      }

      .icon-with-line::after {
        content: "";
        position: absolute;
        margin-left: -9px;
        bottom: 0;
        width: 2px;
        height: 95px;
        background-color: #00000059;
        opacity: $opacity-soft;
        transform: translateX(-50%); 
      }

      .icon-with-line-1::after {
        top: 746px;
      }

      .icon-with-line-2::after {
        height: 105px;
        top: 875px;
      }

      .icon-with-line-3::after {
        top: 1015px;
      }

      .activity-time{
        opacity: $opacity;
      }
    }
  }
}

</style>
