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
              Danh Sách Tin Tuyển Dụng
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
              <th class="th-lg"><a>Tiêu đề</a></th>
              <th class="th-lg"><a>Vị trí tuyển dụng</a></th>
              <th class="th-lg"><a>Kinh nghiệm</a></th>
              <th class="th-lg"><a>Thể loại công việc</a></th>
              <th class="th-lg"><a>Ngày bắt đầu</a></th>
              <th class="th-lg"><a>Ngày kết thúc</a></th>
              <th class="th-lg" colspan="3"><a>Chức năng</a></th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody v-for="post in posts" :key="post._id">
            <tr>
              <th scope="row">1</th>
              <td>{{ post.name }}</td>
              <td>{{ post.position }}</td>
              <td>{{ post.experience }}</td>
              <td>{{ post.type }}</td>
              <td>{{ post.start_date }}</td>
              <td>{{ post.end_date }}</td>
              <td>
                <!-- <button type="button" class="btn btn-primary btn-sm">
                  Hiển thị
                </button> -->
                <div v-if="post.active == true">
                  <button
                    type="button"
                    class="btn btn-warning"
                    @click="hide(post._id)"
                  >
                    Ẩn
                  </button>
                </div>
                <div v-else>
                  <button
                    type="button"
                    class="btn btn-info"
                    @click="show(post._id)"
                  >
                    Hiện
                  </button>
                </div>
                <!-- <div>
                </div> -->
              </td>
              <td>
                <button type="button" class="btn btn-success">Sửa</button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deletePost(post._id)"
                >
                  Xóa
                </button>
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    await this.getPosts();
    console.log("toi ở đây từ chiều");
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/companies/650fe637e10537893fa79b92/job-post"
        );
        // console.log("ket qua")
        // console.log(response)
        this.posts = response.data;
        console.log("danh sách bài đăng của công ty");
        console.log(this.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

    async show(postId) {
      // try {
      //   const response = await axios.put(
      //     "http://localhost:8080/api/job-post/" + postId,
      //     JSON.stringify({
      //       active: true,
      //     })
      //   );
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }

      console.log("hien thi bai dang");
    },

    async hide(postId) {
      try {
        const response = await axios.put(
          "http://localhost:8080/api/job-post/" + postId,
          JSON.stringify({
            active: false,
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      console.log("an bai dang");
    },

    async deletePost(postId) {
      // try {
      //   const response = await axios.delete(
      //     "http://localhost:8080/api/job-post/" + postId
      //   );
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }


      // console.log("xoa bai dang " + postId);
    },
  },
};
</script>


<style>
.pagination li a {
  color: black;
}
</style>