<template>
  <section id="contact" class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center pb-4">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem accusamus soluta culpa debitis voluptate neque
              molestiae! Quibusdam labore magni magnam hic animi quasi
              necessitatibus
            </p>
          </div>
        </div>
      </div>

      <div class="row m-0">
        <div class="col-md-12 p-0 pt-4 pb-4">
          <form action="#" class="bg-light p-4 m-auto">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    required
                    placeholder="Your Email Here"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <textarea
                    rows="3"
                    required
                    class="form-control"
                    placeholder="Your Query Here"
                  ></textarea>
                </div>
              </div>
              <button class="btn btn-warning btn-lg btn-block mt-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>
