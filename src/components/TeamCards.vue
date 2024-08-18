<template>
    <div class="container">
        <div class="row">
            <div v-for="(card, index) in cards" :key="index" class="col-md-4 mb-4">
                <div class="card p-3 h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <img :src="card.icon" alt="icon" class="img-fluid me-2">
                            <h5 class="card-title mb-0">{{ card.title }}</h5>

                            <div class="card-icons ms-auto">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-three-dots-vertical ms-2"></i>
                            </div>
                        </div>

                        <p class="card-text">{{ card.description }}</p>
                    </div>

                    <div class="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center">
                        <div class="avatars">
                            <img v-for="(avatar, idx) in card.avatars" :key="idx" :src="avatar" class="img-fluid rounded-circle avatar" alt="Avatar">
                        </div>
                        <div>
                            <span v-for="(tag, idx) in card.tags" :key="idx" class="badge me-1" :class="
                                tag === 'Developer' ? 'badge-developer' : 
                                tag === 'React' ? 'badge-react' : 
                                tag === 'MUI' ? 'badge-mui' : 
                                tag === 'Vuejs' ? 'badge-vue' : 
                                tag === 'XD' ? 'badge-xd' : 
                                tag === 'Zendesk' ? 'badge-zendesk' :
                                tag === 'Twitter' ? 'badge-twitter' :
                                tag === 'Email' ? 'badge-email' :
                                tag === 'Hubilo' ? 'badge-hubilo' :
                                tag === 'UI/UX' ? 'badge-ui' :
                                tag === 'Figma' ? 'badge-figma' :
                                tag === 'CSS' ? 'badge-css' :
                                tag === 'HTML' ? 'badge-html' :
                                tag === 'Sketch' ? 'badge-sketch' : 'badge text-white'">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>

    const cards = 
    [
        {
            title: "React Developers",
            description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
            tags: ["React", "MUI"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/react-icon.png')
        },
        {
            title: "Vue.js Dev Team",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["Vuejs", "Developer"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/vue-icon.png')
        },
        {
            title: "Creative Designers",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["Sketch", "XD"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/premier-icon.png')
        },
        {
            title: "Support team",
            description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
            tags: ["Zendesk"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/team-icon.png')
        },
        {
            title: "Digital Marketing",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["Twitter", "Email"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/world-icon.png')
        },
        {
            title: "Event",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["Hubilo"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/calendar-icon.png')
        },
        {
            title: "Figma Resources",
            description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
            tags: ["UI/UX", "Figma"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/figma-icon.png')
        },
        {
            title: "Native mobile App",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["React"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/react-icon.png')
        },
        {
            title: "Only Begginers",
            description: "The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.",
            tags: ["CSS", "HTML"],
            avatars: 
            [
                require("@/assets/user-profile.jpg"), 
                require("@/assets/user-profile-1.jpg"), 
                require("@/assets/user-profile-2.jpg"), 
                require("@/assets/user-profile-3.jpg")
            ],
            icon: require('@/assets/icons/html-icon.png')
        },
    ]
</script>
  
<style lang="scss" scoped>
  .card {
    border-radius: 10px;
    .card-body{

        .card-text{
            color: $font-color;
            font-weight: 600;
        }

        img{
            width: 40px;
            height: 40px;
        }
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 500;
    }
  
    .card-icons {
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      opacity: $opacity-soft;
      cursor: pointer;
    }
  
    .card-footer {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-top: 0;

        .badge {

            padding: 5px 10px;
            font-size: 12px;
            border-radius: $border-radius;
            background-color: #f0f0f0;
            color: #000;
            margin-left: 5px;
    
              
            &:first-child {
                margin-left: 0;
            }
        }    
        
        .badge-developer,
        .badge-xd{
            background-color: #ff20203c;
            color: #ff000057;
        }

        .badge-vue,
        .badge-hubilo,
        .badge-email,
        .badge-ui{
            background-color: #28c76f45;
            color: $secondary-color;
        }

        .badge-sketch,
        .badge-html{
            background-color: #ff520e37;
            color: #dc3e0077;
        }

        .badge-mui,
        .badge-zendesk,
        .badge-css{
            background-color: #1d8eff4a;
            color: #1289ffbb;
        }

        .badge-react,
        .badge-twitter{
            background-color: #4425f62e;            
            color: $primary-color;
        }

        .badge-figma{
            background-color: #90909059;
            color: $font-color;
        }

        .avatars {
            display: flex;
            padding-left: 34px;

            .avatar {
                width: 30px;
                height: 30px;
                margin-left: -17px;
                border: 1px solid $background-white;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}  
</style>
  