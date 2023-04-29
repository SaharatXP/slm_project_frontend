<template>
  <div>
    <navbar title="SP" />
    <div class="row text-center">
      <h1>สรุป</h1>
    </div>
    <b-overlay :show="show" rounded="sm">
      <div class="row mx-4 mt-4">
        <div class="col-md-12">
          <b-card class="text-center">
            <b-table :items="userItem" :fields="fields" striped responsive="sm">
              <template #cell(show_details)="row">
                <b-form-checkbox
                  v-model="row.detailsShowing"
                  @change="row.toggleDetails"
                >
                  &nbsp;ดูข้อมูล
                </b-form-checkbox>
              </template>

              <template #row-details="row">
                <b-card>
                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>ตำแหน่ง:</b></b-col>
                    <b-col>{{ row.item.typeName }}</b-col>
                    
                  </b-row>

                  <!-- <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
                  <b-col>{{ row.item.isActive }}</b-col>
                </b-row> -->
                </b-card>
              </template>
            </b-table>
          </b-card>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
export default {
  name: "HomePage",
  components: {
    navbar: Navbar,
  },
  data() {
    return {
      show: false,
      userItem: [],
      fields: ["name", "lastname", "show_details"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          _showDetails: true,
        },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.show = true
      await axios
        .get("users")
        .then((response) => {
          // console.log(response)
          this.userItem = response.data;
          console.log(this.userItem);
          this.show = false
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
