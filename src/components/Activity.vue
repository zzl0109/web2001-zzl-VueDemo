<template>
	<div class="activity">
		<van-tabs v-model="active" color="#d53758" background="#ed445b" title-inactive-color="white"
		title-active-color = "white"
		>
		  <van-tab v-for="(item,index) in goods" :title="item.name">
				<div class="image" v-if="item.type == 'seckill'">
					<img src="../assets/img/seckill.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'sale'">
					<img src="../assets/img/sale.jpg" alt="">
				</div>
				
				<div class="image" v-if="item.type == 'supermarket'">
					<img src="../assets/img/supermarket.jpg" alt="">
				</div>
				
				<div class="header">
					<p>{{item.name}}</p>
					<p>{{item.desc}}</p>
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
								<span>￥{{good.price}}</span>
								<span class="market_price">￥{{good.market_price}}</span>
								
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
			this.goods = data.goods
			console.log(this.active,this.$route.query.id)
		},
		mounted(){
			this.num = this.$route.query.id
			this.active = this.$route.query.id
		}
	}
</script>

<style scoped="scoped" lang="less">
	.activity{
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
