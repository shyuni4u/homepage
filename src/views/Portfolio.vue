<template>
  <div class="portfolio">
    <div class="title">포트폴리오</div>
    <ul class="profile">
      <li class="project body">
        <div class="content">
          <ul
          v-for="(el, index) in profile.project"
          :key="el.name">
            <li class="project_no">{{ (index > 10 ? index + 1 : '0' + (index + 1)) }}</li>
            <li class="project_info">
              <div class="name"><h3>{{ el.name }}</h3></div>
              <div class="date">{{ el.date }}</div>
              <div class="grade">{{ el.grade }}</div>
            </li>
            <li class="project_content">
              <div class="desc">
                <ol class="ol">
                  <li v-for="item in el.ol" :key="item">{{ item }}</li>
                </ol>
                <ul class="ul">
                  <li v-for="item in el.ul" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="images">
                <ul>
                  <li
                  v-for="item in el.image"
                  :key="item">
                    <img :src="getPngImgUrl(item)" :alt="item" :title="item" />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Profile from '@/json/portfolio.json';

export default {
  name: "portfolio",
  data: () => {
    return {
      profile: Profile
    }
  },
  methods: {
    me() {
      return require('@/assets/120x160.jpg');
    },
    qrcode() {
      return require('@/assets/qrcode.png');
    },
    getPngImgUrl (path) {
      let image = require.context('@/assets/portfolio/', false, /\.png$/);
      try {
        return image('./' + path + '.png');
      } catch {
        return null;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/scss/common.scss';
div.title {
  position: relative;
  text-align: center;
  padding: 50px 0;
  font-size: 1.875em;
  font-weight: 400;
  color: #ff0073;
  &::after {
    content: '';
    position: absolute;
    top: 105px;
    left: 50%;
    width: 30px;
    height: 1px;
    background-color: #ff0073;
    transform: translate(-50%,-50%);
  }
}
ul.profile {
  li.project>div.content>ul {
    padding: 30px 0px 40px;
    border-bottom: 1px solid #c9c9c9;
    &:first-child {
      padding-top: 0px;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
    }
    &>li.project_no {
      color: #ff0073;
    }
    &>li.project_info {
      display: flex;
      flex-wrap: wrap;
      div.name {
        position: relative;
        padding: 25px 0 20px;
        flex: 70% 1 1;
        font-weight: 600;
      }
      div.date {
        padding: 25px 0 20px;
        flex: 30% 1 1;
        text-align: right;
        font-style: italic;
        vertical-align: bottom;
      }
      div.grade {
        flex: 100% 1 1;
        color: #777;
      }
    }
    &>li.project_content {
      display: flex;
      flex-direction: column;
      div.desc {
        flex: 100% 0 0;
        ol.ol {
          margin-top: 15px;
          list-style-type: decimal;
          padding-left: 20px;
          &>li {
            color: #666;
          }
          padding-bottom: 20px;
        }
        ul.ul {
          margin-top: 15px;
          list-style-type: disc;
          padding-left: 20px;
          &>li {
            color: #333;
            font-weight: 600;
          }
          padding-bottom: 20px;
        }
      }
      div.images>ul {
        flex: 100% 0 0;
        display: flex;
        flex-wrap: wrap;
        li {
          flex: 320px 0 1;
          overflow: hidden;
          border: 1px solid #c9c9c9;
          padding: 10px;
          border-radius: 5px;
          margin-right: 10px;
          margin-bottom: 10px;
          text-align: center;
          &:last-child {
            margin-right: 0;
          }
          img {
            max-width: 300px;
            max-height: 180px;
          }
        }
      }
    }
  }

  li.body {
    padding: 15px 0px;
    border-top: 3px solid #333;
    display: flex;
    flex-wrap: wrap;
    &:first-child {
      border-top: none;
    }
    &>div.title {
      font-weight: 550;
      flex: 15% 0 0;
      color: #777;
    }
    &>div.content {
      flex: 85% 1 1;
      display: flex;
      flex-wrap: wrap;
      &>ul {
        flex: 100% 1 1;
      }
      &>div.name {
        flex: 70% 1 1;
        font-weight: 600;
        font-size: 1.2rem;
      }
      &>div.date {
        flex: 30% 1 1;
        font-style: italic;
        vertical-align: bottom;
      }
      &>div.grade {
        flex: 100% 1 1;
        color: #777;
      }
      &>div.qrcode {
        margin-top: 10px;
        border: 1px solid #c9c9c9;
      }
    }
  }
}

@media (max-width: 767px) {
  ul.profile {
    li.project>div.content>ul {
      &>li.project_info {
        div.name {
          flex: 100% 1 1;
        }
        div.date {
          flex: 100% 1 1;
        }
      }
    }
    li.body {
      &>div.title {
        flex: 100% 0 0;
      }
      &>div.content {
        flex: 100% 0 0;
        &>div.name {
          flex: 100% 1 1;
        }
        &>div.date {
          flex: 100% 1 1;
        }
      }
    }
  }
}
</style>