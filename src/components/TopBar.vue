<!-- <template>
  <header class="top-container">
		<div class="top-bar clearfix">
			<div class="topbar-nav">
				<ul class="nav-wrap">
					<li v-for="item in navs" class="nav clearfix">
            <template v-if="item.name === '小米商城'">
              	<a :href="item.sourceUrl" class="nav-name">{{item.name}}</a>
            </template>
            <template v-else>
              <a :href="item.sourceUrl" class="nav-name" target="_blank">{{item.name}}</a>
            </template>
						<span class="nav-separate" v-show="$index !== 8">|</span>
					</li>
				</ul>
			</div>
			<div class="topbar-info">
				<a href="http://order.mi.com/site/login?redirectUrl=http://www.mi.com/index.html">登陆</a>
				<span class="nav-separate" v-show="$index !== 8">|</span>
				<a href="https://account.xiaomi.com/pass/register">注册</a>
			</div>
  </header>
</template>

<script>
export default {
	data () {
		return {
			navs: [
				{name: '微商联盟', sourceUrl: 'http://www.mi.com/index.html'},
				{name: '奇趣联盟', sourceUrl: 'http://www.miui.com/'}

			],
			timer: '',
			cartStatus: false
		}
	},
  ready () {
  },
	methods: {
		evtCartEnter: function () {
      this.cartStatus = true
      clearInterval(this.timer)
		},
    evtCartOut: function () {
      let self = this
      this.timer = setTimeout(function () {
        self.cartStatus = false
      }, 300)
    }
	},
	components: {
	}
}
</script>

<style scoped>

.top-container {
	width: 100%;
	height: 60px;
	background: #333;
}

.top-bar {
	position: relative;
	width: 1226px;
	margin: 0 auto;
	font-size: 22px;
  z-index: 11;
}

.topbar-nav {
	float: left;
	display: inline-block;
	height: 40px;
	line-height: 60px;
	overflow: hidden;
}

.nav-wrap {
	display: inline-block;
	margin: 0;
	padding: 0;
	list-style: none;
	.nav {
		display: inline-block;
		text-decoration: none;
		height: 40px;
		line-height: 60px;
		padding-left: 5px;
		& :hover {
			color: #fff;
		}
		.nav-name {
			display: inline-block;
			font-size: 22px;
			color: #b0b0b0;
			text-decoration: none;
		}
		.nav-separate {
			display: inline-block;
			color: #b0b0b0;
			margin-left: 5px;
		}
	}
}

.topbar-info {
	position: absolute;
	top: 0;
	right: 140px;
	height: 40px;
	line-height: 60px;
	a {
		color: #b0b0b0;
		text-decoration: none;
    &:hover {
      color: #fff;
    }
	}
	span {
		color: #b0b0b0;
	}
}

.topbar-cart {
	position: relative;
	float: right;
	width: 120px;
	background: #424242;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
  &:hover {
    background: #fff;
    a, .icon-cart, span {
      color: #ff6700;
    }
  }
	.active {
		background: #fff;
    a {
      color: #ff6700;
    }
    span {
      color: #ff6700;
    }
	}
	a {
		display: block;
    width: 100%;
    height: 100%;
		padding-left: 40px;
		color: #b0b0b0;
		text-decoration: none;
    box-sizing: border-box;
	}
	span {
		color: #b0b0b0;
	}
  .icon-cart {
    position: absolute;
    left: 15px;
    top: 10px;
    color: #b0b0b0;
    font-size: 20px;
  }
}

.cart-list {
	position: absolute;
	right: 0;
	top: 39px;
  width: 316px;
  height: 96px;
  line-height: 96px;
	text-align: center;
	color: #b0b0b0;
	background: #fff;
	box-shadow: 0 0 5px #ccc;
  z-index: 10;
  overflow: hidden;
}

.fadein-transition {
  transition: all .5s ease;
  height: 96px;
}

.fadein-enter, .fadein-leave {
  height: 0;
}
</style> -->
