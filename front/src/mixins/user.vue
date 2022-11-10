

<script>

import { auth, proofile, update, register } from "../api/user";
export default {

  async created() {
    const authData = JSON.parse(this.getLocalStorage("auth"));
    if (authData) {
      this.saveTokenAndInstallRpofile(authData.access_token);
    }
  },

  data: () => {
    return {
      profileUser: {
        adress: "",
        id: null,
        login: "",
        name: "",
        phone: "",
      },
      token: "",
    };
  },

  methods: {
  async register({login, password, name, adress, phone}){
    const registerResult = await register(login, password, name, adress, phone)
    if(registerResult !== null){
        await this.auth({email: registerResult.data.login, password: registerResult.data.password})
    }
  },

    async auth({ email, password }) {
      const resultAuth = await auth(email, password);

      if (resultAuth !== null) {
        this.setLocalStorage("auth", JSON.stringify(resultAuth));
        this.saveTokenAndInstallRpofile(resultAuth.access_token);
      }
    },

    async saveTokenAndInstallRpofile(token) {
      this.token = token;
        this.profileUser = await proofile(token);
    },

    async changeField({ field, value }) {
      const updateRes = update(this.token, field, value);
      if (updateRes === null) {
        console.log(1123);
      }
    },
  },
};
</script>