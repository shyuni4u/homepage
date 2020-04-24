import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    goRepository: `Go Repository`,
    more: `More`,
    shortcut: 'Shortcut',
    menuAboutMe: `About me`,
    menuResume: `Resume`,
    menuPortfolio: `Portfolio`,
    menuProject: `Project`,
    menuProjectSubSmartFactory: `SmartFactory`,
    menuProjectSubAndroid: `Android`,
    menuStudy: `Study`,
    menuEtc: `ETC`,
    menuGithub: `Github`,
    presentName: `Seonu, Kim`,
    presentBirthday: `1988. 11. 11`,
    presentMotto: `Motto: Let's live without regret`,
    presentEducation: `Education`,
    presentEducationMsg: `Dongguk Univ. Computer Engineering`,
    presentCareer: `Career`,
    presentCareerMsg: `2016. 11 ~ 2019. 6 Cubictek`,
    presentProject: `Project`,
    presentProjectMsg:
      `[Android] KPOP-Diary
      <br/>[SmartFactory] SMA
      <br/>[SmartFactory] IJS
      <br/>[SmartFactory] NEDEC
      <br/>[SmartFactory] DHAC
      <br/>Windows -> Linux Server Change Setting
      <br/>Signal acquisition used Focas library(FANUC)
      <br/>[SmartFactory] Wonpoong
      <br/>[SmartFactory] KOREA POLYTECHNICS Training Setting
      <br/>Add Web Designer Responsibilities
      <br/>[SmartFactory] JRT
      <br/>[SmartFactory] Sungam
      <br/>[SmartFactory] TOPIND
      <br/>[SmartFactory] FELIX
      <br/>[SmartFactory] DONGYANG MIRAE Univ. Training Setting
      <br/>[Android] OverCam`,
  },
  kr: {
    lang: `언어`,
    goRepository: `저장소 바로가기`,
    more: `더보기`,
    shortcut: '바로가기',
    menuAboutMe: `내 정보`,
    menuProject: `프로젝트`,
    menuProjectSubSmartFactory: `스마트팩토리`,
    menuProjectSubAndroid: `안드로이드`,
    menuStudy: `연구`,
    menuResume: `이력서`,
    menuPortfolio: `포트폴리오`,
    menuEtc: `기타`,
    menuGithub: `Github`,
    presentName: `김선우`,
    presentBirthday: `1988. 11. 11`,
    presentMotto: `좌우명: 후회없이 살자`,
    presentEducation: `학력`,
    presentEducationMsg: `동국대학교. 컴퓨터공학과`,
    presentCareer: `경력`,
    presentCareerMsg: `2016. 11 ~ 2019. 6 큐빅테크`,
    presentProject: `프로젝트`,
    presentProjectMsg:
      `[안드로이드] KPOP-Diary
      <br/>[스마트팩토리] SMA
      <br/>[스마트팩토리] IJS
      <br/>[스마트팩토리] NEDEC
      <br/>[스마트팩토리] DHAC
      <br/>윈도우 -> 리눅스 서버 환경 구축
      <br/>Focas 라이브러리 (FANUC)를 이용한 신호취득
      <br/>[스마트팩토리] 원풍산업
      <br/>[스마트팩토리] 청주폴리텍 체험환경
      <br/>반응형 웹 디자인 정리
      <br/>[스마트팩토리] 주강로보테크
      <br/>[스마트팩토리] 성암기연
      <br/>[스마트팩토리] 탑아이엔디
      <br/>[스마트팩토리] 펠릭스테크
      <br/>[스마트팩토리] 동양미래대학 체험환경
      <br/>[안드로이드] 오버캠`,
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});
