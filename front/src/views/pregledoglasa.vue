<template>
     <div class="row">
    <div class="col">
      <div  >
      <oglasii :a="a" v-for="a in cards" :key="a.id" />
      <div
      class="modal fade"
      id="picusrModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="picusrModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="display:inline-block;">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <img class="modal-content" :src="store.url" />
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
          </div>
        </div>
      </div>
    </div>
  </div></div></div>
  
</template>
<script>
import store from "@/store.js";
import oglasii from "@/components/oglasii.vue";
import { Posts } from "@/services";
import _ from 'lodash';
import moment from "moment";
export default {
  data() {
    return {store,
    cards:[]}
  },
  components: {

    oglasii,
    // trazilica
  },
  name:"pregledoglasa",
   watch: {
        'store.searchTerm': _.debounce(function(val) {
            this.fetchPosts(val);
        }, 500)
    },
  computed: {

    created() {
        this.fetchPosts();
    },
  },
methods:{
   async fetchPosts(term) {
            term = term || store.searchTerm;

            this.cards = await Posts.getAll(term);
        }
}
};
</script>
