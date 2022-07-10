<template>
   <span class="MenuSubSub">
          <ul>
            <li>
              <a class="SubSubActive" href="#headingModuleTop" id="a01">제품개요</a>
            </li>
            <li>
              <a href="#productPropertyId" id="a02">제품특징</a>
            </li>
            <li>
              <a href="#headingModuleBottom" id="a03">기능소개</a>
            </li>
            <li>
              <a href="#functionPart" id="a04">도입효과</a>
            </li>
          </ul>
        </span>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.MenuSubSub {
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        li {
          border-right: 1px solid #c5c8cf;
          &:last-child {
            border-right: none;
          }
          a {
            font-size: 14px;
            font-weight: bold;
            line-height: 1;
            letter-spacing: -0.26px;
            color: #616161;
            margin: 0 20px;
            &:hover,
            &.SubSubActive {
              color: #121212;
            }
          }
        }
      }
    }
    @media screen and (max-width: 720px) {
  .SubMenu .SubMenuWrap .MenuSubSub ul {
    display: none;
  }

  .SubMenu .SubMenuWrap .MenuSub ul {
    width: 100%;
  }
}
</style>