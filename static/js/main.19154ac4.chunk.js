(this["webpackJsonpvoice-assistant"]=this["webpackJsonpvoice-assistant"]||[]).push([[0],{44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a(9),r=a.n(i),o=(a(44),a(21)),l=a(28),d=a.n(l),s=a(73),A=a(65),j=a(66),h=a(67),b=a(68),u=a(69),m=a(70),O=a(63),p=Object(O.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),x=a(25),g=a.n(x),w=function(e){var t=e.article,a=t.description,i=t.publishedAt,r=t.source,l=t.title,d=t.url,O=t.urlToImage,x=e.i,w=e.activeArticle,f=p(),N=Object(c.useState)([]),S=Object(o.a)(N,2),C=S[0],H=S[1];return Object(c.useEffect)((function(){H((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(c.createRef)()}))}))}),[]),Object(c.useEffect)((function(){var e;x===w&&C[w]&&(e=C[w],window.scroll(0,e.current.offsetTop-50))}),[x,w,C]),Object(n.jsxs)(s.a,{ref:C[x],className:g()(f.card,w===x?f.activeCard:null),children:[Object(n.jsxs)(A.a,{href:d,target:"_blank",children:[Object(n.jsx)(j.a,{className:f.media,image:O||"https://www.google.com/imgres?imgurl=https%3A%2F%2Felements-video-cover-images-0.imgix.net%2Ffiles%2F286560324%2FPreview%2BImage%2BWorld%2BNews%2BPackage_00000.png%3Fauto%3Dcompress%252Cformat%26fit%3Dmin%26h%3D394%26w%3D700%26s%3Dce85092288cb4b6e3218aaf3ab42abac&imgrefurl=https%3A%2F%2Felements.envato.com%2Fworld-news-opener-MCDX8H3&tbnid=1p2SbpNcav68UM&vet=12ahUKEwjyw-yC57LuAhXzALcAHV5OCxwQMygHegUIARCyAQ..i&docid=-4lHwbJHwOTP6M&w=590&h=332&q=news%20thumbnail&ved=2ahUKEwjyw-yC57LuAhXzALcAHV5OCxwQMygHegUIARCyAQ"}),Object(n.jsxs)("div",{className:f.details,children:[Object(n.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(i).toDateString()}),Object(n.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:r.name})]}),Object(n.jsx)(h.a,{className:f.title,variant:"h5",gutterBottom:!0,children:l}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:[a," "]})})]}),Object(n.jsxs)(u.a,{className:f.cardActions,children:[Object(n.jsx)(m.a,{size:"small",color:"primary",children:"Learn More"}),Object(n.jsx)(h.a,{variant:"h5",color:"textSecondary",children:x+1})]})]})},f=a(72),N=a(71),S=Object(O.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",borderRadius:10,color:"white",height:"55vh",padding:"10%"},infoContainer:{display:"flex",alignItems:"center",flexDirection:"column"}}),C=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],H=function(e){var t=e.articles,a=e.activeArticle,c=S();return t.length?Object(n.jsx)(f.a,{in:!0,children:Object(n.jsx)(N.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(n.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(n.jsx)(w,{article:e,activeArticle:a,i:t})})}))})}):Object(n.jsx)(f.a,{in:!0,children:Object(n.jsx)(N.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3,children:C.map((function(e){return Object(n.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:c.infoCard,children:Object(n.jsxs)("div",{className:c.card,style:{backgroundColor:e.color},children:[Object(n.jsx)(h.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(n.jsxs)(h.a,{variant:"h6",component:"h6",children:[Object(n.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(n.jsx)("br",{}),e.info]}):null,Object(n.jsxs)(h.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(n.jsx)("br",{})," ",Object(n.jsx)("i",{children:e.text})]})]})})}))})})},v=a(17),k=Object(O.a)((function(e){return{footer:Object(v.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(v.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(v.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(v.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"20vmin"})}})),y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(-1),l=Object(o.a)(r,2),s=l[0],A=l[1],j=k();return Object(c.useEffect)((function(){d()({key:"cd2392a597628e54b05cc050541597ae2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;"newHeadlines"===t?(i(a),A(-1)):"highlight"===t?A((function(e){return e+1})):"open"===t&&window.open(a[n].url,"_blank")}})}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:j.logoContainer,children:Object(n.jsx)("img",{src:"data:image/jpeg;base64,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",className:j.alanLogo,alt:"alnogo"})}),Object(n.jsx)(H,{articles:a,activeArticle:s})]})};r.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.19154ac4.chunk.js.map