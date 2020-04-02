<template>
  <div class="present">
    <div class="intro">
      <img class="me" :src="me.image"/>
      <div class="myname">{{ me.name }}</div>
      <div class="info1">{{ me.info1 }}</div>
      <div class="info2">{{ me.info2 }}</div>
    </div>
    <div class="main_container">
      <section class="career">
        <!--
        <div class="items" v-for="l_info in left_info" :key="l_info.title">
          <h4 class="profile header">{{ l_info.header_title }}</h4>
          <span class="profile header_sub">{{ l_info.header_subtitle }}</span>
          <div class="hr"></div>
          <div class="item">
            <div class="nowrap content">
              <div class="nowrap sub_title">{{ l_info.content_title }}</div>
              <p class="date">{{ l_info.content_date }}</p>
              <div class="break desc" v-html="l_info.desc"></div>
            </div>
          </div>
        </div>
        -->

        <div class="items">
          <h4 class="profile header">경력</h4>
          <span class="profile header_sub"></span>
          <div class="hr"></div>
          <div class="item">
            <div class="nowrap content">
              <div class="nowrap sub_title">큐빅테크</div>
              <p class="date">2016년 11월 - 2019년 6월 | 2년 7개월</p>
              <div class="break desc">스마트팩토리 담당업무를 맡아 MES개발, 리눅스 서버구축, FANUC 신호추출 프로젝트를 수행했습니다.</div>
            </div>
          </div>
          <div class="item">
            <div class="nowrap content">
              <div class="nowrap sub_title">공군 19비행단</div>
              <p class="date">2009년 3월 - 2011년 4월 | 2년 1개월</p>
              <div class="break desc">비행단 웹 서버 관리 및 이발예약, 체력관리 프로젝트 개발을 수행했습니다.</div>
            </div>
          </div>
        </div>

        <div class="items">
          <h4 class="profile header">학력</h4>
          <span class="profile header_sub"></span>
          <div class="hr"></div>
          <div class="item">
            <div class="nowrap content">
              <div class="nowrap sub_title">동국대학교 컴퓨터공학과</div>
              <p class="date">2007년 - 2015년 졸업</p>
              <div class="break desc"></div>
            </div>
          </div>
        </div>

        <div class="items">
          <h4 class="profile header">연락처</h4>
          <div class="hr"></div>
          <div class="item">
            <div class="nowrap content">
              <div class="break desc">
                e-mail: shyuniz@naver.com
              </div>
            </div>
          </div>
        </div>

        <!-- <github></github> -->

        <div class="items for_print">
          <h4 class="profile header">홈페이지</h4>
          <div class="item">
            <div class="nowrap content">
              <div class="break desc">
                https://shyuni4u.github.io/homepage/dist/
                <img :src="me.qrcode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="project">
        <div class="items">
          <h4 class="profile header">프로젝트</h4>
          <div class="tag_list">
            <span class="tag android">안드로이드</span>
            <span class="tag smartfactory">스마트팩토리</span>
            <span class="tag">기타</span>
          </div>
          <div class="hr"></div>
          <ul class="profile_list">
            <li v-for="r_info in right_info" :key="r_info.title" :class="['profile_list-item', r_info.class]">
              <div class="list_item item">
                <div class="logo image">
                  <div class="ui logo">
                    <img class="image" :src="r_info.image" alt="logo" />
                  </div>
                </div>
                <div class="nowrap content">
                  <div class="nowrap sub_title">{{ r_info.title }} <span class="due">{{ r_info.due }}</span></div>
                  
                  <div class="break desc">{{ r_info.desc }}</div>
                  <div class="break skill">{{ r_info.skill }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="for_print print_footer">QR 코드로 홈페이지를 방문하시면 프로젝트와 GitHub 자료를 보실 수 있습니다.</div>
  </div>
</template>

<script>
//import GithubListVue from './GithubList.vue'

export default {
  name: 'present',
  //components: { 'github': GithubListVue },
  data: () => {
    return {
      me: {
        name: '김 선 우',
        image: require('@/assets/me.png'),
        motto: '후회없이 살자',
        birth: '1988. 11. 11',
        info1: '웹 풀스택 개발자',
        info2: '웹 개발, SW 개발, 운영 분야의 Ubuntu, Android, Kotlin에 관심있습니다.',
        qrcode: require('@/assets/qrcode.png')
      },
      left_info: [
        {
          header_title: '경력',
          header_subtitle: '2년 7개월',
          content_title: '큐빅테크',
          content_date: '2016년 11월 - 2019년 6월 | 2년 7개월',
          desc: '스마트팩토리 담당업무를 맡아 MES개발, 리눅스 서버구축, FANUC 신호추출 프로젝트를 수행했습니다.'
        },
        {
          header_title: '학력',
          header_subtitle: '',
          content_title: '동국대학교 컴퓨터공학과',
          content_date: '2007년 - 2015년 졸업',
          desc: ''
        }
      ],
      right_info: [
        {
          class: '',
          image: require('@/assets/empty.png'),
          title: '덱트래커 로그 플러그인',
          due: '2020년 3월 - 2020년 3월 | 1개월',
          desc: '덱트래커 플러그인 개발',
          skill: 'C#, mariadb'
        },
        {
          class: '',
          image: require('@/assets/empty.png'),
          title: '하스스톤 전장 로그 사이트',
          due: '2020년 3월 - 2020년 3월 | 1개월',
          desc: '전장 로그 사이트 개발: http://battlegroundlab.com',
          skill: 'vuejs, php, mariadb, AWS'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '하스스톤 전장 스트리머 통계 페이지',
          due: '2020년 2월 - 2020년 2월 | 1개월',
          desc: '전장 스트리머 로그 페이지 개발: https://shyuni4u.github.io/BattlegroundLab/dist/',
          skill: 'vuejs'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '코로나 확진자 정보 크롤링',
          due: '2020년 2월 - 2020년 2월 | 1개월',
          desc: '코로나 확진자 정보 크롤링을 통한 API 생성',
          skill: 'AWS RDS, AWS Lambda'
        },{
          class: 'android',
          image: require('@/assets/project/OverCam.png'),
          title: '오버캠',
          due: '2019년 8월 - 2019년 11월 | 4개월',
          desc: 'Before / After 사진 비교 앱',
          skill: 'kotlin, android'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/동양미래.svg'),
          title: '동양미래대학 체험환경',
          due: '2018년 12월 - 2019년 4월 | 5개월',
          desc: '스마트팩토리 체험환경 구축',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/펠릭스.jpg'),
          title: '펠릭스테크',
          due: '2018년 11월 - 2019년 4월 | 6개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb, fanuc nc'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/탑.jpg'),
          title: '탑아이엔디',
          due: '2018년 10월 - 2019년 4월 | 7개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb, fanuc nc'
        },{
          class: 'smartfactory',
          image: require('@/assets/empty.png'),
          title: '성암기연',
          due: '2018년 3월 - 2019년 2월 | 11개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb, fanuc nc'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/주강.gif'),
          title: '주강로보테크',
          due: '2018년 1월 - 2019년 2월 | 13개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'smartfactory',
          image: require('@/assets/empty.png'),
          title: '청주폴리텍 체험환경',
          due: '2018년 1월 - 2018년 11월 | 11개월',
          desc: '스마트팩토리 체험환경 구축',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '반응형 웹 디자인 정리',
          due: '2017년 9월 - 2018년 2월 | 6개월',
          desc: '기존 웹 디자인 변경 및 반응형 웹 디자인 추가',
          skill: 'html, css, javascript'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/원풍.jpg'),
          title: '원풍산업',
          due: '2017년 11월 - 2018년 1월 | 3개월',
          desc: 'MES 구축',
          skill: 'nginx, php, mariadb'
        },{
          class: '',
          image: require('@/assets/project/화낙.jpg'),
          title: 'FOCAS를 이용한 신호취득',
          due: '2017년 6월 - 2018년 1월 | 8개월',
          desc: 'FANUC 공작기계 컨트롤러 신호를 취득하여 모니터링 정확성 증가',
          skill: 'c++, nodejs'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '윈도우 -> 리눅스 서버 환경 구축',
          due: '2017년 5월 - 2017년 6월 | 2개월',
          desc: '리눅스 서버 환경 구축 및 기존 윈도우 서버 연동',
          skill: 'ubuntu'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/대한제쇄.gif'),
          title: '대한제쇄',
          due: '2017년 4월 - 2017년 12월 | 9개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'smartfactory',
          image: require('@/assets/project/네덱.jpg'),
          title: 'NEDEC',
          due: '2017년 4월 - 2017년 12월 | 9개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'smartfactory',
          image: require('@/assets/empty.png'),
          title: 'IJS',
          due: '2017년 4월 - 2017년 12월 | 9개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'smartfactory',
          image: require('@/assets/empty.png'),
          title: 'SMA',
          due: '2016년 12월 - 2017년 6월 | 7개월',
          desc: 'MES 구축 및 신호취득',
          skill: 'nodejs, nginx, php, mariadb'
        },{
          class: 'android',
          image: require('@/assets/project/kpop.png'),
          title: 'K-POP Diary',
          due: '2012년 1월 - 2012년 2월 | 2개월',
          desc: 'K-POP 아이돌 일정 보기 및 커뮤니티',
          skill: 'jQuery mobile'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '모두의 베팅',
          due: '2011년 6월 - 2011년 12월 | 6개월',
          desc: '모두의 베팅',
          skill: 'jQuery mobile, jsp, kt cloud'
        },{
          class: '',
          image: require('@/assets/empty.png'),
          title: '비행단 웹 관리',
          due: '2009년 3월 - 2011년 4월 | 2년 1개월',
          desc: '비행단 웹 관리 및 프로그램 개발',
          skill: 'linux, oracle, jsp'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.intro {
  background-color: #c5d2d4;
  height: 350px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  padding-top: 30px;
  margin-top: 10px;
  -webkit-print-color-adjust: exact;
  .me {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .birth {
    color: #ae5a4e;
  }
  .myname {
    color: #333;
    font-family: '나눔바른고딕';
    font-weight: bold;
    font-size: 1.4rem;
  }
  .info1 {
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .info2 {
    color: #17a2b8;
    font-weight: 800;
    font-family: 'Do Hyeon,sans-serif'
  }
}
.profile_list {
  position: relative;
  padding-left: 45px;
  padding-top: 10px;
  list-style: none;
  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 13px;
    width: 10px;
    height: 100%;
    border-left: 2px solid #CCC;
  }
  
  &-item {
    position: relative;
    counter-increment: list;
    
    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      left: -32px;
      height: 100%;
      width: 10px;
    }
    
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: -37px;
      width: 12px;
      height: 12px;
      border: 2px solid #CCC;
      border-radius: 50%;
      background-color: #FFF;
    }
    
    &.android {
      &::before {
        border-left: 2px solid green;
      }
      &::after {
        font-size: 10px;
        color: #FFF;
        text-align: center;
        border: 2px solid green;
        background-color: #FFF;
      }
    }
    
    &.smartfactory {
      &::before {
        border-left: 2px solid red;
      }
      &::after {
        font-size: 10px;
        color: #FFF;
        text-align: center;
        border: 2px solid red;
        background-color: #FFF;
      }
    }
  }
}
div.items {
  padding: 24px 24px 24px 10px;
  .profile.header {
    display: inline-block;
    color: #333;
    margin-bottom: 0;
    font-size: 20px;
    border: none;
    margin: 0.3rem 0;
    padding: 0;
    font-weight: 900;
    line-height: 1.28571429em;
    text-transform: none;
  }
  .profile.header_sub {
    padding-left: 3px;
    color: #c9c9c9;
    font-size: 18px;
  }
  .item {
    border: none;
    margin: 0;
    padding: 1em 0;
    font-size: 1em;
    display: flex;
    width: 100%;
    min-height: 0;
    box-shadow: none;
    transition: box-shadow .1s ease;
    .logo.image {
      margin-right: 10px;
    }
    .image:not(.ui) {
      width: auto;
    }
    .image {
      position: relative;
      -webkit-box-flex: 0;
      flex: 0 0 auto;
      display: block;
      float: none;
      margin: 0;
      padding: 0;
      .ui.logo {
        width: 64px;
        height: 64px;
        position: relative;
        background: #fff;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
    }
    .content {
      min-width: 0;
      width: 100%;
      display: block;
      margin-left: 0;
      -ms-flex-item-align: top;
      -ms-grid-row-align: top;
      padding-left: 16px;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      background: 0 0;
      margin: 0;
      padding: 0;
      box-shadow: none;
      font-size: 1em;
      border: none;
      border-radius: 0;
      >div:not(:last-child) {
        margin-bottom: 4px;
      }
      .title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: #273444;
        strong {
          font-weight: bolder;
        }
      }
      .sub_title {
        font-size: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
      }
      p.date {
        margin: 0 0 .5em;
        line-height: 1.5em;
        font-size: 12px;
        color: #6e7980;
      }
      .due {
        margin: 0 0 .5em;
        line-height: 1.5em;
        font-size: 12px;
        color: #6e7980;
        font-weight: normal;
      }
      .desc {
        color: #28323c;
        font-size: 14px;
        img {
          width: 80%;
          height: 80%;
        }
      }
      .skill {
        color: #5a678d;
        font-size: 12px;
      }
    }
  }
  .list_item::before {
    content: "";
    position: relative;
    z-index: 1;
    left: -30px;
    height: 100%;
    border-left: 1px #ccc solid;
  }
}
.tag_list {
  float: right;
}
.tag {
  margin-left: 5px;
  font-size: 10px;
  border: #ccc solid 2px;
  background-color: #fff;
  color: #ccc;
  border-radius: 5px;
  padding: 2px 4px;
  &.android {
    color: green;
    border: green solid 2px;
  }
  &.smartfactory {
    color: red;
    border: red solid 2px;
  }
}
.hr {
  background-color: #bcc1bf;
  width: 170px;
  height: 8px;
  text-align: left;
}
.nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-overflow-style: none;
}
.break {
  white-space: normal;
}
.h4, .h5 {
  font-weight: bold;
  color: #555;
}
.print_footer {
  height: 100px;
  width: 100%;
  padding: 30px;
  font-weight: bold;
  background: #c9c9c9;
}
div, span {
  white-space: normal;
  text-overflow: ellipsis;
}
@media (min-width: 768px) {
  div.main_container {
    display: flex;
    section {
      flex: 1;
      &.career {
        flex: 30% 1 1;
      }
      &.project {
        background-color: #efefef;
        flex: 70% 1 1;
      }
    }
  }
}
@media (max-width: 767px) {
  div.items {
    padding: 24px 5px;
  }
  .profile_list {
    &::before {
      border-left: 0px;
    }
    &-item {
      margin-left: -45px;
      border-bottom: 1px solid #c9c9c9;
    }
  }
  div.main_container {
    display: flex;
    flex-wrap: wrap;
    section {
      flex: 1;
      &.career {
        flex: 100% 0 0;
      }
      &.project {
        background-color: #efefef;
        flex: 100% 0 0;
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
