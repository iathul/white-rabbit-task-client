<template>
    <div class="container">
        <h2 class="m-4"> Users List </h2>
        <div v-if="users.length">
            <div v-for="user in users" :key="user._id">
                <ul>
                    <li> 
                        <p> Name: {{user.firstName}} {{user.lastName}} </p>
                        <p> Email: {{user.email}} </p>
                        <button @click="viewUser(user._id)" class="btn btn-primary"> View User  </button>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>
            <h4 class="m-4"> No users found </h4>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UserList',
    data(){
        return {
            users:[]
        }
    },
    created(){
        this.loadUsers()
    },
    methods:{
        loadUsers(){
          this.$http.get('/list-users').then(res=>{
              console.log(res.data.users)
              this.users = res.data.users
          }).catch(err => {
              console.log(err)
          })
        },
        viewUser(id){
            this.$router.push({name:'view-user', params:{id:id}});
        }
    }
}
</script>