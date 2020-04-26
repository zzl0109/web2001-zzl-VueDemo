<template>
  <div class="help">
    <div class="bg">
		<img src="../assets/img/banner_help_v2.jpg" alt="">
	</div>
	
	<div class="section">
		<ul>
			<li class="header">
				新手指南
			</li>
			<li>
				<div class="left">
					·购物流程
				</div>
				<div class="right">
					<img src="../assets/img/right.png" alt="">
				</div>
			</li>
		</ul>
	</div>
	
	<div class="section">
		<ul>
			<li class="header">
				交易问题
			</li>
			<li>
				<div class="left">·我拍下来后的商品什么时候发货？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·已成团委发货如何退款？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·没有收到货/商家发错地址了怎么办？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·收到商品有问题怎么办？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·如何联系商家客服？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·为什么我的优惠券不能使用？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·"全网总售"和"已拼"有什么区别？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·收到的商品能退换货么？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
		</ul>
	</div>
	
	<div class="section">
		<ul>
			<li class="header">
				退款&售后
			</li>
			<li>
				<div class="left">·退换货流程</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·退换后规则</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
			<li>
				<div class="left">·7天无理由退换货</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
		</ul>
	</div>
	
	<div class="section">
		<ul>
			<li class="header">
				账户相关
			</li>
			<li>
				<div class="left">·账户安全与账户信息</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
		</ul>
	</div>
	
	<div class="section">
		<ul>
			<li class="header">
				联系我们
			</li>
			<li>
				<div class="left">·如何联系拼多多客服？</div>
				<div class="right"><img src="../assets/img/right.png" alt=""></div>
			</li>
		</ul>
	</div>
	
	<div class="footer">
		<div class="line"></div>
		<div class="txt">版权所有：上海寻梦信息技术有限公司</div>
		<div class="txt">(增值电信业务经营许可证：沪B2-20170215)</div>
	</div>
	
	
  </div>
</template>


<style scoped="scoped" lang="less">
	.help{
		.bg{
			img{
				width:100%;
				vertical-align:middle;
			}
		}
		
		.section{
			margin-top:.6rem;
			background-color: #fff;
			.header{
				line-height:2rem;
				padding-left: .6rem;
				font-size: .6rem;
			}
			li{
				display:flex;
				justify-content: space-between;
				align-items:center;
				font-size:.55rem;
				line-height:1.6rem;
				padding:0 .6rem 0 1.2rem; 
				.right{
					img{
						width:56%;
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