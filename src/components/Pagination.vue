<template>
  <div class="game-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      pills
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
      last-number
    />
    <div class="manual-page">
      <b-form-input class="manual-input" size="sm" v-model="text"
       placeholder="page" @keyup.enter="manualPage"></b-form-input>
      <b-button size="sm" class="manual-button shadow-none"
       @click="manualPage">
        <b-icon icon="arrow-right"></b-icon></b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  data: () => ({
    text: '',
  }),
  props: {
    currentPage: {
      Type: Number,
      default: 1,
    },
    total: {
      Type: Number,
      default: 1,
    },
    perPage: {
      Type: Number,
      default: 1,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit('onPageChanged', value);
      },
    },
  },
  methods: {
    manualPage() {
      this.$emit('manualPage', this.text);
    //  e.preventDefault();
    },
  },
};
</script>
<style scoped>
.game-pagination {
  margin-top: 30px;
  flex-wrap: wrap;

}
.game-pagination >>> .pagination{
  margin-bottom: 5px;
}
.game-pagination >>> .pagination .page-item .page-link {
  background-color:transparent;
   background-color: rgba(0,0,0,.7);
  font-size: 12px;
  color: #fff;
  box-shadow: none;
  border-color: transparent;
}
.game-pagination >>> .pagination .page-item.active .page-link {
 border-color: #fff;
  background-color: #fff;
  color: #000;
}
.game-pagination >>> .pagination .page-item.disabled .page-link {
  color: rgb(144, 156, 147);
}
.manual-page {
  display: flex;
height: 30px;
margin-bottom: 5px;

}
.manual-input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 30px;
  background-color: transparent;
background-color: rgba(0,0,0,.7);
border-color: rgba(0,0,0,.7);
color:#fff;
border-right: 0px;
margin-left: 10px;
width: 60px;
}
.manual-input:focus {
  box-shadow: none;
  color: #fff;
  background-color: rgba(0,0,0,.7);
  border-color: rgba(0, 0, 0, 0.6);
  border-color: rgba(0,0,0,.7);
}
.manual-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: transparent;
background-color: rgba(6, 5, 5, 0.31);
 border-color:transparent;
 border-top-right-radius: 50%;
 border-bottom-right-radius: 50%;
}

</style>
