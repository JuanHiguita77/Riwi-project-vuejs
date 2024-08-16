<template>
  <li class="d-flex my-2">
    <div class="d-flex align-items-center">
      <img :src="image" alt="Profile Image" class="rounded-circle" width="40" height="40" />
      <div class="ms-3">
        <h6 class="mb-0">{{ name }}</h6>
        <small class="text-muted">{{ connections }}</small>
      </div>
    </div>
    <div class="btn-container ms-auto">
      <button class="btn" :class="online ? 'online' : 'offline'">
        <i :class="online ? 'bi bi-person-check' : 'bi bi-person-x'"></i>
      </button>
    </div>
  </li>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        name: String,
        connections: String,
        image: String,
        online: Boolean,
    })
</script>

<style lang="scss" scoped>
    .btn-container{

        .online{
            background-color: #7267f02f;

            i{
                color: $primary-color;
            }
        }
        .offline{
            background-color: $primary-color;

            i{
                color: $background-white;
            }
        }

        .icon{
            color: $primary-color;
        }
    }
</style>