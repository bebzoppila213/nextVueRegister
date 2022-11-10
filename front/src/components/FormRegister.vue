<template>
    <form @submit.prevent="formSubmit" class="w-25">
    <div class="row">
      <h4 class="title">Форма регистрации</h4>
    </div>
    <div class="row">
      <CustomInputVue
      @onInput="(text) => (registerData.login = text)"
        typeInput="email"
        label="Почта"
      ></CustomInputVue>
      <CustomInputVue
      @onInput="(text) => (registerData.password = text)"
        typeInput="password"
        label="Пароль"
      ></CustomInputVue>
    <CustomInputVue
    @onInput="(text) => (registerData.name = text)"
        typeInput="text"
        label="Имя"
    ></CustomInputVue>
    <CustomInputVue
    @onInput="(text) => (registerData.adress = text)"
    typeInput="text"
    label="Адрес"
    ></CustomInputVue>
    <CustomInputVue
    @onInput="(text) => (registerData.phone = text)"
    typeInput="text"
    label="Телефон"
    ></CustomInputVue>
    </div>
    <button class="btn btn-primary" type="submit">Зарегистрироватся</button>
    <AlertVue v-if="visibleAlert" :text='alertText'></AlertVue>

  </form>
</template>

<script>
import CustomInputVue from "./CustomInput.vue";
import AlertVue from "./Alert.vue";
import { validate } from "../assets/validate";

export default{
    name: "FormRegister",
    components:{
    CustomInputVue,
    AlertVue
    },

    data:() => {
        return{
            registerData: {login: '', password: '', name: '', adress: '', phone: ''},
            visibleAlert: false,
            alertText: 'Ошибка валидации'
        }
    },

    methods:{
        formSubmit(){
        const validateEmail = validate.setField(this.registerData.login).isEmail()
        const validatePassword = validate.setField(this.registerData.login).minLength(3)

        if(validateEmail.errors.length + validatePassword.errors.length === 0){
                this.$emit("formSubmit", this.registerData)
            }
        }
    }
}

</script>