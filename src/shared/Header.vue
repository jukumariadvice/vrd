<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="faded" color>
      <b-navbar-brand href="#" v-text="currentNameNav"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!--<b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>-->

        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <a href="#works" class="nav-link">Obras</a>
          </li>
          <li class="nav-item">
            <a href="#top-contracts" class="nav-link">Top empresas con mas contractos</a>
          </li>
          <li class="nav-item">
            <a href="#downloads" class="nav-link">Descarga los datos</a>
          </li>
          <li class="nav-item">
            <a href="#tools" class="nav-link">Herramientas</a>
          </li>
          <li class="nav-item">
            <a href="#information" class="nav-link">Informacion</a>
          </li>
          <!--<b-nav-item
            :to="{name:'contracts',params:{departament:'la-paz'}}"
            active-class="active"
            exact
          >Contratos</b-nav-item>
          <b-nav-item :to="{name:'top'}" active-class="active">Obras</b-nav-item>
          -->
          <!--<b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    currentNameNav() {
      return this.$store.state.currentNameNav;
    }
  }
};
</script>