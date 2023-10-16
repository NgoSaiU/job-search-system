<template>
  <!--MDB Tables-->
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-12">
            <h2 class="py-3 text-center font-bold font-up blue-text">
              Những công ty đang theo dõi
            </h2>
            <div class="input-group md-form form-sm form-2 pl-0">
              <input
                class="form-control my-0 py-1 pl-3 purple-border"
                type="text"
                placeholder="Search something here..."
                aria-label="Search"
              />
              <span
                class="input-group-addon waves-effect purple lighten-2"
                id="basic-addon1"
                ><a
                  ><i class="fa fa-search white-text" aria-hidden="true"></i></a
              ></span>
            </div>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
        <!--Table-->
        <table class="table table-hover table-responsive mb-0">
          <!--Table head-->
          <thead>
            <tr>
              <th scope="row">#</th>
              <th class="th-lg"><a>Tên công ty</a></th>
              <th class="th-lg"><a>Trang web </a></th>
              <th class="th-lg"><a>Số điện thoại</a></th>
              <th class="th-lg" colspan="2"><a>Công cụ</a></th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody v-for="company in companyFollows" :key="company.id">
            <tr>
              <th scope="row">{{ num++ }}</th>
              <td>{{ company.name }}</td>
              <td>{{ company.website }}</td>
              <td>{{ company.phone }}</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm">
                  Chi tiết công ty
                </button>
              </td>
              <td>

                <div>
                  <button type="button" class="btn btn-danger">Hủy Theo Dõi</button>
                </div>
              </td>
             
            </tr>



          </tbody>
          <!--Table body-->
        </table>

        <!--Bottom Table UI-->
        <div class="d-flex justify-content-center">
          <!--Pagination -->
          <nav class="my-4 pt-2">
            <ul class="pagination pagination-circle pg-blue mb-0">
              <!--First-->
              <li class="page-item disabled clearfix d-none d-md-block">
                <a class="page-link text-dark">First</a>
              </li>
              <!--Arrow left-->
              <li class="page-item disabled">
                <a class="page-link text-dark" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <!--Numbers-->
              <li class="page-item active">
                <a class="page-link text-dark">1</a>
              </li>
              <li class="page-item"><a class="page-link text-dark">2</a></li>
              <li class="page-item"><a class="page-link text-dark">3</a></li>
              <li class="page-item"><a class="page-link text-dark">4</a></li>
              <li class="page-item"><a class="page-link text-dark">5</a></li>
              <!--Arrow right-->
              <li class="page-item">
                <a class="page-link text-dark" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
              <!--First-->
              <li class="page-item clearfix d-none d-md-block">
                <a class="page-link text-dark">Last</a>
              </li>
            </ul>
          </nav>
          <!--/Pagination -->
        </div>
        <!--Bottom Table UI-->
      </div>
    </div>

    <!-- <hr class="my-4" /> -->
  </div>
  <!--MDB Tables-->

  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      // userInfo: {
      //   first_name: "",
      //   last_name: "",
      //   phone: "",
      //   email: "",
      // },

      num: 1,
      companyFollows: [],
      idUser: "",
    };
  },
  mounted() {
    this.getInfo();
    // this.getCompanyFollows(this.idUser);
    this.getCompanyFollows();
  },
  methods: {
    async getInfo() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/candidates/"
        );
        this.idUser = response.data._id;
        console.log("ID người dùng");
        console.log(this.idUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async getCompanyFollows() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/companies/",
        );
        this.companyFollows = response.data.data;
        console.log("danh sach cong ty");
        console.log(this.companyFollows);
      } catch (error) {
        console.error("Loi cap nhat user:", error);
      }
    },
  },
};
</script>

<style>
.pagination li a {
  color: black;
}
</style>