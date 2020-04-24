<template>
  <div id="app">
    <div id="header">
      <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">Lorenzo</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="enzo-nav-items" v-for="entry in menus" :key="entry.title">
              <b-nav-item href="#" v-if="entry.sub.length == 0">
                <router-link :to="entry.linkTo">{{ $t(entry.title) }}</router-link>
              </b-nav-item>

              <b-nav-item-dropdown :text="$t(entry.title)" v-if="entry.sub.length > 0">
                <b-dropdown-item class="enzo-nav-items-dropdown" href="#" v-for="sub_entry in entry.sub" :key="sub_entry.title">
                  <router-link :to="sub_entry.linkTo">{{ $t(sub_entry.title) }}</router-link>
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!--
              <img alt="Vue logo" src="../assets/logo.png" />
              -->
              <!--
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown :text="$t('lang')" right>
                <b-dropdown-item href="#" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                  <flag :iso="entry.flag" v-bind:squared=false />
                  {{ entry.title }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
              -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div id="container">
      <router-view />
    </div>
    <div id="footer">
      Copyright ⓒ 2020 Sunwoo Kim All right reserved.
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: "App",
  data() {
    return {
      LoadingStatus : false,
      menus: [
        {
          linkTo: '/',
          title: 'menuAboutMe',
          sub: []
        },
        {
          linkTo: '/project',
          title: 'menuProject',
          sub: [
            {
              linkTo: '/project/smart_factory',
              title: 'menuProjectSubSmartFactory'
            },
            {
              linkTo: '/project/android',
              title: 'menuProjectSubAndroid'
            }
          ]
        },
        {
          linkTo: '/resume',
          title: 'menuResume',
          sub: []
        },
        {
          linkTo: '/portfolio',
          title: 'menuPortfolio',
          sub: []
        },
        {
          linkTo: '/github',
          title: 'menuGithub',
          sub: []
        },
        /*
        {
          linkTo: '/etc',
          title: 'menuEtc',
          sub: []
        }
        */
      ],
      languages: [
        {
          flag: 'kr',
          language: 'kr',
          title: '한국어'
        },
        {
          flag: 'us',
          language: 'en',
          title: 'English'
        }
      ]
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss">
.enzo-nav-items { 
  a {
    color: rgba(255, 255, 255, 0.5);

    &:hover, &:focus {
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
    }

    .router-link-exact-active {
      color: rgba(255, 255, 255, 0.5);
      &:hover, &:focus {
        color: rgba(255, 255, 255, 0.75);
        text-decoration: none;
      }
    }
  }
}

.enzo-nav-items-dropdown {
  a {
    color: #16181b;

    &:hover, &:focus {
      color: #16181b;
    }

    .router-link-exact-active {
      color: #16181b;
      &:hover, &:focus {
        color: #16181b;
        text-decoration: none;
      }
    }
  }
}

#container {
  margin: 0 auto;
  max-width: 1080px;
  text-align: left;
  zoom: 1;
}

#footer {
  padding: 20px 0;
  background-color: #0c0c13;
  color: #fff;
  text-align: center;
  min-height: 60px;
  width: 100%;
}

@media print {
  #footer {
    display: none;
    -webkit-print-color-adjust: exact;
  }
}
</style>
