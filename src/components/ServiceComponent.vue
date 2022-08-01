<template>
  <section id="service" class="services section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center pd-5">
            <h2>Our services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque <br />deserunt cumque consequatur.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <CardService :DataCardService="CardDataService"/>
      </div>
    </div>
  </section>
</template>

<script>
import {ServiceCardData} from "@/components/ServiceSection/ServiceCard"
import CardService from "@/components/ServiceSection/CardService.vue"
export default {
  name: "ServiceComponent",
  components: {
    CardService
  },
  data() {
    return {
      CardDataService: ServiceCardData
    }
  }
};
</script>

