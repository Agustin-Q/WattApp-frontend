(function(e){function s(s){for(var o,a,i=s[0],c=s[1],l=s[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],o=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(o=!1)}o&&(n.splice(s--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},n=[];function a(s){if(o[s])return o[s].exports;var t=o[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,s,t){a.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,s){if(1&s&&(e=a(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)a.d(t,o,function(s){return e[s]}.bind(null,o));return t},a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,"a",s),s},a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var u=c;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=(t("1d0f"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[e._v(" ⚡WattApp⚡ ")])],1),t("router-view",{staticClass:"container pt-5"})],1)}),n=[],a=(t("034f"),t("2877")),i={},c=Object(a["a"])(i,r,n,!1,null,null,null),l=c.exports,u=t("8c4f"),d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[t("div",{staticClass:"jumbotron"},[t("h1",{staticClass:"display-3"},[e._v("⚡ WattApp ⚡")]),t("p",{staticClass:"lead"},[e._v(" This is a simple sensor logging app! 📈🎉 ")]),t("hr",{staticClass:"my-4"}),t("p",[e._v("Created to learn web development! 🤓")]),t("p",{staticClass:"lead"},[e.isUserLoggedIn()?e._e():t("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"signup"},role:"button"}},[e._v("Sign Up")]),e.isUserLoggedIn()?t("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"Dashboard"},role:"button"}},[e._v("Dashboard")]):e._e()],1)])])},p=[],m={name:"Home",methods:{isUserLoggedIn:function(){return!!localStorage.token&&(console.log("User logged in."),!0)}}},g=m,h=Object(a["a"])(g,d,p,!1,null,null,null),v=h.exports,f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Sign Up")]),e.successMessage?t("div",{staticClass:"alert alert-dismissible alert-success"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?t("div",{staticClass:"alert alert-dismissible alert-danger"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),t("form",{on:{submit:function(s){return s.preventDefault(),e.signup(s)}}},[t("fieldset",[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" User Name must be at least 2 characters long. ")])]),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Password must be at least 8 characters long. ")])]),t("div",{staticClass:"form-group col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(s){s.target.composing||e.$set(e.user,"confirmPassword",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"confirmPasswordHelp"}},[e._v(" Please confirm password. ")])])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit "),e.loading?t("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?t("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},b=[],y=(t("caad"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("2532"),t("498a"),t("d370")),w=t.n(y),_="".concat("https://wattapp-backend.herokuapp.com","/api/auth/create_user"),C=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),confirmPassword:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),k={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:"",confirmPassword:""}}},methods:{signup:function(){var e=this;if(console.log("submited!"),console.log(this.user),this.loading=!0,this.validUser()){console.log("user validated");var s={UserName:this.user.username,Password:this.user.password};fetch(_,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}).then((function(s){return console.log(s),s.ok?(e.successMessage="User created succesfully! 😄",e.loading=!1,s.json()):s.json().then((function(s){throw console.log("aca solo llego cuando hay un error del request?"),console.log(s),e.loading=!1,new Error(s.message)}))})).then((function(s){console.log("aca se llega cuando esta ok, y parseamos el body"),console.log(s),localStorage.token=s.token,setTimeout((function(){e.$router.push("/dashboard")}),2e3)})).catch((function(s){console.log("aca solo llego cuando no puedo llegar al servidor?"),console.log(s),e.errorMessage="Ups! Something went wrong 😟. ".concat(s.message),e.loading=!1}))}},validUser:function(){if(this.errorMessage="",this.user.password!==this.user.confirmPassword)return this.errorMessage="Passwords must match! 🔐",this.loading=!1,!1;var e=C.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Password must be at least 8 characters long. 🔐",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Username must be at least 2 characters long and no special characters. ✌",this.loading=!1),!1)},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},S=k,x=Object(a["a"])(S,f,b,!1,null,null,null),M=x.exports,E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Login 😎")]),e.successMessage?t("div",{staticClass:"alert alert-dismissible alert-success"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?t("div",{staticClass:"alert alert-dismissible alert-danger"},[t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),t("form",{on:{submit:function(s){return s.preventDefault(),e.login(s)}}},[t("fieldset",[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(s){s.target.composing||e.$set(e.user,"username",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" Enter your user name! ")])]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Enter your password! ")])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Log In "),e.loading?t("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?t("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},P=[],j="".concat("https://wattapp-backend.herokuapp.com","/api/auth/login"),K=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),O={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:""}}},methods:{login:function(){var e=this;if(this.closeMessages(),console.log("Login! ",this.user.username,", pass: ",this.user.password),console.log("Login URL: ",j),console.log("backend url env: ","https://wattapp-backend.herokuapp.com"),this.validUser()){console.log("valid user!");var s={UserName:this.user.username,Password:this.user.password};this.loading=!0,fetch(j,{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}).then((function(s){return console.log("Respopnse!!!!"),console.log(s),s.ok?s.json().then((function(s){e.successMessage="Login successful. 🤩",console.log("response ok!!!!!"),e.loading=!1,console.log(s),localStorage.token=s.token,e.$router.push("/dashboard")})):s.json().then((function(s){throw console.log("response not ok!!!!"),console.log(s),e.loading=!1,new Error(s.message)}))})).catch((function(s){console.log("error!!!!!!"),e.loading=!1,e.errorMessage="Ups! something went wrong 😞. ".concat(s),console.log(s)}))}},validUser:function(){this.errorMessage="";var e=K.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Invalid password 🙈",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Invalid username 😭",this.loading=!1),!1)},closeMessages:function(){this.closeErrorMessage(),this.closeSuccessMessage()},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},U=O,N=Object(a["a"])(U,E,P,!1,null,null,null),D=N.exports,$=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("📊 Dashboard 📈")]),e.user.UserName?t("h2",[e._v("🎉Welcome "+e._s(e.user.UserName)+"!!🎉")]):e._e(),t("h2",[e._v(" Sensor Key 🔑:")]),e.sensorKey?t("h2",{attrs:{id:"SensorKeyH"}},[e._v(" "+e._s(e.sensorKey)+" ")]):e._e(),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.copySensorKey()}}},[e._v("📋Copy to Clipboard📋 ")])]),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.generateSensorKey()}}},[e._v("⚠💀Generatre New Sensor Key💀⚠ ")])]),t("div",{staticStyle:{margin:"10px"}},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return e.logout()}}},[e._v("Log Out ")])])])},T=[],L="".concat("https://wattapp-backend.herokuapp.com","/api/auth/login"),H="".concat("https://wattapp-backend.herokuapp.com","/api/auth/sensorKey"),q={data:function(){return{user:{},sensorKey:""}},mounted:function(){var e=this;fetch(L,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){s.UserName?(console.log("Response has username, the client has sent valid token"),console.log(s),e.user=s):(console.log("Response does not have username, client sent invalid token"),console.log("Clear token from localStorage and redirect to login"),e.logout())})),this.getSensorKey()},methods:{logout:function(){console.log("clearToken"),localStorage.removeItem("token"),this.$router.push("/login")},getSensorKey:function(){var e=this;fetch(H,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log("get senosr key"),console.log(s),e.sensorKey=s.SensorKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))},generateSensorKey:function(){var e=this;fetch(H,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log("generate senosr key"),console.log(s),e.sensorKey=s.SensorKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))},copySensorKey:function(){console.log("Copy Sensor Key");var e=document.getElementById("SensorKeyH");console.log(e);var s=document.createElement("textarea");document.body.appendChild(s),s.value=e.innerText,s.select(),document.execCommand("copy"),document.body.removeChild(s)}}},A=q,z=Object(a["a"])(A,$,T,!1,null,null,null),I=z.exports,R=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("📡 Devices 📡")]),t("div",{staticStyle:{"text-align":"center"}},e._l(e.devices,(function(e){return t("test-component",{key:e,attrs:{device:e}})})),1)])},B=[],G=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem"}},[t("div",{staticClass:"card-header"},[e._v("Device")]),t("div",{staticClass:"card-body"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.device.DeviceName))]),t("p",{staticClass:"card-text"},[e._v("Description: "+e._s(e.device.DeviceDescription))]),t("p",{staticClass:"card-text"},[e._v("Device Key: "+e._s(e.device.DeviceKey))]),t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return e.generateDeviceKey()}}},[e._v("💀Generate Key💀")]),t("hr"),e._l(e.device.Sensors,(function(s){return t("p",{key:s.Name,staticClass:"card-text"},[e._v("Sensor Name: "+e._s(s.SensorName))])}))],2)])])},J=[],W="".concat("https://wattapp-backend.herokuapp.com","/api/manage/DeviceKey"),Z={name:"test-component",props:{device:Object},methods:{generateDeviceKey:function(){var e=this;fetch(W,{method:"POST",body:JSON.stringify({DeviceName:this.device.DeviceName}),headers:{"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log("generate device key"),console.log(s),e.device.DeviceKey=s.DeviceKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))}}},F=Z,Q=Object(a["a"])(F,G,J,!1,null,null,null),V=Q.exports,X="".concat("https://wattapp-backend.herokuapp.com","/api/manage/devices"),Y={data:function(){return{devices:[]}},mounted:function(){var e=this;console.log("Backend URL: ","https://wattapp-backend.herokuapp.com"),fetch(X,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(s){console.log(s),e.devices=s})).catch((function(e){console.log("Erorr!!!!!!"),console.log(e)}))},methods:{},components:{"test-component":V}},ee=Y,se=Object(a["a"])(ee,R,B,!1,null,null,null),te=se.exports;function oe(e,s,t){localStorage.token?t("/dashboard"):t()}function re(e,s,t){localStorage.token?t():t("/login")}o["a"].use(u["a"]);var ne=[{path:"/",name:"Home",component:v},{path:"/signup",name:"signup",component:M,beforeEnter:oe},{path:"/login",name:"login",component:D,beforeEnter:oe},{path:"/dashboard",name:"Dashboard",component:I,beforeEnter:re},{path:"/devices",name:"Devices",component:te,beforeEnter:re}],ae=new u["a"]({routes:ne}),ie=ae;o["a"].config.productionTip=!1,new o["a"]({router:ie,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,s,t){}});
//# sourceMappingURL=app.d1e019e5.js.map