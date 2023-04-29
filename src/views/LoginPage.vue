<template>
  <div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <b-card class="text-center mt-5">
          <h1>เข้าสู่ระบบ</h1>
          <br />
          <div class="row">
            <b-form-input
              v-model="username"
              type="text"
              placeholder="Enter username"
              class="mt-3 px-3"
            ></b-form-input>
            <b-form-input
              v-model="password"
              type="password"
              class="mt-3 px-3"
            ></b-form-input>
            <b-button variant="success" class="mt-3" @click="login()"
              >Login</b-button
            >
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  components: {
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await axios
        .post("auth", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          // console.log(response);
          // this.getSession();
          this.$session.start();
          this.$session.set("sess", response.data.sess);
          
          this.$router.push({ path: "/home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },checkSesssion() {
      if (!this.$session.get("sess").u_type_id) {
        this.$router.push({ path: "/login" });
      } else {
        // console.log(this.$session.get("sess"));
        this.$router.push({ path: "/home" });
      }
    },
    

  },
  created() {
    this.checkSesssion();

  },
};
</script>
