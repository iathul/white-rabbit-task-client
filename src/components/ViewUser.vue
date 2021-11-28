<template>
    <div class="container">
        <h1 class="my-4"> User Details</h1>
        <div v-if="user!=''">
            <p> Name: {{user.firstName}} {{user.lastName}} </p>
            <p> Email: {{user.email}} </p>
            <p> Phone: {{user.phoneNumber}} </p>
            <p> Introduction: {{user.introduction}} </p>
            <p> Experience: {{ user.experience}} </p>
            <p> Achievements: {{ user.achievements }} </p>
        </div>
        <div v-else>
            <h4> User not found </h4>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'UserList',
    data(){
        return {
            user:{}
        }
    },
    created(){
        this.loadUser()
    },
    methods:{
        loadUser(){
          this.$http.get(`/user/${this.$route.params.id}`).then(res=>{
              console.log(res.data)
              if(res.data){
                this.user = res.data
              }
             
          }).catch(err => {
              this.user = ''
              console.log(err)
          })
        },
    }
}
</script>