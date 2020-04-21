<template>
  <div class="resume">
    <ul class="profile">
      <li class="my_info body">
        <div class="title">
          <img :src="me()" />
        </div>
        <div class="content">
          <ul>
            <li class="name">{{ profile.name }} <span class="birth">{{ profile.birth }}</span></li>
            <li class="mb-4"></li>
            <li class="email">이메일: {{ profile.email }}</li>
            <li class="mb-4"></li>
            <li class="phone">연락처: {{ profile.phone }}</li>
          </ul>
        </div>
      </li>
      <li class="intro">
        <div
        v-for="el in profile.intro"
        :key="el">
        {{ el }}
        </div>
      </li>
      <li class="mb-4"></li>
      <li class="career body">
        <div class="title">경력 & 프로젝트</div>
        <div class="content">
          <ul
          v-for="el in profile.career"
          :key="el.name">
            <li class="my_info">
              <div class="name">{{ el.name }}</div>
              <div class="date">{{ el.date }}</div>
              <div class="grade">{{ el.grade }}</div>
            </li>
            <li class="desc"
            v-for="item in el.desc"
            :key="item.title">
              <ul>
                <li class="_title">{{ item.title }}<span class="date">{{ item.date }}</span></li>
                <li class="_content"
                v-for="_e in item.content"
                :key="_e">
                {{ _e }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
      <li class="education body">
        <div class="title">학력</div>
        <div class="content">
          <div class="name">{{ profile.education.name }}</div>
          <div class="date">{{ profile.education.date }}</div>
          <div class="desc">{{ profile.education.grade }}</div>
          <div class="subject">{{ profile.education.subject }}</div>
        </div>
      </li>
      <li class="etc body">
        <div class="title">수상 및 기타</div>
        <div class="content">
          <div class="name">{{ profile.etc.title }}</div>
          <div class="date">{{ profile.etc.date }}</div>
        </div>
      </li>
      <li class="homepage body">
        <div class="title">링크</div>
        <div class="content">
          <div class="name">{{ profile.homepage.link }}</div>
          <div class="qrcode">
            <img :src="qrcode()" />
          </div>
        </div>
      </li>
    </ul>
    <div class="for_print print_footer">QR 코드로 홈페이지를 방문하시면 프로젝트와 GitHub 자료를 보실 수 있습니다.</div>
  </div>
</template>

<script>
import Profile from '@/json/resume.json';

export default {
  name: "resume",
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
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/scss/common.scss';

ul.profile {
  &>li.my_info {
    &>div.title {
      &>img {
        max-width: 120px;
        height: 160px;
      }
    }
    &>div.content {
      li.name {
        font-weight: bold;
        font-size: 1.9rem;
        span.birth {
          font-weight: 100;
          font-size: 1.3rem;
          padding-left: 10px;
          vertical-align: bottom;
        }
      }
    }
  }
  li.career>div.content>ul {
    padding: 20px 0px;
    border-bottom: 1px solid #c9c9c9;
    &:first-child {
      padding-top: 0px;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
    }
    &>li.my_info {
      display: flex;
      flex-wrap: wrap;
      div.name {
        flex: 70% 1 1;
        font-weight: 600;
        font-size: 1.2rem;
      }
      div.date {
        flex: 30% 1 1;
        font-style: italic;
        vertical-align: bottom;
      }
      div.grade {
        flex: 100% 1 1;
        color: #777;
      }
    }
    &>li.desc>ul {
      margin-top: 15px;
      list-style-type: disc;
      padding-left: 20px;
      li._title {
        font-weight: 600;
        span.date {
          font-weight: 300;
          font-size: 0.9rem;
          color: #777;
          font-style: italic;
          padding-left: 10px;
        }
      }
      li._content {
        list-style-type: none;
        padding: 2px 0px;
      }
    }
  }
  li.body {
    padding: 20px 0px;
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

div.print_footer {
  height: 100px;
  width: 100%;
  padding: 30px;
  font-weight: bold;
  background: #c9c9c9;
}

@media (max-width: 767px) {
  ul.profile {
    li.career>div.content>ul {
      &>li.my_info {
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

@media screen {
  .for_print {
    display: none;
  }
}
@media print {
  .for_print {
    display: block;
    -webkit-print-color-adjust: exact;
  }
}
</style>