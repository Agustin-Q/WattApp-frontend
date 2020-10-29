(function(e){function s(s){for(var r,n,i=s[0],l=s[1],c=s[2],d=0,g=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&g.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(s);while(g.length)g.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(a.splice(s--,1),e=n(n.s=t[0]))}return e}var r={},o={app:0},a=[];function n(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)n.d(t,r,function(s){return e[s]}.bind(null,r));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=s,i=i.slice();for(var c=0;c<i.length;c++)s(i[c]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=(t("1d0f"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[e._v(" ⚡WattApp⚡ ")])],1),t("router-view",{staticClass:"container pt-5"})],1)}),a=[],n=(t("034f"),t("2877")),i={},l=Object(n["a"])(i,o,a,!1,null,null,null),c=l.exports,u=t("8c4f"),d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[t("div",{staticClass:"jumbotron"},[t("h1",{staticClass:"display-3"},[e._v("⚡ WattApp ⚡")]),t("p",{staticClass:"lead"},[e._v(" This is a simple sensor logging app! 📈🎉 ")]),t("hr",{staticClass:"my-4"}),t("p",[e._v("Created to learn web development! 🤓")]),t("p",{staticClass:"lead"},[e.isUserLoggedIn()?e._e():t("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"signup"},role:"button"}},[e._v("Sign Up")]),e.isUserLoggedIn()?t("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"Dashboard"},role:"button"}},[e._v("Dashboard")]):e._e()],1)])])},g=[],p={name:"Home",methods:{isUserLoggedIn:function(){return!!localStorage.token&&(console.log("User logged in."),!0)}}},m=p,h=Object(n["a"])(m,d,g,!1,null,null,null),f=h.exports,v=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Sign Up")]),e.successMessage?t("div",{staticClass:"alert alert-dismissible alert-success"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?t("div",{staticClass:"alert alert-dismissible alert-danger"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),t("form",{on:{submit:function(s){return s.preventDefault(),e.signup(s)}}},[t("fieldset",[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" User Name must be at least 2 characters long. ")])]),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Password must be at least 8 characters long. ")])]),t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(s){s.target.composing||e.$set(e.user,"confirmPassword",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"confirmPasswordHelp"}},[e._v(" Please confirm password. ")])])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit "),e.loading?t("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?t("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},b=[],y=(t("caad"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("2532"),t("498a"),t("d370")),w=t.n(y),_="http://192.168.0.249:3000/api/auth/create_user",C=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),confirmPassword:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),S={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:"",confirmPassword:""}}},methods:{signup:function(){var e=this;if(console.log("submited!"),console.log(this.user),this.loading=!0,this.validUser()){console.log("user validated");var s={UserName:this.user.username,Secret:this.user.password};fetch(_,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}).then((function(s){return console.log(s),s.ok?(e.successMessage="User created succesfully! 😄",e.loading=!1,s.json()):s.json().then((function(s){throw console.log("aca solo llego cuando hay un error del request?"),console.log(s),e.loading=!1,new Error(s.message)}))})).then((function(s){console.log("aca se llega cuando esta ok, y parseamos el body"),console.log(s),localStorage.token=s.token,setTimeout((function(){e.$router.push("/dashboard")}),2e3)})).catch((function(s){console.log("aca solo llego cuando no puedo llegar al servidor?"),console.log(s),e.errorMessage="Ups! Something went wrong 😟. ".concat(s.message),e.loading=!1}))}},validUser:function(){if(this.errorMessage="",this.user.password!==this.user.confirmPassword)return this.errorMessage="Passwords must match! 🔐",this.loading=!1,!1;var e=C.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Password must be at least 8 characters long. 🔐",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Username must be at least 2 characters long and no special characters. ✌",this.loading=!1),!1)},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},M=S,x=Object(n["a"])(M,v,b,!1,null,null,null),k=x.exports,P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Login 😎")]),e.successMessage?t("div",{staticClass:"alert alert-dismissible alert-success"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?t("div",{staticClass:"alert alert-dismissible alert-danger"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),t("form",{on:{submit:function(s){return s.preventDefault(),e.login(s)}}},[t("fieldset",[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" Enter your user name! ")])]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Enter your password! ")])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Log In "),e.loading?t("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?t("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},E=[],j="http://192.168.0.249:3000/api/auth/login",K=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),O={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:""}}},methods:{login:function(){var e=this;if(this.closeMessages(),console.log("Login! ",this.user.username,", pass: ",this.user.password),this.validUser()){console.log("valid user!");var s={UserName:this.user.username,Secret:this.user.password};this.loading=!0,fetch(j,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}).then((function(s){return console.log("Respopnse!!!!"),console.log(s),s.ok?s.json().then((function(s){e.successMessage="Login successful. 🤩",console.log("response ok!!!!!"),e.loading=!1,console.log(s),localStorage.token=s.token,e.$router.push("/dashboard")})):s.json().then((function(s){throw console.log("response not ok!!!!"),console.log(s),e.loading=!1,new Error(s.message)}))})).catch((function(s){console.log("error!!!!!!"),e.loading=!1,e.errorMessage="Ups! something went wrong 😞. ".concat(s),console.log(s)}))}},validUser:function(){this.errorMessage="";var e=K.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Invalid password 🙈",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Invalid username 😭",this.loading=!1),!1)},closeMessages:function(){this.closeErrorMessage(),this.closeSuccessMessage()},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},U=O,$=Object(n["a"])(U,P,E,!1,null,null,null),N=$.exports,H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("📊 Dashboard 📈")]),e.user.UserName?t("h2",[e._v("🎉Welcome "+e._s(e.user.UserName)+"!!🎉")]):e._e(),t("h2",[e._v(" Sensor Key 🔑:")]),e.sensorKey?t("h2",{attrs:{id:"SensorKeyH"}},[e._v(" "+e._s(e.sensorKey)+" ")]):e._e(),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.copySensorKey()}}},[e._v("📋Copy to Clipboard📋 ")])]),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.generateSensorKey()}}},[e._v("⚠💀Generatre New Sensor Key💀⚠ ")])]),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.logout()}}},[e._v("Log Out ")])])])},T=[],q="http://192.168.0.249:3000/api/auth/login",L="http://192.168.0.249:3000/api/auth/sensorKey",A={data:function(){return{user:{},sensorKey:""}},mounted:function(){var e=this;fetch(q,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){s.UserName?(console.log("Response has username, the client has sent valid token"),console.log(s),e.user=s):(console.log("Response does not have username, client sent invalid token"),console.log("Clear token from localStorage and redirect to login"),e.logout())})),this.getSensorKey(),this.generateSensorKey()},methods:{logout:function(){console.log("clearToken"),localStorage.removeItem("token"),this.$router.push("/login")},getSensorKey:function(){var e=this;fetch(L,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log("get senosr key"),console.log(s),e.sensorKey=s.SensorKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))},generateSensorKey:function(){var e=this;fetch(L,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log("generate senosr key"),console.log(s),e.sensorKey=s.SensorKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))},copySensorKey:function(){console.log("Copy Sensor Key");var e=document.getElementById("SensorKeyH");console.log(e);var s=document.createElement("textarea");document.body.appendChild(s),s.value=e.innerText,s.select(),document.execCommand("copy"),document.body.removeChild(s)}}},I=A,z=Object(n["a"])(I,H,T,!1,null,null,null),D=z.exports;function R(e,s,t){localStorage.token?t("/dashboard"):t()}function B(e,s,t){localStorage.token?t():t("/login")}r["a"].use(u["a"]);var J=[{path:"/",name:"Home",component:f},{path:"/signup",name:"signup",component:k,beforeEnter:R},{path:"/login",name:"login",component:N,beforeEnter:R},{path:"/dashboard",name:"Dashboard",component:D,beforeEnter:B}],G=new u["a"]({routes:J}),W=G;r["a"].config.productionTip=!1,new r["a"]({router:W,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,s,t){}});
//# sourceMappingURL=app.2c4b6082.js.map