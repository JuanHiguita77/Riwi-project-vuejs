<template>
    <div class="about-card p-4 mb-4">
      <h5 class="mb-3">About</h5>
      <ul class="list-unstyled">
        <li class="my-2"> 
            <i class="bi bi-person me-2"></i> 
            <strong class="me-2">Full Name:</strong>  {{ user.name }}
        </li>
        <li class="my-2"> 
            <i class="bi bi-check2 me-2"></i> 
            <strong class="me-2">Status:</strong>  {{ user.status }}
        </li>
        <li class="my-2"> 
            <i class="bi bi-android me-2"></i> 
            <strong class="me-2"> Role:</strong>  {{ user.role }}
        </li>
        <li class="my-2"> 
            <i class="bi bi-flag me-2"></i> 
            <strong class="me-2">Country:</strong>  {{ user.country }}
        </li>
        <li class="mt-2 mb-4"> <i class="bi bi-translate me-2"></i>
         <strong class="me-2">Language:</strong>  {{ user.language }}
        </li>
      </ul>

      <h5 class="mb-3">Contacts</h5>
      <ul class="list-unstyled">
        <li class="my-3"> 
            <i class="bi bi-telephone-plus me-2"></i> 
            <strong class="me-2">Contact:</strong>  {{ user.contact }}
        </li>
        <li class="my-3"> 
            <i class="bi bi-chat-left me-2"></i> 
            <strong class="me-2">Skype:</strong>  {{ user.skype }}
        </li>
        <li class="mt-3 mb-4"> 
            <i class="bi bi-envelope me-2"></i> 
            <strong class="me-2">Email:</strong>  {{ user.email }}
        </li>
      </ul>

      <h5 class="mb-3">Teams</h5>
      <ul class="list-unstyled">
        <li class="my-3"> 
            <strong class="me-2">Backend Developer</strong> (126 Members)
        </li>
        <li class="my-3"> 
            <strong class="me-2">VueJS Developer</strong> (98 Members)
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
    import IUserAbout from '@/interfaces/IUserAbout'

    const user:IUserAbout =
    {
        name: "John Doe",
        status: "active",
        role: "Developer",
        country: "COL",
        language: "English",
        contact: "(123) 4567890",
        skype: "john.doe",
        email: "john.doe@example.com"
    }

  </script>
  
  <style scoped lang="scss">  
  .about-card {
    background-color: $background-white;
    color: $font-color;
    border-radius: $border-radius;
    box-shadow: $box-shadow-full;
    
    ul{
        opacity: 0.8;

        i{
            font-size: 1.2rem;
        }
    }

    h5 {
      opacity: 0.4;
    }
  }
  </style>
  