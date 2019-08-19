var en = {
	"H_Home": "Home",
	"H_Features": "Features",
	"H_Sale": "Pre-sale",
	"H_FAQ": "FAQ",
	"H_Roadmap": "Roadmap",
	"H_Community": "Community",
	"H_EN_CH": "简体中文",
	"S1_2": "A Programmable Cryptocurrency base on cPoC consensus",
	"S1_3": "Whitepaper",
	"S1_4": "Get Coins",
	"S2_1": "Features",
	"S2_2": "CreenCoin is a programmable cryptocurrency based on cPoC consensus and everyone is free to mine it with ordinary hard disks rather than energy-hungry ASIC miners. While remaining decentralized and robust, the network is highly scalable with integrated cross-chain features.",
	"S2_3": "Decentralized",
	"S2_4": "Greencoins can be mined with ordinary hard disks rather than ASIC miners so everyone can take part in thus making the network more decentralized.",
	"S2_5": "Eco-friendly",
	"S2_6": "Mining with hard disks consumes much less energy compared with CPU/GPU mining so it has a lower carbon footprint.",
	"S2_7": "Robust & Flexible",
	"S2_8": "Greencoin inherits the basic structure of Bitcoin which has been proved robust while welcoming new technologies which make it more flexible.",
	"S3_1": "Pre-sale",
	"S3_2": "2,100,000 coins, or 1% of the total supply will be sold before the launch of the mainnet. You can purchase within the pre-sale period by interacting with the following smart contract:",
	"S3_3": "\xa0\xa0\xa0\xa0Days \xa0\xa0Hours \xa0Minutes \xa0Seconds",
	"S4_1": "Frequently Asked Questions",
	"S4_2": "How many coins will be sold at pre-sale?",
	"S4_3": "10% of the total supply, i.e., 21 million coins will be sold.",
	"S4_4": "When is the pre-sale?",
	"S4_5": "It starts at xxxx and ends at xxxx.",
	"S4_6": "What is the price then?",
	"S4_7": "xxx USDT per coin.",
	"S4_8": "How can I take part in the pre-sale event?",
	"S4_9": "Simply send ERC-20 based USDT tokens to our pre-sale smart contract and you'll receive the coins immediately.",
	"S5_1": "Roadmap",
	"S5_2": "May 2019",
	"S5_3": "Whitepaper published.",
	"S5_4": "August 2019",
	"S5_5": "Pre-sale & mainnet launch.",
	"S5_6": "March 2020",
	"S5_7": "Cross-chain ability.",
	"S5_8": "October 2020",
	"S5_9": "Smart contracts support.",
	"S5_10": "July 2021",
	"S5_11": "Dymaxion layer.",
	"S6_1": "Get Connected",
	// "Footer_1": "Pre-sale",
	// "Footer_2": "Home",
}


var ch = {
	"H_Home": "首页",
	"H_Features": "功能特征",
	"H_Sale": "预售",
	"H_FAQ": "常见问题",
	"H_Roadmap": "开发路线",
	"H_Community": "社区",
	"H_EN_CH": "English",
	"S1_2": "一种基于cPoC共识机制的可编程数字货币",
	"S1_3": "白皮书",
	"S1_4": "获得代币",
	"S2_1": "功能特征",
	"S2_2": "GreenCoin是一种基于cPoC共识机制的可编程数字货币，每个人都可以自由地用普通硬盘进行挖矿，而无需极其耗费能源的ASIC矿机。其网络保持着去中心化和健壮的特性，同时通过集成一系列跨链功能使其具有高度可扩展性",
	"S2_3": "去中心化",
	"S2_4": "无需ASIC矿机，仅需普通硬盘就能进行Greencoin挖矿，因而每个人都可以参与其中，使得网络更去中心化。",
	"S2_5": "环境友好",
	"S2_6": "用硬盘挖矿相较于CPU/GPU挖矿更节约能源，因此具有更低的碳排放。",
	"S2_7": "健壮灵活",
	"S2_8": "Greencoin继承比特币久经考验的健壮的基础架构，同时拥抱新科技，使其更加灵活。",
	"S3_1": "预售",
	"S3_2": "2,100,000枚硬币，即总量的1%将会在主网上线前被售卖。您可以在预售期间内通过与以下智能合约交互来购买：",
	"S3_3": "天\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0时\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0分\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0秒",
	"S4_1": "常见问题",
	"S4_2": "多少枚币将在预售被售出？",
	"S4_3": "总量的10%，即2100万枚将被售出。",
	"S4_4": "预售何时举行？",
	"S4_5": "将于xxxx开始，并于xxxx结束。",
	"S4_6": "届时价格是多少？",
	"S4_7": "每一枚币xxx USDT。",
	"S4_8": "我应该如何参与预售活动？",
	"S4_9": "只需将ERC-20的USDT通证发送到我们的预售智能合约，你将立刻收到购买到的币。",
	"S5_1": "开发路线",
	"S5_2": "2019年5月",
	"S5_3": "白皮书发布",
	"S5_4": "2019年8月",
	"S5_5": "预售&主网上线",
	"S5_6": "2020年3月",
	"S5_7": "跨链能力",
	"S5_8": "2020年10月",
	"S5_9": "支持智能合约",
	"S5_10": "2021年7月",
	"S5_11": "Dymaxion分层网络",
	"S6_1": "保持联系",
	// "Footer_1": "Pre-sale",
	// "Footer_2": "Home",
}

var lang_now = 'en'

function setLanguage() {
	if (lang_now === 'en') {
		lang_now = 'ch'
		var lang = ch
	} else {
		lang_now = 'en'
		var lang = en
	}

	for (let key in lang) {
		$('#' + key).text(lang[key]);
	}
}
