module.exports = {
  "title": "SMGoro Blog",
  "description": "Blog for SummerGoro,五郎的个人博客。",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://pan.zealsay.com/blog/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?3dbc3f04d9b69d0a8e501ba74a763356";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "SMGoro Homepage",
        "desc": "五郎的个人主页",
        "logo": "https://pan.zealsay.com/avatar/20200606105310570000000.jpg",
        "link": "https://smgoro.top"
      },
      {
        "title": "IMC.RE",
        "desc": "IMC.RE项目官方网站",
        "logo": "https://pic.zealsay.com/20190909225214850000000.jpg",
        "link": "https://imc.re/"
      }
    ],
    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "夏五郎",
    "authorAvatar": "https://q4.qlogo.cn/g?b=qq&nk=2128336160&s=640",
    "record": "冀ICP备20015733号", //icp备案
    "startYear": "2019",
    "info": "目前是一位苦逼的高三狗，会弹点钢琴，在b站当摸鱼UP主，不会敲代码，不过喜欢看番和鼓捣服务器，什么都摸过，什么都不精通的那种家伙，最喜欢的歌手是花谱，为人懒散没有规划性，简单来说，是个傻B。",
    "socials":{
      "github" : "https://github.com/SMGoro", //github
      "gitlub" : false, //gitlub
      "gitee" : false, //gitee
      "jianshu" : false, //简书
      "zhihu" : "https://www.zhihu.com/people/smgoro", //知乎
      "toutiao" : false, //知乎
      "juejin": false, //掘金
      "segmentfault" : false, //思否
      "csdn" : false, //CSDN
      "wechat" : "SummerGoro", //微信
      "qq" : "2128336160" //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'https://pan.zealsay.com/zealsay/cover/7.jpg',
      'https://pan.zealsay.com/zealsay/cover/1.jpg',
      'https://pan.zealsay.com/zealsay/cover/2.jpg',
      'https://pan.zealsay.com/zealsay/cover/3.jpg',
      'https://pan.zealsay.com/zealsay/cover/4.jpg',
      'https://pan.zealsay.com/zealsay/cover/5.jpg',
      'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
    "codeTheme": "tomorrow"
    

[
  //安装meting: yarn add vuepress-plugin-meting -D
  "meting",{
    metingApi: "https://api.smgoro.top/meting/",  // api地址
    meting:
    {
      //server: "netease",
      //type: "playlist",
      //mid: "6877495415",
      auto: "https://music.163.com/playlist?id=5439532419"
    },
    aplayer:
    {
      fixed: false,     //吸底模式
      mini: true,       //mini版
      autoplay: true,  //自动播放
      theme: "#5e86c1", //主题颜色
      volume: 0.4,      //音量
      mutex: true,      //互斥模式
      lrcType: 3,       //歌词解析模式，默认0，想要歌词就推荐3
      listFolded: true, //折叠播放列表
      //可能报错的项
      //loop: all,    //播放器循环模式'all' | 'one' | 'none'默认all
      //order: "list",    //设置播放器的初始顺序模式"list"| "random" 默认list
      //preload: "auto",   //设置音频的预加载模式'none' | 'metadata' | 'auto' 默认auto
      //listMaxHeight: 250  //设置播放列表最大高度，单位为像素

    },
    mobile:{
      cover: false,
      lrc: true
    }
  }
],
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}