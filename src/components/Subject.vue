<template>
	<div class="subject">
		<van-tabs v-model="active" color="#d53758" background="#ed445b" title-inactive-color="white"
		title-active-color = "white"
		>
		  <van-tab v-for="(item,index) in goods" :title="item.name">
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
				
				<div class="image" v-if="item.type == 'beauty'">
					<img src="../assets/img/beauty.jpg" alt="">
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
				
				<div class="header">
					<p>{{item.name}}</p>
					<p>{{item.desc}}</p>
					
					<div class="icon_img">
						<div class="icon">
							<div class="icon1"></div>
							<p>全场包邮</p>
						</div>
						<div class="icon">
							<div class="icon2"></div>
							<p>7天退换</p>
						</div>
						<div class="icon">
							<div class="icon3"></div>
							<p>假一赔十</p>
						</div>
						<div class="icon">
							<div class="icon4"></div>
							<p>48小时发货</p>
						</div>
					</div>
					
				</div>
				
				
				
				<div class="good_info">
					<div class="good" v-for="(good,index) in item.data">
						<div class="section">
							<div class="top">
								<img :src="good.thumb_url" alt="">
							</div>
							<div class="good_desc">
								{{good.goods_name}}
							</div>
							<div class="good_price">
								<span>￥{{good.group_price/100}}</span>
								<span class="market_price">￥{{good.market_price/100}}</span>
								
							</div>
						</div>
					</div>
					
				</div>
				
		  </van-tab>
		</van-tabs>
		
		<div class="footer">
			<div class="line"></div>
			<div class="txt">版权所有：上海寻梦信息技术有限公司</div>
			<div class="txt">(增值电信业务经营许可证：沪B2-20170215)</div>
		</div>
		
	</div>
</template>

<script>
import data from '@/data'
	export default{
		data(){
			return{
				active:0,
				num:0,
				goods:null
			}
		},
		created(){
			console.log(data.data)
			this.goods = data.data
			console.log(this.active,this.$route.query.id)
		},
		mounted(){
			this.num = this.$route.query.id
			this.active = this.$route.query.id
		}
	}
</script>

<style scoped="scoped" lang="less">
	.subject{
		.van-tabs{
			.van-tabs__wrap{
				.van-tabs__nav{
					.van-tab--active{
						background-color: darkblue;
						font-size: 50px;
					}
				}
				
			}
		}
		
		.van-tab--active{
			background-color: #d53758;
		}
		.van-tabs__content{
			
			.image{
				img{
					width:100%;
					vertical-align: middle;
				}
			}
			
			
			
			.header{
				background-color: #fff;
				p{
					font-size: .64rem;
					line-height: 1.5rem;
					color: #111;
					text-align: left;
					padding-left:.6rem;
					border-bottom: .04267rem solid #f6f6f6;
				}
				& p:nth-child(2){
					color: #686868;
					font-size: .512rem;
					line-height: .9rem;
				}
				
				.icon_img{
					display:flex;
					.icon{
						width:25%;
						text-align: center;
						padding-top:.6rem;
						p{
							font-size: .512rem;
							color: #8d8d8d;
							text-align: center;
							padding: .2rem 0  .2rem;
						}
						div{
							width: 1.45067rem;
							height: 1.45067rem;
							margin: 0 auto;
						}
						.icon1{
							background: url(../assets/img/icon.png) no-repeat -38px 0;
							background-size: 2.90133rem 4.352rem;
						}
						.icon2{
							background: url(../assets/img/icon.png) no-repeat -38px -76px;
							background-size: 2.90133rem 4.352rem;
						}
						.icon3{
							background: url(../assets/img/icon.png) no-repeat 0 -76px;
							background-size: 2.90133rem 4.352rem;
						}
						.icon4{
							background: url(../assets/img/icon.png) no-repeat 0 0;
							background-size: 2.90133rem 4.352rem;
						}
					}
				}
			}
			
			.good_info{
				display:flex;
				flex-wrap: wrap;
				.good{
					width:50%;
					padding:0.25rem;
					.section{
						padding:0.4rem;
						background-color: #fff;
					}
					.top{
						img{
							width:100%;
						}
					}
					.good_desc{
						color: #686868;
						font-size: .512rem;
						line-height: .68267rem;
						height: 2.048rem;
						overflow: hidden;
						text-align: left;
						-o-text-overflow: ellipsis;
						text-overflow: ellipsis;
						margin:  .34133rem 0; 
					}
					.good_price{
						font-size: .512rem;
						line-height: 1.28rem;
						text-align: center;
						color: #ff2741;
						.market_price{
							color: #868686;
							text-decoration: line-through;
							padding-left:.2rem;
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
