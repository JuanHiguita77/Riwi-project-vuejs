<!-- src/components/ProfileHeader.vue -->
<template>
  <div class="profile-header mx-auto mt-5 bg-white d-flex align-items-end">
    <!--   <div class="header-background w-100"></div>-->

      <div class="profile-info-container p-2 d-flex w-100 ">
        <div class="profile-image">
          <img :src="user.image" alt="Profile Image" class="img-thumbnail img-fluid m-4" />
        </div>
        
        <div class="profile-details mb-4">
          <h3 class="mb-4">{{ user.name }}</h3>
          <div class="d-flex align-items-center text-muted">
            <i class="bi bi-palette me-2"></i><p class="mb-1 me-4">{{ user.role }}</p>
            <i class="bi bi-geo-alt me-2"></i> <p class="mb-1 me-4"> {{ user.location }}</p>
            <i class="bi bi-calendar3 me-2"></i> <p class="mb-1"> Joined {{ user.joined }}</p>
          </div>
        </div>

        <div class="ms-auto d-flex align-items-end">
         
          <button class="btn btn-lg text-white m-3" @click="toggleConnection"> 
            <i class="bi bi-person-check me-2"></i>
            {{ connectionText }}
          </button>

        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
  import { computed, Ref, ref } from 'vue';
  import IUser from '@/interfaces/IUser';

  let isConnected:Ref<boolean> = ref(true);

  const user:IUser =
  {
    name: "John Doe",
    role: "Coder",
    location: "Medellin",
    joined: "April 2024",
    image: require("@/assets/user-profile.jpg")
  }

  const toggleConnection = () => 
  {
    isConnected.value = !isConnected.value;
  }

  const connectionText = computed(() => isConnected.value ? "Connected" : "Disconnected");
  
</script>

<style lang="scss" scoped>

.profile-header 
{
  width: 70%;
  height: 410px;
  border-radius: 8px;
  background: url('@/assets/header-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: $box-shadow;

  .profile-info-container
  {

    .profile-image
    {
      img {
        width: 140px;
        height: 150px;
      }
    }

    .profile-details
    {
      margin-top: 80px;
    }

    .profile-details h4 {
      font-size: 1.25rem;
    }
  
    .profile-details p {
      font-size: 1rem;
    }

    i 
    {
      font-size: 1.20rem;
    }
  
    .btn {
      font-size: 1rem;
      font-weight: 500;
      background-color: $primary-color;
    }
  }
}

</style>
