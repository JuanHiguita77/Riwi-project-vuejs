<template>
    <div class="sidebar d-flex flex-column align-items-center vh-75 position-absolute">
      <ul class="nav flex-column text-center w-100">
        <li class="nav-item my-3">
            <!-- Riwi Icon -->
            <span class="img-profile">
            <img
                src="@/assets/riwi-icon.png"
                class="img-fluid w-75"
                alt="Riwi Icon"
            />
            </span>
        </li>

        <li class="nav-item my-2">
            <a class="nav-link" href="#">
                <i class="bi bi-house-door"></i>
            </a>
        </li>
        <li class="nav-item mt-1 mb-3">
            <a class="nav-link" href="#">
                <i class="bi bi-stickies"></i>
            </a>
        </li>

        <hr class="w-50 mx-auto">

        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-cart"></i>
            </a>
        </li>
        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-chat-dots"></i>
            </a>
        </li>
        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-bell"></i>
            </a>
        </li>
        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-gear"></i>
            </a>
        </li>
        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-archive"></i>
            </a>
        </li>
        <li class="nav-item my-1">
            <a class="nav-link" href="#">
                <i class="bi bi-backpack"></i>
            </a>
        </li>
        
      </ul>
      <ul class="nav flex-column mt-auto mb-3 text-center w-100">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-box-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>
</template>
  
<script lang="ts" setup>

</script>
  
<style lang="scss" scoped>
.sidebar 
{
    background-color: $background-white;
    width: 60px;
    box-shadow: 7px 10px 8px 0px rgba(97, 97, 97, 0.134);
    position: relative;
    top: 45px;

    .nav-link 
    {
        color: #6c757d;
        transition: $transition;

        i 
        {
            font-size: 20px;
        }
    }   

    .nav-link:hover 
    {
        color: #188bff;
        transform: scale(1.2);
        
    }
}

</style>
  