(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{179:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(181),s=t.n(l),c=(t(13),t(84),t(6),t(124)),o=t.n(c),i=t(15),m=t.n(i),d=function(e){var a=e.children,t=o()(e,["children"]),n=Math.random().toString(36),l=t.className,c=t.id,i=void 0===c?n:c,m=s()("accordion-header",l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:i,hidden:!0}),r.a.createElement("label",{className:m,htmlFor:i},a))};d.propTypes={children:m.a.any,className:m.a.string,id:m.a.string};var u=function(e){var a=e.children,t=o()(e,["children"]),n=t.className,l=o()(t,["className"]),c=s()("accordion-body",n);return r.a.createElement("div",Object.assign({className:c},l),a)};u.propTypes={children:m.a.any,className:m.a.string};var p=function(e){var a=e.children,t=o()(e,["children"]),n=t.className,l=o()(t,["className"]),c=s()("accordion",n);return r.a.createElement("div",Object.assign({className:c},l),a)};p.propTypes={children:m.a.any,className:m.a.string},p.Body=u,p.Header=d;var g=p,h=(t(217),t(219),function(e){var a=e.children,t=e.small,n=e.subtle,l=e.background,c=void 0===l?"blue":l;return r.a.createElement("div",{className:s()("bubble",{small:t,subtle:n,grey:"grey"===c})},a)});h.propTypes={},h.defaultProps={};var E=h,y=(t(220),function(){return r.a.createElement("footer",{className:"hero hero-sm"},r.a.createElement("div",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"},r.a.createElement("div",{className:"text-gray"},"Copyright © 2019 ",r.a.createElement("strong",null,"Ricker Lyman Robotic"),". All rights reserved.")),r.a.createElement("section",{className:"navbar-section"},r.a.createElement("div",{className:"text-gray"},"Made with ❤️"))))}),v=t(221),f=t.n(v),b=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"}),r.a.createElement("section",{className:"navbar-center"},r.a.createElement("a",{href:"https://rickerlyman.com/",className:"navbar-brand"},r.a.createElement("img",{src:f.a,alt:"Ricker Lyman Robotic"}))),r.a.createElement("section",{className:"navbar-section"})))},N=(t(26),t(180)),A=t(182),k=(t(227),function(e){var a=e.number,t=void 0===a?"":a,n=e.name,l=void 0===n?"":n,s=e.difficulty,c=void 0===s?"":s,i=e.objectives,m=void 0===i?"":i,d=e.labels,u=d.case,p=void 0===u?"Case":u,g=d.difficulty,h=void 0===g?"Difficulty:":g,E=d.objectives,y=void 0===E?"Objectives:":E,v=d.previous,f=void 0===v?"previous":v,b=d.next,k=void 0===b?"next":b,w=o()(e,["number","name","difficulty","objectives","labels"]);return r.a.createElement("div",Object.assign({className:"caption"},w),r.a.createElement("small",{className:"caption__info"},r.a.createElement("em",{className:"caption__number"},p," ",t),r.a.createElement("a",{className:"caption__previous",href:"#"},r.a.createElement(N.a,{icon:A.c})," ",f),r.a.createElement("a",{className:"caption__next",href:"#"},k," ",r.a.createElement(N.a,{icon:A.b}))),r.a.createElement("h3",{className:"caption__name"},l),r.a.createElement("small",{className:"caption__meta"},r.a.createElement("strong",null,h)," ",c," ",r.a.createElement("strong",null,y)," ",m))});k.propTypes={number:m.a.oneOfType([m.a.string,m.a.object]),name:m.a.oneOfType([m.a.string,m.a.object]),difficulty:m.a.oneOfType([m.a.string,m.a.object]),objectives:m.a.oneOfType([m.a.string,m.a.object]),labels:m.a.shape({case:m.a.oneOfType([m.a.string,m.a.object]),previous:m.a.oneOfType([m.a.string,m.a.object]),next:m.a.oneOfType([m.a.string,m.a.object]),difficulty:m.a.oneOfType([m.a.string,m.a.object]),objectives:m.a.oneOfType([m.a.string,m.a.object])})},k.defaultProps={labels:{case:"Case",previous:"previous",next:"next",difficulty:"Difficulty:",objectives:"Objectives:"}};var w=t(228),B=t(229),j=t.n(B),x=(t(60),t(186),r.a.createContext({}));function U(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,s=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,s&&l(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var D=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(x.Consumer,null,function(e){return r.a.createElement(U,{data:a,query:t,render:n||l,staticQueryData:e})})};D.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func};var P=function(e){var a=e.description,t=e.lang,n=e.meta,l=e.keywords,s=e.title;return r.a.createElement(D,{query:"3600964566",render:function(e){var c=a||e.site.siteMetadata.description;return r.a.createElement(j.a,{htmlAttributes:{lang:t},title:s||e.site.siteMetadata.title,titleTemplate:"%s • "+e.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(n)},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap&subset=cyrillic",rel:"stylesheet"}))},data:w})};P.defaultProps={lang:"en",meta:[],keywords:[],description:""},P.propTypes={description:m.a.string,lang:m.a.string,meta:m.a.array,keywords:m.a.arrayOf(m.a.string),title:m.a.string};var C=P,T=(t(236),function(e){var a=e.senderId,t=void 0===a?"":a,n=e.senderName,l=void 0===n?"":n,c=e.senderAvatarUrl,i=void 0===c?"":c,m=e.senderDate,d=void 0===m?Date.now():m,u=e.children,p=e.reactions,g=void 0===p?[]:p,h=e.replies,E=void 0===h?[]:h,y=e.isBonusly,v=void 0!==y&&y,f=e.isBonuslyBonus,b=void 0!==f&&f,N=(e.labels,o()(e,["senderId","senderName","senderAvatarUrl","senderDate","children","reactions","replies","isBonusly","isBonuslyBonus","labels"])),A=Math.floor(10*Math.random())+7,k=new Date(d-78e5).toTimeString().slice(0,5),w=new Date(d-696e4).toTimeString().slice(0,5);return r.a.createElement("div",Object.assign({className:"message","data-from":t},N),r.a.createElement("img",{className:"message__avatar message__avatar--big",src:i,alt:""}),r.a.createElement("div",{className:"message__content"},r.a.createElement("div",{className:"message__meta"},r.a.createElement("span",{className:"message__author"},l),v&&r.a.createElement("span",{className:"message__app"},"app"),r.a.createElement("span",{className:"message__timestamp"},k)),r.a.createElement("div",{className:s()("message__text",{"message__text--bonusly":v})},u,v&&b&&r.a.createElement("div",null,r.a.createElement("a",{href:"https://bonus.ly/bonuses/"},"Add on to this bonus?"))),r.a.createElement("div",{className:"message__reactions"},g.map(function(e,a){var t=e.emoji,n=e.count;return r.a.createElement("input",{key:"reactions-item-"+a,className:"message__reaction",type:"checkbox","data-before":t,"data-after":n,"data-after-checked":n+1})})),E&&E.length>0&&r.a.createElement("div",{className:"message__replies"},E.slice(0,E.length-1).map(function(e,a){var t=e.name,n=e.avatarUrl;return r.a.createElement("span",{key:"replies-item-"+a,className:"tooltip","data-tooltip":t},r.a.createElement("img",{className:"message__reply message__avatar",src:n,alt:t}))}),A-E.length>0&&r.a.createElement("div",{className:"message__reply"},r.a.createElement("img",{className:"message__avatar",src:E.slice(E.length-1)[0].avatarUrl,alt:""}),r.a.createElement("span",{className:"message__replies--count"},"+",A-E.length)),r.a.createElement("div",{className:"message__replies--meta"},r.a.createElement("span",{className:"message__replies--total"},Math.max(A,E.length)," replies"),r.a.createElement("span",{className:"message__replies--last"},"Last reply today at ",w)))))});T.propTypes={senderId:m.a.string,senderName:m.a.oneOfType([m.a.string,m.a.object]),senderAvatarUrl:m.a.string,reactions:m.a.arrayOf(m.a.shape({emoji:m.a.string,count:m.a.number})),replies:m.a.arrayOf(m.a.shape({name:m.a.string,avatarUrl:m.a.string}))},T.defaultProps={labels:{senderId:"",senderName:"",senderAvatarUrl:"",reactions:[],replies:[]}};var Q=T,O=(t(237),function(e){var a=e.children;return r.a.createElement("div",{className:"message-input"},r.a.createElement("div",{className:"message-input__plus"},r.a.createElement(N.a,{icon:A.d})),r.a.createElement("div",{className:"message-input__text"},a))}),J=t(9),L=t.n(J),H=t(238),X=t.n(H),I=(t(239),function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).play=function(){return a.audio&&a.audio.play()},a.pause=function(){a.audio&&(a.audio.pause(),a.audio.currentTime=0)},a}return L()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.source,n=a.children;return r.a.createElement("span",{className:"cant-eat-thank-you-with-bread"},r.a.createElement("span",null,n||r.a.createElement(r.a.Fragment,null,'"','Cпасибо на хлеб не намажешь"')),r.a.createElement("audio",{ref:function(a){return e.audio=a},preload:"auto"},r.a.createElement("source",{src:t||X.a,type:"audio/mpeg"})))},a}(n.Component)),M=(t(240),function(e){var a=e.children,t=e.title,n=void 0===t?"":t;return r.a.createElement("div",{className:"video-wrapper"},r.a.createElement(g,null,r.a.createElement(g.Header,null,r.a.createElement("span",{className:"title"},r.a.createElement("strong",null,n)),r.a.createElement("span",{className:"icon"},r.a.createElement(N.a,{icon:A.a,fixedWidth:!0}))),r.a.createElement(g.Body,null,r.a.createElement("div",{className:"iframe-wrapper"},a))))}),R=t(241),Y=(t(187),t(188)),G=t.n(Y),q=t(189),z=t.n(q),F=t(190),W=t.n(F),S=t(191),K=t.n(S),V=t(192),Z=t.n(V),_=t(193),$=t.n(_),ee=t(194),ae=t.n(ee),te=t(195),ne=t.n(te),re=t(196),le=t.n(re),se=(t(197),t(198)),ce=t.n(se),oe=t(199),ie=t.n(oe),me=(t(200),t(201),t(202)),de=t.n(me),ue=t(203),pe=t.n(ue),ge=t(204),he=t.n(ge),Ee=t(205),ye=t.n(Ee),ve=t(206),fe=t.n(ve),be=(t(207),t(208),t(209)),Ne=t.n(be),Ae=t(210),ke=t.n(Ae),we=(t(211),t(212)),Be=t.n(we),je=t(213),xe=t.n(je),Ue=t(214),De=t.n(Ue),Pe=t(215),Ce=t.n(Pe),Te=t(216),Qe=t.n(Te);t(242),a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{description:"Hi",keywords:[]}),r.a.createElement("article",{className:"content"},r.a.createElement("div",{className:"container grid-lg"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"hero hero-sm hero-fh"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement(b,null),r.a.createElement("h1",{className:"main-title"},r.a.createElement("span",{className:"what-if"},"А что если бы"),r.a.createElement("span",{className:"thank-you"},"спасибо"),r.a.createElement("span",{className:"could-be-eaten-with-bread"},"можно было намазать на хлеб?")),r.a.createElement("div",{className:"avatars-wrapper"},r.a.createElement("div",{className:"avatar-wrapper tooltip","data-tooltip":"Julia Titova"},r.a.createElement("object",{className:"avatar-object",data:Qe.a,role:"img","aria-label":"Julia Titova"})),r.a.createElement("div",{className:"avatar-wrapper tooltip","data-tooltip":"Dasha Korotkykh"},r.a.createElement("object",{className:"avatar-object",data:Ce.a,role:"img","aria-label":"Dasha Korotkykh"}))),r.a.createElement("div",{className:"my-2"},r.a.createElement("strong",null,"July 1",r.a.createElement("sup",null,"st")),", 2019"),r.a.createElement("div",{className:"hint",onClick:function(){return t(!a)}},r.a.createElement(N.a,{icon:R.a})))))))),r.a.createElement("hr",{className:"compact"}),r.a.createElement("div",{className:s()("modal",{active:a}),id:"modal-id"},r.a.createElement("div",{className:"modal-overlay","aria-label":"Close",onClick:function(){return t(!1)}}),r.a.createElement("div",{className:"modal-container"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("div",{className:"btn btn-clear float-right","aria-label":"Close",onClick:function(){return t(!1)}}),r.a.createElement("div",{className:"modal-title h5"},"What does this even mean?")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"content"},"Russian saying ",r.a.createElement("strong",null,r.a.createElement(I,null))," means ",r.a.createElement("strong",null,'"You cannot eat "thank you" with bread"')," or ",r.a.createElement("strong",null,'"Can\'t put thanks in your pocket (or in the bank)"'),".")),r.a.createElement("div",{className:"modal-footer"},"So... ",r.a.createElement("em",null,"what if you could?")))),r.a.createElement("div",{className:"container grid-lg"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"hero hero-sm hero-fh"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"text-center"},"You're ",r.a.createElement("strong",null,"awesome and incredible"),"!"),r.a.createElement(M,{title:"You're breathtaking!"},r.a.createElement("iframe",{src:"//coub.com/embed/1vv2dd?muted=false&autostart=false&originalSize=true&startWithHD=true",allowFullScreen:!0,frameBorder:"0",width:"1280",height:"720",allow:"autoplay"})),r.a.createElement(E,null,r.a.createElement("strong",null,"— Hey"),", ",r.a.createElement("span",{style:{fontWeight:600}},"привіт"),", привет ",r.a.createElement("span",{className:"waving-hand"},"👋"),"!",r.a.createElement("br",null),"The reason to gather all of you here is to let you know that you're ",r.a.createElement("strong",null,"awesome and incredible")," and we just really want you to not only know it but ",r.a.createElement("strong",null,"truly feel it")," as well. Basically, that’s it ",r.a.createElement("em",null,"(yes, you can leave)"),", but then wouldn’t it be nice to somehow keep telling it (and cheering each other up) beyond once-in-some-time gathering?"))),r.a.createElement("div",{className:"hero hero-sm hero-fh"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"text-center"},"Welcome to ",r.a.createElement("strong",{style:{color:"#33CC66"}},"Bonusly"),"!"),r.a.createElement(E,{background:"grey"},"— We gave it a thought and sought the aid of ",r.a.createElement("a",{href:"https://bonus.ly/"},r.a.createElement("strong",null,"Bonusly")),", a platform designed and used to exchange gratitude with virtual currency, which at any point could be exchanged for perks of one’s choice. Bonusly offers to:",r.a.createElement("div",{className:"columns about-bonusly"},r.a.createElement("div",{className:"column col-4 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h6",null,r.a.createElement("strong",null,"Promote your mis-s-s-s-sion!"),r.a.createElement("span",{className:"text-gray"},r.a.createElement("small",null,"#1"))))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("span",{style:{fontSize:"3em",float:"right",lineHeight:"1.25em"}},"😤"),"Make recognition more impactful by connecting it to your company’s core values and giving visibility to everyone’s contributions."))),r.a.createElement("div",{className:"column col-4 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h6",null,r.a.createElement("strong",null,"Build stronger t-t-t-t-teams!"),r.a.createElement("span",{className:"text-gray"},r.a.createElement("small",null,"#2"))))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("span",{style:{fontSize:"3em",float:"right",lineHeight:"1.25em"}},"💩"),"Build a scalable culture of recognition by empowering everyone to recognize their peers, direct reports, and managers."))),r.a.createElement("div",{className:"column col-4 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h6",null,r.a.createElement("strong",null,"Boost enga-a-a-a-agement!"),r.a.createElement("span",{className:"text-gray"},r.a.createElement("small",null,"#3"))))),r.a.createElement("div",{className:"panel-body"},r.a.createElement("span",{style:{fontSize:"3em",float:"right",lineHeight:"1.25em"}},"🚣‍"),"Encourage frequent and timely recognition by integrating with the communication tools your employees use every day.")))),"Their website says many companies are happy using it, so that’s a good thing. On the other hand, here at Ricker Lyman Robotic we already have a pretty cool, engaged and coordinated team, is there any ",r.a.createElement("em",null,"actual fun")," in integrating something like that?"))),r.a.createElement("div",{className:"hero hero-sm hero-fh"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"text-center"},"Why yes, it can be ",r.a.createElement("strong",null,"tweaked"),"!"),r.a.createElement(E,null,"— Suppose that every month you would get paid not only with a salary, but also with a portion of ",r.a.createElement("strong",null,"mana"),". Normally, ",r.a.createElement("strong",null,"mana")," is used to cast spells. This specific one is used to spell ",r.a.createElement("strong",null,"🙏thanks")," and ",r.a.createElement("strong",null,"👍thumbs-up"),". Yep, that’s all you can do with it — send out. When you bind your ",r.a.createElement("em",null,"raw")," mana with gratitude or inspiration or lolz and send in the direction of another person, they receive it as a ",r.a.createElement("em",null,"bound")," mana. And here's what's going to happen:",r.a.createElement("ol",{className:"compact inverted"},r.a.createElement("li",null,"You'll express yourself 🎉"),r.a.createElement("li",null,"You'll encourage your peer 🤜🤛"),r.a.createElement("li",null,"That lucky guy or gal not only instantly feels better, but can also use this bound ",r.a.createElement("strong",null,"mana")," to get gear, loot, and power-ups of his choice! 🧰"))))),r.a.createElement("div",{className:"hero hero-lg"},r.a.createElement("div",{className:"hero-body text-center"},r.a.createElement("h1",null,"What kind of ",r.a.createElement("strong",null,"stuff")," can one get?",r.a.createElement("br",null),"🥎🌶️⏱️🧦🙏🧯🧻💣"))),r.a.createElement("div",{className:"hero hero-lg"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("h1",{className:"text-center"},"How to ",r.a.createElement("strong",null,"send mana"),"?"),r.a.createElement("h4",null,"With ",r.a.createElement("strong",null,"Bonusly")),r.a.createElement("div",{style:{padding:"1em",border:"1px solid #eeeeee",marginBottom:"1em"}},r.a.createElement("em",null,"Wireframe Bonusly website here")),r.a.createElement("h4",null,"On ",r.a.createElement("strong",null,"Slack")),r.a.createElement("div",{style:{padding:"1em",border:"1px solid #eeeeee"}},r.a.createElement("h3",null,r.a.createElement("strong",null,"#bonusly")),r.a.createElement("p",null,"You created this channel on July 1st. This is the very beginning of the ",r.a.createElement("strong",null,"#bonusly")," channel. Purpose: Well, obviously, this is a Bonusly channel"),r.a.createElement("div",{className:"today"},r.a.createElement("span",null,"Today")),r.a.createElement(Q,{senderId:"dasha-korotkykh",senderName:"Dasha Korotkykh",senderAvatarUrl:$.a,reactions:[{emoji:"🎉",count:7},{emoji:"🤗",count:6},{emoji:"😍",count:1},{emoji:"🍪",count:12},{emoji:"😛",count:2},{emoji:"🥠",count:5}],replies:[{name:"Vadym Drybas",avatarUrl:Ne.a},{name:"Vasyl Magora",avatarUrl:ke.a},{name:"Ilya Kotlov",avatarUrl:ce.a},{name:"Orest Hapaliak",avatarUrl:ye.a},{name:"Yurii Ostapchuk",avatarUrl:De.a},{name:"Bohdan Pelekh",avatarUrl:Z.a}]},r.a.createElement("div",null,"But hey! There's also a public channel in Slack called ",r.a.createElement("a",{href:"https://rickerlyman.slack.com/messages/CK7MBDXHU/"},r.a.createElement("strong",null,"#bonusly"))," that is simultaneosly a Trading Exchange Market, a Post Office, and somewhat a flood chat! So whenever you're in a mood to throw some recognition at one of your Ricker Lyman Robotic peers, just use ",r.a.createElement("strong",null,r.a.createElement("code",null,"/give"))," command and a familiar ",r.a.createElement("strong",null,r.a.createElement("em",null,r.a.createElement("code",null,"<amount> <recepient> <reason> <hashtag>")))," syntax to ",r.a.createElement("strong",null,"🧙‍️compose a spell")," and Bonusly Slack integration app will take it from there.")),r.a.createElement(Q,{senderId:"bonusly",senderName:"Bonusly",senderAvatarUrl:G.a,reactions:[{emoji:"🤭",count:4},{emoji:"🎅",count:2},{emoji:"🔥",count:11},{emoji:"😛",count:1}],replies:[{name:"Iryna Shvets",avatarUrl:ie.a},{name:"Igor Gerasimow",avatarUrl:le.a},{name:"Galyna Makogoniuk",avatarUrl:ae.a},{name:"Orest Hapaliak",avatarUrl:ye.a},{name:"Volodymyr Tysjak",avatarUrl:xe.a},{name:"Yurii Ostapchuk",avatarUrl:De.a}],isBonusly:!0,isBonuslyBonus:!0},r.a.createElement("div",null,r.a.createElement("strong",null,"Iryna:")," ",r.a.createElement("strong",null,"+3")," ",r.a.createElement("span",{className:"bg-secondary"},"@v.magora")," for a fascinating new beard style ",r.a.createElement("a",{href:"#"},r.a.createElement("strong",null,"#breaking-news-this-just-in"))," ",r.a.createElement("a",{href:"#"},r.a.createElement("strong",null,"#за-гарні-очі"))," ",r.a.createElement("a",{href:"#"},r.a.createElement("strong",null,"#lacoste")))),r.a.createElement(Q,{senderId:"paul-lyman",senderName:"Paul Lyman",senderAvatarUrl:fe.a,reactions:[{emoji:"😊",count:1},{emoji:"🤖",count:5},{emoji:"🐦",count:1},{emoji:"👀",count:3}],replies:[{name:"Kostya Lukyanenko",avatarUrl:he.a},{name:"George Barvinok",avatarUrl:ne.a},{name:"Volodymyr Kondratenko",avatarUrl:Be.a}]},r.a.createElement("div",null,r.a.createElement("strong",null,"+10")," ",r.a.createElement("span",{className:"bg-secondary"},"@a.sirak")," for sharing handy articles on ",r.a.createElement("span",{className:"text-primary"},r.a.createElement("strong",null,"#rlr-general-ua")),". Sharing is caring! 😁 ",r.a.createElement("span",{className:"text-primary"},r.a.createElement("strong",null,"#thanks")))),r.a.createElement(Q,{senderId:"bonusly",senderName:"Bonusly",senderAvatarUrl:G.a,reactions:[{emoji:"🤭",count:4},{emoji:"🎅",count:2},{emoji:"🔥",count:11},{emoji:"😛",count:1}],replies:[{name:"Julia Titova",avatarUrl:de.a},{name:"Andrii Sirak",avatarUrl:W.a},{name:"Bogdan Shamanovskyi",avatarUrl:K.a},{name:"Kostiantyn Kravtsov",avatarUrl:pe.a},{name:"Alec Marin",avatarUrl:z.a}],isBonusly:!0},r.a.createElement("div",null,r.a.createElement("strong",null,"Bohdan commented on ",r.a.createElement("a",{href:"#"},r.a.createElement("strong",null,"Vasyl's bonus")),":")," ",r.a.createElement("strong",null,"+5")," indeed, that is reasonable, give credit where credit is due")),r.a.createElement(Q,{senderId:"bohdan-pelekh",senderName:"Bohdan Pelekh",senderAvatarUrl:Z.a,reactions:[{emoji:"😊",count:1},{emoji:"🤗",count:6},{emoji:"🎉",count:7},{emoji:"🍪",count:12},{emoji:"😛",count:2},{emoji:"🥠",count:5}],replies:[{name:"Vasyl Magora",avatarUrl:ke.a},{name:"Ilya Kotlov",avatarUrl:ce.a},{name:"Orest Hapaliak",avatarUrl:ye.a},{name:"Vadym Drybas",avatarUrl:Ne.a},{name:"Yurii Ostapchuk",avatarUrl:De.a},{name:"Bohdan Pelekh",avatarUrl:Z.a}]},r.a.createElement("div",null,r.a.createElement("strong",null,"+45")," and a cookie to ",r.a.createElement("span",{className:"bg-secondary"},"@y.ostapchuk"),", 'cause that guy you recommended last week is getting hireeeeeed! ",r.a.createElement("span",{className:"text-primary"},r.a.createElement("strong",null,"#referral #happyhr")))),r.a.createElement(O,null,r.a.createElement("strong",null,"/give +5 @that_awesome_fella")," for ",r.a.createElement("strong",null,"tending extra time to our unit tests")," when we needed them the most. Here goes hashtag ",r.a.createElement("strong",null,"#staying-up-late"),"."))))))),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"hero hero-lg"},r.a.createElement("div",{className:"hero-body text-center"},r.a.createElement("h1",null,"But wait, ",r.a.createElement("strong",null,"there's moar"),"!"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column col-3 col-md-6 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h4",null,"Goddess of luck"),r.a.createElement("br",null),r.a.createElement("img",{src:"https://discordemoji.com/assets/emoji/Chest.gif"}))),r.a.createElement("div",{className:"panel-body"},"Opens box once a month and grants 3 random yous ",r.a.createElement("strong",null,"+10 mana")," points each"))),r.a.createElement("div",{className:"column col-3 col-md-6 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h4",null,"Clark Kent's lottery"),r.a.createElement("img",{src:"https://dumielauxepices.net/sites/default/files/superman-logo-clipart-transparent-785959-3553308.gif",height:"100px"}))),r.a.createElement("div",{className:"panel-body"},"Weekly event of 1 hour bidding window, after which one random participant steals ",r.a.createElement("strong",null,"jackpot")))),r.a.createElement("div",{className:"column col-3 col-md-6 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h4",null,"Sweepstake bets"),r.a.createElement("img",{src:"http://www.spectacletheater.com/wp-content/uploads/stable/orbit.gif",height:"70px"}))),r.a.createElement("div",{className:"panel-body"},"Bet ",r.a.createElement("strong",null,"10 mana")," on literally anything — send the bid to @clark.kent and add a descriptive message"))),r.a.createElement("div",{className:"column col-3 col-md-6 col-sm-12 my-1"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"panel-header"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("h4",null,"Happy Working Anniversary"),r.a.createElement("img",{src:"https://cdn.dribbble.com/users/48951/screenshots/1886884/cake_animation.gif",height:"70px"}))),r.a.createElement("div",{className:"panel-body"},"Goddess of retention sends ",r.a.createElement("strong",null,"+50 redeemable mana")," every working anniversary you hit")))))))),r.a.createElement("div",{className:"container grid-lg"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"hero hero-sm"},r.a.createElement("div",{className:"hero-body text-center"},r.a.createElement("h1",{style:{fontWeight:800,margin:0}},"Have fun! 👋"))),r.a.createElement(y,null))))))}},186:function(e,a,t){var n;e.exports=(n=t(235))&&n.default||n},187:function(e,a){e.exports="data:image/png;base64,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"},188:function(e,a,t){e.exports=t.p+"static/bonusly-b994f5583ffc9695d8318f2a16e297d0.png"},189:function(e,a,t){e.exports=t.p+"static/alec-marin-4a123ee0e020afb2943e3dc2eb678376.png"},190:function(e,a,t){e.exports=t.p+"static/andrii-sirak-2c690c55a2977890857bdbe6fa034906.png"},191:function(e,a,t){e.exports=t.p+"static/bogdan-shamanovskyi-214c1f0e4f0a8fad1453fc760e1ecb4e.png"},192:function(e,a,t){e.exports=t.p+"static/bohdan-pelekh-414c52c08f06164a3cb90756ecc2f8e7.png"},193:function(e,a,t){e.exports=t.p+"static/dasha-korotkykh-8adf845eb28196787d94bd3a88d11ebd.png"},194:function(e,a,t){e.exports=t.p+"static/galyna-makogoniuk-cf304bf9fc902a2e58102b20d54c1593.png"},195:function(e,a,t){e.exports=t.p+"static/george-barvinok-5cf9008f1729d38b027fb23fd8a0f358.png"},196:function(e,a,t){e.exports=t.p+"static/igor-gerasimow-034e122db99d61e25377a231dda924cc.png"},197:function(e,a,t){e.exports=t.p+"static/ihor-baranovskyi-91f3b4748a6e6b38744f99894c003066.png"},198:function(e,a,t){e.exports=t.p+"static/ilya-kotlov-954c8195c44cf9bfca923060fd8b953e.png"},199:function(e,a,t){e.exports=t.p+"static/iryna-shvets-9363bcbfd6693644e0d7e32bb7784244.png"},200:function(e,a,t){e.exports=t.p+"static/iryna-steshyts-3fe73f37b1eee02a1427639a7c0e02e2.png"},201:function(e,a,t){e.exports=t.p+"static/jeffrey-ricker-7277bf1925b778d106f5f9e8623ef795.png"},202:function(e,a,t){e.exports=t.p+"static/julia-titova-6c2bc02623ac661c328369fa923010a7.png"},203:function(e,a,t){e.exports=t.p+"static/kostiantyn-kravtsov-9fc88427352f6f26db22f6d01fd9653b.png"},204:function(e,a,t){e.exports=t.p+"static/kostya-lukyanenko-2a957a2201395872db9076b1cf24a4f4.png"},205:function(e,a,t){e.exports=t.p+"static/orest-hapaliak-0a30909548740fc449cc17c0dcdf34ec.png"},206:function(e,a,t){e.exports=t.p+"static/paul-lyman-b39c4caf95fdaff6653a7e9284c5a7c6.png"},207:function(e,a,t){e.exports=t.p+"static/sergey-borysenko-18f50955386ffd04d120fc3170859961.png"},208:function(e,a,t){e.exports=t.p+"static/taras-petryshak-b5ba19b83284d79d82d3ecf674fb219d.png"},209:function(e,a,t){e.exports=t.p+"static/vadym-drybas-adec2832e65ca4c22e447b23340ebfaa.png"},210:function(e,a,t){e.exports=t.p+"static/vasyl-magora-c3cc9fe3a520cd155eea5343895c1670.png"},211:function(e,a,t){e.exports=t.p+"static/vitaliy-boyarsky-e8f9672df727425e29f2b3feca431fd4.png"},212:function(e,a,t){e.exports=t.p+"static/volodymyr-kondratenko-6cb76e113e2f47436f2402f691551cef.png"},213:function(e,a,t){e.exports=t.p+"static/volodymyr-tysjak-6cdb4dddc728e6838c2378999bcc30fc.png"},214:function(e,a,t){e.exports=t.p+"static/yurii-ostapchuk-4a094d6ad94c0dad71b00f2e7ab2c6f6.png"},215:function(e,a,t){e.exports=t.p+"static/dasha-korotkykh-cd3760140609f4915939f8134bdd1c53.svg"},216:function(e,a,t){e.exports=t.p+"static/julia-titova-9b8da8d0c193cea37bbdd15515958965.svg"},221:function(e,a,t){e.exports=t.p+"static/ricker-lyman-robotic-af84c1be60ba3f242160fa02fdc91ed2.svg"},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Mana • Ricker Lyman Robotic",description:"How to give a great bonus at Ricker Lyman Robotic",author:""}}}}},235:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t.n(n),l=t(0),s=t.n(l),c=t(15),o=t.n(c),i=t(115),m=function(e){var a=e.location,t=e.pageResources;return t?s.a.createElement(i.a,r()({location:a,pageResources:t},t.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=m},238:function(e,a,t){e.exports=t.p+"static/cannot-eat-thank-you-with-bread-3d844c36c2bbbea382d1fbd8ff3360b6.m4a"}}]);
//# sourceMappingURL=component---src-pages-index-js-6de1dd7c10645432c852.js.map