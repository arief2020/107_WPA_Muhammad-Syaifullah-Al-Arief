<template>
  <section id="team" class="team section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center p-5">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem accusamus soluta culpa debitis voluptate neque
              molestiae! Quibusdam labore magni magnam hic animi quasi
              necessitatibus
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <CardTeam :CardDataTeam="DataCardTeam" />
      </div>
    </div>
  </section>
</template>

<script>
import { DataCardTeam } from "@/components/TeamSection/DataCardTeam";
import CardTeam from "@/components/TeamSection/CardTeam.vue";
export default {
  name: "TeamComponent",
  data() {
    return {
      DataCardTeam: DataCardTeam,
    };
  },
  components: {
    CardTeam,
  },
};
</script>

