<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Логин</th>
        <th scope="col">Телефон</th>
        <th scope="col">Адресс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><input @change="(event) => changeFild('name', event.target.value)" :value="profileUser.name" type="text" /></th>
        <th><input @change="(event) => changeFild('login', event.target.value)" :value="profileUser.login" type="text" /></th>
        <th><input @change="(event) => changeFild('phone', event.target.value)" :value="profileUser.phone" type="text" /></th>
        <th><input @change="(event) => changeFild('adress', event.target.value)" :value="profileUser.adress" type="text" /></th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    profileUser: {
      type: Object,
      required: true,
    },
  },

  methods:{
    changeFild(field, newValue){
        this.$emit("changeField", {field: field, value: newValue})
    }
  }
};
</script>