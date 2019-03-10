<template>
    <section>
      <h1> Top Artists </h1>
      <ul class="top-artist">
        <li v-for="artist in topArtists" :key="artist.id">
          <img :src="artist.image[3]['#text']">
          <p> {{artist.name}}</p>
          slusašano: <p>{{artist.playcount | formatPrice}}</p>
        </li>
      </ul>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'topArtists',

  data() {
    return {
     apiKey: '24e2ae9d1ef903d06d2a13408b988016',
     topArtists: ''
    }
  },
  created() {
   //axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=beatles&api_key=${this.apiKey}&format=json`)
   axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${this.apiKey}&format=json`).then (response => {
        this.topArtists = response.data.artists.artist;
    });
  }
}
</script>

<style scoped lang="scss">
  .top-artist {
    list-style: none;
    li {
      width: 25%;
      float: left;
    }
  }
</style>
