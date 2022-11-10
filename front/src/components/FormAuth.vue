<template>
  <form @submit.prevent="formSubmit" class="w-25">
    <div class="row">
      <h4 class="title">Форма авторизации</h4>
    </div>
    <div class="row">
      <CustomInputVue
        @onInput="(text) => (email = text)"
        typeInput="email"
        label="Почта"
      ></CustomInputVue>
      <CustomInputVue
        @onInput="(text) => (password = text)"
        typeInput="password"
        label="Пароль"
      ></CustomInputVue>
    </div>
    <button class="btn btn-primary" type="submit">Авторизоватся</button>
    <AlertVue v-if="visibleAlert" :text='alertText'></AlertVue>
    
  </form>
</template>


<script>

import CustomInputVue from "./CustomInput.vue";
import AlertVue from "./Alert.vue";
import { validate } from "../assets/validate";

export default {
  name: "FormAuth",
  data: () => {
    return {
      email: "",
      visibleAlert: false,
      alertText: 'Произошла ошибка',
      password: "",
    };
  },

  components: {
    CustomInputVue,
    AlertVue
  },

  computed:{
  },

  methods: {
    formSubmit() {
        const validateEmail = validate.setField(this.email).isEmail()
        const validatePassword = validate.setField(this.password).minLength(3)
        
        if(validateEmail.errors.length + validatePassword.errors.length === 0){
            this.visibleAlert = false
            this.$emit("formSubmit", {email: this.email, password: this.password})
        }else{
            this.visibleAlert = true
            this.alertText = "Ошибка валидации"
        }
    },
  },
};
</script>
