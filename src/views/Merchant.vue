<template>
	<div class="merchant">
		<header class="header">
			<img src="../assets/img/logo.png" alt="">
			<span>拼多多个人店铺入驻</span>
		</header>
		
		<div class="section">
			<section>
				<div class="image"><img src="../assets/img/3b0836b1-163a-4e3d-a5bd-6530ce58a554.png" alt=""></div>
				<span>海量用户</span>
			</section>
			<span class="icon">×</span>
			<section>
				<div class="image"><img src="../assets/img/b98e572e-a37b-4de5-9aa3-3c911cd6a265.png" alt=""></div>
				<span>0入住费</span>
			</section>
			<span class="icon">×</span>
			<section>
				<div class="image"><img src="../assets/img/8a7a00c2-21af-4cd4-ba74-b64bc52fe133.png" alt=""></div>
				<span>2分钟开店</span>
			</section>
			<span class="icon">×</span>
			<section>
				<div class="image"><img src="../assets/img/240be0b3-fbb8-455f-a4dd-8f96e837612f.png" alt=""></div>
				<span>新商家红包</span>
			</section>
		</div>
		
		<div class="login">
			<form action="">
				<div class="user">
					<span>手机号码</span>
					<input type="number" v-model="username" placeholder="请填写入驻人手机号码">
				</div>
				<div class="pwd">
					<span>验证码</span>
					<input type="number" v-model="password"  placeholder="请填写验证码">
					<button @click="send">获取验证码</button>
				</div>
				<div class="submit">
					<button>0元入驻</button>
				</div>
			</form>
		</div>
		
		<div class="ad">
			企业店铺入驻，请在电脑端访问：https://ims.pinduoduo.com
		</div>
		
		<div class="footer">
			<div class="left"><img src="../assets/img/14c5b354-ea63-4c6f-b4e6-17e305a93c8d.png" alt=""></div>
			<div class="right">
				<div class="top">扫码关注公众号免费领取店铺</div>
				<div class="bottom">
					<p>长按二维码并保存，</p>
					<p>打开微信扫描二维码并关注公众号</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			send(){
				if(this.username.length != 11 || this.username == null){
					this.$toast("请输入正确的手机号")
					console.log(this.username.length)
				}
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.merchant{
		background-color: #fff;
		
		.footer{
			display: flex;
			padding:1.8rem 1rem 0;
			.left{
				display: flex;
				justify-content: center;
				align-items: center;
				width:3.8rem;
				padding:.2rem;
				border: 1px solid #dfdfdf;;
				img{
					width: 100%;
				}
			}
			.right{
				display: flex;
				font-size: .14rem;
				margin-left: .4rem;
				flex-direction: column;
				text-align: left;
				justify-content: space-between;
				.top{
					font-weight: 700;
				}
				p{
					color: #999;
				};
			}
		}
		
		.ad{
			font-size: .12rem;
			color: #666;
			text-align: center;
		}
		
		.login{
			text-align:left;
			color: rgba(0,0,0,.6);
			font-size: 15px;
			padding:1.4rem .6rem  .8rem;
			input,button {
				border:none;
				
			}
			input::-webkit-input-placeholder {
			   color: rgba(0,0,0,.3);
			    font-size: 14px;
			}
			.user,.pwd{
				line-height: 1.6rem;
			}
			span{
				display: inline-block;
				width:3rem;
			}
			.pwd{
				input{
					width:5rem;
				};
				button{
					margin-left:1rem;
					padding:0 .4rem;
					border:1px solid #b1b2b2;
					border-radius: 7px;
					line-height: 1.2rem;
					font-size: .13rem;
					background-color: #fff;
				}
			}
			.submit{
				text-align: center;
				padding:0 .2rem;
				margin-top:1.2rem;
				button{
					line-height: 1.8rem;
					width:100%;
					color:#fff;
					border-radius:6px;
					background-color: #d43;
				}
			}
		}
		
		.header{
			padding: 1rem 0 ; 
			text-align: center;
			img{
				width:10%;
				vertical-align: middle;
			}
			span{
				color:#f40009;
				padding-left:.6rem;
			}
		}
		
		.section{
			display:flex;
			align-items:center;
			padding: 0 1rem;
			.icon{
				font-size:.7rem;
				margin-bottom:.8rem;
				color:#FA8C90;
			}
			section{
				img{
					width:50%;
				}
				span{
					margin-top: .08rem;
					font-size: .12rem;
					color: #999;
				}
			}
		}
		
	}
</style>
