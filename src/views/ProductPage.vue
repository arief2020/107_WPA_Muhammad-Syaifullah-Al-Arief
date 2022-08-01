<template>
  <section id="portofolio" class="portofolio section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center pd-5">
          <h2>Our Project</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            <br />deserunt cumque consequatur.
          </p>
        </div>
      </div>
      <div class="row">
        <CardPortofolio :CardPortofolioData="CardDataPortolio" />
        <ContactComponent />
      </div>
    </div>
  </section>
</template>

<script>
import { DataCardPortofolio } from "@/components/PortofolioSection/DataCardPortofolio";
import CardPortofolio from "@/components/PortofolioSection/CardPortofolio.vue";
import ContactComponent from "@/components/ContactComponent.vue";
export default {
  name: "ProductPage",
  components: {
    CardPortofolio,
    ContactComponent,
  },
  data() {
    return {
      CardDataPortolio: DataCardPortofolio,
    };
  },
};
</script>
