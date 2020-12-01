(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16d5af15"],{"0874":function(t,e,a){},"12bb":function(t,e,a){},2544:function(t,e,a){"use strict";var s=a("f3b2"),o=a.n(s);o.a},6130:function(t,e,a){"use strict";var s=a("12bb"),o=a.n(s);o.a},9126:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container profile-view"},[a("Notification"),a("div",{staticClass:"buttons-wrap d-flex justify-content-between"},[a("b-button",{on:{click:t.goHome}},[t._v("Back to home")]),a("b-button",{on:{click:t.logout}},[t._v("logout")])],1),a("b-tabs",{attrs:{"content-class":"mt-3 tabs-wrap",justified:""}},[a("b-tab",{attrs:{title:"profile details",active:!Boolean(t.favoriteGames.length)}},[a("ProfileDetails")],1),a("b-tab",{attrs:{title:"favorite items",active:Boolean(t.favoriteGames.length)}},[a("ProfileFavorites")],1)],1)],1)},o=[],i=a("5530"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"fName"}},[t._v("First Name")])]),a("b-col",{attrs:{sm:"3"}},[a("b-form-input",{attrs:{id:"fName",type:"text"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1)],1),a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"lName"}},[t._v("last Name")])]),a("b-col",{attrs:{sm:"3"}},[a("b-form-input",{attrs:{id:"lName",type:"text"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)],1),a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"country"}},[t._v("country")])]),a("b-col",{attrs:{sm:"3"}},[a("b-form-input",{attrs:{id:"country",type:"text"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1),a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"email"}},[t._v("email")])]),a("b-col",{attrs:{sm:"3"}},[a("b-form-input",{attrs:{id:"email",type:"text",disabled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"username"}},[t._v("username")])]),a("b-col",{attrs:{sm:"3"}},[a("b-form-input",{attrs:{id:"username",type:"text",required:""},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1)],1),a("b-row",{staticClass:"justify-content-center mb-1"},[a("b-button",{on:{click:t.updateDetails}},[t._v("Update")])],1)],1)},n=[],c=a("2f62"),l={name:"ProfileDetails",data:function(){return{firstName:"",lastName:"",country:"",displayName:"",email:""}},watch:{user:"populateInputs"},mounted:function(){this.populateInputs()},computed:Object(i["a"])({},Object(c["c"])("userStore",["user"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("userStore",["updateUserData"])),{},{updateDetails:function(){var t=this.firstName,e=this.lastName,a=this.country,s=this.displayName;s.length&&this.updateUserData({firstName:t,lastName:e,country:a,displayName:s})},populateInputs:function(){var t=this.user,e=t.displayName,a=t.email,s=t.firstName,o=void 0===s?"":s,i=t.lastName,r=void 0===i?"":i,n=t.country,c=void 0===n?"":n;this.firstName=o,this.lastName=r,this.country=c,this.displayName=e,this.email=a}})},u=l,m=(a("2544"),a("2877")),b=Object(m["a"])(u,r,n,!1,null,"ab5764d0",null),f=b.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"col-sm-12 col-md-7"},[a("b-list-group",[a("b-list-group-item",{directives:[{name:"show",rawName:"v-show",value:!t.favoriteGames.length,expression:"!favoriteGames.length"}],staticClass:"list-item"},[a("span",[t._v("you haven't added any fav's yet")])]),t._l(t.favoriteGames,(function(e,s){return a("b-list-group-item",{key:s,staticClass:"list-item"},[a("span",{on:{click:function(a){return t.goDetailed(e)}}},[t._v(t._s(e.name)+" "+t._s(e.released?"("+e.released.slice(0,4)+")":""))]),a("div",{staticClass:"wrap-btns "},[a("b-dropdown",{staticClass:"dropdown-platforms",attrs:{id:"dropdown-platforms",text:"Platforms",variant:"success"}},t._l(e.platforms,(function(e,s){return a("b-dropdown-item",{key:s,attrs:{href:"#"}},[t._v(" "+t._s(e.platform.name))])})),1),a("b-dropdown",{staticClass:"dropdown-platforms",attrs:{id:"dropdown-genres",text:"Genres",variant:"success"}},t._l(e.genres,(function(e,s){return a("b-dropdown-item",{key:s,attrs:{href:"#"}},[t._v(t._s(e.name))])})),1),a("b-button",{on:{click:function(a){return t.deleteGame(e.id)}}},[a("b-icon",{attrs:{icon:"trash"}})],1)],1)])}))],2)],1)])},p=[],v={name:"ProfileFavorites",computed:Object(i["a"])({},Object(c["c"])("favStore",["favoriteGames"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["b"])("favStore",["removeFavoriteGame","setRouteFavs"])),Object(c["b"])("gamesReleased",["setCurrentGame"])),{},{deleteGame:function(t){this.removeFavoriteGame(t)},goDetailed:function(t){this.setCurrentGame(t),this.setRouteFavs(!0),this.$router.push({name:"Detailed"})}})},h=v,y=(a("f5c2"),Object(m["a"])(h,d,p,!1,null,"a286233e",null)),j=y.exports,N=a("2b9d"),w={name:"ProfileView",components:{ProfileDetails:f,ProfileFavorites:j,Notification:N["a"]},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])("authStore",["isLoggedIn"])),Object(c["c"])("favStore",["favoriteGames"])),Object(c["c"])("gamesReleased",["currentPage"])),mounted:function(){this.isLoggedIn||this.goHome()},watch:{isLoggedIn:"goHome"},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("authStore",["logout"])),{},{goHome:function(){this.$router.push({name:"Main",query:{page:this.currentPage}})}})},g=w,_=(a("6130"),Object(m["a"])(g,s,o,!1,null,"3fb6b2ff",null));e["default"]=_.exports},f3b2:function(t,e,a){},f5c2:function(t,e,a){"use strict";var s=a("0874"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-16d5af15.b88fdea8.js.map