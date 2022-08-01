<template>
  <section class="testimoni section-padding">
    <div class="container">
      <h1 class="section-header">What People Say's</h1>
      <div class="testimonial-view">
        <!-- use boostrap class -->
        <div
          class="carousel slide"
          id="testimonialCarousel"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <!-- testimonial client 1 -->
            <div class="carousel-item active">
              <div class="block">
                <div class="row">
                  <div class="col-md-5">
                    <div class="user">
                      <div class="image">
                        <img src="../assets/member-1.jpg" alt="1" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Mark Jones</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illo, asperiores voluptates. Dolorem voluptas
                        distinctio id commodi accusantium, ut excepturi
                        consectetur, architecto, magni at rerum tempora.
                        Provident ducimus sint quos temporibus iste consequatur
                        error ratione quaerat. Sapiente et deserunt illo hic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- testimonial client 2 -->
            <div class="carousel-item">
              <div class="block">
                <div class="row">
                  <div class="col-md-5">
                    <div class="user">
                      <div class="image">
                        <img src="../assets/member-2.jpg" alt="2" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Mark smith</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illo, asperiores voluptates. Dolorem voluptas
                        distinctio id commodi accusantium, ut excepturi
                        consectetur, architecto, magni at rerum tempora.
                        Provident ducimus sint quos temporibus iste consequatur
                        error ratione quaerat. Sapiente et deserunt illo hic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- testimonial client 3 -->
            <div class="carousel-item">
              <div class="block">
                <div class="row">
                  <div class="col-md-5">
                    <div class="user">
                      <div class="image">
                        <img src="../assets/member-3.jpg" alt="3" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Jones Mark</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illo, asperiores voluptates. Dolorem voluptas
                        distinctio id commodi accusantium, ut excepturi
                        consectetur, architecto, magni at rerum tempora.
                        Provident ducimus sint quos temporibus iste consequatur
                        error ratione quaerat. Sapiente et deserunt illo hic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- testimonial client 4 -->
            <div class="carousel-item">
              <div class="block">
                <div class="row">
                  <div class="col-md-5">
                    <div class="user">
                      <div class="image">
                        <img src="../assets/member-4.jpg" alt="4" />
                      </div>
                      <div class="info">
                        <h2 class="user-name">Smith Jones</h2>
                        <h4>Client</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="content">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illo, asperiores voluptates. Dolorem voluptas
                        distinctio id commodi accusantium, ut excepturi
                        consectetur, architecto, magni at rerum tempora.
                        Provident ducimus sint quos temporibus iste consequatur
                        error ratione quaerat. Sapiente et deserunt illo hic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn-car carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span class="icon-control" aria-hidden="true"
              ><i class="bi bi-arrow-bar-left"></i
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="btn-car carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span class="icon-control" aria-hidden="true"
              ><i class="bi bi-arrow-bar-right"></i
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  position: relative;
  padding-bottom: 10px;
  text-align: center;
  font-weight: bold;
}
.section-header::after {
  content: "";
  height: 4px;
  width: 100px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 50px);
}
.testimonial-view {
  max-width: 900px;
  padding: 0 15px 50px;
  margin: 0 auto;
  border-radius: 3px;
}
.block {
  background: #fff;
  color: #333;
  padding: 60px 15px 15px;
  margin: 25px 50px;
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.15);
}
.block .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  place-items: normal;
}
.user {
  margin-bottom: 30px;
  text-align: center;
}
.image {
  position: relative;
  margin: 0 15px 30px 15px;
}

.image img {
  height: 170px;
  width: 170px;
  border-radius: 170px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.user-name {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 10px;
  position: relative;
}
.user-name::after {
  content: "";
  height: 4px;
  width: 50px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 25px);
}
.content {
  text-align: center;
  font-size: 18px;
}
.carousel-control-prev {
  left: -50px;
}
.carousel-control-next {
  right: -50px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 40px;
  height: 40px;
}
.icon-control i {
  font-size: 50px;
  color: black;
}
</style>
