webpackJsonp([54,59],{1541:function(n,s){n.exports={content:["article",["h2","\u6784\u5efa"],["p","\u5f53\u9879\u76ee\u5f00\u53d1\u5b8c\u6bd5\uff0c\u53ea\u9700\u8981\u8fd0\u884c\u4e00\u884c\u547d\u4ee4\u5c31\u53ef\u4ee5\u6253\u5305\u4f60\u7684\u5e94\u7528\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","\u7531\u4e8e Ant Design Pro \u5e95\u5c42\u4f7f\u7528\u7684 ",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"]," \u5de5\u5177\uff0c\u5df2\u7ecf\u5c06\u590d\u6742\u7684\u6d41\u7a0b\u5c01\u88c5\u5b8c\u6bd5\uff0c\u5bf9\u4e8e\u5927\u90e8\u5206\u573a\u666f\uff0c\u6784\u5efa\u6253\u5305\u6587\u4ef6\u53ea\u9700\u8981\u4e00\u4e2a\u547d\u4ee4 ",["code","roadhog build"],"\uff0c\u6784\u5efa\u6253\u5305\u6210\u529f\u4e4b\u540e\uff0c\u4f1a\u5728\u6839\u76ee\u5f55\u751f\u6210 ",["code","dist"]," \u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5c31\u662f\u6784\u5efa\u6253\u5305\u597d\u7684\u6587\u4ef6\uff0c\u901a\u5e38\u662f ",["code","index.js"],"\u3001",["code","index.css"],"\u3001",["code","index.html"]," \u4e09\u4e2a\u9759\u6001\u6587\u4ef6\u3002"],["p","\u4e0d\u8fc7\u4f60\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u6784\u5efa\uff0c\u6bd4\u5982\u6307\u5b9a ",["code","dist"]," \u76ee\u5f55\u7b49\uff0c\u5219\u9700\u8981\u901a\u8fc7 ",["code",".roadhogrc"]," \u8fdb\u884c\u914d\u7f6e\uff0c\u8be6\u60c5\u53c2\u770b\uff1a",["a",{title:null,href:"https://github.com/sorrycc/roadhog#\u914d\u7f6e"},"roadhog \u914d\u7f6e"],"\u3002"],["h3","\u73af\u5883\u53d8\u91cf"],["p","\u5f53\u4f60\u9700\u8981\u533a\u522b\u5f00\u53d1\u548c\u90e8\u7f72\u4ee5\u53ca\u6d4b\u8bd5\u73af\u5883\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 ",["code",".roadhogrc"]," \u4e2d\u8bbe\u7f6e ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#env"},"env"]," \u73af\u5883\u53d8\u91cf\u6765\u5b9e\u73b0\u3002"],["pre",{lang:null,highlighted:'<span class="token string">"env"</span><span class="token punctuation">:</span> {\n  <span class="token operator">/</span><span class="token operator">/</span> server \u73af\u5883\n  <span class="token string">"development"</span><span class="token punctuation">:</span> {\n    <span class="token string">"extraBabelPlugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  }<span class="token punctuation">,</span>\n  <span class="token operator">/</span><span class="token operator">/</span> build \u73af\u5883\n  <span class="token string">"production"</span><span class="token punctuation">:</span> {\n    <span class="token string">"extraBabelPlugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n      <span class="token string">"transform-decorators-legacy"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> { <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">]</span>\n    <span class="token punctuation">]</span>\n  }\n}<span class="token punctuation">,</span>'},["code",'"env": {\n  // server \u73af\u5883\n  "development": {\n    "extraBabelPlugins": [\n      "dva-hmr",\n    ]\n  },\n  // build \u73af\u5883\n  "production": {\n    "extraBabelPlugins": [\n      "transform-runtime",\n      "transform-decorators-legacy",\n      ["import", { "libraryName": "antd", "style": true }]\n    ]\n  }\n},']],["h3","\u5206\u6790\u6784\u5efa\u6587\u4ef6\u4f53\u79ef"],["p","\u5982\u679c\u4f60\u7684\u6784\u5efa\u6587\u4ef6\u5f88\u5927\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",["code","analyze"]," \u547d\u4ee4\u6784\u5efa\u5e76\u5206\u6790\u4f9d\u8d56\u6a21\u5757\u7684\u4f53\u79ef\u5206\u6b65\uff0c\u4ece\u800c\u4f18\u5316\u4f60\u7684\u4ee3\u7801\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run analyze'},["code","$ npm run analyze"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/jibuOPHTyWMpMGvrlFDl.png",width:"600"}]],["p","\u7136\u540e\u6253\u5f00 ",["code","dist/stats.html"]," \u67e5\u770b\u4f53\u79ef\u5206\u6b65\u6570\u636e\u3002"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/sjzZbbsgthNtruKKHbiG.png",width:"400"}]],["h2","\u53d1\u5e03"],["p","\u5bf9\u4e8e\u53d1\u5e03\u6765\u8bb2\uff0c\u53ea\u9700\u8981\u5c06\u6700\u7ec8\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u60c5\u51b5\u4e0b ",["code","dist"]," \u6587\u4ef6\u5939\u7684\u9759\u6001\u6587\u4ef6\u53d1\u5e03\u5230\u4f60\u7684 cdn \u6216\u8005\u9759\u6001\u670d\u52a1\u5668\u5373\u53ef\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5176\u4e2d\u7684 ",["code","index.html"]," \u901a\u5e38\u4f1a\u662f\u4f60\u540e\u53f0\u670d\u52a1\u7684\u5165\u53e3\u9875\u9762\uff0c\u5728\u786e\u5b9a\u4e86 js \u548c css \u7684\u9759\u6001\u4e4b\u540e\u53ef\u80fd\u9700\u8981\u6539\u53d8\u9875\u9762\u7684\u5f15\u5165\u8def\u5f84\u3002"],["h3","\u524d\u7aef\u8def\u7531\u4e0e\u670d\u52a1\u7aef\u7684\u7ed3\u5408"],["p","Ant Design Pro \u4e2d\uff0c\u524d\u7aef\u8def\u7531\u4f7f\u7528\u7684\u662f ",["a",{title:null,href:"https://github.com/ReactTraining/react-router"},"React Router"],"\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u9009\u62e9\u4e24\u79cd\u65b9\u5f0f\uff1a",["code","browserHistory"]," \u548c ",["code","hashHistory"],"\u3002"],["p","\u4e24\u8005\u7684\u533a\u522b\u7b80\u5355\u6765\u8bf4\u662f\u5bf9\u8def\u7531\u65b9\u5f0f\u7684\u5904\u7406\u4e0d\u4e00\u6837\uff0c",["code","hashHistory"]," \u662f\u4ee5 ",["code","#"]," \u540e\u9762\u7684\u8def\u5f84\u8fdb\u884c\u5904\u7406\uff0c\u901a\u8fc7 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"HTML 5 History"]," \u8fdb\u884c\u524d\u7aef\u8def\u7531\u7ba1\u7406\uff0c\u800c ",["code","browserHistory"]," \u5219\u662f\u7c7b\u4f3c\u6211\u4eec\u901a\u5e38\u7684\u9875\u9762\u8bbf\u95ee\u8def\u5f84\uff0c\u5e76\u6ca1\u6709 ",["code","#"],"\uff0c\u901a\u8fc7\u670d\u52a1\u7aef\u7684\u914d\u7f6e\uff0c\u80fd\u591f\u8bbf\u95ee\u6307\u5b9a\u7684 url \u90fd\u5b9a\u5411\u5230\u5f53\u524d\u9875\u9762\uff0c\u4ece\u800c\u80fd\u591f\u8fdb\u884c\u524d\u7aef\u7684\u8def\u7531\u7ba1\u7406\u3002"],["p","\u6240\u4ee5\u5982\u679c\u4f60\u7684 url \u91cc\u6709 ",["code","#"],"\uff0c\u60f3\u53bb\u6389\u7684\u8bdd\uff0c\u9700\u8981\u5207\u6362\u4e3a ",["code","browserHistory"],"\u3002"],["p","\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u9759\u6001\u7ad9\u70b9\uff0c\u90a3\u4e48\u4f7f\u7528 ",["code","browserHistory"]," \u53ef\u80fd\u4f1a\u65e0\u6cd5\u8bbf\u95ee\u4f60\u7684\u5e94\u7528\uff0c\u56e0\u4e3a\u5047\u8bbe\u4f60\u8bbf\u95ee ",["code","http://localhost:8000/dashboard/monitor"],"\uff0c\u90a3\u4e48\u5176\u5b9e\u4f60\u7684\u9759\u6001\u670d\u52a1\u5668\u5e76\u6ca1\u6709\u80fd\u591f\u6620\u5c04\u7684\u6587\u4ef6\uff0c\u800c\u4f7f\u7528 ",["code","hashHistory"]," \u5219\u4e0d\u4f1a\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u7684\u9875\u9762\u8def\u5f84\u662f\u4ee5 ",["code","#"]," \u5f00\u59cb\u7684\uff0c\u6240\u6709\u8bbf\u95ee\u90fd\u5728\u524d\u7aef\u5b8c\u6210\uff0c\u5982\uff1a",["code","http://localhost:8000/#/dashboard/monitor"],"\u3002"],["p","\u4e0d\u8fc7\u5982\u679c\u4f60\u6709\u5bf9\u5e94\u7684\u540e\u53f0\u670d\u52a1\u5668\uff0c\u90a3\u4e48\u6211\u4eec\u63a8\u8350\u91c7\u7528 ",["code","browserHistory"],"\uff0c\u53ea\u9700\u8981\u5728\u670d\u52a1\u7aef\u505a\u4e00\u4e2a\u6620\u5c04\uff0c\u6bd4\u5982\uff1a"],["p",["a",{title:null,href:"http://expressjs.com/"},"express"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> {\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"]],["p",["a",{title:null,href:"https://eggjs.org/"},"egg"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> controller\nexports<span class="token punctuation">.</span>index <span class="token operator">=</span> function<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  yield this<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">\'App.jsx\'</span><span class="token punctuation">,</span> {\n    context<span class="token punctuation">:</span> {\n      user<span class="token punctuation">:</span> this<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> router\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> <span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token string">\'home.index\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"]],["h3","\u5728 Ant Design Pro \u4e2d\u4f7f\u7528\u524d\u7aef\u8def\u7531"],["p","\u8def\u7531\u5305\u542b\u7684\u4fe1\u606f\u5728 ",["code","router.js"]," \u4e2d\uff0c\u4e0d\u8fc7\u5173\u4e8e ",["code","history"]," \u7684\u914d\u7f6e\u662f\u5728 ",["code","index.js"]," \u5165\u53e3\u6587\u4ef6\u4e2d\uff0c\u4f20\u5165\u914d\u7f6e\u4fe1\u606f\u7ed9 ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md#dva-api"},"dva"]," \u6784\u9020\u5668\u5373\u53ef\u3002"],["p","\u7531\u4e8e\u4f7f\u7528\u4e86 ",["code","react-router@4"],"\uff0c\u6240\u4ee5\u5f15\u5165 ",["code","browserHistory"]," \u4e0e\u539f\u672c ",["code","dva"]," \u7684\u65b9\u5f0f\u6709\u6240\u6539\u53d8\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> dva <span class="token keyword">from</span> <span class="token string">\'dva\'</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \u5f15\u5165 browserHistory</span>\n<span class="token keyword">import</span> browserHistory <span class="token keyword">from</span> <span class="token string">\'history/createBrowserHistory\'</span>\n<span class="token keyword">import</span> models <span class="token keyword">from</span> <span class="token string">\'./models\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">\'./index.less\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// use browserHistory</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token punctuation">:</span> <span class="token function">browserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// default hashHistroy</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import dva from 'dva';\n// \u5f15\u5165 browserHistory\nimport browserHistory from 'history/createBrowserHistory'\nimport models from './models';\n\nimport './index.less';\n\n// use browserHistory\nconst app = dva({\n  history: browserHistory(),\n});\n\n// default hashHistroy\nconst app = dva();"]],["p","\u63a5\u7740\u4f60\u9700\u8981\u628a\u6839\u76ee\u5f55\u4e0b\u7684 ",["code","public/index.html"]," \u6587\u4ef6\u4e2d\u5f15\u7528\u9759\u6001\u6587\u4ef6\u7684\u65b9\u5f0f\u6539\u4e3a ",["strong","\u76f8\u5bf9\u8def\u5f84"],"\uff1a"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- &lt;link rel="stylesheet" href="index.css" /></span>\n<span class="token inserted">+ &lt;link rel="stylesheet" href="/index.css" /></span>\n\n<span class="token deleted">- &lt;script src="index.js">&lt;/script></span>\n<span class="token inserted">+ &lt;script src="/index.js">&lt;/script></span>'},["code",'- <link rel="stylesheet" href="index.css" />\n+ <link rel="stylesheet" href="/index.css" />\n\n- <script src="index.js"></script>\n+ <script src="/index.js"></script>']],["p","\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u91cc\u5df2\u7ecf\u4f7f\u7528 ",["code","react-router@4"]," \u7684\u65b9\u5f0f\uff0c\u6309\u7167\u53bb\u4e2d\u5fc3\u5316\u7684\u65b9\u5f0f\u8bbe\u7f6e\u8def\u7531\u914d\u7f6e\u3002"],["p","\u5173\u4e8e\u8def\u7531\u66f4\u591a\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://github.com/ReactTraining/react-router"},"React Router"]," \u3002\n\u5173\u4e8e ",["code","react-router@4"]," \u66f4\u591a\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://css-tricks.com/react-router-4/"},"All About React Router 4"]," \u3002"]],meta:{order:7,title:{"en-US":"Build & Deploy","zh-CN":"\u6784\u5efa\u548c\u53d1\u5e03"},type:"\u5165\u95e8",filename:"docs/deploy.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6784\u5efa",title:"\u6784\u5efa"},"\u6784\u5efa"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u53d1\u5e03",title:"\u53d1\u5e03"},"\u53d1\u5e03"]]]}}});