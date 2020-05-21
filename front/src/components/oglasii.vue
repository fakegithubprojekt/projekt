<template>

<div >
<div class="card bg-light  text-center" style="margin-top:15px;" >
  <div class="card-header">
<p style="text-align:left;">
    {{a.poslodavac}} 
    <span style="float:right;">
        {{a.posted_at | formatTime }}
    </span>
</p>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{a.vrsta}}</h5>
    <p class="card-text jumbotron">
      Grad: {{a.grad}}<br>
      Pocetak rada: {{a.datump}}<br>
      Kraj rada: {{a.datumk}}<br>
      Satnica: {{a.satnica}}<br>
      Putni trošak: {{a.putni}}<br>
      Brtel: {{a.brtel}}<br>
      Email: {{a.email}}<br>
      Oib: {{a.oib}}<br></p>
      <p class="jumbotron">
      {{a.napomena}}</p>
    <img :src="a.url" @click="prikazSlikeUsr(a);" width="100px" />
  </div>
</div></div>

</template>
<script>
import store from "@/store.js";
import moment from "moment";
export default {
  props: ["a"],
  data() {
    return store;
  },
  filters: {
    formatTime: function(value) {
      return moment(value).format("Do MMMM YYYY");
    }
  },
  methods:{
      prikazSlikeUsr(a) {
      $("#picusrModal").modal("show");
      this.url = a.url;
    }
  }
};
</script>