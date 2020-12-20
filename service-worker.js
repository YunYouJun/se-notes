/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b705822e2dc64747a7751ebaeffcdcf"
  },
  {
    "url": "assets/css/0.styles.92c13548.css",
    "revision": "63c3dcf7ac74aaa18a13c61a7f5ce929"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dc43c4f8.js",
    "revision": "feeec7f540a1b4a2f7713024bce5fe88"
  },
  {
    "url": "assets/js/11.ca1da48f.js",
    "revision": "4bdb0745f8560fcb7400c8dc2969a7ba"
  },
  {
    "url": "assets/js/12.59b5e221.js",
    "revision": "4eadcb26d5699e27fa2c8130dcbbbbe6"
  },
  {
    "url": "assets/js/13.698d6236.js",
    "revision": "ec6636ccd9962b7007adddfb486676a8"
  },
  {
    "url": "assets/js/14.c99485dd.js",
    "revision": "b97864e333f336808a7e4a4dc6e34247"
  },
  {
    "url": "assets/js/15.c5c93a27.js",
    "revision": "c07e261d6e57ad95c0818cf19e24286f"
  },
  {
    "url": "assets/js/16.44c24ae7.js",
    "revision": "cde61f8a7729418d0f04fe24792f00f2"
  },
  {
    "url": "assets/js/17.7ec46243.js",
    "revision": "8e8faaafc1b7546d7c9d39e356a94aff"
  },
  {
    "url": "assets/js/18.e84e259d.js",
    "revision": "93456f260103a2981d5c823c1845b81a"
  },
  {
    "url": "assets/js/19.4c0dcb52.js",
    "revision": "f88ebb2dddf002856805c46a199a632d"
  },
  {
    "url": "assets/js/2.37a5484d.js",
    "revision": "7967df244d1711e418437e3efbdad140"
  },
  {
    "url": "assets/js/20.427be295.js",
    "revision": "99c27a1df46081ed0b80d0f23e4953a3"
  },
  {
    "url": "assets/js/21.ad638191.js",
    "revision": "5baabdcc51c5c59dd1d1ab5ffdf421bb"
  },
  {
    "url": "assets/js/22.6786bfc3.js",
    "revision": "ab0277dc07f7bb1c569b550098bcba47"
  },
  {
    "url": "assets/js/23.911a0192.js",
    "revision": "264f8dc2e59dd8c8b1bd95accab8f137"
  },
  {
    "url": "assets/js/24.60a43fb2.js",
    "revision": "4fff1420a161e6f560abd1c938f84708"
  },
  {
    "url": "assets/js/25.28c8230c.js",
    "revision": "ea9d98b5a2962ed3911cf342dcac794c"
  },
  {
    "url": "assets/js/26.63ebd5a8.js",
    "revision": "3c78ab321e8eacf3e9f70e9f29dc9ef0"
  },
  {
    "url": "assets/js/27.6aaf402c.js",
    "revision": "3c2c843eb8cc3efcbba2a09564dd1cbe"
  },
  {
    "url": "assets/js/28.30cb8df8.js",
    "revision": "127f9b878ebf082247ecdb67e1ad89fc"
  },
  {
    "url": "assets/js/29.ae834280.js",
    "revision": "870499afaec06ad4a4045ff3422fa1f7"
  },
  {
    "url": "assets/js/3.ac55f9b3.js",
    "revision": "868e02c6ff627f2998c7b923957aa4f3"
  },
  {
    "url": "assets/js/30.6dd106c1.js",
    "revision": "2b40b3217578810a19f4608e9dd3902b"
  },
  {
    "url": "assets/js/31.fd33ad9b.js",
    "revision": "7ed252bad3637bccf739d24046390616"
  },
  {
    "url": "assets/js/32.063f9e9f.js",
    "revision": "2318f3e08720ea6c3a900481a82c8188"
  },
  {
    "url": "assets/js/33.4a0d5af7.js",
    "revision": "53574c74be12b8550566afe2004078a6"
  },
  {
    "url": "assets/js/4.55cbc5c4.js",
    "revision": "8decd3140be4b588d7a9799460a86366"
  },
  {
    "url": "assets/js/5.de591e44.js",
    "revision": "d3732dae7a4531bc698c8690abf48d89"
  },
  {
    "url": "assets/js/6.f0bd0735.js",
    "revision": "8be3a9f4a46b01df44fc97a0d026d8b1"
  },
  {
    "url": "assets/js/7.6d1bb3b8.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.a7631c57.js",
    "revision": "54466acd097c25221fd0314250cd29ff"
  },
  {
    "url": "assets/js/9.ae32f5de.js",
    "revision": "ba7cbcb49ca4afd0fcdf919f0f8e03c6"
  },
  {
    "url": "assets/js/app.abe79bf7.js",
    "revision": "eab5a846255cfef196350e2c9d80818b"
  },
  {
    "url": "guide/index.html",
    "revision": "143f0a1300fe56d6d78ec1c33008d1a5"
  },
  {
    "url": "guide/style.html",
    "revision": "e5649c39b65eeed294303da8ebdd93bb"
  },
  {
    "url": "images/past-exam-papers/cuc/2009/N-S-PAD图.png",
    "revision": "42f4f364add1712496e916a75736b5ce"
  },
  {
    "url": "images/past-exam-papers/cuc/2009/N-S-程序流程图.png",
    "revision": "4d5061e5841785a55befc52fe42692a7"
  },
  {
    "url": "images/past-exam-papers/cuc/2009/N-S盒图.png",
    "revision": "b2173936e5013aee0eca88b99d3ddfa0"
  },
  {
    "url": "images/past-exam-papers/cuc/2009/程序流程图.png",
    "revision": "f44eee24d73ce145b0223572a1c69595"
  },
  {
    "url": "images/past-exam-papers/cuc/2010/N-S盒图.png",
    "revision": "ef900dd7d680e4eea8b786e06a613e9a"
  },
  {
    "url": "images/past-exam-papers/cuc/2010/PAD图.png",
    "revision": "ef6eba22a6b68b9611b2f5dd28c1df20"
  },
  {
    "url": "images/past-exam-papers/cuc/2010/超市鼓励顾客软件-数据流图.png",
    "revision": "934731f011435aa98527a76adbb43803"
  },
  {
    "url": "images/past-exam-papers/cuc/2011/N-S盒图.png",
    "revision": "c77b13d7a51388d564832edb3f8ec7a8"
  },
  {
    "url": "images/past-exam-papers/cuc/2011/PAD图.png",
    "revision": "a0174315b50863382bfbbfe588520144"
  },
  {
    "url": "images/past-exam-papers/cuc/2011/是否构成三角形.png",
    "revision": "c4526ecb5841342c81ad56cabadb797f"
  },
  {
    "url": "images/past-exam-papers/cuc/2012/N-S盒图.png",
    "revision": "e29a420227897b5a80c268ef48c01b10"
  },
  {
    "url": "images/past-exam-papers/cuc/2012/PAD图.png",
    "revision": "fc21456e77f17f463f382fe15792b18c"
  },
  {
    "url": "images/past-exam-papers/cuc/2012/交通工具.png",
    "revision": "88872408f16039c33977d82703a52085"
  },
  {
    "url": "images/past-exam-papers/cuc/2013/微机对象模型.png",
    "revision": "107dac071df7fb8e01b510a2461e1cce"
  },
  {
    "url": "images/past-exam-papers/cuc/2013/行李费算法.png",
    "revision": "f73bcc89268d535bcc5ed1fca0bd602a"
  },
  {
    "url": "images/past-exam-papers/cuc/2016/N-S盒图.png",
    "revision": "880fc941af3b25b67f8646b8d369c8c3"
  },
  {
    "url": "images/past-exam-papers/cuc/2016/程序流程图.png",
    "revision": "681317a22f4b2cca1affe0e5e72fabfc"
  },
  {
    "url": "images/past-exam-papers/cuc/MVC-UML.png",
    "revision": "bd656e2add2d76cd3817bb458a2e27be"
  },
  {
    "url": "images/past-exam-papers/cuc/QQ用户群.png",
    "revision": "a31e72a509bdd9091b03619e625c4b01"
  },
  {
    "url": "images/past-exam-papers/cuc/一元二次方程-N-S盒图.png",
    "revision": "b1ebc731a33dea837eeeeb79ef62d956"
  },
  {
    "url": "images/past-exam-papers/cuc/书的对象模型.png",
    "revision": "2def05a08d5fea7bfa26d077db08158a"
  },
  {
    "url": "images/past-exam-papers/cuc/学生成绩管理系统-实体关系图.png",
    "revision": "2ed7ddb072d10fe17f4b1d4184462ec3"
  },
  {
    "url": "images/past-exam-papers/cuc/工资计算系统-数据流程图-2.png",
    "revision": "6e213911ff03aa36d2013c4f62ab087b"
  },
  {
    "url": "images/past-exam-papers/cuc/工资计算系统-数据流程图.png",
    "revision": "55968d53b89bc911f3450c744df0927a"
  },
  {
    "url": "images/past-exam-papers/cuc/工资计算系统-软件结构图.png",
    "revision": "03265b31302c3e068d2b71b1dfd5ee85"
  },
  {
    "url": "images/past-exam-papers/cuc/影片租赁店.png",
    "revision": "77a16b5a2a58cf677edb2f481dd1f9ee"
  },
  {
    "url": "images/past-exam-papers/cuc/高考录取统分子系统/数据流程图.png",
    "revision": "9cf8f569b4c1c2487c0a001dc88cd4e1"
  },
  {
    "url": "images/past-exam-papers/cuc/高考录取统分子系统/软件结构图.png",
    "revision": "37b5d5bf93027e282166f8f1e329c7c9"
  },
  {
    "url": "index.html",
    "revision": "5729fd0d4b1fbefaf5ecbd9fd26064a9"
  },
  {
    "url": "note.png",
    "revision": "2b6f2012f3c0355b75ac7ac71bc3b49f"
  },
  {
    "url": "notes/applied-problems/index.html",
    "revision": "b6c9b6236888cfd51e517ea9b9a93c95"
  },
  {
    "url": "notes/explanation-of-nouns/index.html",
    "revision": "890df24a74bd3275189b300a77f7e926"
  },
  {
    "url": "notes/gap-filling/index.html",
    "revision": "944dd172447f6a241e48079b9964bcd9"
  },
  {
    "url": "notes/one-choice/index.html",
    "revision": "0e6f88420eb2c30fd961e579fb6d2b8e"
  },
  {
    "url": "notes/short-answer/index.html",
    "revision": "b4e1cec052b4c486c994ccc57fed47d6"
  },
  {
    "url": "notes/true-or-false/index.html",
    "revision": "9684a954a693c5bf82100eb8bfb40787"
  },
  {
    "url": "past-exam-papers/cuc/index.html",
    "revision": "940905508fb9e2270a7d8259836d773f"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2004.html",
    "revision": "d0de6e4ec30b6a93d40880b5305546db"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2005.html",
    "revision": "883a9e48668fe5d27c0c1dd69908ba61"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2006.html",
    "revision": "6e7a4c84013bee6b0af3c5d2f7468a7b"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2007.html",
    "revision": "6e6f80e5ad5e13e918f818a954ce6f82"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2008.html",
    "revision": "9bd4cf5cdf852025b782b5abb20023f3"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2009.html",
    "revision": "fccc1729e9e4f04684160e32e44dc5e8"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2010.html",
    "revision": "994b34f604609c1e09d16646a6b438c8"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2011.html",
    "revision": "dfd799aae17f032834b4467a4f3b3ccf"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2012.html",
    "revision": "f24c7d931dd02881e6e075af786d1649"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2013.html",
    "revision": "2b9cdc2970c0c668da49094c8b798c15"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2014.html",
    "revision": "7a1a9e911b2c10a33574e96dabc9ecb7"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2015.html",
    "revision": "f3d51b590300954980f201251da93c17"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2016.html",
    "revision": "b7d6aac8b1fda4dee67e40b4608ffa28"
  },
  {
    "url": "past-exam-papers/cuc/software-engineering-retest-2017.html",
    "revision": "d4f29e2f2ecb287fa024b9cf950d9909"
  },
  {
    "url": "past-exam-papers/index.html",
    "revision": "a0bf5cb4274fd90a38f4115a3cd350e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
