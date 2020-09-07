<template>
  <div class="d-flex justify-content-center">
    <div class="col-sm-7">
      <b-list-group>
        <b-list-group-item class="list-item">
          <span>GTA VICE CITY (2003)</span>
          <div class="wrap-btns">
            <b-dropdown
              id="dropdown-platforms"
              text="Platforms"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#">PC</b-dropdown-item>
            </b-dropdown>
            <b-dropdown
              id="dropdown-genres"

              text="Genres"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#">genres</b-dropdown-item>
            </b-dropdown>
            <b-button><b-icon icon="trash"/></b-button>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-item">
          <span>GTA VICE CITY (2003)</span>
          <div class="wrap-btns">
            <b-dropdown
              id="dropdown-platforms"

              text="Platforms"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#">PC</b-dropdown-item>
            </b-dropdown>
            <b-dropdown
              id="dropdown-genres"

              text="Genres"
              variant="success"
              class="dropdown-platforms"
            >
              <b-dropdown-item href="#">genres</b-dropdown-item>
            </b-dropdown>
            <b-button><b-icon icon="trash"/></b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileFavorites',
};
</script>
<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
}
.list-item:hover {
  transform: scale(1.03);
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
}
.wrap-btns >>> button {
  border-radius: 0%;
  margin-right: 1px;
}
</style>
