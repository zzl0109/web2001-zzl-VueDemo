<template>
  <div class="home">
		<div class="bg">
			<img src="../assets/img/banner_index.jpg" alt="">
		</div>
		<div class="more">
			<router-link :to="'/activity?id=0'">
				<p>
					<span>精彩活动</span>
					<span class="vip" >查看更多></span>
				</p>
				<router-link :to="'/activity?id=0'">
					<div class="seckill">
						<img src="../assets/img/seckill.png" alt="">
					</div>
				</router-link>
				<div class="section">
					<router-link :to="'/activity?id=1'">
						<div class="sale">
							<img src="../assets/img/sale.png" alt="">
						</div>
					</router-link>
					<router-link :to="'/activity?id=2'">
						<div class="supermarket">
							<img src="../assets/img/supermarket.png" alt="">
						</div>
					</router-link>
				</div>
			</router-link>
		</div>
		<div class="subject" v-for="(item,index) in datas" >
			<router-link :to="'/subject?type='+item.type">
				<p v-if="index == 0">
					<span>精选专题</span>
					<span class="vip" @click="goToMore">查看更多></span>
				</p>
				<div class="image" v-if="item.type == 'girlclothes'">
					<img src="../assets/img/girlclothes.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'boyshirt'">
					<img src="../assets/img/boyshirt.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'medical'">
					<img src="../assets/img/medical.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'food'">
					<img src="../assets/img/food.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'shoes'">
					<img src="../assets/img/shoes.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'home'">
					<img src="../assets/img/home.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'electric'">
					<img src="../assets/img/electric.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'baby'">
					<img src="../assets/img/baby.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'furniture'">
					<img src="../assets/img/furniture.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'sports'">
					<img src="../assets/img/sports.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'beauty'">
					<img src="../assets/img/beauty.jpg" alt="">
				</div>
				
				<div class="goods" >
					<div class="good" v-for="(good,index) in item.data" v-show="index <= '2'">
						<div class="img"><img :src="good.thumb_url" alt=""></div>
						<div class="name">{{good.goods_name}}</div>
						<div class="price"><span>￥{{good.group_price/100}}</span><span class="market_price">￥{{good.market_price/100}}</span></div>
					</div>
					
				</div>
			</router-link>
		</div>
		
		<div class="footer">
			<div class="line"></div>
			<div class="txt">版权所有：上海寻梦信息技术有限公司</div>
			<div class="txt">(增值电信业务经营许可证：沪B2-20170215)</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import data from  '@/data'
export default {
  name: 'Home',
  data(){
	  return{
		  datas:[]
	  }
  },
  components: {
    HelloWorld
  },
  created(){
	  console.log(data)
	  this.datas = data.data
  },
  methods:{
	  goToMore(){
		  
		  this.$router.go(-1)
		  console.log("跳转到更多")
	  }
  }
}
</script>

<style scoped="scoped" lang="less">
	.home{
		img{
			vertical-align: middle;
		}
		.bg{
			margin:0;
			img{
				width:100%;
				height:100%;
			}
		}
		.more{
			margin-top: .5rem;
			background-color: #fff;
			p{
				display:flex;
				justify-content:space-between;
			}
			span{
				line-height: 2.2rem;
				font-size: .64rem;
				margin-left: .42667rem;
			}
			.vip{
				font-size: .512rem;
				color: #868686;
				margin-right: .42667rem;
			}
			.seckill{
				img{
					width:100%;
					vertical-align: middle;
				}
			}
			.section{
				display:flex;
				a{
					width:50%;
					height:auto;
				}
				.sale{
					width:100%;
					img{
						width:100%;
						vertical-align: middle;
					}
				}
				.supermarket{
					width:100%;
					img{
						width:100%;
						vertical-align: middle;
					}
				}
			}
		}
		.subject{
			margin-top: .5rem;
			background-color: #fff;
			p{
				display:flex;
				justify-content:space-between;
			}
			span{
				line-height: 2.2rem;
				font-size: .64rem;
				margin-left: .42667rem;
			}
			.vip{
				font-size: .512rem;
				color: #868686;
				margin-right: .42667rem;
			}
			.image{
				img{
					width:100%;
				}
			}
			
			.goods{
				display:flex;
				.good{
					width:33.33%;
					.img{
						padding:0.18rem;
						// width:4.5rem;
						img{
							width:100%;
						}
					}
					.name{
						height: 1.2rem;
						line-height: .6rem;
						font-size: .16rem;
						overflow: hidden;
					}
					.price{
						font-size: ;
						.group_price{
							margin-left: 0;
						}
						.market_price{
							text-decoration:line-through;
							font-size: .512rem;
							color: #cbcbcb;
						}
					}
				}
					
			}
		}
		
		.footer{
			margin-top: 1rem;
			background-color: #fff;
			padding:1rem 1rem 0;
			.line{
				height: 1px;
				width:100%;
				margin:0 auto;
				background-color: #d6d6d6;
			}
			.txt{
				font-size: .512rem;
				line-height: 1.4rem;
				text-align: center;
				color: #7a7a7a;
			}
		}
		
	}
</style>
