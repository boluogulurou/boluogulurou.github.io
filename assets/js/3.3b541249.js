(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{554:function(t,e,a){},555:function(t,e,a){},556:function(t,e,a){},558:function(t,e,a){},560:function(t,e,a){"use strict";a(47),a(26),a(65),a(285),a(176),a(284);var n=a(48),o={props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},filters:{formatDateValue:function(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));var e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),o=Number(t.substr(17,2));return e>0||a>0||o>0?Object(n.e)(t):Object(n.e)(t,"yyyy-MM-dd")}},methods:{goTags:function(t){this.$route.path!=="/tag/".concat(t,"/")&&this.$router.push({path:"/tag/".concat(t,"/")})}}},s=(a(562),a(10)),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?a("i",{staticClass:"iconfont reco-account"},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("i",{staticClass:"iconfont reco-eye"},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return a.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()])}),[],!1,null,"01d8a6a8",null);e.a=r.exports},562:function(t,e,a){"use strict";a(554)},563:function(t,e,a){"use strict";a(555)},564:function(t,e,a){"use strict";a(556)},565:function(t,e,a){"use strict";a(174),a(177);e.a={methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},566:function(t,e,a){"use strict";a(47);var n=a(560),o=[1,2,3,4,5,6,7,8,9],s=[["abstract-item","draw"],["abstract-item","draw","meet"],["abstract-item","center"]],r=0,i=0,c={data:function(){return{LL:["https://www.giaott.com/images/2022/07/12/2Mnuw.png","https://www.giaott.com/images/2022/07/12/2MmFN.png","https://www.giaott.com/images/2022/07/12/2MQ10.jpg","https://www.giaott.com/images/2022/07/12/2Ms7s.jpg","https://www.giaott.com/images/2022/07/12/2M8qp.png","https://www.giaott.com/images/2022/07/12/2M04Q.png","https://www.giaott.com/images/2022/07/12/2Mhu1.jpg","https://www.giaott.com/images/2022/07/12/2MTFR.jpg","https://www.giaott.com/images/2022/07/12/2Mwpc.jpg","https://www.giaott.com/images/2022/07/12/2Mnuw.png"]}},components:{PageInfo:n.a},props:["item","currentPage","currentTag"],computed:{imgIndex:function(){return++r>=o.length&&(r=0),o[r]},classIndex:function(){return++i>=s.length&&(i=0),s[i]}}},l=(a(563),a(10)),u={components:{NoteAbstractItem:Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.classIndex,on:{click:function(e){return t.$router.push(t.item.path)}}},[a("div",{staticClass:"draw"},[a("img",{attrs:{src:t.LL[""+t.imgIndex],alt:""}})]),t._v(" "),a("div",{staticStyle:{"margin-left":"2rem"}},[t.item.frontmatter.sticky?a("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)])}),[],!1,null,"35765c9e",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData:function(){var t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},h=(a(564),Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"a76e1724",null));e.a=h.exports},568:function(t,e,a){"use strict";a(558)},570:function(t,e,a){"use strict";var n=a(49),o=(a(173),a(175)),s={props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:this.$recoLocales.tag.all,path:"/tag/"}].concat(Object(n.a)(this.$tags.list))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getOneColor:o.a}},r=(a(568),a(10)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,n){return a("span",{key:n,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"1b0ffb04",null);e.a=i.exports},592:function(t,e,a){},593:function(t,e,a){},594:function(t,e,a){},595:function(t,e,a){},596:function(t,e,a){},597:function(t,e,a){},631:function(t,e,a){"use strict";a(592)},632:function(t,e,a){"use strict";a(593)},633:function(t,e,a){"use strict";a(594)},634:function(t,e,a){"use strict";a(595)},635:function(t,e,a){"use strict";a(596)},636:function(t){t.exports=JSON.parse('{"a":"0.0.1"}')},637:function(t,e,a){"use strict";a(597)},644:function(t,e,a){"use strict";a.r(e);var n=a(571),o=a(559),s=a(557),r={mixins:[s.a],components:{NavLink:n.a,ModuleTransition:o.a},computed:{actionLink:function(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(a(631),a(10)),c=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco"))]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?a("p",{staticClass:"description"},[t._v("\n        "+t._s(t.$frontmatter.tagline||t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=a(99),u=a(20),h=a(21),m=(a(181),a(9),a(83),a(176),a(34),a(570)),d=(a(26),a(67),a(84),a(586)),g=a.n(d),p=a(175),f={data:function(){return{popupWindowStyle:{},isPC:!0}},mounted:function(){/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:this.isPC=!0},computed:{dataAddColor:function(){var t=this.$themeConfig.friendLink;return t&&t.length>0?t=t.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{color:Object(p.a)()})})):[]}},methods:{getMd5:function(t){return g()(t)},showDetail:function(t){var e=this,a=t.target,n=a.querySelector(".popup-window-wrapper"),o=a.querySelector(".popup-window"),s=document.querySelector(".info-wrapper");n.style.display="block";var r=a.clientWidth,i=o.clientWidth,c=o.clientHeight;if(this.isPC)this.popupWindowStyle={left:(r-i)/2+"px",top:-c+"px"},s.style.overflow="visible",this.$nextTick((function(){e._adjustPosition(a.querySelector(".popup-window"))}));else{var l=function(t){var e=document,a=t.getBoundingClientRect(),n=a.left,o=a.top;return{left:n+=e.documentElement.scrollLeft||e.body.scrollLeft,top:o+=e.documentElement.scrollTop||e.body.scrollTop}};s.style.overflow="hidden";var u=l(a).left-l(s).left;this.popupWindowStyle={left:-u+(s.clientWidth-o.clientWidth)/2+"px",top:-c+"px"}}},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl:function(t){var e=t.logo,a=t.email;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):"//1.gravatar.com/avatar/".concat(this.getMd5(a||""),"?s=50&amp;d=mm&amp;r=x")},_adjustPosition:function(t){var e=document.body.offsetWidth,a=t.getBoundingClientRect(),n=e-(a.x+a.width);if(n<0){var o=t.offsetLeft;this.popupWindowStyle=Object(l.a)(Object(l.a)({},this.popupWindowStyle),{},{left:o+n+"px"})}}}},v=(a(632),Object(i.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,n){return a("div",{key:n,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"4317da66",null).exports),_=a(566),w=a(565),C=a(605),b=function(){function t(e){Object(u.a)(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}return Object(h.a)(t,[{key:"setText",value:function(t){var e=this,a=this.el.innerText,n=Math.max(a.length,t.length),o=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var s=0;s<n;s++){var r=a[s]||"",i=t[s]||"",c=Math.floor(40*Math.random()),l=c+Math.floor(40*Math.random());this.queue.push({from:r,to:i,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}},{key:"update",value:function(){for(var t="",e=0,a=0,n=this.queue.length;a<n;a++){var o=this.queue[a],s=o.from,r=o.to,i=o.start,c=o.end,l=o.char;this.frame>=c?(e++,t+=r):this.frame>=i?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[a].char=l),t+='<span class="dud">'.concat(l,"</span>")):t+=s}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}(),y=[1,2,3,4,5,6,7,8,9],$=0,S={mixins:[w.a,s.a],components:{NoteAbstract:_.a,TagList:m.a,FriendLink:v,ModuleTransition:o.a,PersonalInfo:C.a},data:function(){return{recoShow:!1,currentPage:1,tags:[],text:"",bgIndex:1}},computed:{homeBlogCfg:function(){return this.$recoLocales.homeBlog},actionLink:function(){var t=this.$frontmatter;return{link:t.actionLink,text:t.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{}},bgImageStyle:function(){var t={textAlign:"center",overflow:"hidden",background:"url(https://www.giaott.com/images/2022/07/13/2wxkW.jpg) 0% 0% / 100% no-repeat"},e=this.$frontmatter.bgImageStyle;return e?Object(l.a)(Object(l.a)({},t),e):t},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.recoShow=!0,this._setPage(this._getStoragePage());var t=document.getElementById("descText"),e=new b(t),a=["我是一名前端","爱吃小熊饼干","上班只为下班","工资刚够早餐","每晚都要加班","只求线上平安","头发快要掉完","前端真的好难","只是无名前端","写代码的憨憨"];e.setText("写代码的憨憨");var n=0;!function t(){e.setText(a[n]).then((function(){setTimeout(t,1e3)})),n=(n+1)%a.length}(),$=Number(localStorage.getItem("bgCount")?localStorage.getItem("bgCount"):0),++$>=y.length&&($=0),localStorage.setItem("bgCount",String($)),this.bgIndex=y[$]},methods:{down:function(){this.getPageScrollY(1e3)},getPageScrollY:function(t){return t||0==Number(t)?(self.pageYOffset&&(self.pageYOffset=Number(t)),document.documentElement&&(document.documentElement.scrollTop=Number(t)),document.body&&(document.body.scrollTop=Number(t)),!0):(self.pageYOffset?e=self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e);var e},getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,a=e.home,n=e.date;return!(1==a||void 0===n)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){this.$router.push({path:t.path})},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:p.a}},k=(a(633),Object(i.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[a("div",[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?a("h1",[t._v("\n          "+t._s(t.$frontmatter.heroText||t.$title||"vuePress-theme-reco")+"\n        ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("p",{staticClass:"description"})]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("div",{staticClass:"description",staticStyle:{display:"none"},attrs:{id:"descText"}})]),t._v(" "),a("ModuleTransition",{staticStyle:{"margin-top":"5rem"},attrs:{delay:"0.08"}},[a("a",{staticClass:"downward",on:{click:t.down}})])],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[a("div",{staticClass:"blog-list"},[a("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),a("div",{staticClass:"info-wrapper"},[a("PersonalInfo"),t._v(" "),a("h4",[a("i",{staticClass:"iconfont reco-category"}),t._v(" "+t._s(t.homeBlogCfg.category))]),t._v(" "),a("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,n){return a("li",{key:n,staticClass:"category-item"},[a("router-link",{attrs:{to:e.path}},[a("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),a("hr"),t._v(" "),0!==t.$tags.list.length?a("h4",[a("i",{staticClass:"iconfont reco-tag"}),t._v(" "+t._s(t.homeBlogCfg.tag))]):t._e(),t._v(" "),a("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?a("h4",[a("i",{staticClass:"iconfont reco-friend"}),t._v(" "+t._s(t.homeBlogCfg.friendLink))]):t._e(),t._v(" "),a("FriendLink")],1)])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),T=(a(65),a(560)),x=a(48),M=a(101),P=a(49),I=(a(173),{computed:{headers:function(){var t=(this.$page.headers||[]).filter((function(t){return 2===t.level}));return t}},methods:{isLinkActive:function(t){var e=Object(x.f)(this.$route,this.$page.path+"#"+t.slug);return e&&setTimeout((function(){console.log(document.querySelector(".".concat(t.slug))),document.querySelector(".".concat(t.slug)).scrollIntoView()}),300),e}},render:function(t){var e=this;return t("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:(this.$page.headers||[]).length>0?"12rem":"0"}},Object(P.a)((this.$page.headers||[]).map((function(a){return t("li",{class:Object(M.a)({active:e.isLinkActive(a)},"level-".concat(a.level),!0),attr:{key:a.title}},[t("router-link",{class:Object(M.a)({"sidebar-link":!0},"".concat(a.slug),!0),props:{to:"".concat(e.$page.path,"#").concat(a.slug)}},a.title)])}))))}}),L=(a(634),Object(i.a)(I,void 0,void 0,!1,null,"2c6bec61",null).exports);function O(t,e,a){var n=[];!function t(e,a){for(var n=0,o=e.length;n<o;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var o=0;o<n.length;o++){var s=n[o];if("page"===s.type&&s.path===decodeURIComponent(t.path))return n[o+a]}}var j={mixins:[s.a],components:{PageInfo:T.a,ModuleTransition:o.a,SubSidebar:L},props:["sidebarItems"],data:function(){return{isHasKey:!0}},computed:{shouldShowComments:function(){var t=this.$frontmatter.isShowComments,e=(this.$themeConfig.valineConfig||{showComment:!0}).showComment;return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$frontmatter.prev;return!1===a?void 0:a?Object(x.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,-1))},next:function(){var t,e,a=this.$frontmatter.next;return!1===a?void 0:a?Object(x.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,O(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,o=void 0===n?"":n,s=t.docsBranch,r=void 0===s?"master":s,i=t.docsRepo,c=void 0===i?e:i;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,o,r,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"},pageStyle:function(){return(this.$page.headers||[]).length>0?{}:{paddingRight:"0"}}},methods:{createEditLink:function(t,e,a,n,o){return/bitbucket.org/.test(t)?(x.j.test(e)?e:t).replace(x.c,"")+"/src"+"/".concat(n,"/")+(a?a.replace(x.c,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(x.j.test(e)?e:"https://github.com/".concat(e)).replace(x.c,"")+"/edit"+"/".concat(n,"/")+(a?a.replace(x.c,"")+"/":"")+o}}},N=(a(635),Object(i.a)(j,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page",style:t.pageStyle},[a("ModuleTransition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule&&t.$page.title,expression:"recoShowModule && $page.title"}],staticClass:"page-title"},[a("h1",[t._v(t._s(t.$page.title))]),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule?a("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule?a("SubSidebar",{staticClass:"side-bar"}):t._e()],1)],1)}),[],!1,null,null,null).exports),A=a(636),E={data:function(){return{version:A.a}},computed:{showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return!(!e||0==e.visitor)}}},B=(a(637),Object(i.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("i",{staticClass:"iconfont reco-theme"}),t._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[t._v(t._s("vuepress-theme-reco@"+t.version))])]),t._v(" "),t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear&&t.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[a("i",{staticClass:"iconfont reco-eye"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"8c6ba06e",null).exports),q={components:{HomeBlog:k,Home:c,Page:N,Common:a(569).a,Footer:B},computed:{sidebarItems:function(){return Object(x.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},X=(a(561),Object(i.a)(q,(function(){var t=this.$createElement,e=this._self._c||t;return e("Common",{attrs:{sidebarItems:this.sidebarItems}},[this.$frontmatter.home?e(this.homeCom,{tag:"component"}):e("Page",{attrs:{"sidebar-items":this.sidebarItems}}),this._v(" "),this.$frontmatter.home?e("Footer",{staticClass:"footer"}):this._e()],1)}),[],!1,null,null,null));e.default=X.exports}}]);