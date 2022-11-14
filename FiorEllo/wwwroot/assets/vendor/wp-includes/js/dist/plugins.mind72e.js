/*! This file is auto-generated */
!function(){var e={9756:function(e){e.exports=function(e,n){var r,t,i=0;function o(){var o,u,s=r,l=arguments.length;e:for(;s;){if(s.args.length===arguments.length){for(u=0;u<l;u++)if(s.args[u]!==arguments[u]){s=s.next;continue e}return s!==r&&(s===t&&(t=s.prev),s.prev.next=s.next,s.next&&(s.next.prev=s.prev),s.next=r,s.prev=null,r.prev=s,r=s),s.val}s=s.next}for(o=new Array(l),u=0;u<l;u++)o[u]=arguments[u];return s={args:o,val:e.apply(null,o)},r?(r.prev=s,s.next=r):t=s,i===n.maxSize?(t=t.prev).next=null:i++,r=s,s.val}return n=n||{},o.clear=function(){r=null,t=null,i=0},o}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};!function(){"use strict";r.r(t),r.d(t,{PluginArea:function(){return y},getPlugin:function(){return w},getPlugins:function(){return P},registerPlugin:function(){return v},unregisterPlugin:function(){return h},withPluginContext:function(){return p}});var e=window.wp.element,n=window.lodash,i=r(9756),o=r.n(i),u=window.wp.hooks;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}var l=window.wp.compose;const{Consumer:a,Provider:c}=(0,e.createContext)({name:null,icon:null}),p=n=>(0,l.createHigherOrderComponent)((r=>t=>(0,e.createElement)(a,null,(i=>(0,e.createElement)(r,s({},t,n(i,t)))))),"withPluginContext");class g extends e.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){const{name:n,onError:r}=this.props;r&&r(n,e)}render(){return this.state.hasError?null:this.props.children}}var d=window.wp.primitives;var m=(0,e.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(d.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));const f={};function v(e,r){if("object"!=typeof r)return console.error("No settings object provided!"),null;if("string"!=typeof e)return console.error("Plugin name must be string."),null;if(!/^[a-z][a-z0-9-]*$/.test(e))return console.error('Plugin name must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null;f[e]&&console.error(`Plugin "${e}" is already registered.`),r=(0,u.applyFilters)("plugins.registerPlugin",r,e);const{render:t,scope:i}=r;if(!(0,n.isFunction)(t))return console.error('The "render" property must be specified and must be a valid function.'),null;if(i){if("string"!=typeof i)return console.error("Plugin scope must be string."),null;if(!/^[a-z][a-z0-9-]*$/.test(i))return console.error('Plugin scope must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-page".'),null}return f[e]={name:e,icon:m,...r},(0,u.doAction)("plugins.pluginRegistered",r,e),r}function h(e){if(!f[e])return void console.error('Plugin "'+e+'" is not registered.');const n=f[e];return delete f[e],(0,u.doAction)("plugins.pluginUnregistered",n,e),n}function w(e){return f[e]}function P(e){return Object.values(f).filter((n=>n.scope===e))}class x extends e.Component{constructor(){super(...arguments),this.setPlugins=this.setPlugins.bind(this),this.memoizedContext=o()(((e,n)=>({name:e,icon:n}))),this.state=this.getCurrentPluginsState()}getCurrentPluginsState(){return{plugins:(0,n.map)(P(this.props.scope),(e=>{let{icon:n,name:r,render:t}=e;return{Plugin:t,context:this.memoizedContext(r,n)}}))}}componentDidMount(){(0,u.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),(0,u.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}componentWillUnmount(){(0,u.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),(0,u.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}setPlugins(){this.setState(this.getCurrentPluginsState)}render(){return(0,e.createElement)("div",{style:{display:"none"}},(0,n.map)(this.state.plugins,(n=>{let{context:r,Plugin:t}=n;return(0,e.createElement)(c,{key:r.name,value:r},(0,e.createElement)(g,{name:r.name,onError:this.props.onError},(0,e.createElement)(t,null)))})))}}var y=x}(),(window.wp=window.wp||{}).plugins=t}();