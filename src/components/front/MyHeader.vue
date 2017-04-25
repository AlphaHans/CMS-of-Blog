<template>
<header class="myHeader">
  <div class="circle" v-on:click="onClickTitle">
    <!-- <img src="../../assets/img/me.jpg" alt="ycwalker"> -->
    <p id="website_name" >Hans Zone</p>
  </div>
  <ul class="menu">
    <li v-for="link in links">
      <a :href="link.href">
          {{link.name}}
        </a>
    </li>
  </ul>
</header>
</template>

<style lang="sass" rel="stylesheet/scss" scoped>
    header.myHeader {
        min-height: 60px;
        #website_name {
            line-height: 60px;
            font-size: 30px;
        }
        ul {
            float: right;
            margin: 0;
            li {
                list-style: none;
                display: inline-block;
                padding: 18px 14px;
                a {
                    color: #2c3e50;
                    &:hover {
                        text-decoration: none;
                        border-bottom: 2px solid #42b983;
                    }
                }
            }
        }
    }
</style>

<script>
import {
  mapState
}
from 'vuex'
export default {
  created() {
    this.$store.dispatch('getLinks')
  },
  computed: mapState(['links']),
  methods: {
    onClickTitle : function (){
      this.$router.push('/');
    }
  }
}
</script>
