(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ac014d2"],{"06fd":function(e,t,a){},2791:function(e,t,a){"use strict";var s=a("2b8b"),n=a.n(s);n.a},"2b8b":function(e,t,a){},c396:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("GameDetails")],1)},n=[],r=a("5530"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"wrap"},[a("b-button",{staticClass:"mb-2 btn-back",attrs:{variant:"success"},on:{click:e.backToMain}},[a("b-icon",{attrs:{icon:"arrow-left","aria-hidden":"true"}}),e._v(" back ")],1),a("h3",[e._v(e._s(e.currentGame.name)+e._s(e.releaseDate))]),a("div",{directives:[{name:"show",rawName:"v-show",value:null!==e.currentGame.clip,expression:"currentGame.clip!==null"}],staticClass:"clip"},[a("video",{attrs:{src:e.clipSrc,controls:""}})]),a("b-carousel",{staticClass:"slider mx-auto",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.currentGame.short_screenshots,(function(t,s){return a("b-carousel-slide",{key:s,staticClass:"slide-item",scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{src:t.image}})]},proxy:!0}],null,!0)})})),1),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"platforms"},[a("span",[e._v("platforms:")]),a("ul",e._l(e.currentGame.platforms,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(s>0?" |":"")+" "+e._s(t.platform.name)+" ")])})),0)]),a("div",{staticClass:"genres"},[a("span",[e._v("genres:")]),a("ul",e._l(e.currentGame.genres,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(s>0?" |":"")+" "+e._s(t.name)+" ")])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.currentGame.stores,expression:"currentGame.stores"}],staticClass:"stores"},[a("span",[e._v("Avalaible in:")]),a("ul",e._l(e.currentGame.stores,(function(t,s){return a("li",{key:s},[e._v(" "+e._s(s>0?" |":"")+" "+e._s(t.store.name)+" ")])})),0)])])],1)},c=[],l=(a("fb6a"),a("2f62")),u={name:"GameDetails",data:function(){return{slide:0,sliding:null}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])("gamesReleased",["currentGame","currentPage"])),Object(l["c"])("favStore",["routeFromFavs"])),{},{clipSrc:function(){return null!==this.currentGame.clip?this.currentGame.clip.clip:""},releaseDate:function(){return null!==this.currentGame.released?"(".concat(this.currentGame.released.slice(0,4),")"):""}}),watch:{},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("favStore",["setRouteFavs"])),{},{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1},backToMain:function(){this.routeFromFavs?(this.setRouteFavs(!1),this.$router.push({name:"Profile"})):this.$router.push({name:"Main",query:{page:this.currentPage}})}})},o=u,m=(a("c495"),a("2877")),d=Object(m["a"])(o,i,c,!1,null,"3a3bfc5c",null),b=d.exports,f={name:"DetailedGameView.vue",components:{GameDetails:b},computed:Object(r["a"])({},Object(l["c"])("gamesReleased",["currentGame","currentPage"])),watch:{currentPage:"redirectHome"},mounted:function(){null==this.currentGame&&this.$router.push({name:"Main"})},methods:{redirectHome:function(){this.$router.push({name:"Main"})}}},p=f,v=(a("2791"),Object(m["a"])(p,s,n,!1,null,"78058dee",null));t["default"]=v.exports},c495:function(e,t,a){"use strict";var s=a("06fd"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-3ac014d2.098ec6ca.js.map