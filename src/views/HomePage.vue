<template>
    <CarrouselComponent />
    <AboutComponent />
    <ServiceComponent />
    <PortofolioComponent />
    <TeamComponent />
    <Tesimoni />
    <Contact />
    
</template>

<script>
import CarrouselComponent from "@/components/CarrouselComponent.vue"
import AboutComponent from "@/components/AboutComponent.vue"
import ServiceComponent from "@/components/ServiceComponent.vue"
import PortofolioComponent from "@/components/PortofolioComponent.vue"
import TeamComponent from "@/components/TeamComponent.vue"
import Contact from "@/components/ContactComponent.vue"
import Tesimoni from "@/components/TestimonialComponent.vue"
export default {
    name: "HomePage",
    components: {
        CarrouselComponent,
        AboutComponent,
        ServiceComponent,
        PortofolioComponent,
        TeamComponent,
        Contact,
        Tesimoni,


    }
}
</script>

<style>
.section-padding {
  padding: 100px 0;
}
</style>