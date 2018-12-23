<template>
  <v-app style="background: #4c5b61;">
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
          <router-link to="/" tag="span" style="cursor: pointer;">
            <h1 class="title pl-3">Hi Menu</h1>
          </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider class="mt-5"></v-divider>


    </v-navigation-drawer>

    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer;">
          Daniels little Planet
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field flex prepend-icon="search" placeholder="Search" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <div>
        <transition name="fade">       
          <router-view/>
        </transition>
      </div>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'chat', title: 'Blog', link: '/blog'},
        { icon: 'apps', title: 'Collection', link: '/collection'},
        { icon: 'person_pin', title: 'About', link: '/about'},
        { icon: 'lock_open', title: 'Sign In', link: '/signin'},
        { icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: 'Blog', link: '/blog'},
        { icon: 'apps', title: 'Collection', link: '/collection'},
        { icon: 'person_pin', title: 'About', link: '/about'},
        { icon: 'lock_open', title: 'Sign In', link: '/signin'},
        { icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src:  url('assets/fonts/icomoon.eot?unov0w');
  src:  url('assets/fonts/icomoon.eot?unov0w#iefix') format('embedded-opentype'),
    url('assets/fonts/icomoon.ttf?unov0w') format('truetype'),
    url('assets/fonts/icomoon.woff?unov0w') format('woff'),
    url('assets/fonts/icomoon.svg?unov0w#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-battlenet:before {
  content: "\e900";
}
.icon-gog:before {
  content: "\e901";
}
.icon-ubisoft:before {
  content: "\e902";
}
.icon-controller-classic:before {
  content: "\e903";
}

.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}
</style>

