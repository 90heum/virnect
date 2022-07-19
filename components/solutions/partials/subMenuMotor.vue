<template>
  <div id="menu_re" class="SubMenuUse">
    <span class="SubMenuMobileTitle"
          @click="handleToggle()">
      <span>공공/교육</span>
      <i><img src="require(~/assets/images/pages/down.png)"/></i>
    </span>
    <ul :class="`SubMenuNav ${toggle ? 'mobileActive' : ''}`"
        @click="handleToggle()">
      <li class="subMenu">
        <nuxt-link to="/value/infra_resource"> 인프라/자원 </nuxt-link>
      </li>
      <li class="subMenu">
        <nuxt-link to="/value/manufacture_construction"> 제조/건설 </nuxt-link>
      </li>
      <li class="SubUseNavActive subMenu">
        <nuxt-link to="/value/public_education"> 공공/교육 </nuxt-link>
      </li>
      <li class="subMenu">
        <nuxt-link to="/value/entertainment"> 엔터테인먼트 </nuxt-link>
      </li>
      <li class="subMenu">
        <nuxt-link to="/value/etc"> 기타 </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      // isWeb: true
    }
  },
  // mounted() {
  //   window.addEventListener('resize', this.handleResize);
	// },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.handleResize);
  // },
  created() {
    setTimeout(() => {
      /* if(process.client)document.querySelector('.SubMenuUse').scrollIntoView({behavior: 'smooth'}); */
    }, 500);
  },
  watch: {
    $route(to, from) {
      subScroll();
    },
  },
  methods: {
    // handleResize() {
    //   if (process.client) {
    //     console.log(window.innerWidth)
    //     if (window.innerWidth < 426) {
    //       this.isWeb = false;
    //       console.log("앱")
    //     } else {
    //       this.isWeb = true;
    //       console.log("웹웹")
    //     }
    //   }
    // },
    handleToggle() {
      this.toggle = !this.toggle;
    },
    subScroll() {
      if (process.client) {
        document
          .querySelector(".SubMenuUse")
          .scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.SubMenuUse {
  .SubMenuMobileTitle { display: none; }
  background-color: #e6e8eb;
  .SubMenuNav {
    position: relative;
    display: flex;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    li {
      a {
        text-decoration: none;
      }
      display: block;
      max-width: 241px;
      min-height: 66px;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        a {
          &::after {
            display: none;
          }
        }
      }
      a {
        display: block;
        padding: 24px 0;
        font-size: 16px;
        font-weight: bold;
        line-height: 1;
        letter-spacing: -0.2px;
        text-align: center;
        color: #9a9da3;

        &::after {
          position: absolute;
          content: "";
          display: block;
          height: 25px;
          top: 50%;
          border-right: 1px solid #c5c8cf;
          transform: translateY(-50%);
        }
      }
      &.SubUseNavActive,
      &:hover {
        background: #fff;
        a {
          color: #0a51b7;
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .SubMenuUse {
    position: relative;
  }
  .SubMenuUse .SubMenuMobileTitle {
    display: flex;
    justify-content: space-between;
    color: #0a51b7;
    font-size: 16px;
    height: 64px;
    line-height: 4;
    background: #fff;
    padding: 0 20px;
  }
  .SubMenuUse .SubMenuNav {
    position: absolute;
    z-index: 1;
    display: none;
    padding-left: 0px;
    max-width: 425px;
  }
  .SubMenuUse .SubMenuNav .subMenu, .SubMenuUse .SubMenuNav li.SubUseNavActive { 
    max-width: none; 
    background-color: #0a51b7;
    padding: 0 20px;
  }
  .SubMenuUse .SubMenuNav .subMenu:hover {
    background: #092e6e;
  }
  .SubMenuUse .SubMenuNav .subMenu a:hover { color: #fff; }
  .SubMenuUse .SubMenuNav li.subMenu>a {
    color: #fff;
    font-size: 16px;
    text-align: start;
  }
  .SubMenuUse .SubMenuNav li.subMenu a::after { content: none; }
  .SubMenuUse .mobileActive {
    display: block;
  }
}
</style>