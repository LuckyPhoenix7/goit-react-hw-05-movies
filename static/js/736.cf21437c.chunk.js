"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,u,i,c,o=t(5861),s=t(9439),p=t(7757),f=t.n(p),d=t(2791),l=t(7689),h=t(6577),x=t(5510),g=t(3559),m=t(168),v=t(5867),Z=v.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n\n  padding: 0;\n  list-style: none;\n"]))),w=v.ZP.li(a||(a=(0,m.Z)(["\n  width: 200px;\n\n  text-align: center;\n  padding: 10px;\n\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n"]))),b=v.ZP.img(u||(u=(0,m.Z)(["\n  width: 100%;\n  height: auto;\n\n  border-radius: 10px;\n"]))),k=v.ZP.p(i||(i=(0,m.Z)(["\n  font-weight: bold;\n\n  margin-top: 5px;\n"]))),y=v.ZP.p(c||(c=(0,m.Z)(["\n  color: #666;\n\n  margin-top: 5px;\n"]))),_=t(5218),j=t(184);function P(){var n=(0,l.UO)().movieId,e=(0,d.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],u=(0,d.useState)(!1),i=(0,s.Z)(u,2),c=i[0],p=i[1],m=(0,d.useState)(!1),v=(0,s.Z)(m,2),P=v[0],S=v[1];return(0,d.useEffect)((function(){function e(){return e=(0,o.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,h.IQ)(n).then((function(n){a(n)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),S(!0),_.ZP.error("\u0423\u043f\u0441! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!");case 10:return e.prev=10,p(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,6,10,13]])}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,j.jsxs)(j.Fragment,{children:[c&&(0,j.jsx)(x.a,{}),P&&(0,j.jsx)(g.B,{}),(0,j.jsx)(Z,{children:r.map((function(n){var e=n.id,t=n.profile_path,r=n.original_name,a=n.name,u=n.character;return(0,j.jsxs)(w,{children:[(0,j.jsx)(b,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,j.jsx)(k,{children:a}),(0,j.jsxs)(y,{children:["Character: ",u]})]},e)}))})]})}},3559:function(n,e,t){t.d(e,{B:function(){return f}});t(2791);var r,a,u=t(168),i=t(5867),c=t(1087),o=i.ZP.p(r||(r=(0,u.Z)(["\n  color: #ff0000;\n\n  text-align: center;\n  margin: 20px 0;\n"]))),s=(0,i.ZP)(c.rU)(a||(a=(0,u.Z)(["\n  color: #007bff;\n\n  text-decoration: none;\n  font-weight: bold;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),p=t(184),f=function(){return(0,p.jsxs)(o,{children:["\u0423\u043f\u0441! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435"," ",(0,p.jsx)(s,{to:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})]})}},6577:function(n,e,t){t.d(e,{IQ:function(){return f},Jh:function(){return d},ik:function(){return o},on:function(){return s},s_:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),i=t(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="e83fa151a85aa806fd7d4370653073b9",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,query:e,include_adult:!1,language:"en-US"},n.next=3,i.Z.get("search/movie",{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,i.Z.get("movie/".concat(e),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,i.Z.get("movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.cf21437c.chunk.js.map