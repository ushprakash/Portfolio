(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{23:function(e,a,c){},30:function(e,a,c){"use strict";c.r(a);var t=c(0),s=c(1),i=c.n(s),r=c(16),n=c.n(r),l=(c(23),c.p+"static/media/github.0ade81e0.svg"),d=c.p+"static/media/pin.ecfd58de.svg",o=c.p+"static/media/Usha.555770d1.jpg",j=function(){return Object(t.jsxs)("div",{className:"sidebar",children:[Object(t.jsx)("img",{src:o,alt:"usha",className:"usha_image"}),Object(t.jsxs)("div",{className:"sidebar__name",children:["Usha ",Object(t.jsx)("span",{children:"Prakash"})," "]}),Object(t.jsx)("div",{className:"sidebar__item sidebar__title",children:"Web Developer"}),Object(t.jsx)("div",{className:"sidebar__contact",children:Object(t.jsxs)("div",{className:"sidebar__location",children:[Object(t.jsx)("img",{src:d,alt:"location",className:"sidebar__icon mr-3"}),"Stockholm, Sweden",Object(t.jsx)("p",{className:"sidebar__item",children:"ushaprakash1116@gmail.com"})]})}),Object(t.jsx)("div",{className:"sidebar__item sidebar__email",onClick:function(){window.open("mailto:ushaprakash1116@gmail.com")},children:"Email Me"})]})},m=c(10),u=c(8),b=function(){var e=Object(s.useState)(""),a=Object(m.a)(e,2),c=a[0],i=a[1];return Object(s.useEffect)((function(){var e=window.location.href;console.log(e),e.endsWith("/")?i("About"):e.endsWith("/projects")?i("Projects"):e.endsWith("/resume")&&i("Resume")}),[c]),Object(t.jsxs)("div",{className:"navbar",children:[Object(t.jsx)("div",{className:"navbar__active",children:c}),Object(t.jsxs)("div",{className:"navbar__items",children:["About"!==c&&Object(t.jsx)(u.b,{to:"/about",children:Object(t.jsx)("div",{className:"navbar__item",onClick:function(){return i("About")},children:"About"})}),"Resume"!==c?Object(t.jsx)(u.b,{to:"/resume",children:Object(t.jsx)("div",{className:"navbar__item",onClick:function(){return i("Resume")},children:"Resume"})}):null,"Projects"!==c&&Object(t.jsx)(u.b,{to:"/projects",children:Object(t.jsx)("div",{className:"navbar__item",onClick:function(){return i("Projects")},children:"Projects"})})]})]})},h=c(2),p=c.p+"static/media/git.63873841.svg",g=c.p+"static/media/computer.1ad27275.svg",_=c.p+"static/media/puzzle.3c474bd9.svg",x=c.p+"static/media/database.6aaa0fc7.svg",O=function(e){var a=e.skill,c=a.icon,s=a.title,i=a.about;return Object(t.jsx)("div",{className:"col-lg-6",children:Object(t.jsxs)("div",{className:"skill-card",children:[Object(t.jsx)("img",{src:c,alt:"icon",className:"skill-card__icon"}),Object(t.jsxs)("div",{className:"skill-card-body",children:[Object(t.jsx)("h5",{className:"skill-card__title",children:s}),Object(t.jsx)("p",{className:"skill_card__content",children:i})]})]})})},v=[{icon:g,title:"Frontend Development",about:"I can build a beautiful and scalable SPA using HTML, CSS ,Bootstarp and React.js"},{icon:x,title:"Backend  Development",about:"I can handle MySql and Node.js "},{icon:p,title:"Version control",about:"I can manage version control on documents"},{icon:_,title:"UI/UX designer",about:"minimalistic user interface designer using figma and  framer"}],N=function(){return Object(t.jsxs)("div",{className:"about",children:[Object(t.jsx)("p",{className:"about__intro",children:"I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions."}),Object(t.jsxs)("div",{className:"container about__container",children:[Object(t.jsx)("p",{className:"about__heading",children:"What I offer"}),Object(t.jsx)("div",{className:"row",children:v.map((function(e){return Object(t.jsx)(O,{skill:e})}))})]})]})},f=[{name:"HTML5"},{name:"CSS3"},{name:"JavaScript"},{name:"React"},{name:"Bootstrap"}],k=[{name:"JQuery"},{name:"NodeJS"},{name:"MySql"},{name:"Git"}],y=function(){return Object(t.jsxs)("div",{className:"container resume",children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-lg-5 resume-card mx-10",children:[Object(t.jsx)("h4",{className:"resume-card__heading",children:"Education"}),Object(t.jsxs)("div",{className:"resume-card__body",children:[Object(t.jsx)("h5",{className:"resume-card__title",children:"Electrical & Electronics Engineering"}),Object(t.jsx)("p",{className:"resume-card__name",children:"Anna University(2005-2009),India"}),Object(t.jsx)("p",{className:"resume-card__details",children:"I am B.E(Bachelor of Engineering) degree holder from Anna University in India"})]})]}),Object(t.jsxs)("div",{className:"col-lg-6 resume-card",children:[Object(t.jsx)("h4",{className:"resume-card__heading",children:"Experience"}),Object(t.jsxs)("div",{className:"resume-card__body",children:[Object(t.jsxs)("p",{className:"resume-card__title",children:["Freelancing Projects ",Object(t.jsx)("br",{}),"(FrontEnd Developer)"]}),Object(t.jsx)("p",{className:"resume-card__details",children:"I work as part-time job in Freelancing projects "})]})]})]}),Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"resume-language",children:[Object(t.jsx)("h5",{className:"resume-language__heading",children:"Language and Framework"}),Object(t.jsxs)("div",{className:"resume-language__body",children:[Object(t.jsx)("div",{className:"lng col-xs-6",children:f.map((function(e){return Object(t.jsx)("div",{children:e.name})}))}),Object(t.jsx)("div",{className:"lng1 col-xs-6",children:k.map((function(e){return Object(t.jsx)("div",{children:e.name})}))})]})]})})]})},S=c.p+"static/media/budgetApp.ec133fa9.jpg",C=[{name:"Recipe App",image:c.p+"static/media/recipe.5e36e017.jpg",deployed_url:"https://ushprakash.github.io/Recipe/",github_url:"https://github.com/ushprakash/Recipe",category:["React"]},{name:"Budget App",image:S,deployed_url:"https://ushprakash.github.io/BudgetApp/",github_url:"https://github.com/ushprakash/BudgetApp",category:["React"]},{name:"DrumKit app",image:c.p+"static/media/drumkit.97c760ad.jpg",deployed_url:"https://ushprakash.github.io/DrumKit/",github_url:"https://github.com/ushprakash/DrumKit",category:["JavaScript"]},{name:"Todo List",image:c.p+"static/media/Todolist.c3f2fb17.jpg",deployed_url:"https://ushprakash.github.io/React-TodoApp/",github_url:"https://github.com/ushprakash/React-TodoApp",category:["React"]},{name:"Form animation",image:c.p+"static/media/login.1605aab1.jpg",deployed_url:"https://ushprakash.github.io/Form-Animation/",github_url:"https://github.com/ushprakash/Form-Animation",category:["JavaScript"]},{name:"Login&signup ",image:c.p+"static/media/signup.d7801157.jpg",deployed_url:"https://ushprakash.github.io/login-signup/",github_url:"https://github.com/ushprakash/login-signup",category:["JQuery"]}],w=function(e){var a=e.project,c=a.name,s=a.image,i=a.deployed_url,r=a.github_url;return Object(t.jsx)("div",{className:"projectCard col-md-6 col-lg-6",children:Object(t.jsxs)("figure",{className:"projectCard__wrapper",children:[Object(t.jsx)("a",{href:i,target:"_blank",children:Object(t.jsx)("img",{src:s,className:"projectCard__image picture"})}),Object(t.jsx)("div",{className:"projectCard__title",children:Object(t.jsxs)("a",{href:r,target:"_blank",children:[Object(t.jsx)("img",{src:l,className:"projectCard__image github"}),c]})})]})})},A=function(){var e=Object(s.useState)(C),a=Object(m.a)(e,2),c=a[0],i=a[1],r=function(e){var a=C.filter((function(a){return a.category.includes(e)}));i(a)};return Object(t.jsxs)("div",{className:"container projects",children:[Object(t.jsxs)("div",{className:"projects__navbar",children:[Object(t.jsx)("div",{onClick:function(){return i(C)},children:"All"}),Object(t.jsx)("div",{onClick:function(){return r("React")},children:"React"}),Object(t.jsx)("div",{onClick:function(){return r("JavaScript")},children:"JavaScript"}),Object(t.jsx)("div",{onClick:function(){return r("JQuery")},children:"JQuery"})]}),Object(t.jsx)("div",{className:"row",children:c.map((function(e){return Object(t.jsx)(w,{project:e},e.name)}))})]})};c(29);var R=function(){return Object(t.jsx)(u.a,{children:Object(t.jsx)("div",{className:"app",children:Object(t.jsx)("div",{className:"container app__container center",children:Object(t.jsxs)("div",{className:"row app__row",children:[Object(t.jsx)("div",{className:"col-lg-4",children:Object(t.jsx)(j,{})}),Object(t.jsxs)("div",{className:"col-lg-8 app__main-content",children:[Object(t.jsx)(b,{}),Object(t.jsxs)(h.d,{children:[Object(t.jsx)(h.b,{exact:!0,path:"Portfolio/about",children:Object(t.jsx)(N,{})}),Object(t.jsx)(h.b,{path:"Portfolio/resume",children:Object(t.jsx)(y,{})}),Object(t.jsx)(h.b,{path:"Portfolio/projects",component:A}),Object(t.jsx)(h.b,{children:Object(t.jsx)(h.a,{to:"Portfolio/about"})})]})]})]})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(a){var c=a.getCLS,t=a.getFID,s=a.getFCP,i=a.getLCP,r=a.getTTFB;c(e),t(e),s(e),i(e),r(e)}))};n.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(R,{})}),document.getElementById("root")),P()}},[[30,1,2]]]);
//# sourceMappingURL=main.5dfad009.chunk.js.map