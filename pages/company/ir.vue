<template>
<div>
  <sub-visual-section />

   <div class="companyWrap">
        <span class="companyList">
            <ul>
                <li>번호</li>
                <li>제목</li>
                <li>등록일</li>
            </ul>
    
            <ul v-for="(data,idx) of irData"
                :key="idx">
                <li>{{data.id}}</li>
                <li>
                    <nuxt-link :to="`ir-detail?id=${data.id}`">{{data.title}}</nuxt-link>
                </li>
                <li>{{$dayjs(data.createdDate).format("YYYY-MM-DD")}}</li>
            </ul>
            
            <!-- 페이지네이션 -->
            <common-paging :movePage="movePage"
                           :pagingData="pagingData"/>
        </span>
    </div>
</div>
</template>

<script>
import subVisualSection from "../../layouts/common/SubVisual.vue";
import CommonPaging from "~/components/paging/paging.vue";

export default {
  data() {
    return {
       pagingData: {
                currentPage: 1,
                currentSize: 20,
                totalPage: 1,
                totalElements: 1,
                startPage: 1,
                endPage: 1
        },
        irData: []
    }
  },
  methods: {
    async movePage (currentPage) {
      this.pagingData = {...this.pagingData, currentPage: currentPage};
      await this.$axios.get(`admin/ir?page=${this.pagingData.currentPage}&size=${this.pagingData.currentSize}`)
                  .then(res => {
                    this.irData = res.data.data.irResponseList;
                    this.pagingData = res.data.data.pageMetadataResponse;
                  })  
                  .catch(e => console.error(e)) 
    },
  },
  components: {
    subVisualSection,
    CommonPaging
  },
  async asyncData({$axios}) {
    try {
      const data = await $axios.get(`admin/ir?page=1&size=20`);
      const dataJson = await data;
      console.log(dataJson.data.data.irResponseList)
      return {
        irData: dataJson.data.data.irResponseList,
        pagingData: dataJson.data.data.pageMetadataResponse
      }
    } catch(e) {console.error(e)}
  }
};
</script>

<style lang="scss" scoped>
.companyWrap{
    display: flex;
    gap: 20px;
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    padding: 150px 30px;
    .companyList{
        display: block;
        width: 100%;
        >ul{
            display: flex;
            gap: 10px;
            justify-content: space-between;
            border-bottom: solid 1px #c5c8cf;
            li{
                padding: 31px 0;
                font-size: 16px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal;
                color: #616161;
                a{
                    color: #616161;
                }
                &:first-child{
                    flex: 1;
                    text-align: left;
                    padding-left: 30px;
                }
                &:nth-child(2){
                    flex: 6;
                    a{
                        &:hover{
                            color: #0a51b7;
                        }
                    }
                }
                &:last-child{
                    flex: 1;
                    text-align: right;
                    white-space: nowrap;
                    padding-right: 30px;
                }
            }
            &:first-child{
                border-top: solid 1px #616161;
                border-bottom: solid 1px #616161;
                >li{
                    padding: 23px 0;
                    font-size: 16px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.75;
                    letter-spacing: normal;
                    text-align: center;
                    color: #121212;
                    &:first-child{
                        text-align: left;
                        padding-left: 30px;
                    }
                    &:nth-child(2){
                        text-align: center;
                    }
                    &:last-child{
                        text-align: right;
                        padding-right: 30px;
                    }
                }
            }
            &:nth-last-child(2){
                margin-bottom: 50px;
            }
        }
        .pageNation{
            display: flex;
            justify-content: center;
            .pageNationWrap{
                display: flex;
                justify-content: center;
                width: 100%;
                span{
                    p{
                        .Normal{
                            display: block;
                        }
                        .Hover{
                            display: none;
                        }
                    }
                    &:first-child{
                        display: flex;
                        gap: 5px;
                        align-items: center;
                        p{
                            cursor: pointer;
                            max-width: 30px;
                            max-height: 30px;
                            padding: 5px;
                            border: solid 1px #c5c8cf;
                            background-color: #fff;
                            &:hover{
                                .Normal{
                                    display: none;
                                }
                                .Hover{
                                    display: block;
                                }
                            }
                            img{
                                max-width: 19px;
                            }
                        }
                    }
                    &:nth-child(2){
                        width: 100%;
                        max-width: 110px;
                        margin: 0 23.5px;
                        ul{
                            display: flex;
                            align-items: center;
                            height: 100%;
                            width: 100%;
                            li{
                                cursor: pointer;
                                padding-top: 5px;
                                flex: 1;
                                width: 100%;
                                height: 100%;
                                line-height: 24px;
                                text-align: center;
                                font-size: 16px;
                                font-weight: 500;
                                font-stretch: normal;
                                font-style: normal;
                                letter-spacing: normal;
                                color: #c5c8cf;
                                &:hover{
                                    color: #121212;
                                }
                                &.pasingAct{
                                    color: #0a51b7;
                                }
                            }
                        }
                    }
                    &:last-child{
                        display: flex;
                        gap: 5px;
                        align-items: center;
                        p{
                            cursor: pointer;
                            padding: 5px;
                            max-width: 30px;
                            max-height: 30px;
                            border: solid 1px #c5c8cf;
                            background-color: #fff;
                            &:hover{
                                .Normal{
                                    display: none;
                                }
                                .Hover{
                                    display: block;
                                }
                            }
                            img{
                                max-width: 19px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .companyWrap{
        flex-direction: column;
        padding: 100px 24px;
    }
}

@media screen and (max-width: 650px) {
    .companyWrap .companyList > ul:first-child li:nth-child(2),
    .companyWrap .companyList > ul li:nth-child(2){
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;  
    }
    .companyWrap .companyList > ul:first-child li:last-child,
    .companyWrap .companyList > ul li:last-child{
        display: none;
    }
}

@media screen and (max-width: 425px) {
    .companyWrap .companyList > ul li:first-child{
        padding-left: 24px;
    }
}
</style>