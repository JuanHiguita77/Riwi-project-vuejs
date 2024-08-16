<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="input-group">
            <!-- Search Icon -->
            <div class="icon-search-container">
                <i class="bi bi-search text-grey"></i>
            </div>
            
            <!-- Search Input -->
            <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
            />
            
            <!-- Additional Icons -->
            <div class="input-group-append d-flex align-items-center icons-input-container">
                <span class="input-group-text">
                <i class="bi bi-translate"></i>
                </span>
                <span class="input-group-text">
                <i class="bi bi-sun"></i>
                </span>
                <span class="input-group-text">
                <i class="bi bi-grid"></i>
                </span>
                <span class="input-group-text">
                <i class="bi bi-bell"></i>
                </span>
            </div>
            
            <!-- User Photo -->
            <div class="input-group-append">
                <span class="input-group-text img-profile">
                <img
                    src="@/assets/user-profile.jpg"
                    class="rounded-circle"
                    alt="User Photo"
                />
                </span>
            </div>
        </div>
      </div>    

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.input-group
{
    box-shadow: $box-shadow;
    .form-control
    {
        border: none;
    }
}

.icon-search-container
{
    width: 50px;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $background-white;

}
.icons-input-container
{
    border-top: 1px solid $border-color;
    border-left: none;
    border-bottom: 1px solid $border-color;
    background-color: $background-white;

    .input-group-text 
    {
        background: transparent;
        border: none;
        cursor: pointer;
        transition: $transition;
    }

    .input-group-text:hover{
        color: #188bff;
        transform: scale(1.2);
    }
}

.input-group-append 
{
    border: none;
    .img-profile
    {
        border: none;
        background-color: $background-white;
    }

    img 
    {
        width: 40px;
        height: 40px;
    }
}

</style>