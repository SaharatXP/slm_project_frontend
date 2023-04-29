
<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/home">SLM</b-nav-item>
        <b-nav-item href=""></b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="รายงาน" right>
          <b-dropdown-item href="/home">สรุปยอด</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="ตั้งค่า" right>
          <b-dropdown-item href="#">ข้อมูลพนักงาน</b-dropdown-item>
          <b-dropdown-item href="#">ข้อมูลหมวดหมู่</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="`${navName} ${navLastName}`" right class="ml-auto">
          <b-dropdown-item href="#">บัญชีของฉัน</b-dropdown-item>
          <b-dropdown-item @click="logout();">ออกจากระบบ</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navName: "",
      navLastName: "",
    };
  },
  props: {
    title: String,
  },
  created() {
    this.checkSesssion();
    // console.log(this.$session.get("sess").u_type_id);
    // props are exposed on `this`
  },methods:{
    checkSesssion() {
      if (!this.$session.get("sess")) {
        this.$router.push({ path: "/login" });
      } else {
        // console.log(this.$session.get("sess"));
        this.navName = this.$session.get("sess").name;
        this.navLastName = this.$session.get("sess").lastname;
        
      }
    },
    logout(){
      this.$session.destroy();
      this.$router.push({ path: "/login" });
    }
  }
  
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
