<template>
    <div class="SubProductsBannerRemote">
        <div class="SubProductsWrap">
            <span>
                <i>
                    <img src="https://velog.velcdn.com/images/kyj0206/post/3ab14d47-45c9-4f4c-aaa0-ead413260671/image.png" alt="VIRNECT Remote">
                </i>
                <p>VIRNECT Remote</p>
                <h2>
                    XR 원격 협업 
                    <p>솔루션</p>
                </h2>
                <span class="subExplanation">
                    VIRNECT Remote는 시/공간 제약 없이 여러 현장을 하나로 
                    <p>연결하여 자유롭게 정보를 공유합니다.</p>
                </span>
                <span>
                    <button>
                        <a href="#">
                            <p>자세히 보기</p>
                            <p>
                                <img src="https://velog.velcdn.com/images/kyj0206/post/ede40cab-2b1a-47ff-a338-ad93d68b93f4/image.png" alt="">
                            </p>
                        </a>
                    </button>
                    <button>
                        <a href="#">
                            데모신청
                        </a>
                    </button>
                </span>
            </span>
            <video autoplay muted>
                <source src="https://player.vimeo.com/external/560735983.hd.mp4?s=e14e93e201c67212624d232508ddcad911d7d617&profile_id=174">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.SubProductsBannerRemote{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 2400px;
    width: 100%;
    min-height: 875px;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .SubProductsWrap{
        p, a, span, div, button { text-decoration: none; }
        display: flex;
        padding: 0 30px;
        gap: 74px;
        >span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 560px;
            min-width: 560px;
            width: 50%;
            i{
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img{
                    max-width: 143px;
                }
            }
            >p{
                font-size: 20px;
                font-weight: bold;  
                letter-spacing: -0.25px;
                margin-bottom: 60px;
                text-align: center;
                color: #bfdcff;
            }
            h2{
                font-size: 48px;
                font-weight: bold;
                letter-spacing: -0.6px;
                text-align: center;
                color: #fff;
                margin-bottom: 24px;
                p{
                    display: inline;
                }
            }
            span{
                font-size: 24px;
                line-height: 1.58;
                letter-spacing: -0.3px;
                color: #fff;
                &.subExplanation{
                    display: block;
                    margin-bottom: 50px;
                    text-align: center;
                    p{
                        font-size: 24px;
                        line-height: 1.58;
                        letter-spacing: -0.3px;
                        color: #fff;
                        display: block;
                    }
                }
                &:last-child{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    button{
                        &:first-child{
                            border: solid 1px #fff;
                            background: #fff;
                            a{
                                display: flex;
                                gap: 20px;
                                padding: 10px 16px;
                                color: #121212;
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                    &:first-child{
                                        line-height: initial;
                                    }
                                    &:last-child{
                                        display: flex;
                                        align-items: flex-start;
                                        img{
                                            display: flex;
                                            align-items: center;
                                            max-width: 15px;
                                            max-height: 15px;
                                            width: 100%;   
                                            height: 100%; 
                                        }
                                    }
                                }
                            }
                        }
                        &:last-child{
                            border: solid 1px #bfdcff;
                            background-color: #bfdcff;
                            a{
                                display: block;
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px 42px;
                                color: #121212;
                                
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        video{
            max-width: 951px;
            width: 100%;
            min-width: auto;
        }
    }
}
.SubProductsBannerMake{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 2400px;
    width: 100%;
    min-height: 875px;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .SubProductsWrap{
        display: flex;
        padding: 0 30px;
        gap: 74px;
        >span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 560px;
            min-width: 560px;
            width: 50%;
            i{
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img{
                    max-width: 143px;
                }
            }
            >p{
                font-size: 20px;
                font-weight: bold;  
                letter-spacing: -0.25px;
                margin-bottom: 60px;
                text-align: center;
                color: #bfdcff;
            }
            h2{
                font-size: 48px;
                font-weight: bold;
                letter-spacing: -0.6px;
                text-align: center;
                color: #fff;
                margin-bottom: 24px;
                p{
                    display: inline;
                }
            }
            span{
                font-size: 24px;
                line-height: 1.58;
                letter-spacing: -0.3px;
                color: #fff;
                &.subExplanation{
                    display: block;
                    margin-bottom: 50px;
                    text-align: center;
                    p{
                        font-size: 24px;
                        line-height: 1.58;
                        letter-spacing: -0.3px;
                        color: #fff;
                        display: block;
                    }
                }
                &:last-child{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    button{
                        &:first-child{
                            border: solid 1px #fff;
                            background: #fff;
                            a{
                                display: flex;
                                gap: 20px;
                                padding: 10px 16px;
                                color: #121212;
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                    &:first-child{
                                        line-height: initial;
                                    }
                                    &:last-child{
                                        display: flex;
                                        align-items: flex-start;
                                        img{
                                            display: flex;
                                            align-items: center;
                                            max-width: 15px;
                                            max-height: 15px;
                                            width: 100%;   
                                            height: 100%; 
                                        }
                                    }
                                }
                            }
                        }
                        &:last-child{
                            border: solid 1px #bfdcff;
                            background-color: #bfdcff;
                            a{
                                display: block;
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px 42px;
                                color: #121212;
                                
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        video{
            max-width: 951px;
            width: 100%;
            min-width: auto;
        }
    }
}
.SubProductsBannerView{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 2400px;
    width: 100%;
    min-height: 875px;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .SubProductsWrap{
        display: flex;
        padding: 0 30px;
        gap: 74px;
        >span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 560px;
            min-width: 560px;
            width: 50%;
            i{
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img{
                    max-width: 143px;
                }
            }
            >p{
                font-size: 20px;
                font-weight: bold;  
                letter-spacing: -0.25px;
                margin-bottom: 60px;
                text-align: center;
                color: #bfdcff;
            }
            h2{
                font-size: 48px;
                font-weight: bold;
                letter-spacing: -0.6px;
                text-align: center;
                color: #fff;
                margin-bottom: 24px;
                p{
                    display: inline;
                }
            }
            span{
                font-size: 24px;
                line-height: 1.58;
                letter-spacing: -0.3px;
                color: #fff;
                &.subExplanation{
                    display: block;
                    margin-bottom: 50px;
                    text-align: center;
                    p{
                        font-size: 24px;
                        line-height: 1.58;
                        letter-spacing: -0.3px;
                        color: #fff;
                        display: block;
                    }
                }
                &:last-child{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    button{
                        &:first-child{
                            border: solid 1px #fff;
                            background: #fff;
                            a{
                                display: flex;
                                gap: 20px;
                                padding: 10px 16px;
                                color: #121212;
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                    &:first-child{
                                        line-height: initial;
                                    }
                                    &:last-child{
                                        display: flex;
                                        align-items: flex-start;
                                        img{
                                            display: flex;
                                            align-items: center;
                                            max-width: 15px;
                                            max-height: 15px;
                                            width: 100%;   
                                            height: 100%; 
                                        }
                                    }
                                }
                            }
                        }
                        &:last-child{
                            border: solid 1px #bfdcff;
                            background-color: #bfdcff;
                            a{
                                display: block;
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px 42px;
                                color: #121212;
                                
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        video{
            max-width: 951px;
            width: 100%;
            min-width: auto;
        }
    }
}
.SubProductsBannerTwin{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 2400px;
    width: 100%;
    min-height: 875px;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .SubProductsWrap{
        display: flex;
        padding: 0 30px;
        gap: 74px;
        >span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 560px;
            min-width: 560px;
            width: 50%;
            i{
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img{
                    max-width: 143px;
                }
            }
            >p{
                font-size: 20px;
                font-weight: bold;  
                letter-spacing: -0.25px;
                margin-bottom: 60px;
                text-align: center;
                color: #bfdcff;
            }
            h2{
                font-size: 48px;
                font-weight: bold;
                letter-spacing: -0.6px;
                text-align: center;
                color: #fff;
                margin-bottom: 24px;
                p{
                    display: inline;
                }
            }
            span{
                font-size: 24px;
                line-height: 1.58;
                letter-spacing: -0.3px;
                color: #fff;
                &.subExplanation{
                    display: block;
                    margin-bottom: 50px;
                    text-align: center;
                    p{
                        font-size: 24px;
                        line-height: 1.58;
                        letter-spacing: -0.3px;
                        color: #fff;
                        display: block;
                    }
                }
                &:last-child{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    button{
                        &:first-child{
                            border: solid 1px #fff;
                            background: #fff;
                            a{
                                display: flex;
                                gap: 20px;
                                padding: 10px 16px;
                                color: #121212;
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                    &:first-child{
                                        line-height: initial;
                                    }
                                    &:last-child{
                                        display: flex;
                                        align-items: flex-start;
                                        img{
                                            display: flex;
                                            align-items: center;
                                            max-width: 15px;
                                            max-height: 15px;
                                            width: 100%;   
                                            height: 100%; 
                                        }
                                    }
                                }
                            }
                        }
                        &:last-child{
                            border: solid 1px #bfdcff;
                            background-color: #bfdcff;
                            a{
                                display: block;
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px 42px;
                                color: #121212;
                                
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        video{
            max-width: 951px;
            width: 100%;
            min-width: auto;
        }
    }
}
.SubProductsBannerTrack{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 2400px;
    width: 100%;
    min-height: 875px;
    background-image: url('https://velog.velcdn.com/images/kyj0206/post/6a090db9-cd30-42a5-95f5-1dc04c915ab1/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .SubProductsWrap{
        display: flex;
        align-items: center;
        padding: 0 30px;
        gap: 74px;
        >span{
            &:first-child{
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 560px;
                min-width: 560px;
                width: 50%;
            }

            i{
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img{
                    max-width: 143px;
                }
            }
            >p{
                font-size: 20px;
                font-weight: bold;  
                letter-spacing: -0.25px;
                margin-bottom: 60px;
                text-align: center;
                color: #bfdcff;
            }
            h2{
                font-size: 48px;
                font-weight: bold;
                letter-spacing: -0.6px;
                text-align: center;
                color: #fff;
                margin-bottom: 24px;
                p{
                    display: inline;
                }
            }
            span{
                font-size: 24px;
                line-height: 1.58;
                letter-spacing: -0.3px;
                color: #fff;
                &.subExplanation{
                    display: block;
                    margin-bottom: 50px;
                    text-align: center;
                    p{
                        font-size: 24px;
                        line-height: 1.58;
                        letter-spacing: -0.3px;
                        color: #fff;
                        display: block;
                    }
                }
                &:last-child{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                    button{
                        &:first-child{
                            border: solid 1px #fff;
                            background: #fff;
                            a{
                                display: flex;
                                gap: 20px;
                                padding: 10px 16px;
                                color: #121212;
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                    &:first-child{
                                        line-height: initial;
                                    }
                                    &:last-child{
                                        display: flex;
                                        align-items: flex-start;
                                        img{
                                            display: flex;
                                            align-items: center;
                                            max-width: 15px;
                                            max-height: 15px;
                                            width: 100%;   
                                            height: 100%; 
                                        }
                                    }
                                }
                            }
                        }
                        &:last-child{
                            border: solid 1px #bfdcff;
                            background-color: #bfdcff;
                            a{
                                display: block;
                                font-size: 16px;
                                font-weight: bold;
                                padding: 7px 42px;
                                color: #121212;
                                
                                p{
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        .video{
            max-width: 951px;
            width: 100%;
            min-width: auto;
            img{
                width: 100%;
            }
        }
    }
}


@media screen and (max-width: 1700px) {
    .SubProductsBannerTrack .SubProductsWrap .video,
    .SubProductsBannerTwin .SubProductsWrap video,
    .SubProductsBannerView .SubProductsWrap video,
    .SubProductsBannerMake .SubProductsWrap video,
    .SubProductsBannerRemote .SubProductsWrap video{
        width: 50%;
    }
}

@media screen and (max-width: 1360px) {
    .SubProductsBannerTrack .SubProductsWrap > span:first-child,
    .SubProductsBannerTwin .SubProductsWrap > span,
    .SubProductsBannerView .SubProductsWrap > span,
    .SubProductsBannerMake .SubProductsWrap > span,
    .SubProductsBannerRemote .SubProductsWrap > span{
        max-width: 338px;
    }
    .SubProductsBannerTrack .SubProductsWrap > span > p,
    .SubProductsBannerTwin .SubProductsWrap > span > p,
    .SubProductsBannerView .SubProductsWrap > span > p,
    .SubProductsBannerMake .SubProductsWrap > span > p,
    .SubProductsBannerRemote .SubProductsWrap > span > p{
        font-size: 16px;
        margin-bottom: 50px;
    }
    .SubProductsBannerTrack .SubProductsWrap > span h2,
    .SubProductsBannerTwin .SubProductsWrap > span h2,
    .SubProductsBannerView .SubProductsWrap > span h2,
    .SubProductsBannerMake .SubProductsWrap > span h2,
    .SubProductsBannerRemote .SubProductsWrap > span h2{
        font-size: 32px;
        margin-bottom: 18px;
        line-height: 1.31;
    }
    .SubProductsBannerTrack .SubProductsWrap > span h2 p,
    .SubProductsBannerTwin .SubProductsWrap > span h2 p,
    .SubProductsBannerView .SubProductsWrap > span h2 p,
    .SubProductsBannerMake .SubProductsWrap > span h2 p,
    .SubProductsBannerRemote .SubProductsWrap > span h2 p{
        display: block;
    }
    .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerView .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerView .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerMake .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerMake .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation p{
        font-size: 16px;
        display: inline;
    }
    .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerView .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerMake .SubProductsWrap > span span.subExplanation,
    .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation{
        margin-bottom: 44px;
    }
    .SubProductsBannerTrack .SubProductsWrap > span span:last-child button:first-child a p,
    .SubProductsBannerTwin .SubProductsWrap > span span:last-child button:first-child a p,
    .SubProductsBannerView .SubProductsWrap > span span:last-child button:first-child a p,
    .SubProductsBannerMake .SubProductsWrap > span span:last-child button:first-child a p,
    .SubProductsBannerRemote .SubProductsWrap > span span:last-child button:first-child a p{
        font-size: 16px;
    }
    .SubProductsBannerTrack .SubProductsWrap,
    .SubProductsBannerTwin .SubProductsWrap,
    .SubProductsBannerView .SubProductsWrap,
    .SubProductsBannerMake .SubProductsWrap,
    .SubProductsBannerRemote .SubProductsWrap{
        gap: 63.9px;
    }

    .SubProductsBannerTwin .SubProductsWrap video,
    .SubProductsBannerView .SubProductsWrap video,
    .SubProductsBannerMake .SubProductsWrap video,
    .SubProductsBannerRemote .SubProductsWrap video{
        width: 50%;
    }
    .SubProductsBannerTrack .SubProductsWrap .video{
        width: 100%;
    }
}


@media screen and (max-width: 1260px) {
    .SubProductsBannerTrack .SubProductsWrap > span:first-child,
    .SubProductsBannerTwin .SubProductsWrap > span,
    .SubProductsBannerView .SubProductsWrap > span,
    .SubProductsBannerMake .SubProductsWrap > span,
    .SubProductsBannerRemote .SubProductsWrap > span{
        min-width: 338px;
    }
    .SubProductsBannerTrack .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerTwin .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerView .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerMake .SubProductsWrap > span span.subExplanation p,
    .SubProductsBannerRemote .SubProductsWrap > span span.subExplanation p{
        display: inline;
    }
    .SubProductsBannerMake .SubProductsWrap video,
    .SubProductsBannerTwin .SubProductsWrap video,
    .SubProductsBannerView .SubProductsWrap video,
    .SubProductsBannerMake .SubProductsWrap video,
    .SubProductsBannerRemote .SubProductsWrap video{
        width: 64%;
    }
}

@media screen and (max-width: 1180px) {
    .SubProductsBannerTrack .SubProductsWrap,
    .SubProductsBannerTwin .SubProductsWrap,
    .SubProductsBannerView .SubProductsWrap,
    .SubProductsBannerMake .SubProductsWrap,
    .SubProductsBannerRemote .SubProductsWrap{
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 112px 24px 120px;
    }

    .SubProductsBannerTrack .SubProductsWrap > span,
    .SubProductsBannerTrack .SubProductsWrap .video,
    .SubProductsBannerTwin .SubProductsWrap > span,
    .SubProductsBannerTwin .SubProductsWrap video,
    .SubProductsBannerView .SubProductsWrap > span,
    .SubProductsBannerView .SubProductsWrap video,
    .SubProductsBannerMake .SubProductsWrap > span,
    .SubProductsBannerMake .SubProductsWrap video,
    .SubProductsBannerRemote .SubProductsWrap > span,
    .SubProductsBannerRemote .SubProductsWrap video{
        width: 100%;
    }
}
</style>