<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <ProfileAbout />
                <ProfileOverview /> 
            </div>

            <div class="col-8">
                <ActivityTimeline />
                <ProfileDashboard />
                <ProjectList />
            </div>
        </div>
    </div>

    
</template>

<script lang="ts" setup>    
    import ProfileAbout from '@/components/ProfileAbout.vue'
    import ProfileOverview from '@/components/ProfileOverview.vue'
    import ActivityTimeline from '@/components/ActivityTimeline.vue'
    import ProfileDashboard from '@/components/ProfileDashboard.vue'
    import ProjectList from '@/components/ProjectList.vue'
    
</script>

<style lang="scss" scoped>

</style>