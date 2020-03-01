<template>
  <div id="app">
  <nav class="navbar  navbar-expand-lg  navbar-dark bg-primary">
    <router-link class="navbar-brand" :class="{active: currentMenu('home')}" to="/">홈</router-link>
    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="category in categoryList" :key="category.id">
          <router-link class="nav-link" :to="`/board/${category.id}`">{{category.name}}</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <ul class="navbar-nav" v-if="!$store.getters['User/isLogin']">
          <li class="nav-item" :class="{active: currentMenu('login')}">
            <router-link class="nav-link" to="/login">로그인</router-link>
          </li>
          <li class="nav-item" :class="{active: currentMenu('register')}">
            <router-link class="nav-link" to="/register">회원가입</router-link>
          </li>
        </ul>
        <div v-else>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                {{ user.nickname }} 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="logout">로그아웃</a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
  <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SmartQuery } from 'vue-apollo-decorator';
import CATEGORY_LIST from '@/graphql/query/categoryList.gql';

@Component({
  components: {},
})
export default class Home extends Vue {
  @SmartQuery({
    query: CATEGORY_LIST,
  })
  public categoryList = {};

  private logout() {
    this.$store.commit('User/logout');
    this.$router.push('/');
  }

  private currentMenu(name: string): boolean {
    if (name === this.$router.currentRoute.name) {
      return true;
    }
    return false;
  }

  get user(): IUser {
    return this.$store.state.User.user;
  }
}
</script>

<style lang="scss">
</style>
