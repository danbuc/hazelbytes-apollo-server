<template>
  <div v-if="getPosts">
    <v-flex xs12>
      <v-carousel v-bind="[{ 'cycle': true }, { 'hide-delimiters': true }, { 'height': '100vh' }]" interval="3000">
        <v-carousel-item v-bind="{ 'height': '100vh' }" v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <div class="post-excerpt">
            <h2 class="post-excerpt--title">{{post.title}}</h2>
            <p class="post-excerpt--text">{{post.excerpt}}</p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-container>
    <h1>Home</h1>
    <v-spacer></v-spacer>
    <h2>Games</h2>
    <v-btn><v-icon v-html="$vuetify.icons.steam"></v-icon> Steam</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.windows"></v-icon> Windows</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.xbox"></v-icon> XBox</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.playstation"></v-icon> PlayStation</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.switch"></v-icon> Switch</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.classic"></v-icon> Classic Nintendo</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.origin"></v-icon> Origin</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.gog"></v-icon> GOG</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.battlenet"></v-icon> Battle.Net</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.uplay"></v-icon> Uplay</v-btn>
    <v-spacer></v-spacer>
    <h2>Games / Engines</h2>
    <v-btn><v-icon v-html="$vuetify.icons.unreal"></v-icon> Unreal / Epic Games</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.unity"></v-icon> Unity</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.vr"></v-icon> VR</v-btn>
    <v-spacer></v-spacer>
    <h2>Dev</h2>
    <v-btn><v-icon v-html="$vuetify.icons.github"></v-icon> GitHub</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.html"></v-icon> HTML</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.js"></v-icon> JS</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.css"></v-icon> CSS</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.csharp"></v-icon> C#</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.cpp"></v-icon> C++</v-btn>
    <v-spacer></v-spacer>
    <h2>Social</h2>
    <v-btn><v-icon v-html="$vuetify.icons.twitch"></v-icon> Twitch</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.youtube"></v-icon> Youtube</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.twitter"></v-icon> Twitter</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.instagram"></v-icon> Instagram</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.discord"></v-icon> Discord</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.slack"></v-icon> Slack</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.patreon"></v-icon> Patreon</v-btn>
    <v-btn><v-icon v-html="$vuetify.icons.facebook"></v-icon> Facebook</v-btn>
    </v-container>
  </div>
</template>

<script>
import { gql } from 'apollo-boost'

export default {
  name: 'home',
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            excerpt
          }
        }
      `,
      result({ data, loading, networkStatus }) {
        if(!loading) {
          this.posts = data.getPosts
          console.log('[networkStatus]', networkStatus)
        }
      },
      error(err) {
        console.error('[Error!]', err)
      }
    }
  }
}
</script>

<style lang="scss">
.post-excerpt {
  position: absolute;
  background-color: rgba(75, 75, 75, 0.5);
  width: 100%;
  padding: 1em;
  bottom: 0;

  &--title {
    color: white;
  }

  &--text {
    color: white;
  }
}
</style>
