<template>
    <div>
      <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#"> User Form </a>
              <button @click="Users()" type="button" class="btn btn-primary"> List Users </button>
            </div>
        </nav>
        <hr class="solid m-0">
      </div>
      <div class="container">
        <div class="d-flex justify-content-center">
          <form class="mt-4 py-4">

            <div class="form-group">
              <label for="user_login"> First Name </label>
              <input v-model="formData.firstName" type="text" name="firstname"  class="form-control" size="50">
            </div>

            <div class="form-group">
              <label for="user_login"> Last Name </label>
              <input v-model="formData.lastName" type="text" name="lastname"  class="form-control" size="35">
            </div>

            <div class="form-group">
              <label for="user_login"> Email </label>
              <input v-model="formData.email" type="email" name="email"  class="form-control" size="35">
            </div>

            <div class="form-group">
              <label for="user_login"> Phone </label>
              <input v-model="formData.phoneNumber" type="number" name="phone"  class="form-control" size="35">
            </div>

            <div class="form-group mb-4">
              <label for="user_pass"> Introduction </label>
              <textarea v-model="formData.introduction" name="password"  class="form-control"/>
            </div>

            <div class="form-group mb-4">
              <label for="user_pass"> Experience </label>
              <textarea v-model="formData.experience" name="password"  class="form-control"/>
            </div>

            <div class="form-group mb-4">
              <label for="user_pass"> Achivements </label>
              <textarea v-model="formData.achievements" name="password"  class="form-control"/>
            </div>

            <div class="form-group">
              <button @click.prevent="submitUserData()" class="btn btn-primary btn-block"> Submit </button>
            </div>
          </form> 
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'LoginComponent',
  data(){
    return {
      formData:{
        firstname: '',
        lastname:'',
        email: '',
        phoneNumber: '',
        introduction:'',
        experience:'',
        achievements: ''
      }
    }
  },
  methods:{
    async submitUserData(){
      let response = await this.$http.post('/add-user-info', this.formData)
      console.log(response.data)
      this.formData.firstName = ''
      this.formData.lastName = ''
      this.formData.email = ''
      this.formData.phoneNumber = '',
      this.formData.introduction = '',
      this.formData.experience = '',
      this.formData.achievements = ''
    },
    Users(){
      this.$router.push({name:'users-list'});
    }
  }
}
</script>