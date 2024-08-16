<template>
    <li class="my-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="team-badge rounded-circle me-3">
            <img :src="icon" class="img-fluid">
        </div>
        <div>
          <h6 class="mb-0">{{ name }}</h6>
          <small class="text-muted">{{ members }}</small>
        </div>
      </div>
      <div class="badged-container p-2">
        <span class="badged" :class="
          badge === 'Developer' ? 'badge-developer' : 
          badge === 'Support' ? 'badge-support' : 
          badge === 'Designer' ? 'badge-designer' : 
          badge === 'Marketing' ? 'badge-marketing' : 'badge bg-primary text-white'
        ">
          {{ badge }}
        </span>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TeamItem',
    props: {
      name: String,
      members: String,
      badge: String,
      icon: String
    },
  };
  </script>
  
  <style lang="scss" scoped>

  .list-group-item{
    border: none;
    padding: 0;
  }

  .team-badge {
    width: 35px;
    height: 35px;
  }
  
  .badged-container{

    .badged{
      font-weight: 600;
      padding: 3px 10px;
      border-radius: $border-radius;
    }

    .badge-developer{
      background-color: rgba(255, 0, 0, 0.192);
      color: rgba(255, 0, 0, 0.656);
    }

    .badge-support{
      background-color: #7267f02d;
      color: #7267f0;
    }

    .badge-designer{
      background-color: rgba(0, 255, 255, 0.204);
      color: rgb(0, 149, 255);
    }

    .badge-marketing{
      background-color: rgba(128, 128, 128, 0.244);
      color: rgba(128, 128, 128, 0.923);
    }
  }

  </style>
  