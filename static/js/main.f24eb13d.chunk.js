(this.webpackJsonpnauka=this.webpackJsonpnauka||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e){e.exports=JSON.parse('{"user":{"main":[{"id":0,"login":"piotr","password":"test","image":"https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_960_720.jpg","desc":"Hello I m Piotr!","posts":[0,1,2],"favourite":[3,4,5]},{"id":1,"login":"rafal","password":"test","image":"https://cdn.pixabay.com/photo/2016/07/30/21/37/mario-1558062_960_720.jpg","desc":"Hello I m Rafal!","posts":[3,4,5],"favourite":[0,1]},{"id":2,"login":"andrzej","password":"test","image":"https://cdn.pixabay.com/photo/2017/07/15/13/45/rapper-2506492_960_720.jpg","desc":"Hello I m Andrzej","posts":[0,1],"favourite":[0,1]}]}}')},20:function(e){e.exports=JSON.parse('{"post":{"main":[{"id":0,"hashtag":"#mountain #mountains #landscape","picture":"https://cdn.pixabay.com/photo/2020/04/16/15/39/mountains-5051149_1280.jpg","date":"2020.01.02","desc":"Post 1 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":1,"hashtag":"#road #mountains #landscape","picture":"https://cdn.pixabay.com/photo/2018/11/19/03/27/nature-3824498_960_720.jpg","date":"2020.02.03","desc":"Post 2 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":2,"hashtag":"#nature #bloom #blooms #water","picture":"https://cdn.pixabay.com/photo/2020/04/07/12/47/tulips-5013253_960_720.jpg","date":"2020.03.02","desc":"Post 3 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":3,"hashtag":"#animals #cat","picture":"https://cdn.pixabay.com/photo/2020/02/05/06/24/cat-4820202_960_720.jpg","date":"2020.05.02","desc":"Post 4 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":4,"hashtag":"#water #lake #sea #holidays #beach #sun #nature","picture":"https://cdn.pixabay.com/photo/2020/07/04/10/26/beach-5369061_960_720.jpg","date":"2020.01.02","desc":"Post 5 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":5,"hashtag":"#animals #deer #roe #nature #lake","picture":"https://cdn.pixabay.com/photo/2021/04/30/14/53/deer-6219100_960_720.jpg","date":"2020.01.10","desc":"Post 5 \\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]}}')},21:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(10),r=n.n(i),o=(n(16),n(9)),c=n(2),l=n(3),u=n(5),p=n(4),d=(n(17),n(11)),h=n(6),m=n(0),j=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("p",{className:"logo__desc",children:"Instagram"})}}]),n}(a.a.Component),f=n(19);var y=function(e){document.cookie="user="+JSON.stringify(e)},b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.componentDidMount=function(){if(""===document.cookie);else{var t,n=document.cookie.split(/; */),s=Object(h.a)(n);try{for(s.s();!(t=s.n()).done;){var a=t.value.split("="),i=Object(d.a)(a,2),r=i[0],o=i[1];r===decodeURIComponent("user")&&(e.props.active("home"),e.props.cookieSession(JSON.parse(o)))}}catch(c){s.e(c)}finally{s.f()}}},e.isLoginCorrect=function(e,t,n){e.preventDefault();for(var s=0;s<f.user.main.length;s++)if(t==f.user.main[s].login&&n==f.user.main[s].password)return{ret:!0,user:f.user.main[s]};return{ret:!1}},e.usernameHandler=function(t){e.setState({username:t.target.value})},e.passwordHandler=function(t){e.setState({password:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("form",{className:"login",children:[Object(m.jsx)(j,{}),Object(m.jsx)("input",{className:"login__username",type:"text",placeholder:"name",onChange:this.usernameHandler,value:this.state.username}),Object(m.jsx)("input",{className:"login__password",type:"password",placeholder:"password",onChange:this.passwordHandler,value:this.state.password}),Object(m.jsx)("p",{className:"login__info",children:"Login: piotr Password: test"}),Object(m.jsx)("p",{className:"login__info",children:"Login: rafal Password: test"}),Object(m.jsx)("input",{className:"login__button",type:"submit",value:"log in",onClick:function(t){var n=e.isLoginCorrect(t,e.state.username,e.state.password);!0===n.ret?(e.props.active("home"),e.props.activeSession(t,n.user),console.log(n.user),y(n.user)):alert("Login or password are incorrect")}})]})}}]),n}(a.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.activeSession,s=e.cookieSession;return Object(m.jsx)("div",{className:"start",children:Object(m.jsx)(b,{active:t,activeSession:n,cookieSession:s})})}}]),n}(a.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).menuHandler=function(t,n){t.preventDefault(),e.props.active(n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("nav",{className:"menu",style:this.props.style,children:Object(m.jsxs)("ul",{className:"menu__list",style:this.props.listStyle,children:[Object(m.jsx)("li",{className:"menu__item",children:Object(m.jsx)("p",{className:"menu__link",onClick:function(t){return e.menuHandler(t,"home")},href:"",children:"Home"})}),Object(m.jsx)("li",{className:"menu__item",children:Object(m.jsx)("p",{className:"menu__link",onClick:function(t){return e.menuHandler(t,"explore")},href:"",children:"Explore"})}),Object(m.jsx)("li",{className:"menu__item",children:Object(m.jsx)("p",{className:"menu__link",onClick:function(t){return e.menuHandler(t,"favourite")},href:"",children:"Favourite"})}),Object(m.jsx)("li",{className:"menu__item",children:Object(m.jsx)("p",{className:"menu__link",onClick:function(t){return e.menuHandler(t,"profile")},href:"",children:"Profile"})})]})})}}]),n}(a.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={searchValue:"",input:document.querySelector(".search__text")},e.textHandler=function(t){e.setState({searchValue:t.target.value})},e.searchHandler=function(t){t.preventDefault();var n=document.querySelectorAll(".post__hashtag");""!==e.state.searchValue&&n.forEach((function(t,n){-1!==t.textContent.search(e.state.searchValue)&&t.scrollIntoView({behavior:"smooth",block:"center"})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"search",onSubmit:this.searchHandler,children:[Object(m.jsx)("input",{type:"text",className:"search__text",value:this.searchValue,onChange:this.textHandler,placeholder:"Search by hashtag ..."}),Object(m.jsx)("input",{type:"button",className:"search__button",value:"Search",onClick:this.searchHandler})]})}}]),n}(a.a.Component),_=n(20),x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"photo",children:Object(m.jsx)("img",{className:"photo__image",src:_.post.main[this.props.name].picture,alt:"fail to load"})})}}]),n}(a.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).post_show=function(){var t=_.post.main[e.props.name].id,n=window.matchMedia("(min-width: 640px)"),s=document.querySelector(".post__container[id='".concat(t,"']")),a=document.querySelector(".post__container[id='".concat(t,"'] .post__close")),i=document.querySelectorAll(".post__container:not(.post__container[id='".concat(t,"'])")),r=document.querySelector(".relations"),o=document.querySelector(".intro");if(console.log(i),a.style.display="flex",s.style.position="fixed",n.matches){s.style.left="50%",s.style.height="60vh",s.style.top="50%",s.style.marginright="-50%",s.style.transform="translate(-50%, -50%)",s.style.zindex="3",o.style.display="none",r.style.display="none";for(var c=0;c<i.length;c++)i[c].style.display="none"}else s.style.left="0",s.style.height="100vh",s.style.width="100vw",s.style.top="0";s.style.overflow="auto",s.style.margintop="0",s.style.marginbottom="0"},e.post_hidden=function(){var t=_.post.main[e.props.name].id,n=window.matchMedia("(min-width: 640px)"),s=document.querySelector(".post__container[id='".concat(t,"']")),a=document.querySelector(".post__container[id='".concat(t,"'] .post__close")),i=document.querySelectorAll(".post__container:not(.post__container[id='".concat(t,"'])")),r=document.querySelector(".relations"),o=document.querySelector(".intro");a.style.display="none",s.style.position="static",s.style.top="auto",s.style.left="auto",s.style.height="auto",n.matches?s.style.width="600px":s.style.width="100%",s.style.marginright="auto",s.style.transform="none",s.style.overflow="hidden",o.style.display="flex",r.style.display="flex";for(var c=0;c<i.length;c++)i[c].style.display="flex";s.style.marginbottom="30px",s.scrollIntoView({behavior:"auto",block:"center"})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"post__container",id:_.post.main[this.props.name].id,children:[Object(m.jsx)("div",{className:"post__close",children:Object(m.jsx)("input",{type:"button",value:"X",onClick:this.post_hidden})}),Object(m.jsx)("div",{className:"post__image",onClick:this.post_show,children:Object(m.jsx)(x,{name:this.props.name})}),Object(m.jsx)("p",{className:"post__date",children:_.post.main[this.props.name].date}),Object(m.jsx)("p",{className:"post__hashtag",children:_.post.main[this.props.name].hashtag}),Object(m.jsx)("p",{className:"post__desc",children:_.post.main[this.props.name].desc})]})}}]),n}(a.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).post_render=function(){for(var e=[],t=0;t<_.post.main.length;t++)e.push(Object(m.jsx)(w,{name:t}));return e},e.relations_render=function(){var e=[];console.log(f);for(var t=0;t<f.user.main.length;t++)e.push(Object(m.jsxs)("div",{className:"relations__image",children:[Object(m.jsx)("img",{src:f.user.main[t].image}),Object(m.jsx)("p",{children:f.user.main[t].login})]}));return e},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.active;e.user;return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsxs)("div",{className:"intro",children:[Object(m.jsx)(j,{}),Object(m.jsx)(O,{}),Object(m.jsx)(g,{active:t})]}),Object(m.jsx)("div",{className:"relations",children:Object(m.jsx)("div",{className:"relations__bar",children:this.relations_render()})}),Object(m.jsx)("div",{className:"post",children:this.post_render()})]})}}]),n}(a.a.Component),N={left:0,width:"100%"},I={flexBasis:"50%"},S=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).post_render=function(){for(var e=[],t=function(e){for(var t=[],n=4*e;n<4*(e+1)&&n<_.post.main.length;n++)t.push(Object(m.jsx)("div",{className:"explore__post",children:Object(m.jsx)(x,{name:n})}));return t},n=0;n<=Math.floor(_.post.main.length/4);n++)e.push(Object(m.jsx)("div",{className:"explore__container",children:t(n)}));return e},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.active;return Object(m.jsxs)("div",{className:"explore",children:[Object(m.jsx)(g,{style:N,listStyle:window.matchMedia("(max-width: 640)").matches?I:null,active:e}),Object(m.jsx)("div",{className:"explore__main",children:this.post_render()})]})}}]),n}(a.a.Component),L={left:0,width:"100%"},C={flexBasis:"50%"},H=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).galleryHandler=function(e){var t=[];console.log(e);var n,s=Object(h.a)(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;t.push(Object(m.jsx)("div",{className:"favourite__post",children:Object(m.jsx)(x,{name:a})}))}}catch(i){s.e(i)}finally{s.f()}return t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.user;return Object(m.jsxs)("div",{className:"favourite",children:[Object(m.jsx)(g,{style:L,listStyle:window.matchMedia("(max-width: 640)").matches?C:null,active:t}),Object(m.jsx)("div",{className:"favourite__main",children:Object(m.jsx)("div",{className:"favourite__container",children:this.galleryHandler(n.favourite)})})]})}}]),n}(a.a.Component),A={left:0,width:"100%"},P={flexBasis:"50%"},M=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).logoutHandler=function(e){e.preventDefault(),document.cookie="user=;expires=Thu, 01 Jan 1970 00:00:00 GMT",document.location.reload()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.user;return Object(m.jsx)("div",{className:"profile__main",children:Object(m.jsxs)("div",{className:"profile__container",children:[Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsx)("img",{src:e.image,className:"profile__image",alt:"error"}),Object(m.jsxs)("div",{className:"profile__name-container",children:[Object(m.jsx)("div",{className:"profile__name",children:Object(m.jsx)("h1",{className:"profile__text",children:e.login})}),Object(m.jsx)("p",{className:"profile__desc",children:e.desc})]})]}),Object(m.jsx)("button",{className:"profile__logout",onClick:this.logoutHandler,children:"Log Out"}),Object(m.jsx)("div",{className:"profile__gallery",children:e.posts.map((function(e){return Object(m.jsx)("div",{className:"profile__post",children:Object(m.jsx)(x,{name:e})})}))})]})})}}]),n}(a.a.Component),q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log(window.matchMedia("(min-width: 640)").matches);var e=this.props.user;return Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)(g,{active:this.props.active,style:A,listStyle:window.matchMedia("(min-width: 640)").matches?P:null}),Object(m.jsx)(M,{user:e})]})}}]),n}(a.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={start:!0,home:!1,explore:!1,favourite:!1,profile:!1,session:null},e.containersActiveHandler=function(t){for(var n in e.state)n==t?e.setState(Object(o.a)({},n,!0)):"session"!=n&&e.setState(Object(o.a)({},n,!1))},e.activeSession=function(t,n){t.preventDefault(),e.setState({session:n})},e.cookieSession=function(t){e.setState({session:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.start,n=e.home,s=e.explore,a=e.favourite,i=e.session,r=e.profile;return Object(m.jsxs)("div",{className:"wrapper",children:[t?Object(m.jsx)(v,{active:this.containersActiveHandler,activeSession:this.activeSession,cookieSession:this.cookieSession}):null,n?Object(m.jsx)(k,{active:this.containersActiveHandler,user:i}):null,s?Object(m.jsx)(S,{active:this.containersActiveHandler}):null,a?Object(m.jsx)(H,{active:this.containersActiveHandler,user:i}):null,r?Object(m.jsx)(q,{active:this.containersActiveHandler,user:i}):null]})}}]),n}(a.a.Component),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),J()}},[[21,1,2]]]);
//# sourceMappingURL=main.f24eb13d.chunk.js.map