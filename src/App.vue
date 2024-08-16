<template>
  <SearchInput />
  <MainSidebar />
  <ProfileHeader />
  <ProfileNavigationMenu />
  <GeneralButtons />
  <router-view/>
</template>

<script lang="ts" setup>
  import SearchInput from '@/components/SearchInput.vue'; 
  import MainSidebar from '@/components/MainSidebar.vue'; 
  import ProfileHeader from '@/components/ProfileHeader.vue'; 
  import ProfileNavigationMenu from '@/components/ProfileNavigationMenu.vue';
  import GeneralButtons from '@/components/GeneralButtons.vue'

</script>

<style lang="scss">
  body
  {
    background-color: $background-color;
  }
</style>
