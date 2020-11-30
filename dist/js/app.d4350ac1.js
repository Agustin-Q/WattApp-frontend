(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var o={},n={app:0},r=[];function a(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=o,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},"0872":function(e,t,s){},"09e0":function(e,t,s){},"0c29":function(e,t,s){},"1a8c":function(e,t,s){"use strict";var o=s("d6d5"),n=s.n(o);n.a},"216a":function(e,t,s){},"2b56":function(e,t,s){"use strict";var o=s("09e0"),n=s.n(o);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=(s("1d0f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[e._v(" ⚡WattApp⚡ ")])],1),s("router-view",{staticClass:"container pt-5"})],1)}),r=[],a=(s("034f"),s("2877")),i={},c=Object(a["a"])(i,n,r,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"display-3"},[e._v("⚡ WattApp ⚡")]),s("p",{staticClass:"lead"},[e._v(" This is a simple sensor logging app! 📈🎉 ")]),s("hr",{staticClass:"my-4"}),s("p",[e._v("Created to learn web development! 🤓")]),s("p",{staticClass:"lead"},[e.isUserLoggedIn()?e._e():s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"signup"},role:"button"}},[e._v("Sign Up")]),e.isUserLoggedIn()?s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:{name:"Dashboard"},role:"button"}},[e._v("Dashboard")]):e._e()],1)])])},p=[],m={name:"Home",methods:{isUserLoggedIn:function(){return!!localStorage.token&&(console.log("User logged in."),!0)}}},g=m,v=Object(a["a"])(g,d,p,!1,null,null,null),h=v.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Sign Up")]),e.successMessage?s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?s("div",{staticClass:"alert alert-dismissible alert-danger"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),s("form",{on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[s("fieldset",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" User Name must be at least 2 characters long. ")])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Password must be at least 8 characters long. ")])]),s("div",{staticClass:"form-group col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",id:"confirmPassword",placeholder:"Confirm Password",required:""},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"confirmPasswordHelp"}},[e._v(" Please confirm password. ")])])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit "),e.loading?s("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?s("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},b=[],y=(s("caad"),s("d3b7"),s("4d63"),s("ac1f"),s("25f0"),s("2532"),s("498a"),s("d370")),w=s.n(y),_="".concat("https://wattapp-backend.herokuapp.com","/api/auth/create_user"),C=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),confirmPassword:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),S={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:"",confirmPassword:""}}},methods:{signup:function(){var e=this;if(console.log("submited!"),console.log(this.user),this.loading=!0,this.validUser()){console.log("user validated");var t={UserName:this.user.username,Password:this.user.password};fetch(_,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(t){return console.log(t),t.ok?(e.successMessage="User created succesfully! 😄",e.loading=!1,t.json()):t.json().then((function(t){throw console.log("aca solo llego cuando hay un error del request?"),console.log(t),e.loading=!1,new Error(t.message)}))})).then((function(t){console.log("aca se llega cuando esta ok, y parseamos el body"),console.log(t),localStorage.token=t.token,setTimeout((function(){e.$router.push("/dashboard")}),2e3)})).catch((function(t){console.log("aca solo llego cuando no puedo llegar al servidor?"),console.log(t),e.errorMessage="Ups! Something went wrong 😟. ".concat(t.message),e.loading=!1}))}},validUser:function(){if(this.errorMessage="",this.user.password!==this.user.confirmPassword)return this.errorMessage="Passwords must match! 🔐",this.loading=!1,!1;var e=C.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Password must be at least 8 characters long. 🔐",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Username must be at least 2 characters long and no special characters. ✌",this.loading=!1),!1)},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},k=S,x=Object(a["a"])(k,f,b,!1,null,null,null),N=x.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Login 😎")]),e.successMessage?s("div",{staticClass:"alert alert-dismissible alert-success"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeSuccessMessage}},[e._v("×")]),e._v(" "+e._s(e.successMessage)+" ")]):e._e(),e.errorMessage?s("div",{staticClass:"alert alert-dismissible alert-danger"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:e.closeErrorMessage}},[e._v("×")]),e._v(" "+e._s(e.errorMessage)+" ")]):e._e(),s("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("fieldset",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernamelHelp",placeholder:"Enter User Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" Enter your user name! ")])]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelp"}},[e._v(" Enter your password! ")])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Log In "),e.loading?s("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loading?s("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e()])])])])},M=[],j="".concat("https://wattapp-backend.herokuapp.com","/api/auth/login"),P=w.a.object({username:w.a.string().alphanum().min(3).max(30).required(),password:w.a.string().trim().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required()}),E={data:function(){return{errorMessage:"",successMessage:"",loading:!1,user:{username:"",password:""}}},methods:{login:function(){var e=this;if(this.closeMessages(),console.log("Login! ",this.user.username,", pass: ",this.user.password),console.log("Login URL: ",j),console.log("backend url env: ","https://wattapp-backend.herokuapp.com"),this.validUser()){console.log("valid user!");var t={UserName:this.user.username,Password:this.user.password};this.loading=!0,fetch(j,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(t){return console.log("Respopnse!!!!"),console.log(t),t.ok?t.json().then((function(t){e.successMessage="Login successful. 🤩",console.log("response ok!!!!!"),e.loading=!1,console.log(t),localStorage.token=t.token,e.$router.push("/dashboard")})):t.json().then((function(t){throw console.log("response not ok!!!!"),console.log(t),e.loading=!1,new Error(t.message)}))})).catch((function(t){console.log("error!!!!!!"),e.loading=!1,e.errorMessage="Ups! something went wrong 😞. ".concat(t),console.log(t)}))}},validUser:function(){this.errorMessage="";var e=P.validate(this.user);return!e.error||(console.log(e),e.error.message.includes("password")?(this.errorMessage="Invalid password 🙈",this.loading=!1):e.error.message.includes("username")&&(this.errorMessage="Invalid username 😭",this.loading=!1),!1)},closeMessages:function(){this.closeErrorMessage(),this.closeSuccessMessage()},closeErrorMessage:function(){this.errorMessage=""},closeSuccessMessage:function(){this.successMessage=""}}},O=E,U=Object(a["a"])(O,D,M,!1,null,null,null),$=U.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("📊 Dashboard 📈")]),e.user.UserName?s("h2",[e._v("🎉Welcome "+e._s(e.user.UserName)+"!!🎉")]):e._e(),s("div",{staticStyle:{margin:"10px"}},[s("div",[s("router-link",{staticClass:"btn btn-primary button-wrapper",attrs:{to:{name:"Devices"},role:"button"}},[e._v("Manage Devices ")])],1),s("div",[s("button",{staticClass:"btn btn-primary button-wrapper",attrs:{type:"submit"},on:{click:function(t){return e.logout()}}},[e._v("Log Out ")])])])])},K=[],A="".concat(Object({NODE_ENV:"production",VUE_APP_BACKEND_URL:"https://wattapp-backend.herokuapp.com",BASE_URL:"/"}).BACKEND_URL,"/api/auth/login"),q={data:function(){return{user:{},sensorKey:""}},mounted:function(){var e=this;fetch(A,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(t){t.UserName?(console.log("Response has username, the client has sent valid token"),console.log(t),e.user=t):(console.log("Response does not have username, client sent invalid token"),console.log("Clear token from localStorage and redirect to login"),e.logout())}))},methods:{logout:function(){console.log("clearToken"),localStorage.removeItem("token"),this.$router.push("/login")}}},L=q,R=(s("2b56"),Object(a["a"])(L,T,K,!1,null,null,null)),H=R.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("📡 Devices 📡")]),s("div",{},[e._l(e.devices,(function(e){return s("device",{key:e.DeviceKey,attrs:{device:e}})})),s("new-device",{on:{newDevice:e.onNewDevice}})],2)])},B=[],I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem",margin:"auto"}},[s("div",{staticClass:"card-header"},[e._v("Device")]),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.device.DeviceName))]),s("p",{staticClass:"card-text"},[e._v(e._s(e.device.DeviceDescription))]),s("p",{staticClass:"card-text"},[e._v("Device Key: "),s("input",{domProps:{value:e.device.DeviceKey}})]),s("button",{staticClass:"btn btn-danger",staticStyle:{margin:"10px"},attrs:{type:"button"},on:{click:function(t){return e.generateDeviceKey()}}},[e._v("💀Generate Key💀")]),s("button",{staticClass:"btn btn-secondary",staticStyle:{margin:"10px"},attrs:{type:"submit"},on:{click:function(t){return e.copySensorKey()}}},[e._v("📋Copy to Clipboard📋 ")]),s("hr"),e._l(e.device.Sensors,(function(e){return s("sensor",{key:e.Name,attrs:{sensor:e}})})),s("new-sensor",{attrs:{deviceName:e.device.DeviceName},on:{newSensor:e.onNewSensor}})],2)])},J=[],G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sensor"},[s("p",{staticClass:"card-text",staticStyle:{"text-align":"center",margin:"0rem"}},[e._v(e._s(e.sensor.SensorName))]),s("hr",{staticStyle:{margin:"0.25rem"}}),s("div",{staticClass:"sensor-info-card"},[s("div",{staticClass:"sensor-info-pane"},[s("p",{staticClass:"card-text",staticStyle:{margin:"0"}},[e._v("Type: "+e._s(e.sensor.SensorType))]),s("p",{staticClass:"card-text",staticStyle:{margin:"0"}},[e._v("Unit: "+e._s(e.sensor.SensorUnit))])]),s("div",{staticClass:"sensor-info-pane"},[s("button",{staticClass:"btn btn-secondary",staticStyle:{margin:"auto","background-color":"#ffffff77","border-radius":"0.25rem",width:"fit-content",padding:"0 0.25rem 0 0.25rem"},on:{click:function(t){return e.hacerAlgo()}}},[e._v("View Data"),s("br"),e._v("📈 ")])])])])},V=[],W={name:"sensor",props:{sensor:Object},methods:{hacerAlgo:function(){console.log(this.sensor.SensorName)}}},Z=W,F=(s("5ab0"),Object(a["a"])(Z,G,V,!1,null,null,null)),Q=F.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.addingNewDevice?e._e():s("button",{staticClass:"plus-button",staticStyle:{"font-size":"12px"},on:{click:function(t){e.addingNewDevice=!0}}}),e.addingNewDevice?s("div",[e.errorMsg?s("div",{staticClass:"alert alert-dismissible alert-danger",staticStyle:{margin:"0.5rem"}},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(t){e.errorMsg=""}}},[e._v("×")]),s("strong",[e._v("Oh snap!")]),e._v(" Something went wrong 😢. "+e._s(e.errorMsg)+" ")]):e._e(),s("div",{staticClass:"sensor"},[s("p",{staticClass:"card-text",staticStyle:{"text-align":"center",margin:"0rem"}},[e._v("Create New Sensor")]),s("hr",{staticStyle:{margin:"0.25rem"}}),s("div",{staticClass:"sensor-info-card"},[s("div",[s("form",{on:{submit:function(t){return t.preventDefault(),e.createSensor(t)}}},[s("fieldset",[s("p",{staticClass:"card-text",staticStyle:{margin:"0"}},[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sensor.name,expression:"sensor.name"}],staticClass:"form-control",attrs:{type:"text",id:"sensorName",required:""},domProps:{value:e.sensor.name},on:{input:function(t){t.target.composing||e.$set(e.sensor,"name",t.target.value)}}}),s("p",{staticClass:"card-text",staticStyle:{margin:"0"}},[e._v("Type:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sensor.type,expression:"sensor.type"}],staticClass:"form-control",attrs:{type:"text",id:"sensorType",required:""},domProps:{value:e.sensor.type},on:{input:function(t){t.target.composing||e.$set(e.sensor,"type",t.target.value)}}}),s("p",{staticClass:"card-text",staticStyle:{margin:"0"}},[e._v("Unit:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sensor.unit,expression:"sensor.unit"}],staticClass:"form-control",attrs:{type:"text",id:"sensorUnit",required:""},domProps:{value:e.sensor.unit},on:{input:function(t){t.target.composing||e.$set(e.sensor,"unit",t.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Sensor ")])])])])])])]):e._e()])},Y=[],ee=(s("b0c0"),"".concat("https://wattapp-backend.herokuapp.com","/api/manage/sensors")),te={name:"new-sensor",props:{deviceName:String},data:function(){return{sensor:{name:"",type:"",unit:""},addingNewDevice:!1,errorMsg:""}},methods:{createSensor:function(){var e=this;console.log("create sensor!"),console.log(this.deviceName),console.log(this.sensor);var t={DeviceName:this.deviceName,SensorName:this.sensor.name,SensorType:this.sensor.type,SensorUnit:this.sensor.unit};fetch(ee,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token),"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("el response"),e.ok?(console.log("Response ok, continue to parse json"),e.json()):e.json().then((function(e){throw console.log("Response not ok"),console.log(e),new Error(e.message)}))})).then((function(t){console.log("llegue al result"),console.log(t);var s={SensorName:e.sensor.name,SensorType:e.sensor.type,SensorUnit:e.sensor.unit};e.$emit("newSensor",s),e.reset()})).catch((function(t){console.log("error!!!!"),console.log(t),e.errorMsg=t.message}))},reset:function(){this.addingNewDevice=!1,this.sensor.name="",this.sensor.type="",this.sensor.unit=""}}},se=te,oe=(s("1a8c"),Object(a["a"])(se,X,Y,!1,null,null,null)),ne=oe.exports,re="".concat("https://wattapp-backend.herokuapp.com","/api/manage/DeviceKey"),ae={name:"device",props:{device:Object},methods:{generateDeviceKey:function(){var e=this;fetch(re,{method:"POST",body:JSON.stringify({DeviceName:this.device.DeviceName}),headers:{"content-type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.ok?(console.log("New device response ok, continue to parse json."),e.json()):e.json().then((function(e){throw console.log("Response error!"),new Error(e.message)}))})).then((function(t){console.log("generate device key"),console.log(t),e.device.DeviceKey=t.DeviceKey})).catch((function(e){console.log("Error fetching Sensor Key!"),console.log(e)}))},copySensorKey:function(){console.log("Copy Sensor Key"),console.log(this.device.DeviceKey);var e=document.createElement("textarea");document.body.appendChild(e),e.value=this.device.DeviceKey,e.select(),document.execCommand("copy"),document.body.removeChild(e)},onNewSensor:function(e){this.device.Sensors.push(e)}},components:{sensor:Q,"new-sensor":ne}},ie=ae,ce=(s("e489"),Object(a["a"])(ie,I,J,!1,null,null,null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.addingNewDevice?e._e():s("button",{staticClass:"plus-button",on:{click:function(t){e.addingNewDevice=!0}}}),e.addingNewDevice?s("div",{staticClass:"card text-white bg-secondary mb-3",staticStyle:{"max-width":"20rem",margin:"auto"}},[e.errorMsg?s("div",{staticClass:"alert alert-dismissible alert-danger",staticStyle:{margin:"0.5rem"}},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"},on:{click:function(t){e.errorMsg=""}}},[e._v("×")]),s("strong",[e._v("Oh snap!")]),e._v(" Something went wrong 😢. "+e._s(e.errorMsg)+" ")]):e._e(),s("div",{staticClass:"card-header"},[e._v("Create New Device")]),s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.createDevice(t)}}},[s("fieldset",[s("h4",{staticClass:"card-title"},[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.device.name,expression:"device.name"}],staticClass:"form-control",attrs:{type:"text",id:"deviceName",required:""},domProps:{value:e.device.name},on:{input:function(t){t.target.composing||e.$set(e.device,"name",t.target.value)}}}),s("p",{staticClass:"card-text"},[e._v("Descripcion:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.device.description,expression:"device.description"}],staticClass:"form-control",attrs:{type:"text",id:"deviceDescription",required:""},domProps:{value:e.device.description},on:{input:function(t){t.target.composing||e.$set(e.device,"description",t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create Device ")])])])])]):e._e()])},de=[],pe=(s("a4d3"),s("e01a"),"".concat("https://wattapp-backend.herokuapp.com","/api/manage/devices")),me={name:"new-device",data:function(){return{device:{name:"",description:""},addingNewDevice:!1,errorMsg:""}},methods:{createDevice:function(){var e=this;console.log("create device!"),console.log(this.device.name),console.log(this.device.description);var t={DeviceName:this.device.name,DeviceDescription:this.device.description};fetch(pe,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.token),"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("el response"),e.ok?(console.log("Response ok, continue to parse json"),e.json()):e.json().then((function(e){throw console.log("Response not ok"),console.log(e),new Error(e.message)}))})).then((function(t){console.log("llegue al result"),console.log(t),e.$emit("newDevice",t),e.reset()})).catch((function(t){console.log("error!!!!"),console.log(t),e.errorMsg=t.message}))},reset:function(){this.addingNewDevice=!1,this.device.name="",this.device.description=""}}},ge=me,ve=(s("cfd5"),Object(a["a"])(ge,ue,de,!1,null,null,null)),he=ve.exports,fe="".concat("https://wattapp-backend.herokuapp.com","/api/manage/devices"),be={data:function(){return{devices:[]}},mounted:function(){var e=this;console.log("Backend URL: ","https://wattapp-backend.herokuapp.com"),fetch(fe,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.devices=t})).catch((function(e){console.log("Erorr!!!!!!"),console.log(e)}))},methods:{onNewDevice:function(e){this.devices.push(e)}},components:{device:le,"new-device":he}},ye=be,we=Object(a["a"])(ye,z,B,!1,null,null,null),_e=we.exports;function Ce(e,t,s){localStorage.token?s("/dashboard"):s()}function Se(e,t,s){localStorage.token?s():s("/login")}o["a"].use(u["a"]);var ke=[{path:"/",name:"Home",component:h},{path:"/signup",name:"signup",component:N,beforeEnter:Ce},{path:"/login",name:"login",component:$,beforeEnter:Ce},{path:"/dashboard",name:"Dashboard",component:H,beforeEnter:Se},{path:"/devices",name:"Devices",component:_e,beforeEnter:Se}],xe=new u["a"]({routes:ke}),Ne=xe;o["a"].config.productionTip=!1,new o["a"]({router:Ne,render:function(e){return e(l)}}).$mount("#app")},"5ab0":function(e,t,s){"use strict";var o=s("216a"),n=s.n(o);n.a},"85ec":function(e,t,s){},cfd5:function(e,t,s){"use strict";var o=s("0872"),n=s.n(o);n.a},d6d5:function(e,t,s){},e489:function(e,t,s){"use strict";var o=s("0c29"),n=s.n(o);n.a}});
//# sourceMappingURL=app.d4350ac1.js.map