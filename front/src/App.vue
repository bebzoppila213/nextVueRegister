<template>
  <div class="container">
  <div class="d-flex justify-content-around">
        <FormAuth @formSubmit="auth"></FormAuth>
        <FormRegister @formSubmit="register"></FormRegister>
  </div>
    <Table @changeField="changeField" :profileUser="profileUser"></Table>
  </div>
</template>

<script>
import FormAuth from "./components/FormAuth.vue";
import localStoragesVue from "./mixins/localStorages.vue";
import Table from "./components/Table.vue";
import FormRegister from "@/components/FormRegister.vue";
import user from "@/mixins/user.vue";

export default {
  name: "App",
  components: {
    FormAuth,
    Table,
  FormRegister
  },

  data: () => {
    return {
    };
  },

    mixins: [localStoragesVue, user],

  methods: {
  },
};
</script>

<style>
</style>
