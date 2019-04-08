/**
 * State-based routing for AngularJS
 * @version v0.3.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return S(new(S(function(){},{prototype:a})),b)}function e(a){return R(arguments,function(b){b!==a&&R(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return R(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return S({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return R(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return R(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=Q(a),d=c?[]:{};return R(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=Q(a)?[]:{};return R(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=S(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,O(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);R(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return P(a)&&a.then&&a.$$promises}if(!P(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return R(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!M(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;R(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!P(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=S({},d),u=1+q.length/3,v=!1;if(M(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),S(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;w<x;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(a,b,c){this.fromConfig=function(a,b,c){return M(a.template)?this.fromString(a.template,b):M(a.templateUrl)?this.fromUrl(a.templateUrl,b):M(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return N(a)?a(b):a},this.fromUrl=function(c,d){return N(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function s(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new V.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=V.type(h)||d(V.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=S({params:{}},P(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new V.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function t(a){S(this,a)}function u(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return N(a)||Q(a)&&N(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){S(this,a||{})}V=this;var l,m=!1,p=!0,q=!1,r={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!M(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return M(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};u.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return M(a)&&(m=a),m},this.strictMode=function(a){return M(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!M(a))return q;if(a!==!0&&a!==!1&&!O(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new s(a,S(f(),b))},this.isMatcher=function(a){if(!P(a))return!1;var b=!0;return R(s.prototype,function(c,d){N(c)&&(b=b&&M(a[d])&&N(a[d]))}),b},this.type=function(a,b,c){if(!M(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new t(S({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},R(x,function(a,b){r[b]=new t(S({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),R(x,function(a,b){r[b]||(r[b]=new t(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=P(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof t?c.type:new t(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return S(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!M(c)||null==c)return q;if(c===!0||O(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=Q(a.replace)?a.replace:[],O(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function u(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),M(a)?x.type.$normalize(a):u()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);S(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,S(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),R(b,function(b){R(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return R(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return R(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function v(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!M(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(O(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!N(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(O(a)){var b=a;a=function(){return b}}else if(!N(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=O(b);if(O(a)&&(a=d.compile(a)),!h&&!N(b)&&!Q(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),S(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:O(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),S(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function w(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=O(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!O(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):O(b.parent)?b.parent:P(b.parent)&&O(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)N(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return O(a)&&!M(b)?D[a]:N(b)&&O(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return P(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,l,n,q,r,u){function v(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return q.update(),F;if(!g.retry)return null;if(f.$retry)return q.update(),G;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),D):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return F}),q.update(),h}function w(a,c,d,g,i,j){function m(){var c=[];return R(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(N(d.controllerProvider)||Q(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var B=new Error("transition superseded"),D=p(e.reject(B)),E=p(e.reject(new Error("transition prevented"))),F=p(e.reject(new Error("transition aborted"))),G=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,n,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,S({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=S({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,l=z.params,o=j.path,p=m(b,f.relative),r=c["#"];if(!M(p)){var s={to:b,toParams:c,options:f},t=v(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,p=m(b,f.relative),!M(p)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(p[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},z.$current,p)),!p.params.$$validates(c))return G;c=p.params.$$values(c),b=p;var u=b.path,A=0,F=u[A],H=y.locals,I=[];if(f.reload){if(O(f.reload)||P(f.reload)){if(P(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var J=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!J)throw new Error("No such reload state '"+(O(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[A]&&F!==J;)H=I[A]=F.locals,A++,F=u[A]}}else for(;F&&F===o[A]&&F.ownParams.$$equals(c,l);)H=I[A]=F.locals,A++,F=u[A];if(x(b,c,j,l,H,f))return r&&(c["#"]=r),z.params=c,T(z.params,n),T(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(q.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),q.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==z.transition&&q.update(),E;for(var K=e.when(H),L=A;L<u.length;L++,F=u[L])H=I[L]=d(H),K=w(F,c,F===b,K,H,f);var N=z.transition=K.then(function(){var d,e,g;if(z.transition!==N)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D;for(d=o.length-1;d>=A;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=A;d<u.length;d++)e=u[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==N?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D):(z.$current=b,z.current=b.self,z.params=c,T(z.params,n),z.transition=null,f.location&&b.navigable&&q.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),q.update(!0),z.current)}).then(null,function(d){return d===B?D:z.transition!==N?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),D):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||q.update(),e.reject(d))});return N},z.is=function(a,b,d){d=S({relative:z.$current},d||{});var e=m(a,d.relative);return M(e)?z.$current===e&&(!b||j(e.params.$$values(b),n)):c},z.includes=function(a,b,d){if(d=S({relative:z.$current},d||{}),O(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!M(e))return c;if(!M(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(n[i],b[i]))return!1}return!0},z.href=function(a,b,d){d=S({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!M(e))return null;d.inherit&&(b=i(n,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?q.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new V.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(M(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(O(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new V.ParamSet;return R(a.params||{},function(a,c){b[c]||(b[c]=new V.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?S(a.parent.params.$$new(),b):new V.ParamSet},views:function(a){var b={};return R(M(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?S({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function x(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=S(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function y(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function z(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=B(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function A(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=B(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),N(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function B(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function C(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function D(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function E(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function F(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function G(a,b){return{relative:D(a)||b.$current,inherit:!0}}function H(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=C(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=E(e),l=g[1]||g[0],m=null;j.options=S(G(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=F(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function I(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=E(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=F(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function J(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,D(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!O(a))throw new Error("state should be a string");return P(c)?a+U(c):(c=b.$eval(c),P(c)?a+U(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),P(o)&&R(o,function(c,d){if(O(c)){var e=C(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(P(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function K(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function L(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var M=b.isDefined,N=b.isFunction,O=b.isString,P=b.isObject,Q=b.isArray,R=b.forEach,S=b.extend,T=b.copy,U=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),r.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",r);var V;s.prototype.concat=function(a,b){var c={caseInsensitive:V.caseInsensitive(),strict:V.strictMode(),squash:V.defaultSquashPolicy()};return new s(this.sourcePath+a+this.sourceSearch,S(c,b),this)},s.prototype.toString=function(){return this.source},s.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),M(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);M(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},s.prototype.parameters=function(a){return M(a)?this.params[a]||null:this.$$paramNames},s.prototype.validates=function(a){return this.params.$$validates(a)},s.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=Q(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else O(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(Q(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},t.prototype.is=function(a,b){return!0},t.prototype.encode=function(a,b){return a},t.prototype.decode=function(a,b){return a},t.prototype.equals=function(a,b){return a==b},t.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},t.prototype.pattern=/.*/,t.prototype.toString=function(){return"{Type:"+this.name+"}"},t.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},t.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return Q(a)?a:M(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(Q(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a);
},b.module("ui.router.util").provider("$urlMatcherFactory",u),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),v.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",v),w.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",w).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),x.$inject=[],b.module("ui.router.state").provider("$view",x),b.module("ui.router.state").provider("$uiViewScroll",y),z.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],A.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",z),b.module("ui.router.state").directive("uiView",A),H.$inject=["$state","$timeout"],I.$inject=["$state","$timeout"],J.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",H).directive("uiSrefActive",J).directive("uiSrefActiveEq",J).directive("uiState",I),K.$inject=["$state"],L.$inject=["$state"],b.module("ui.router.state").filter("isState",K).filter("includedByState",L)}(window,window.angular);

/*! 12.2.13 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.2.13",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){if(g&&d._chunkSize&&!d._finished&&d._file){var b=d._file&&d._file.size||0;e({loaded:Math.min(d._end,b),total:b,config:d,type:"progress"}),f.upload(d,!0)}else d._finished&&delete d._finished,j.resolve(a)},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,k["finally"]&&k["finally"]instanceof Function&&k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),e=a.headers("content-type")||"image/WebP",f=new window.Blob([b],{type:e}),g=c.match(/.*\/(.+?)(\?.*)?$/);g.length>1&&(f.name=g[1]),d.resolve(f)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c,e){var f=i.attrGetter("ngfResize",b,c);if(!f||!i.isResizeSupported()||!a.length)return i.emptyPromise();if(f instanceof Function){var g=d.defer();return f(a).then(function(d){h(d,a,b,c,e).then(function(a){g.resolve(a)},function(a){g.reject(a)})},function(a){g.reject(a)})}return h(f,a,b,c,e)}function h(a,b,c,e,f){function g(d,g){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;a.resizeIf=function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,$height:b,$file:d})};var j=i.resize(d,a);h.push(j),j.then(function(a){b.splice(g,1,a)},function(a){d.$error="resize",(d.$errorMessages=d.$errorMessages||{}).resize=!0,d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name),f.$ngfValidations.push({name:"resize",valid:!1}),i.applyModelValidation(f,b)})}}for(var h=[i.emptyPromise()],j=0;j<b.length;j++)g(b[j],j);return d.all(h)}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngfModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type}function b(b){var c;for(c=0;c<r.length;c++)if(a(b,r[c]))return!0;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;return!1}if(j){q=[],t=[];for(var c=0;c<j.length;c++)b(j[c])?t.push(j[c]):q.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){function a(){b(function(){m(w?r.concat(v):v,w?s.concat(u):u,j,t,x)},z&&z.debounce?z.debounce.change||z.debounce:0)}var f=y?q:v;g(f,d,e,c).then(function(){y?i.validate(q,w?r.length:0,c,d,e).then(function(b){v=b.validsFiles,u=b.invalidsFiles,a()}):a()},function(){for(var b=0;b<f.length;b++){var c=f[b];if("resize"===c.$error){var d=v.indexOf(c);d>-1&&(v.splice(d,1),u.push(c)),a()}}})}var q,r,s,t=[],u=[],v=[];r=d.$$ngfPrevValidFiles||[],s=d.$$ngfPrevInvalidFiles||[],c&&c.$modelValue&&(r=o(c.$modelValue));var w=i.attrGetter("ngfKeep",d,e);q=(j||[]).slice(0),("distinct"===w||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);var x=!w&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!w||q.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:j,$file:j&&j.length?j[0]:null,$newFiles:q,$duplicateFiles:t,$event:k});var y=i.attrGetter("ngfValidateAfterResize",d,e),z=i.attrGetter("ngfModelOptions",d,e);i.validate(q,w?r.length:0,c,d,e).then(function(a){l?m(q,[],j,t,x):(z&&z.allowInvalid||y?v=q:(v=a.validFiles,u=a.invalidFiles),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(v,d,e).then(function(){p()}):p())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){var e=b.__files_||b.target&&b.target.files,f=[];if(!e)return;for(var g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a,d){function e(b){a.attr("id","ngf-"+b),d.attr("id","ngf-label-"+b)}for(var f=0;f<b[0].attributes.length;f++){var g=b[0].attributes[f];"type"!==g.name&&"class"!==g.name&&"style"!==g.name&&("id"===g.name?(e(g.value),u.push(c.$observe("id",e))):a.attr(g.name,g.value||"required"!==g.name&&"multiple"!==g.name?g.value:g.name))}}function o(){if(k())return b;var a=angular.element('<input type="file">'),c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),n(a,c),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(x[0])||(g.push({el:b,ref:x.parent()}),document.body.appendChild(x.parent()[0]),x.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){x[0].click()},0):x[0].click(),!1}}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if(b){if("touchstart"===a.type)return w=b[0].clientX,v=b[0].clientY,!0;if("touchend"===a.type){var c=b[0].clientX,d=b[0].clientY;if(Math.abs(c-w)>20||Math.abs(d-v)>20)return a.stopPropagation(),a.preventDefault(),!1}return!0}}function r(b){j.shouldUpdateOn("click",c,a)&&x.val()&&(x.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(x&&!x.attr("__ngf_ie10_Fix_")){if(!x[0].parentNode)return void(x=null);a.preventDefault(),a.stopPropagation(),x.unbind("click");var b=x.clone();return x.replaceWith(b),x=b,x.attr("__ngf_ie10_Fix_","true"),x.bind("change",m),x.bind("click",s),x[0].click(),!1}x.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];t("ngfMultiple")&&u.push(a.$watch(t("ngfMultiple"),function(){x.attr("multiple",t("ngfMultiple",a))})),t("ngfCapture")&&u.push(a.$watch(t("ngfCapture"),function(){x.attr("capture",t("ngfCapture",a))})),t("ngfAccept")&&u.push(a.$watch(t("ngfAccept"),function(){x.attr("accept",t("ngfAccept",a))})),u.push(c.$observe("accept",function(){x.attr("accept",t("accept"))}));var v=0,w=0,x=b;k()||(x=o()),x.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&x.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&x.val()&&x.val(null),a}),a.$on("$destroy",function(){k()||x.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,x,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var k=h;if("ngfThumbnail"===g&&(k||(k={width:e[0].naturalWidth||e[0].clientWidth,height:e[0].naturalHeight||e[0].clientHeight}),0===k.width&&window.getComputedStyle)){var l=getComputedStyle(e[0]);l.width&&l.width.indexOf("px")>-1&&l.height&&l.height.indexOf("px")>-1&&(k={width:parseInt(l.width.slice(0,-2)),height:parseInt(l.height.slice(0,-2))})}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):k&&b.isResizeSupported()?(k.resizeIf=function(a,e){return b.attrGetter("ngfResizeIf",f,d,{$width:a,$height:e,$file:c})},b.resize(c,k).then(function(a){j(a)},function(a){throw a})):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){if(a.$dirty){var e=d;d&&!angular.isArray(d)&&(e=[d]),f.validate(e,0,a,b,c).then(function(){f.applyModelValidation(a,e)})}return d})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){if(a){for(var i=a.length,j=null;i--;){var n=a[i];if(n){var o=f.getValidationAttr(e,g,b,c,n);null!=o&&(h(n,o,i)||(-1===k.indexOf(b)?(n.$error=b,(n.$errorMessages=n.$errorMessages||{})[b]=!0,n.$errorParam=o,-1===m.indexOf(n)&&m.push(n),l||a.splice(i,1),j=!1):a.splice(i,1)))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,n,o){function p(b,d,e){function f(f){if(f())if(-1===k.indexOf(c)){if(d.$error=c,(d.$errorMessages=d.$errorMessages||{})[c]=!0,d.$errorParam=e,-1===m.indexOf(d)&&m.push(d),!l){var g=a.indexOf(d);g>-1&&a.splice(g,1)}b.resolve(!1)}else{var h=a.indexOf(d);h>-1&&a.splice(h,1),b.resolve(!0)}else b.resolve(!0)}null!=e?n(d,e).then(function(a){f(function(){return!o(a,e)})},function(){f(function(){return j("ngfValidateForce",{$file:d})})}):b.resolve(!0)}var q=[f.emptyPromise(!0)];a&&(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return q.push(d.promise),!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){p(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.resolve(!1)}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){p(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.resolve(!1)}):p(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve(!0)}));var r=b.defer();return b.all(q).then(function(a){for(var b=!0,e=0;e<a.length;e++)if(!a[e]){b=!1;break}d.$ngfValidations.push({name:c,valid:b}),r.resolve(b)}),r.promise}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b)},k=(f.attrGetter("ngfIgnoreInvalid",e,g)||"").split(" "),l=f.attrGetter("ngfRunAllValidations",e,g);if(null==a||0===a.length)return f.emptyPromise({validFiles:a,invalidFiles:[]});a=void 0===a.length?[a]:a.slice(0);var m=[];h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){return a.size-.1<=f.translateScalars(b)});var n=0;if(h("maxTotalSize",null,function(b,c){return n+=b.size,n>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise({validFiles:[],invalidFiles:m});var o=b.defer(),p=[];return p.push(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b})),p.push(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b})),p.push(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){return a.width<=b})),p.push(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b})),p.push(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("ratio",null,/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<.01&&(d=!0);return d})),p.push(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4})),p.push(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4})),p.push(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)})),p.push(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)})),p.push(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("validateAsyncFn",null,null,function(a,b){return b},function(a){return a===!0||null===a||""===a})),b.all(p).then(function(){if(l)for(var b=0;b<a.length;b++){var d=a[b];d.$error&&a.splice(b--,1)}l=!1,h("maxFiles",null,function(a,b,d){return b>c+d}),o.resolve({validFiles:a,invalidFiles:m})}),o.promise},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].naturalWidth||h[0].clientWidth,c=h[0].naturalHeight||h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i++>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");return n.setAttribute("style","visibility:hidden;position:fixed;z-index:-100000"),document.body.appendChild(n),n.onload=function(){var a=n.width,b=n.height;if(n.parentNode.removeChild(n),null!=k&&k(a,b)===!1)return void l.reject("resizeIf");try{if(i){var o=c.ratioToFloat(i),p=a/b;o>p?(e=a,f=e/o):(f=b,e=f*o)}e||(e=a),f||(f=b);var q=d(a,b,e,f,j);m.width=Math.min(q.width,e),m.height=Math.min(q.height,f);var r=m.getContext("2d");r.drawImage(n,Math.min(0,-q.marginX/2),Math.min(0,-q.marginY/2),q.width,q.height),l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(s){l.reject(s)}},n.onerror=function(){n.parentNode.removeChild(n),l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var f=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d.width,d.height,d.quality,d.type||a.type,d.ratio,d.centerCrop,d.resizeIf).then(function(e){if("image/jpeg"===a.type&&d.restoreExif!==!1)try{e=c.restoreExif(b,e)}catch(g){setTimeout(function(){throw g},1)}try{var h=c.dataUrltoBlob(e,a.name,a.size);f.resolve(h)}catch(g){f.reject(g)}},function(b){"resizeIf"===b&&f.resolve(a),f.reject(b)})},function(a){f.reject(a)}),f.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||s("ngfDropDisabled",a)}function m(b,c,d){if(b){var e;try{e=b&&b.getData&&b.getData("text/html")}catch(f){}q(b.items,b.files,s("ngfAllowDir",a)!==!1,s("multiple")||s("ngfMultiple",a)).then(function(a){a.length?n(a,c):o(d,e).then(function(a){n(a,c)})})}}function n(b,c){i.updateModel(e,d,a,s("ngfChange")||s("ngfDrop"),b,c)}function o(b,c){if(!i.shouldUpdateOn(b,d,a)||"string"!=typeof c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function p(a,b,c,d){var e=s("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(w=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||s("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function q(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"))}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a)});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles");null==j&&(j=Number.MAX_VALUE);var l=i.getValidationAttr(d,a,"maxTotalSize");null==l&&(l=Number.MAX_VALUE);var m=s("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];if(b&&b.length>0&&"file:"!==h.location.protocol)for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){var r=b[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&p.push(g(r))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var r=b(),s=function(a,b,c){return i.attrGetter(a,d,b,c)};if(s("dropAvailable")&&g(function(){a[s("dropAvailable")]?a[s("dropAvailable")].value=r:a[s("dropAvailable")]=r}),!r)return void(s("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==s("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var t,u=null,v=f(s("ngfStopPropagation")),w=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){if(b.preventDefault(),v(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(u),t||(t="C",p(a,d,b,function(d){t=d,c.addClass(t),s("ngfDrag",a,{$isDragging:!0,$class:t,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),v(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),
v(a)&&b.stopPropagation(),u=g(function(){t&&c.removeClass(t),t=null,s("ngfDrag",a,{$isDragging:!1,$event:b})},w||100))},!1),c[0].addEventListener("drop",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),v(a)&&b.stopPropagation(),t&&c.removeClass(t),t=null,m(b.dataTransfer,b,"dropUrl"))},!1),c[0].addEventListener("paste",function(b){navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&s("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)&&m(b.clipboardData||b.originalEvent.clipboardData,b,"pasteUrl")},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&s("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$window","Upload","$http","$q",function(b,c,d,e,f,g){return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a)},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);

/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(a):"undefined"!=typeof module&&"object"==typeof exports?
// Node/CommonJS style
module.exports=a():
// No AMD or CommonJS support so we place Rangy in (probably) the global variable
b.rangy=a()}(function(){/*----------------------------------------------------------------------------------------------------------------*/
// Trio of functions taken from Peter Michaux's article:
// http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
function a(a,b){var c=typeof a[b];return c==u||!(c!=t||!a[b])||"unknown"==c}function b(a,b){return!(typeof a[b]!=t||!a[b])}function c(a,b){return typeof a[b]!=v}
// Creates a convenience function to save verbose repeated calls to tests functions
function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&A(a,z)&&C(a,y)}function f(a){return b(a,"body")?a.body:a.getElementsByTagName("body")[0]}function g(b){typeof console!=v&&a(console,"log")&&console.log(b)}function h(a,b){F&&b?alert(a):g(a)}function i(a){H.initialized=!0,H.supported=!1,h("Rangy is not supported in this environment. Reason: "+a,H.config.alertOnFail)}function j(a){h("Rangy warning: "+a,H.config.alertOnWarn)}function k(a){return a.message||a.description||String(a)}
// Initialization
function l(){if(F&&!H.initialized){var b,c=!1,d=!1;
// First, perform basic feature tests
a(document,"createRange")&&(b=document.createRange(),A(b,x)&&C(b,w)&&(c=!0));var h=f(document);if(!h||"body"!=h.nodeName.toLowerCase())return void i("No body element found");if(h&&a(h,"createTextRange")&&(b=h.createTextRange(),e(b)&&(d=!0)),!c&&!d)return void i("Neither Range nor TextRange are available");H.initialized=!0,H.features={implementsDomRange:c,implementsTextRange:d};
// Initialize modules
var j,l;for(var m in E)(j=E[m])instanceof p&&j.init(j,H);
// Call init listeners
for(var n=0,o=K.length;n<o;++n)try{K[n](H)}catch(a){l="Rangy init listener threw an exception. Continuing. Detail: "+k(a),g(l)}}}function m(a,b,c){c&&(a+=" in module "+c.name),H.warn("DEPRECATED: "+a+" is deprecated. Please use "+b+" instead.")}function n(a,b,c,d){a[b]=function(){return m(b,c,d),a[c].apply(a,G.toArray(arguments))}}function o(a){a=a||window,l();
// Notify listeners
for(var b=0,c=L.length;b<c;++b)L[b](a)}function p(a,b,c){this.name=a,this.dependencies=b,this.initialized=!1,this.supported=!1,this.initializer=c}function q(a,b,c){var d=new p(a,b,function(b){if(!b.initialized){b.initialized=!0;try{c(H,b),b.supported=!0}catch(b){var d="Module '"+a+"' failed to load: "+k(b);g(d),b.stack&&g(b.stack)}}});return E[a]=d,d}/*----------------------------------------------------------------------------------------------------------------*/
// Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately
function r(){}function s(){}var t="object",u="function",v="undefined",w=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],x=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],y=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],z=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],A=d(a),B=d(b),C=d(c),D=[].forEach?function(a,b){a.forEach(b)}:function(a,b){for(var c=0,d=a.length;c<d;++c)b(a[c],c)},E={},F=typeof window!=v&&typeof document!=v,G={isHostMethod:a,isHostObject:b,isHostProperty:c,areHostMethods:A,areHostObjects:B,areHostProperties:C,isTextRange:e,getBody:f,forEach:D},H={version:"1.3.0",initialized:!1,isBrowser:F,supported:!0,util:G,features:{},modules:E,config:{alertOnFail:!1,alertOnWarn:!1,preferTextRange:!1,autoInitialize:typeof rangyAutoInitialize==v||rangyAutoInitialize}};H.fail=i,H.warn=j;
// Add utility extend() method
var I;({}).hasOwnProperty?(G.extend=I=function(a,b,c){var d,e;for(var f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&null!==d&&"object"==typeof d&&null!==e&&"object"==typeof e&&I(d,e,!0),a[f]=e);
// Special case for toString, which does not show up in for...in loops in IE <= 8
return b.hasOwnProperty("toString")&&(a.toString=b.toString),a},G.createOptions=function(a,b){var c={};return I(c,b),a&&I(c,a),c}):i("hasOwnProperty not supported"),
// Test whether we're in a browser and bail out if not
F||i("Rangy can only run in a browser"),
// Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
function(){var a;if(F){var b=document.createElement("div");b.appendChild(document.createElement("span"));var c=[].slice;try{1==c.call(b.childNodes,0)[0].nodeType&&(a=function(a){return c.call(a,0)})}catch(a){}}a||(a=function(a){for(var b=[],c=0,d=a.length;c<d;++c)b[c]=a[c];return b}),G.toArray=a}();
// Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
// normalization of event properties
var J;F&&(a(document,"addEventListener")?J=function(a,b,c){a.addEventListener(b,c,!1)}:a(document,"attachEvent")?J=function(a,b,c){a.attachEvent("on"+b,c)}:i("Document does not have required addEventListener or attachEvent method"),G.addListener=J);var K=[];G.deprecationNotice=m,G.createAliasForDeprecatedMethod=n,
// Allow external scripts to initialize this library in case it's loaded after the document has loaded
H.init=l,
// Execute listener immediately if already initialized
H.addInitListener=function(a){H.initialized?a(H):K.push(a)};var L=[];H.addShimListener=function(a){L.push(a)},F&&(H.shim=H.createMissingNativeApi=o,n(H,"createMissingNativeApi","shim")),p.prototype={init:function(){for(var a,b,c=this.dependencies||[],d=0,e=c.length;d<e;++d){if(b=c[d],a=E[b],!(a&&a instanceof p))throw new Error("required module '"+b+"' not found");if(a.init(),!a.supported)throw new Error("required module '"+b+"' not supported")}
// Now run initializer
this.initializer(this)},fail:function(a){throw this.initialized=!0,this.supported=!1,new Error(a)},warn:function(a){H.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){H.warn("DEPRECATED: "+a+" in module "+this.name+" is deprecated. Please use "+b+" instead")},createError:function(a){return new Error("Error in Rangy "+this.name+" module: "+a)}},H.createModule=function(a){
// Allow 2 or 3 arguments (second argument is an optional array of dependencies)
var b,c;2==arguments.length?(b=arguments[1],c=[]):(b=arguments[2],c=arguments[1]);var d=q(a,c,b);
// Initialize the module immediately if the core is already initialized
H.initialized&&H.supported&&d.init()},H.createCoreModule=function(a,b,c){q(a,b,c)},H.RangePrototype=r,H.rangePrototype=new r,H.selectionPrototype=new s,/*----------------------------------------------------------------------------------------------------------------*/
// DOM utility methods used by Rangy
H.createCoreModule("DomUtil",[],function(a,b){
// Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
function c(a){var b;return typeof a.namespaceURI==F||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b}function d(a){var b=a.parentNode;return 1==b.nodeType?b:null}function e(a){for(var b=0;a=a.previousSibling;)++b;return b}function f(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function g(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(K(d,c))return c;return null}function h(a,b,c){for(var d=c?b:b.parentNode;d;){if(d===a)return!0;d=d.parentNode}return!1}function i(a,b){return h(a,b,!0)}function j(a,b,c){for(var d,e=c?a:a.parentNode;e;){if(d=e.parentNode,d===b)return e;e=d}return null}function k(a){var b=a.nodeType;return 3==b||4==b||8==b}function l(a){if(!a)return!1;var b=a.nodeType;return 3==b||8==b}function m(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}
// Note that we cannot use splitText() because it is bugridden in IE 9.
function n(a,b,c){var d=a.cloneNode(!1);
// Preserve positions
if(d.deleteData(0,b),a.deleteData(b,a.length-b),m(d,a),c)for(var f,g=0;f=c[g++];)
// Handle case where position was inside the portion of node after the split point
f.node==a&&f.offset>b?(f.node=d,f.offset-=b):f.node==a.parentNode&&f.offset>e(a)&&++f.offset;return d}function o(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=F)return a.ownerDocument;if(typeof a.document!=F)return a.document;if(a.parentNode)return o(a.parentNode);throw b.createError("getDocument: no document found for node")}function p(a){var c=o(a);if(typeof c.defaultView!=F)return c.defaultView;if(typeof c.parentWindow!=F)return c.parentWindow;throw b.createError("Cannot get a window object for node")}function q(a){if(typeof a.contentDocument!=F)return a.contentDocument;if(typeof a.contentWindow!=F)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function r(a){if(typeof a.contentWindow!=F)return a.contentWindow;if(typeof a.contentDocument!=F)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}
// This looks bad. Is it worth it?
function s(a){return a&&G.isHostMethod(a,"setTimeout")&&G.isHostObject(a,"document")}function t(a,b,c){var d;if(a?G.isHostProperty(a,"nodeType")?d=1==a.nodeType&&"iframe"==a.tagName.toLowerCase()?q(a):o(a):s(a)&&(d=a.document):d=document,!d)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return d}function u(a){for(var b;b=a.parentNode;)a=b;return a}function v(a,c,d,f){
// See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
var h,i,k,l,m;if(a==d)
// Case 1: nodes are the same
return c===f?0:c<f?-1:1;if(h=j(d,a,!0))
// Case 2: node C (container B or an ancestor) is a child node of A
return c<=e(h)?-1:1;if(h=j(a,d,!0))
// Case 3: node C (container A or an ancestor) is a child node of B
return e(h)<f?-1:1;if(i=g(a,d),!i)throw new Error("comparePoints error: nodes have no common ancestor");if(
// Case 4: containers are siblings or descendants of siblings
k=a===i?i:j(a,i,!0),l=d===i?i:j(d,i,!0),k===l)
// This shouldn't be possible
throw b.createError("comparePoints got to case 4 and childA and childB are the same!");for(m=i.firstChild;m;){if(m===k)return-1;if(m===l)return 1;m=m.nextSibling}}function w(a){var b;try{return b=a.parentNode,!1}catch(a){return!0}}/*----------------------------------------------------------------------------------------------------------------*/
function x(a){if(!a)return"[No node]";if(L&&w(a))return"[Broken node]";if(k(a))return'"'+a.data+'"';if(1==a.nodeType){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">[index:"+e(a)+",length:"+a.childNodes.length+"]["+(a.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return a.nodeName}function y(a){for(var b,c=o(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c}function z(a,b,c){var d=H(a),e=a.createElement("div");e.contentEditable=""+!!c,b&&(e.innerHTML=b);
// Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
var f=d.firstChild;return f?d.insertBefore(e,f):d.appendChild(e),e}function A(a){return a.parentNode.removeChild(a)}function B(a){this.root=a,this._next=a}function C(a){return new B(a)}function D(a,b){this.node=a,this.offset=b}function E(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var F="undefined",G=a.util,H=G.getBody;
// Perform feature tests
G.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),G.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var I=document.createElement("div");G.areHostMethods(I,["insertBefore","appendChild","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),
// innerHTML is required for Range's createContextualFragment method
G.isHostProperty(I,"innerHTML")||b.fail("Element is missing innerHTML property");var J=document.createTextNode("test");G.areHostMethods(J,["splitText","deleteData","insertData","appendData","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"])||!G.areHostProperties(J,["data"]))||b.fail("Incomplete Text Node implementation");/*----------------------------------------------------------------------------------------------------------------*/
// Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
// able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
// contains just the document as a single element and the value searched for is the document.
var K=/*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/
function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1},L=!1;!function(){var b=document.createElement("b");b.innerHTML="1";var c=b.firstChild;b.innerHTML="<br />",L=w(c),a.features.crashyTextNodes=L}();var M;typeof window.getComputedStyle!=F?M=function(a,b){return p(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=F?M=function(a,b){return a.currentStyle?a.currentStyle[b]:""}:b.fail("No means of obtaining computed style properties found"),B.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b,c=this._current=this._next;if(this._current)if(a=c.firstChild)this._next=a;else{for(b=null;c!==this.root&&!(b=c.nextSibling);)c=c.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=null}},D.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},E.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11,INVALID_NODE_TYPE_ERR:24},E.prototype.toString=function(){return this.message},a.dom={arrayContains:K,isHtmlNamespace:c,parentElement:d,getNodeIndex:e,getNodeLength:f,getCommonAncestor:g,isAncestorOf:h,isOrIsAncestorOf:i,getClosestAncestorIn:j,isCharacterDataNode:k,isTextOrCommentNode:l,insertAfter:m,splitDataNode:n,getDocument:o,getWindow:p,getIframeWindow:r,getIframeDocument:q,getBody:H,isWindow:s,getContentDocument:t,getRootContainer:u,comparePoints:v,isBrokenNode:w,inspectNode:x,getComputedStyleProperty:M,createTestElement:z,removeNode:A,fragmentFromNodeChildren:y,createIterator:C,DomPosition:D},a.DOMException=E}),/*----------------------------------------------------------------------------------------------------------------*/
// Pure JavaScript implementation of DOM Range
H.createCoreModule("DomRange",["DomUtil"],function(a,b){/*----------------------------------------------------------------------------------------------------------------*/
// Utility functions
function c(a,b){return 3!=a.nodeType&&(P(a,b.startContainer)||P(a,b.endContainer))}function d(a){return a.document||Q(a.startContainer)}function e(a){return W(a.startContainer)}function f(a){return new L(a.parentNode,O(a))}function g(a){return new L(a.parentNode,O(a)+1)}function h(a,b,c){var d=11==a.nodeType?a.firstChild:a;return N(b)?c==b.length?J.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:S(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function i(a,b,c){if(z(a),z(b),d(b)!=d(a))throw new M("WRONG_DOCUMENT_ERR");var e=R(a.startContainer,a.startOffset,b.endContainer,b.endOffset),f=R(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return c?e<=0&&f>=0:e<0&&f>0}function j(a){for(var b,c,e,f=d(a.range).createDocumentFragment();c=a.next();){if(b=a.isPartiallySelectedSubtree(),c=c.cloneNode(!b),b&&(e=a.getSubtreeIterator(),c.appendChild(j(e)),e.detach()),10==c.nodeType)// DocumentType
throw new M("HIERARCHY_REQUEST_ERR");f.appendChild(c)}return f}function k(a,b,c){var d,e;c=c||{stop:!1};for(var f,g;f=a.next();)if(a.isPartiallySelectedSubtree()){if(b(f)===!1)return void(c.stop=!0);if(
// The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
// the node selected by the Range.
g=a.getSubtreeIterator(),k(g,b,c),g.detach(),c.stop)return}else for(
// The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
// descendants
d=J.createIterator(f);e=d.next();)if(b(e)===!1)return void(c.stop=!0)}function l(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),l(b),b.detach()):a.remove()}function m(a){for(var b,c,e=d(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),c=a.getSubtreeIterator(),b.appendChild(m(c)),c.detach()):a.remove(),10==b.nodeType)// DocumentType
throw new M("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function n(a,b,c){var d,e=!(!b||!b.length),f=!!c;e&&(d=new RegExp("^("+b.join("|")+")$"));var g=[];return k(new p(a,!1),function(b){if((!e||d.test(b.nodeType))&&(!f||c(b))){
// Don't include a boundary container if it is a character data node and the range does not contain any
// of its character data. See issue 190.
var h=a.startContainer;if(b!=h||!N(h)||a.startOffset!=h.length){var i=a.endContainer;b==i&&N(i)&&0==a.endOffset||g.push(b)}}}),g}function o(a){var b="undefined"==typeof a.getName?"Range":a.getName();return"["+b+"("+J.inspectNode(a.startContainer)+":"+a.startOffset+", "+J.inspectNode(a.endContainer)+":"+a.endOffset+")]"}/*----------------------------------------------------------------------------------------------------------------*/
// RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)
function p(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&N(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||N(this.sc)?T(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||N(this.ec)?T(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function q(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,V(a,d))return e;e=e.parentNode}return null}}function r(a,b){if(ea(a,b))throw new M("INVALID_NODE_TYPE_ERR")}function s(a,b){if(!V(b,a.nodeType))throw new M("INVALID_NODE_TYPE_ERR")}function t(a,b){if(b<0||b>(N(a)?a.length:a.childNodes.length))throw new M("INDEX_SIZE_ERR")}function u(a,b){if(ca(a,!0)!==ca(b,!0))throw new M("WRONG_DOCUMENT_ERR")}function v(a){if(da(a,!0))throw new M("NO_MODIFICATION_ALLOWED_ERR")}function w(a,b){if(!a)throw new M(b)}function x(a,b){return b<=(N(a)?a.length:a.childNodes.length)}function y(a){return!!a.startContainer&&!!a.endContainer&&!(X&&(J.isBrokenNode(a.startContainer)||J.isBrokenNode(a.endContainer)))&&W(a.startContainer)==W(a.endContainer)&&x(a.startContainer,a.startOffset)&&x(a.endContainer,a.endOffset)}function z(a){if(!y(a))throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: ("+a.inspect()+")")}function A(a,b){z(a);var c=a.startContainer,d=a.startOffset,e=a.endContainer,f=a.endOffset,g=c===e;N(e)&&f>0&&f<e.length&&S(e,f,b),N(c)&&d>0&&d<c.length&&(c=S(c,d,b),g?(f-=d,e=c):e==c.parentNode&&f>=O(c)&&f++,d=0),a.setStartAndEnd(c,d,e,f)}function B(a){z(a);var b=a.commonAncestorContainer.parentNode.cloneNode(!1);return b.appendChild(a.cloneContents()),b.innerHTML}function C(a){a.START_TO_START=ja,a.START_TO_END=ka,a.END_TO_END=la,a.END_TO_START=ma,a.NODE_BEFORE=na,a.NODE_AFTER=oa,a.NODE_BEFORE_AND_AFTER=pa,a.NODE_INSIDE=qa}function D(a){C(a),C(a.prototype)}function E(a,b){return function(){z(this);var c,d,e=this.startContainer,f=this.startOffset,h=this.commonAncestorContainer,i=new p(this,!0);e!==h&&(c=T(e,h,!0),d=g(c),e=d.node,f=d.offset),
// Check none of the range is read-only
k(i,v),i.reset();
// Remove the content
var j=a(i);
// Move to the new position
return i.detach(),b(this,e,f,e,f),j}}function F(b,d){function e(a,b){return function(c){s(c,Z),s(W(c),$);var d=(a?f:g)(c);(b?h:i)(this,d.node,d.offset)}}function h(a,b,c){var e=a.endContainer,f=a.endOffset;b===a.startContainer&&c===a.startOffset||(
// Check the root containers of the range and the new boundary, and also check whether the new boundary
// is after the current end. In either case, collapse the range to the new position
W(b)==W(e)&&1!=R(b,c,e,f)||(e=b,f=c),d(a,b,c,e,f))}function i(a,b,c){var e=a.startContainer,f=a.startOffset;b===a.endContainer&&c===a.endOffset||(
// Check the root containers of the range and the new boundary, and also check whether the new boundary
// is after the current end. In either case, collapse the range to the new position
W(b)==W(e)&&R(b,c,e,f)!=-1||(e=b,f=c),d(a,e,f,b,c))}
// Set up inheritance
var j=function(){};j.prototype=a.rangePrototype,b.prototype=new j,K.extend(b.prototype,{setStart:function(a,b){r(a,!0),t(a,b),h(this,a,b)},setEnd:function(a,b){r(a,!0),t(a,b),i(this,a,b)},/**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
setStartAndEnd:function(){var a=arguments,b=a[0],c=a[1],e=b,f=c;switch(a.length){case 3:f=a[2];break;case 4:e=a[2],f=a[3]}d(this,b,c,e,f)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:e(!0,!0),setStartAfter:e(!1,!0),setEndBefore:e(!0,!1),setEndAfter:e(!1,!1),collapse:function(a){z(this),a?d(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){r(a,!0),d(this,a,0,a,U(a))},selectNode:function(a){r(a,!1),s(a,Z);var b=f(a),c=g(a);d(this,b.node,b.offset,c.node,c.offset)},extractContents:E(m,d),deleteContents:E(l,d),canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);
// Check if the contents can be surrounded. Specifically, this means whether the range partially selects
// no non-text nodes.
var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},splitBoundaries:function(){A(this)},splitBoundariesPreservingPositions:function(a){A(this,a)},normalizeBoundaries:function(){z(this);var a,b=this.startContainer,c=this.startOffset,e=this.endContainer,f=this.endOffset,g=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(e=a,f=a.length,a.appendData(b.data),Y(b))},h=function(a){var d=a.previousSibling;if(d&&d.nodeType==a.nodeType){b=a;var g=a.length;if(c=d.length,a.insertData(0,d.data),Y(d),b==e)f+=c,e=b;else if(e==a.parentNode){var h=O(a);f==h?(e=a,f=g):f>h&&f--}}},i=!0;if(N(e))f==e.length?g(e):0==f&&(a=e.previousSibling,a&&a.nodeType==e.nodeType&&(f=a.length,b==e&&(i=!1),a.appendData(e.data),Y(e),e=a));else{if(f>0){var j=e.childNodes[f-1];j&&N(j)&&g(j)}i=!this.collapsed}if(i){if(N(b))0==c?h(b):c==b.length&&(a=b.nextSibling,a&&a.nodeType==b.nodeType&&(e==a&&(e=b,f+=b.length),b.appendData(a.data),Y(a)));else if(c<b.childNodes.length){var k=b.childNodes[c];k&&N(k)&&h(k)}}else b=e,c=f;d(this,b,c,e,f)},collapseToPoint:function(a,b){r(a,!0),t(a,b),this.setStartAndEnd(a,b)}}),D(b)}/*----------------------------------------------------------------------------------------------------------------*/
// Updates commonAncestorContainer and collapsed after boundary change
function G(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:J.getCommonAncestor(a.startContainer,a.endContainer)}function H(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,a.document=J.getDocument(b),G(a)}function I(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this.document=a,G(this)}var J=a.dom,K=a.util,L=J.DomPosition,M=a.DOMException,N=J.isCharacterDataNode,O=J.getNodeIndex,P=J.isOrIsAncestorOf,Q=J.getDocument,R=J.comparePoints,S=J.splitDataNode,T=J.getClosestAncestorIn,U=J.getNodeLength,V=J.arrayContains,W=J.getRootContainer,X=a.features.crashyTextNodes,Y=J.removeNode;p.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){
// Move to next node
var a=this._current=this._next;
// Check for partially selected text nodes
return a&&(this._next=a!==this._last?a.nextSibling:null,N(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!N(c)||c!==this.sc&&c!==this.ec?c.parentNode&&Y(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},
// Checks if the current node is partially selected
isPartiallySelectedSubtree:function(){var a=this._current;return c(a,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse(!1);else{a=new I(d(this.range));var b=this._current,c=b,e=0,f=b,g=U(b);P(b,this.sc)&&(c=this.sc,e=this.so),P(b,this.ec)&&(f=this.ec,g=this.eo),H(a,c,e,f,g)}return new p(a,this.clonePartiallySelectedTextNodes)},detach:function(){this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};/*----------------------------------------------------------------------------------------------------------------*/
var Z=[1,3,4,5,7,8,10],$=[2,9,11],_=[5,6,10,12],aa=[1,3,4,5,7,8,10,11],ba=[1,3,4,5,7,8],ca=q([9,11]),da=q(_),ea=q([6,10,12]),fa=document.createElement("style"),ga=!1;try{fa.innerHTML="<b>x</b>",ga=3==fa.firstChild.nodeType}catch(a){}a.features.htmlParsingConforms=ga;var ha=ga?
// Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
// discussion and base code for this implementation at issue 67.
// Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
// Thanks to Aleks Williams.
function(a){
// "Let node the context object's start's node."
var b=this.startContainer,c=Q(b);
// "If the context object's start's node is null, raise an INVALID_STATE_ERR
// exception and abort these steps."
if(!b)throw new M("INVALID_STATE_ERR");
// "Let element be as follows, depending on node's interface:"
// Document, Document Fragment: null
var d=null;
// "If this raises an exception, then abort these steps. Otherwise, let new
// children be the nodes returned."
// "Let fragment be a new DocumentFragment."
// "Append all new children to fragment."
// "Return fragment."
// "Element: node"
// "If either element is null or element's ownerDocument is an HTML document
// and element's local name is "html" and element's namespace is the HTML
// namespace"
// "let element be a new Element with "body" as its local name and the HTML
// namespace as its namespace.""
// "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
// "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
// "In either case, the algorithm must be invoked with fragment as the input
// and element as the context element."
return 1==b.nodeType?d=b:N(b)&&(d=J.parentElement(b)),d=null===d||"HTML"==d.nodeName&&J.isHtmlNamespace(Q(d).documentElement)&&J.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1),d.innerHTML=a,J.fragmentFromNodeChildren(d)}:
// In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
// previous versions of Rangy used (with the exception of using a body element rather than a div)
function(a){var b=d(this),c=b.createElement("body");return c.innerHTML=a,J.fragmentFromNodeChildren(c)},ia=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ja=0,ka=1,la=2,ma=3,na=0,oa=1,pa=2,qa=3;K.extend(a.rangePrototype,{compareBoundaryPoints:function(a,b){z(this),u(this.startContainer,b.startContainer);var c,d,e,f,g=a==ma||a==ja?"start":"end",h=a==ka||a==ja?"start":"end";return c=this[g+"Container"],d=this[g+"Offset"],e=b[h+"Container"],f=b[h+"Offset"],R(c,d,e,f)},insertNode:function(a){if(z(this),s(a,aa),v(this.startContainer),P(a,this.startContainer))throw new M("HIERARCHY_REQUEST_ERR");
// No check for whether the container of the start of the Range is of a type that does not allow
// children of the type of node: the browser's DOM implementation should do this for us when we attempt
// to add the node
var b=h(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){z(this);var a,b;if(this.collapsed)return d(this).createDocumentFragment();if(this.startContainer===this.endContainer&&N(this.startContainer))return a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=d(this).createDocumentFragment(),b.appendChild(a),b;var c=new p(this,!0);return a=j(c),c.detach(),a},canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);
// Check if the contents can be surrounded. Specifically, this means whether the range partially selects
// no non-text nodes.
var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},surroundContents:function(a){if(s(a,ba),!this.canSurroundContents())throw new M("INVALID_STATE_ERR");
// Extract the contents
var b=this.extractContents();
// Clear the children of the node
if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);
// Insert the new node and add the extracted contents
h(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){z(this);for(var a,b=new I(d(this)),c=ia.length;c--;)a=ia[c],b[a]=this[a];return b},toString:function(){z(this);var a=this.startContainer;if(a===this.endContainer&&N(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],c=new p(this,!0);return k(c,function(a){
// Accept only text or CDATA nodes, not comments
3!=a.nodeType&&4!=a.nodeType||b.push(a.data)}),c.detach(),b.join("")},
// The methods below are all non-standard. The following batch were introduced by Mozilla but have since
// been removed from Mozilla.
compareNode:function(a){z(this);var b=a.parentNode,c=O(a);if(!b)throw new M("NOT_FOUND_ERR");var d=this.comparePoint(b,c),e=this.comparePoint(b,c+1);return d<0?e>0?pa:na:e>0?oa:qa},comparePoint:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)<0?-1:R(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:ha,toHtml:function(){return B(this)},
// touchingIsIntersecting determines whether this method considers a node that borders a range intersects
// with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
intersectsNode:function(a,b){if(z(this),W(a)!=e(this))return!1;var c=a.parentNode,d=O(a);if(!c)return!0;var f=R(c,d,this.endContainer,this.endOffset),g=R(c,d+1,this.startContainer,this.startOffset);return b?f<=0&&g>=0:f<0&&g>0},isPointInRange:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)>=0&&R(a,b,this.endContainer,this.endOffset)<=0},
// The methods below are non-standard and invented by me.
// Sharing a boundary start-to-end or end-to-start does not count as intersection.
intersectsRange:function(a){return i(this,a,!1)},
// Sharing a boundary start-to-end or end-to-start does count as intersection.
intersectsOrTouchesRange:function(a){return i(this,a,!0)},intersection:function(a){if(this.intersectsRange(a)){var b=R(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=R(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();return b==-1&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d}return null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return R(a.startContainer,a.startOffset,this.startContainer,this.startOffset)==-1&&b.setStart(a.startContainer,a.startOffset),1==R(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new M("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==qa},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,U(a))<=0},containsRange:function(a){var b=this.intersection(a);return null!==b&&a.equals(b)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);if(c.length>0){b.setStart(c[0],0);var d=c.pop();return b.setEnd(d,d.length),this.containsRange(b)}return this.containsNodeContents(a)},getNodes:function(a,b){return z(this),n(this,a,b)},getDocument:function(){return d(this)},collapseBefore:function(a){this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){this.setStartAfter(a),this.collapse(!0)},getBookmark:function(b){var c=d(this),e=a.createRange(c);b=b||J.getBody(c),e.selectNodeContents(b);var f=this.intersection(e),g=0,h=0;return f&&(e.setEnd(f.startContainer,f.startOffset),g=e.toString().length,h=g+f.toString().length),{start:g,end:h,containerNode:b}},moveToBookmark:function(a){var b=a.containerNode,c=0;this.setStart(b,0),this.collapse(!0);for(var d,e,f,g,h=[b],i=!1,j=!1;!j&&(d=h.pop());)if(3==d.nodeType)e=c+d.length,!i&&a.start>=c&&a.start<=e&&(this.setStart(d,a.start-c),i=!0),i&&a.end>=c&&a.end<=e&&(this.setEnd(d,a.end-c),j=!0),c=e;else for(g=d.childNodes,f=g.length;f--;)h.push(g[f])},getName:function(){return"DomRange"},equals:function(a){return I.rangesEqual(this,a)},isValid:function(){return y(this)},inspect:function(){return o(this)},detach:function(){}}),F(I,H),K.extend(I,{rangeProperties:ia,RangeIterator:p,copyComparisonConstants:D,createPrototypeRange:F,inspect:o,toHtml:B,getRangeDocument:d,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=I}),/*----------------------------------------------------------------------------------------------------------------*/
// Wrappers for the browser's native DOM Range and/or TextRange implementation
H.createCoreModule("WrappedRange",["DomRange"],function(a,b){var c,d,e=a.dom,f=a.util,g=e.DomPosition,h=a.DomRange,i=e.getBody,j=e.getContentDocument,k=e.isCharacterDataNode;if(/*----------------------------------------------------------------------------------------------------------------*/
a.features.implementsDomRange&&
// This is a wrapper around the browser's native DOM Range. It has two aims:
// - Provide workarounds for specific browser bugs
// - provide convenient extensions, which are inherited from Rangy's DomRange
!function(){function d(a){for(var b,c=m.length;c--;)b=m[c],a[b]=a.nativeRange[b];
// Fix for broken collapsed property in IE 9.
a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function g(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);
// Always set both boundaries for the benefit of IE9 (see issue 35)
(f||g||h)&&(a.setEnd(d,e),a.setStart(b,c))}var k,l,m=h.rangeProperties;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,d(this)},h.createPrototypeRange(c,g),k=c.prototype,k.selectNode=function(a){this.nativeRange.selectNode(a),d(this)},k.cloneContents=function(){return this.nativeRange.cloneContents()},
// Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
// insertNode() is never delegated to the native range.
k.surroundContents=function(a){this.nativeRange.surroundContents(a),d(this)},k.collapse=function(a){this.nativeRange.collapse(a),d(this)},k.cloneRange=function(){return new c(this.nativeRange.cloneRange())},k.refresh=function(){d(this)},k.toString=function(){return this.nativeRange.toString()};
// Create test range and node for feature detection
var n=document.createTextNode("test");i(document).appendChild(n);var o=document.createRange();/*--------------------------------------------------------------------------------------------------------*/
// Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
// correct for it
o.setStart(n,0),o.setEnd(n,0);try{o.setStart(n,1),k.setStart=function(a,b){this.nativeRange.setStart(a,b),d(this)},k.setEnd=function(a,b){this.nativeRange.setEnd(a,b),d(this)},l=function(a){return function(b){this.nativeRange[a](b),d(this)}}}catch(a){k.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}d(this)},k.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}d(this)},l=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(d){this.nativeRange[b](c),this.nativeRange[a](c)}d(this)}}}k.setStartBefore=l("setStartBefore","setEndBefore"),k.setStartAfter=l("setStartAfter","setEndAfter"),k.setEndBefore=l("setEndBefore","setStartBefore"),k.setEndAfter=l("setEndAfter","setStartAfter"),/*--------------------------------------------------------------------------------------------------------*/
// Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
// whether the native implementation can be trusted
k.selectNodeContents=function(a){this.setStartAndEnd(a,0,e.getNodeLength(a))},/*--------------------------------------------------------------------------------------------------------*/
// Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
// constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738
o.selectNodeContents(n),o.setEnd(n,3);var p=document.createRange();p.selectNodeContents(n),p.setEnd(n,4),p.setStart(n,2),o.compareBoundaryPoints(o.START_TO_END,p)==-1&&1==o.compareBoundaryPoints(o.END_TO_START,p)?
// This is the wrong way round, so correct for it
k.compareBoundaryPoints=function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:k.compareBoundaryPoints=function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};/*--------------------------------------------------------------------------------------------------------*/
// Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.
var q=document.createElement("div");q.innerHTML="123";var r=q.firstChild,s=i(document);s.appendChild(q),o.setStart(r,1),o.setEnd(r,2),o.deleteContents(),"13"==r.data&&(
// Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
// extractContents()
k.deleteContents=function(){this.nativeRange.deleteContents(),d(this)},k.extractContents=function(){var a=this.nativeRange.extractContents();return d(this),a}),s.removeChild(q),s=null,/*--------------------------------------------------------------------------------------------------------*/
// Test for existence of createContextualFragment and delegate to it if it exists
f.isHostMethod(o,"createContextualFragment")&&(k.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),/*--------------------------------------------------------------------------------------------------------*/
// Clean up
i(document).removeChild(n),k.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),a.createRange()}}(),a.features.implementsTextRange){/*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
var l=function(a){var b=a.parentElement(),c=a.duplicate();c.collapse(!0);var d=c.parentElement();c=a.duplicate(),c.collapse(!1);var f=c.parentElement(),g=d==f?d:e.getCommonAncestor(d,f);return g==b?g:e.getCommonAncestor(b,g)},m=function(a){return 0==a.compareEndPoints("StartToEnd",a)},n=function(a,b,c,d,f){var h=a.duplicate();h.collapse(c);var i=h.parentElement();
// Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
// similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
if(
// Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
// check for that
e.isOrIsAncestorOf(b,i)||(i=b),!i.canHaveHTML){var j=new g(i.parentNode,e.getNodeIndex(i));return{boundaryPosition:j,nodeInfo:{nodeIndex:j.offset,containerElement:j.node}}}var l=e.getDocument(i).createElement("span");
// Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
// Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
l.parentNode&&e.removeNode(l);for(var m,n,o,p,q,r=c?"StartToStart":"StartToEnd",s=f&&f.containerElement==i?f.nodeIndex:0,t=i.childNodes.length,u=t,v=u;;){if(v==t?i.appendChild(l):i.insertBefore(l,i.childNodes[v]),h.moveToElementText(l),m=h.compareEndPoints(r,a),0==m||s==u)break;if(m==-1){if(u==s+1)
// We know the endth child node is after the range boundary, so we must be done.
break;s=v}else u=u==s+1?s:v;v=Math.floor((s+u)/2),i.removeChild(l)}if(
// We've now reached or gone past the boundary of the text range we're interested in
// so have identified the node we want
q=l.nextSibling,m==-1&&q&&k(q)){
// This is a character data node (text, comment, cdata). The working range is collapsed at the start of
// the node containing the text range's boundary, so we move the end of the working range to the
// boundary point and measure the length of its text to get the boundary's offset within the node.
h.setEndPoint(c?"EndToStart":"EndToEnd",a);var w;if(/[\r\n]/.test(q.data)){/*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
var x=h.duplicate(),y=x.text.replace(/\r\n/g,"\r").length;for(w=x.moveStart("character",y);(m=x.compareEndPoints("StartToEnd",x))==-1;)w++,x.moveStart("character",1)}else w=h.text.length;p=new g(q,w)}else
// If the boundary immediately follows a character data node and this is the end boundary, we should favour
// a position within that, and likewise for a start boundary preceding a character data node
n=(d||!c)&&l.previousSibling,o=(d||c)&&l.nextSibling,p=o&&k(o)?new g(o,0):n&&k(n)?new g(n,n.data.length):new g(i,e.getNodeIndex(l));
// Clean up
return e.removeNode(l),{boundaryPosition:p,nodeInfo:{nodeIndex:v,containerElement:i}}},o=function(a,b){var c,d,f,g,h=a.offset,j=e.getDocument(a.node),l=i(j).createTextRange(),m=k(a.node);
// Position the range immediately before the node containing the boundary
// Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
// the element rather than immediately before or after it
// insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
// for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
// Clean up
// Move the working range to the text offset, if required
return m?(c=a.node,d=c.parentNode):(g=a.node.childNodes,c=h<g.length?g[h]:null,d=a.node),f=j.createElement("span"),f.innerHTML="&#feff;",c?d.insertBefore(f,c):d.appendChild(f),l.moveToElementText(f),l.collapse(!b),d.removeChild(f),m&&l[b?"moveStart":"moveEnd"]("character",h),l};/*------------------------------------------------------------------------------------------------------------*/
// This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
// prototype
d=function(a){this.textRange=a,this.refresh()},d.prototype=new h(document),d.prototype.refresh=function(){var a,b,c,d=l(this.textRange);m(this.textRange)?b=a=n(this.textRange,d,!0,!0).boundaryPosition:(c=n(this.textRange,d,!0,!1),a=c.boundaryPosition,
// An optimization used here is that if the start and end boundaries have the same parent element, the
// search scope for the end boundary can be limited to exclude the portion of the element that precedes
// the start boundary
b=n(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},h.copyComparisonConstants(d);var p=function(a){if(a.collapsed)return o(new g(a.startContainer,a.startOffset),!0);var b=o(new g(a.startContainer,a.startOffset),!0),c=o(new g(a.endContainer,a.endOffset),!1),d=i(h.getRangeDocument(a)).createTextRange();return d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d};
// IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
// implementation to use by default.
if(d.rangeToTextRange=p,d.prototype.toTextRange=function(){return p(this)},a.WrappedTextRange=d,!a.features.implementsDomRange||a.config.preferTextRange){
// Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
var q=function(a){return a("return this;")()}(Function);"undefined"==typeof q.Range&&(q.Range=d),a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),i(a).createTextRange()},a.WrappedRange=d}}a.createRange=function(c){return c=j(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=j(a,b,"createRangyRange"),new h(a)},f.createAliasForDeprecatedMethod(a,"createIframeRange","createRange"),f.createAliasForDeprecatedMethod(a,"createIframeRangyRange","createRangyRange"),a.addShimListener(function(b){var c=b.document;"undefined"==typeof c.createRange&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),/*----------------------------------------------------------------------------------------------------------------*/
// This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
// in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
H.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(a,b){
// Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
// "forward" or "forwards") or a Boolean (true for backwards).
function c(a){return"string"==typeof a?/^backward(s)?$/i.test(a):!!a}function d(a,c){if(a){if(C.isWindow(a))return a;if(a instanceof r)return a.win;var d=C.getContentDocument(a,b,c);return C.getWindow(d)}return window}function e(a){return d(a,"getWinSelection").getSelection()}function f(a){return d(a,"getDocSelection").document.selection}function g(a){var b=!1;return a.anchorNode&&(b=1==C.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b}function h(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function i(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function j(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function k(b){var c;return b instanceof F?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof G?c=b.nativeRange:J.implementsDomRange&&b instanceof C.getWindow(b.startContainer).Range&&(c=b),c}function l(a){if(!a.length||1!=a[0].nodeType)return!1;for(var b=1,c=a.length;b<c;++b)if(!C.isAncestorOf(a[0],a[b]))return!1;return!0}function m(a){var c=a.getNodes();if(!l(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}
// Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
function n(a){return!!a&&"undefined"!=typeof a.text}function o(a,b){
// Create a Range from the selected TextRange
var c=new G(b);a._ranges=[c],h(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function p(b){if(
// Update the wrapped selection based on what's now in the native selection
b._ranges.length=0,"None"==b.docSelection.type)j(b);else{var c=b.docSelection.createRange();if(n(c))
// This case (where the selection type is "Control" and calling createRange() on the selection returns
// a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
// ControlRange have been removed from the ControlRange and removed from the document.
o(b,c);else{b.rangeCount=c.length;for(var d,e=L(c.item(0)),f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,h(b,b._ranges[b.rangeCount-1],!1)}}}function q(a,c){for(var d=a.docSelection.createRange(),e=m(c),f=L(d.item(0)),g=M(f).createControlRange(),h=0,i=d.length;h<i;++h)g.add(d.item(h));try{g.add(e)}catch(a){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}g.select(),
// Update the wrapped selection based on what's now in the native selection
p(a)}function r(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function s(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function t(a,b){for(var c,d,e=ba.length;e--;)if(c=ba[e],d=c.selection,"deleteAll"==b)s(d);else if(c.win==a)return"delete"==b?(ba.splice(e,1),!0):d;return"deleteAll"==b&&(ba.length=0),null}function u(a,c){for(var d,e=L(c[0].startContainer),f=M(e).createControlRange(),g=0,h=c.length;g<h;++g){d=m(c[g]);try{f.add(d)}catch(a){throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select(),
// Update the wrapped selection based on what's now in the native selection
p(a)}function v(a,b){if(a.win.document!=L(b))throw new H("WRONG_DOCUMENT_ERR")}function w(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function x(a){var b=[],c=new I(a.anchorNode,a.anchorOffset),d=new I(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var f=0,g=a.rangeCount;f<g;++f)b[f]=F.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.config.checkSelectionRanges=!0;var y,z,A="boolean",B="number",C=a.dom,D=a.util,E=D.isHostMethod,F=a.DomRange,G=a.WrappedRange,H=a.DOMException,I=C.DomPosition,J=a.features,K="Control",L=C.getDocument,M=C.getBody,N=F.rangesEqual,O=E(window,"getSelection"),P=D.isHostObject(document,"selection");J.implementsWinGetSelection=O,J.implementsDocSelection=P;var Q=P&&(!O||a.config.preferTextRange);if(Q)y=f,a.isSelectionValid=function(a){var b=d(a,"isSelectionValid").document,c=b.selection;
// Check whether the selection TextRange is actually contained within the correct document
return"None"!=c.type||L(c.createRange().parentElement())==b};else{if(!O)return b.fail("Neither document.selection or window.getSelection() detected."),!1;y=e,a.isSelectionValid=function(){return!0}}a.getNativeSelection=y;var R=y();
// In Firefox, the selection is null in an iframe with display: none. See issue #138.
if(!R)return b.fail("Native selection was null (possibly issue 138?)"),!1;var S=a.createNativeRange(document),T=M(document),U=D.areHostProperties(R,["anchorNode","focusNode","anchorOffset","focusOffset"]);J.selectionHasAnchorAndFocus=U;
// Test for existence of native selection extend() method
var V=E(R,"extend");J.selectionHasExtend=V;
// Test if rangeCount exists
var W=typeof R.rangeCount==B;J.selectionHasRangeCount=W;var X=!1,Y=!0,Z=V?function(b,c){var d=F.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.addRange(k(e)),b.extend(c.startContainer,c.startOffset)}:null;D.areHostMethods(R,["addRange","getRangeAt","removeAllRanges"])&&typeof R.rangeCount==B&&J.implementsDomRange&&!function(){
// Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
// performed on the current document's selection. See issue 109.
// Note also that if a selection previously existed, it is wiped and later restored by these tests. This
// will result in the selection direction begin reversed if the original selection was backwards and the
// browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
var b=window.getSelection();if(b){for(var c=b.rangeCount,d=c>1,e=[],f=g(b),h=0;h<c;++h)e[h]=b.getRangeAt(h);
// Create some test elements
var i=C.createTestElement(document,"",!1),j=i.appendChild(document.createTextNode("   ")),k=document.createRange();
// Test whether the native selection is capable of supporting multiple ranges.
if(k.setStart(j,1),k.collapse(!0),b.removeAllRanges(),b.addRange(k),Y=1==b.rangeCount,b.removeAllRanges(),!d){
// Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
// console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
// nothing we can do about this while retaining the feature test so we have to resort to a browser
// sniff. I'm not happy about it. See
// https://code.google.com/p/chromium/issues/detail?id=399791
var l=window.navigator.appVersion.match(/Chrome\/(.*?) /);if(l&&parseInt(l[1])>=36)X=!1;else{var m=k.cloneRange();k.setStart(j,0),m.setEnd(j,3),m.setStart(j,2),b.addRange(k),b.addRange(m),X=2==b.rangeCount}}for(
// Clean up
C.removeNode(i),b.removeAllRanges(),h=0;h<c;++h)0==h&&f?Z?Z(b,e[h]):(a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"),b.addRange(e[h])):b.addRange(e[h])}}(),J.selectionSupportsMultipleRanges=X,J.collapsedNonEditableSelectionsSupported=Y;
// ControlRanges
var $,_=!1;T&&E(T,"createControlRange")&&($=T.createControlRange(),D.areHostProperties($,["item","add"])&&(_=!0)),J.implementsControlRange=_,
// Selection collapsedness
z=U?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return!!a.rangeCount&&a.getRangeAt(a.rangeCount-1).collapsed};var aa;E(R,"getRangeAt")?
// try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
// Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
// lesson to us all, especially me.
aa=function(a,b){try{return a.getRangeAt(b)}catch(a){return null}}:U&&(aa=function(b){var c=L(b.anchorNode),d=a.createRange(c);
// Handle the case when the selection was selected backwards (from the end to the start in the
// document)
return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d}),r.prototype=a.selectionPrototype;var ba=[],ca=function(a){
// Check if the parameter is a Rangy Selection object
if(a&&a instanceof r)return a.refresh(),a;a=d(a,"getNativeSelection");var b=t(a),c=y(a),e=P?f(a):null;return b?(b.nativeSelection=c,b.docSelection=e,b.refresh()):(b=new r(c,e,a),ba.push({win:a,selection:b})),b};a.getSelection=ca,D.createAliasForDeprecatedMethod(a,"getIframeSelection","getSelection");var da=r.prototype;
// Selecting a range
if(!Q&&U&&D.areHostMethods(R,["removeAllRanges","addRange"])){da.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),j(this)};var ea=function(a,b){Z(a.nativeSelection,b),a.refresh()};W?da.addRange=function(b,d){if(_&&P&&this.docSelection.type==K)q(this,b);else if(c(d)&&V)ea(this,b);else{var e;X?e=this.rangeCount:(this.removeAllRanges(),e=0);
// Clone the native range so that changing the selected range does not affect the selection.
// This is contrary to the spec but is the only way to achieve consistency between browsers. See
// issue 80.
var f=k(b).cloneRange();try{this.nativeSelection.addRange(f)}catch(a){}if(
// Check whether adding the range was successful
this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==e+1){
// The range was added successfully
// Check whether the range that we added to the selection is reflected in the last range extracted from
// the selection
if(a.config.checkSelectionRanges){var g=aa(this.nativeSelection,this.rangeCount-1);g&&!N(g,b)&&(
// Happens in WebKit with, for example, a selection placed at the start of a text node
b=new G(g))}this._ranges[this.rangeCount-1]=b,h(this,b,ha(this.nativeSelection)),this.isCollapsed=z(this)}else
// The range was not added successfully. The simplest thing is to refresh
this.refresh()}}:da.addRange=function(a,b){c(b)&&V?ea(this,a):(this.nativeSelection.addRange(k(a)),this.refresh())},da.setRanges=function(a){if(_&&P&&a.length>1)u(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;b<c;++b)this.addRange(a[b])}}}else{if(!(E(R,"empty")&&E(S,"select")&&_&&Q))return b.fail("No means of selecting a Range or TextRange was found"),!1;da.removeAllRanges=function(){
// Added try/catch as fix for issue #21
try{
// Check for empty() not working (issue #24)
if(this.docSelection.empty(),"None"!=this.docSelection.type){
// Work around failure to empty a control selection by instead selecting a TextRange and then
// calling empty()
var a;if(this.anchorNode)a=L(this.anchorNode);else if(this.docSelection.type==K){var b=this.docSelection.createRange();b.length&&(a=L(b.item(0)))}if(a){var c=M(a).createTextRange();c.select(),this.docSelection.empty()}}}catch(a){}j(this)},da.addRange=function(b){this.docSelection.type==K?q(this,b):(a.WrappedTextRange.rangeToTextRange(b).select(),this._ranges[0]=b,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,h(this,b,!1))},da.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?u(this,a):b&&this.addRange(a[0])}}da.getRangeAt=function(a){if(a<0||a>=this.rangeCount)throw new H("INDEX_SIZE_ERR");
// Clone the range to preserve selection-range independence. See issue 80.
return this._ranges[a].cloneRange()};var fa;if(Q)fa=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=M(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==K?p(b):n(c)?o(b,c):j(b)};else if(E(R,"getRangeAt")&&typeof R.rangeCount==B)fa=function(b){if(_&&P&&b.docSelection.type==K)p(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;c<d;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));h(b,b._ranges[b.rangeCount-1],ha(b.nativeSelection)),b.isCollapsed=z(b)}else j(b)};else{if(!U||typeof R.isCollapsed!=A||typeof S.collapsed!=A||!J.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;fa=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=aa(c,0),a._ranges=[b],a.rangeCount=1,i(a),a.isCollapsed=z(a)):j(a)}}da.refresh=function(a){var b=a?this._ranges.slice(0):null,c=this.anchorNode,d=this.anchorOffset;if(fa(this),a){
// Check the range count first
var e=b.length;if(e!=this._ranges.length)return!0;
// Now check the direction. Checking the anchor position is the same is enough since we're checking all the
// ranges after this
if(this.anchorNode!=c||this.anchorOffset!=d)return!0;
// Finally, compare each range in turn
for(;e--;)if(!N(b[e],this._ranges[e]))return!0;return!1}};
// Removal of a single range
var ga=function(a,b){var c=a.getAllRanges();a.removeAllRanges();for(var d=0,e=c.length;d<e;++d)N(b,c[d])||a.addRange(c[d]);a.rangeCount||j(a)};_&&P?da.removeRange=function(a){if(this.docSelection.type==K){for(var b,c=this.docSelection.createRange(),d=m(a),e=L(c.item(0)),f=M(e).createControlRange(),g=!1,h=0,i=c.length;h<i;++h)b=c.item(h),b!==d||g?f.add(c.item(h)):g=!0;f.select(),
// Update the wrapped selection based on what's now in the native selection
p(this)}else ga(this,a)}:da.removeRange=function(a){ga(this,a)};
// Detecting if a selection is backward
var ha;!Q&&U&&J.implementsDomRange?(ha=g,da.isBackward=function(){return ha(this)}):ha=da.isBackward=function(){return!1},
// Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
da.isBackwards=da.isBackward,
// Selection stringifier
// This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
// The current spec does not yet define this method.
da.toString=function(){for(var a=[],b=0,c=this.rangeCount;b<c;++b)a[b]=""+this._ranges[b];return a.join("")},
// No current browser conforms fully to the spec for this method, so Rangy's own method is always used
da.collapse=function(b,c){v(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},da.collapseToStart=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},da.collapseToEnd=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},
// The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
// specified so the native implementation is never used by Rangy.
da.selectAllChildren=function(b){v(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.setSingleRange(c)},da.deleteFromDocument=function(){
// Sepcial behaviour required for IE's control selections
if(_&&P&&this.docSelection.type==K){for(var a,b=this.docSelection.createRange();b.length;)a=b.item(0),b.remove(a),C.removeNode(a);this.refresh()}else if(this.rangeCount){var c=this.getAllRanges();if(c.length){this.removeAllRanges();for(var d=0,e=c.length;d<e;++d)c[d].deleteContents();
// The spec says nothing about what the selection should contain after calling deleteContents on each
// range. Firefox moves the selection to where the final selected range was, so we emulate that
this.addRange(c[e-1])}}},
// The following are non-standard extensions
da.eachRange=function(a,b){for(var c=0,d=this._ranges.length;c<d;++c)if(a(this.getRangeAt(c)))return b},da.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},da.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},da.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c.push(d[a].apply(d,b||[]))}),c},da.setStart=w(!0),da.setEnd=w(!1),
// Add select() method to Range prototype. Any existing selection will be removed.
a.rangePrototype.select=function(a){ca(this.getDocument()).setSingleRange(this,a)},da.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&1==b.length?this.addRange(b[0],"backward"):this.setRanges(b)},da.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)||!1},da.getBookmark=function(a){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[a])}},da.moveToBookmark=function(b){for(var c,d,e=[],f=0;c=b.rangeBookmarks[f++];)d=a.createRange(this.win),d.moveToBookmark(c),e.push(d);b.backward?this.setSingleRange(e[0],"backward"):this.setRanges(e)},da.saveRanges=function(){return{backward:this.isBackward(),ranges:this.callMethodOnEachRange("cloneRange")}},da.restoreRanges=function(a){this.removeAllRanges();for(var b,c=0;b=a.ranges[c];++c)this.addRange(b,a.backward&&0==c)},da.toHtml=function(){var a=[];return this.eachRange(function(b){a.push(F.toHtml(b))}),a.join("")},J.implementsTextRange&&(da.getNativeTextRange=function(){var c;if(c=this.docSelection){var d=c.createRange();if(n(d))return d;throw b.createError("getNativeTextRange: selection is a control selection")}if(this.rangeCount>0)return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));throw b.createError("getNativeTextRange: selection contains no range")}),da.getName=function(){return"WrappedSelection"},da.inspect=function(){return x(this)},da.detach=function(){t(this.win,"delete"),s(this)},r.detachAll=function(){t(null,"deleteAll")},r.inspect=x,r.isDirectionBackward=c,a.Selection=r,a.selectionPrototype=da,a.addShimListener(function(a){"undefined"==typeof a.getSelection&&(a.getSelection=function(){return ca(a)}),a=null})});/*----------------------------------------------------------------------------------------------------------------*/
// Wait for document to load before initializing
var M=!1,N=function(a){M||(M=!0,!H.initialized&&H.config.autoInitialize&&l())};
// Test whether the document has already been loaded and initialize immediately if so
// Add a fallback in case the DOMContentLoaded event isn't supported
return F&&("complete"==document.readyState?N():(a(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",N,!1),J(window,"load",N))),H},this),/**
 * Selection save and restore module for Rangy.
 * Saves and restores user selections using marker invisible elements in the DOM.
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module with a dependency on Rangy.
define(["./rangy-core"],a):"undefined"!=typeof module&&"object"==typeof exports?
// Node/CommonJS style
module.exports=a(require("rangy")):
// No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
a(b.rangy)}(function(a){return a.createModule("SaveRestore",["WrappedRange"],function(a,b){function c(a,b){return(b||document).getElementById(a)}function d(a,b){var c,d="selectionBoundary_"+ +new Date+"_"+(""+Math.random()).slice(2),e=o.getDocument(a.startContainer),f=a.cloneRange();
// Create the marker element containing a single invisible character using DOM methods and insert it
return f.collapse(b),c=e.createElement("span"),c.id=d,c.style.lineHeight="0",c.style.display="none",c.className="rangySelectionBoundary",c.appendChild(e.createTextNode(r)),f.insertNode(c),c}function e(a,d,e,f){var g=c(e,a);g?(d[f?"setStartBefore":"setEndBefore"](g),p(g)):b.warn("Marker element has been removed. Cannot restore selection.")}function f(a,b){return b.compareBoundaryPoints(a.START_TO_START,a)}function g(b,c){var e,f,g=a.DomRange.getRangeDocument(b),h=b.toString(),i=q(c);return b.collapsed?(f=d(b,!1),{document:g,markerId:f.id,collapsed:!0}):(f=d(b,!1),e=d(b,!0),{document:g,startMarkerId:e.id,endMarkerId:f.id,collapsed:!1,backward:i,toString:function(){return"original text: '"+h+"', new text: '"+b.toString()+"'"}})}function h(d,f){var g=d.document;"undefined"==typeof f&&(f=!0);var h=a.createRange(g);if(d.collapsed){var i=c(d.markerId,g);if(i){i.style.display="inline";var j=i.previousSibling;
// Workaround for issue 17
j&&3==j.nodeType?(p(i),h.collapseToPoint(j,j.length)):(h.collapseBefore(i),p(i))}else b.warn("Marker element has been removed. Cannot restore selection.")}else e(g,h,d.startMarkerId,!0),e(g,h,d.endMarkerId,!1);return f&&h.normalizeBoundaries(),h}function i(b,d){var e,h,i=[],j=q(d);
// Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
b=b.slice(0),b.sort(f);for(var k=0,l=b.length;k<l;++k)i[k]=g(b[k],j);
// Now that all the markers are in place and DOM manipulation over, adjust each range's boundaries to lie
// between its markers
for(k=l-1;k>=0;--k)e=b[k],h=a.DomRange.getRangeDocument(e),e.collapsed?e.collapseAfter(c(i[k].markerId,h)):(e.setEndBefore(c(i[k].endMarkerId,h)),e.setStartAfter(c(i[k].startMarkerId,h)));return i}function j(c){if(!a.isSelectionValid(c))return b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),null;var d=a.getSelection(c),e=d.getAllRanges(),f=1==e.length&&d.isBackward(),g=i(e,f);
// Ensure current selection is unaffected
return f?d.setSingleRange(e[0],f):d.setRanges(e),{win:c,rangeInfos:g,restored:!1}}function k(a){for(var b=[],c=a.length,d=c-1;d>=0;d--)b[d]=h(a[d],!0);return b}function l(b,c){if(!b.restored){var d=b.rangeInfos,e=a.getSelection(b.win),f=k(d),g=d.length;1==g&&c&&a.features.selectionHasExtend&&d[0].backward?(e.removeAllRanges(),e.addRange(f[0],!0)):e.setRanges(f),b.restored=!0}}function m(a,b){var d=c(b,a);d&&p(d)}function n(a){for(var b,c=a.rangeInfos,d=0,e=c.length;d<e;++d)b=c[d],b.collapsed?m(a.doc,b.markerId):(m(a.doc,b.startMarkerId),m(a.doc,b.endMarkerId))}var o=a.dom,p=o.removeNode,q=a.Selection.isDirectionBackward,r="\ufeff";a.util.extend(a,{saveRange:g,restoreRange:h,saveRanges:i,restoreRanges:k,saveSelection:j,restoreSelection:l,removeMarkerElement:m,removeMarkers:n})}),a},this);

/**
 * @license AngularJS v1.3.10
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(a,b,c){"use strict";/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */
/*
 * HTML Parser By Misko Hevery (misko@hevery.com)
 * based on:  HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 */
/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string, however, since our parser is more strict than a typical browser
 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getInnerHtml()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */
function d(){this.$get=["$$sanitizeUri",function(a){return function(b){"undefined"!=typeof arguments[1]&&(arguments[1].version="taSanitize");var c=[];return g(b,l(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=l(c,b.noop);return d.chars(a),c.join("")}function f(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}/**
 * @example
 * htmlParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * @param {string} html string
 * @param {object} handler
 */
function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),D[d])for(;k.last()&&E[k.last()];)e("",k.last());C[d]&&k.last()==d&&e("",d),g=z[d]||!!g,g||k.push(d);var i={};f.replace(p,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))
// Find the closest opened tag of the same type
for(f=k.length-1;f>=0&&k[f]!=d;f--);if(f>=0){
// Close all the open elements, up the stack
for(e=k.length-1;e>=f;e--)c.end&&c.end(k[e]);
// Remove the open elements from the stack
k.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,k=[],l=a;for(k.last=function(){return k[k.length-1]};a;){
// Make sure we're not in a script or style element
if(j="",g=!0,k.last()&&G[k.last()])a=a.replace(new RegExp("([^]*)<\\s*\\/\\s*"+k.last()+"[^>]*>","i"),function(a,b){return b=b.replace(s,"$1").replace(v,"$1"),c.chars&&c.chars(h(b)),""}),e("",k.last());else{
// White space
if(y.test(a)){if(i=a.match(y)){i[0];c.whitespace&&c.whitespace(i[0]),a=a.replace(i[0],""),g=!1}}else t.test(a)?(i=a.match(t),i&&(c.comment&&c.comment(i[1]),a=a.replace(i[0],""),g=!1)):u.test(a)?(i=a.match(u),i&&(a=a.replace(i[0],""),g=!1)):r.test(a)?(i=a.match(o),i&&(a=a.substring(i[0].length),i[0].replace(o,e),g=!1)):q.test(a)&&(i=a.match(n),i?(
// We only have a valid start-tag if there is a '>'.
i[4]&&(a=a.substring(i[0].length),i[0].replace(n,d)),g=!1):(
// no ending tag found --- this piece should be encoded as an entity.
j+="<",a=a.substring(1)));g&&(f=a.indexOf("<"),j+=f<0?a:a.substring(0,f),a=f<0?"":a.substring(f),c.chars&&c.chars(h(j)))}if(a==l)throw m("badparse","The sanitizer was unable to parse the following block of html: {0}",a);l=a}
// Clean up any remaining tags
e()}/**
 * decodes all entities into regular string
 * @param value
 * @returns {string} A string with decoded entities.
 */
function h(a){if(!a)return"";
// Note: IE8 does not preserve spaces at the start/end of innerHTML
// so we must capture them and reattach them afterward
var b=N.exec(a),c=b[1],d=b[3],e=b[2];
// innerText depends on styling as it doesn't display hidden elements.
// Therefore, it's better to use textContent not to cause unnecessary
// reflows. However, IE<9 don't support textContent so the innerText
// fallback is necessary.
return e&&(M.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in M?M.textContent:M.innerText),c+e+d}/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function i(a){return a.replace(/&/g,"&amp;").replace(w,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(x,function(a){
// unsafe chars are: \u0000-\u001f \u007f-\u009f \u00ad \u0600-\u0604 \u070f \u17b4 \u17b5 \u200c-\u200f \u2028-\u202f \u2060-\u206f \ufeff \ufff0-\uffff from jslint.com/lint.html
// decimal values are: 0-31, 127-159, 173, 1536-1540, 1807, 6068, 6069, 8204-8207, 8232-8239, 8288-8303, 65279, 65520-65535
var b=a.charCodeAt(0);
// if unsafe character encode
// if unsafe character encode
return b<=159||173==b||b>=1536&&b<=1540||1807==b||6068==b||6069==b||b>=8204&&b<=8207||b>=8232&&b<=8239||b>=8288&&b<=8303||65279==b||b>=65520&&b<=65535?"&#"+b+";":a}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}
// Custom logic for accepting certain style options only - textAngular
// Currently allows only the color, background-color, text-align, float, width and height attributes
// all other attributes should be easily done through classes.
function j(a){var c="",d=a.split(";");return b.forEach(d,function(a){var d=a.split(":");if(2==d.length){var e=O(b.lowercase(d[0])),a=O(b.lowercase(d[1]));(("color"===e||"background-color"===e)&&(a.match(/^rgb\([0-9%,\. ]*\)$/i)||a.match(/^rgba\([0-9%,\. ]*\)$/i)||a.match(/^hsl\([0-9%,\. ]*\)$/i)||a.match(/^hsla\([0-9%,\. ]*\)$/i)||a.match(/^#[0-9a-f]{3,6}$/i)||a.match(/^[a-z]*$/i))||"text-align"===e&&("left"===a||"right"===a||"center"===a||"justify"===a)||"text-decoration"===e&&("underline"===a||"line-through"===a)||"font-weight"===e&&"bold"===a||"font-style"===e&&"italic"===a||"float"===e&&("left"===a||"right"===a||"none"===a)||"vertical-align"===e&&("baseline"===a||"sub"===a||"super"===a||"test-top"===a||"text-bottom"===a||"middle"===a||"top"===a||"bottom"===a||a.match(/[0-9]*(px|em)/)||a.match(/[0-9]+?%/))||"font-size"===e&&("xx-small"===a||"x-small"===a||"small"===a||"medium"===a||"large"===a||"x-large"===a||"xx-large"===a||"larger"===a||"smaller"===a||a.match(/[0-9]*\.?[0-9]*(px|em|rem|mm|q|cm|in|pt|pc|%)/))||("width"===e||"height"===e)&&a.match(/[0-9\.]*(px|em|rem|%)/)||// Reference #520
"direction"===e&&a.match(/^ltr|rtl|initial|inherit$/))&&(c+=e+": "+a+";")}}),c}
// this function is used to manually allow specific attributes on specific tags with certain prerequisites
function k(a,b,c,d){
// catch the div placeholder for the iframe replacement
return!("img"!==a||!b["ta-insert-video"]||"ta-insert-video"!==c&&"allowfullscreen"!==c&&"frameborder"!==c&&("contenteditable"!==c||"false"!==d))}/**
 * create an HTML/XML writer which writes to buffer
 * @param {Array} buf use buf.jain('') to get out sanitized html string
 * @returns {object} in the form of {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * }
 */
function l(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&G[a]&&(d=a),d||H[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,g){var h=b.lowercase(g),l="img"===a&&"src"===h||"background"===h;("style"===h&&""!==(d=j(d))||k(a,f,h,d)||L[h]===!0&&(I[h]!==!0||c(d,l)))&&(e(" "),e(g),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},comment:function(a){e(a)},whitespace:function(a){e(i(a))},end:function(a){a=b.lowercase(a),d||H[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var m=b.$$minErr("$sanitize"),n=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,o=/^<\/\s*([\w:-]+)[^>]*>/,p=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,q=/^</,r=/^<\//,s=/<!--(.*?)-->/g,t=/(^<!--.*?-->)/,u=/<!DOCTYPE([^>]*?)>/i,v=/<!\[CDATA\[(.*?)]]>/g,w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
// Match everything outside of normal chars and " (quote character)
x=/([^\#-~| |!])/g,y=/^(\s+)/,z=f("area,br,col,hr,img,wbr,input"),A=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),B=f("rp,rt"),C=b.extend({},B,A),D=b.extend({},A,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),E=b.extend({},B,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),F=f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),G=f("script,style"),H=b.extend({},z,D,E,C,F),I=f("background,cite,href,longdesc,src,usemap,xlink:href"),J=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,id,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),K=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),L=b.extend({},I,K,J),M=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/,O=function(){
// native trim is way faster: http://jsperf.com/angular-trim-test
// but IE doesn't have it... :-(
// TODO: we should move this into IE/ES5 polyfill
// native trim is way faster: http://jsperf.com/angular-trim-test
// but IE doesn't have it... :-(
// TODO: we should move this into IE/ES5 polyfill
return String.prototype.trim?function(a){return b.isString(a)?a.trim():a}:function(a){return b.isString(a)?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}}();
// define ngSanitize module and register $sanitize service
b.module("ngSanitize",[]).provider("$sanitize",d),/* global sanitizeText: false */
/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @returns {string} Html-linkified text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js">
     <file name="index.html">
       <script>
         angular.module('linkyExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.snippet =
               'Pretty text with some links:\n'+
               'http://angularjs.org/,\n'+
               'mailto:us@somewhere.org,\n'+
               'another@somewhere.org,\n'+
               'and one more: ftp://127.0.0.1/.';
             $scope.snippetWithTarget = 'http://angularjs.org/';
           }]);
       </script>
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Filter</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });
     </file>
   </example>
 */
b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)
// We can not end in these as they are sometimes found at the end of the sentence
k=j[0],
// if we did not match ftp/http/www/mailto then assume mailto
j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);

!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define("textAngular",["rangy","rangy/lib/rangy-selectionsaverestore"],function(c,d){return a["textAngular.name"]=b(c,d)}):"object"==typeof exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=b(require("rangy"),require("rangy/lib/rangy-selectionsaverestore")):a.textAngular=b(rangy)}(this,function(a){
// tests against the current jqLite/jquery implementation if this can be an element
function b(a){try{return 0!==angular.element(a).length}catch(a){return!1}}/*
    A tool definition is an object with the following key/value parameters:
        action: [function(deferred, restoreSelection)]
                a function that is executed on clicking on the button - this will allways be executed using ng-click and will
                overwrite any ng-click value in the display attribute.
                The function is passed a deferred object ($q.defer()), if this is wanted to be used `return false;` from the action and
                manually call `deferred.resolve();` elsewhere to notify the editor that the action has finished.
                restoreSelection is only defined if the rangy library is included and it can be called as `restoreSelection()` to restore the users
                selection in the WYSIWYG editor.
        display: [string]?
                Optional, an HTML element to be displayed as the button. The `scope` of the button is the tool definition object with some additional functions
                If set this will cause buttontext and iconclass to be ignored
        class: [string]?
                Optional, if set will override the taOptions.classes.toolbarButton class.
        buttontext: [string]?
                if this is defined it will replace the contents of the element contained in the `display` element
        iconclass: [string]?
                if this is defined an icon (<i>) will be appended to the `display` element with this string as it's class
        tooltiptext: [string]?
                Optional, a plain text description of the action, used for the title attribute of the action button in the toolbar by default.
        activestate: [function(commonElement)]?
                this function is called on every caret movement, if it returns true then the class taOptions.classes.toolbarButtonActive
                will be applied to the `display` element, else the class will be removed
        disabled: [function()]?
                if this function returns true then the tool will have the class taOptions.classes.disabled applied to it, else it will be removed
    Other functions available on the scope are:
        name: [string]
                the name of the tool, this is the first parameter passed into taRegisterTool
        isDisabled: [function()]
                returns true if the tool is disabled, false if it isn't
        displayActiveToolClass: [function(boolean)]
                returns true if the tool is 'active' in the currently focussed toolbar
        onElementSelect: [Object]
                This object contains the following key/value pairs and is used to trigger the ta-element-select event
                element: [String]
                    an element name, will only trigger the onElementSelect action if the tagName of the element matches this string
                filter: [function(element)]?
                    an optional filter that returns a boolean, if true it will trigger the onElementSelect.
                action: [function(event, element, editorScope)]
                    the action that should be executed if the onElementSelect function runs
*/
// name and toolDefinition to add into the tools available to be added on the toolbar
function c(a,c){if(!a||""===a||e.hasOwnProperty(a))throw"textAngular Error: A unique name is required for a Tool Definition";if(c.display&&(""===c.display||!b(c.display))||!c.display&&!c.buttontext&&!c.iconclass)throw'textAngular Error: Tool Definition for "'+a+'" does not have a valid display/iconclass/buttontext value';e[a]=c}
// usage is:
// var t0 = performance.now();
// doSomething();
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to do something!');
//
// turn html into pure text that shows visiblity
function d(a){var b=document.createElement("DIV");b.innerHTML=a;var c=b.textContent||b.innerText||"";// zero width space
return c.replace("​",""),c=c.trim()}
// setup the global contstant functions for setting up the toolbar
// all tool definitions
var e={};angular.module("textAngularSetup",[]).constant("taRegisterTool",c).value("taTools",e).value("taOptions",{
//////////////////////////////////////////////////////////////////////////////////////
// forceTextAngularSanitize
// set false to allow the textAngular-sanitize provider to be replaced
// with angular-sanitize or a custom provider.
forceTextAngularSanitize:!0,
///////////////////////////////////////////////////////////////////////////////////////
// keyMappings
// allow customizable keyMappings for specialized key boards or languages
//
// keyMappings provides key mappings that are attached to a given commandKeyCode.
// To modify a specific keyboard binding, simply provide function which returns true
// for the event you wish to map to.
// Or to disable a specific keyboard binding, provide a function which returns false.
// Note: 'RedoKey' and 'UndoKey' are internally bound to the redo and undo functionality.
// At present, the following commandKeyCodes are in use:
// 98, 'TabKey', 'ShiftTabKey', 105, 117, 'UndoKey', 'RedoKey'
//
// To map to an new commandKeyCode, add a new key mapping such as:
// {commandKeyCode: 'CustomKey', testForKey: function (event) {
//  if (event.keyCode=57 && event.ctrlKey && !event.shiftKey && !event.altKey) return true;
// } }
// to the keyMappings. This example maps ctrl+9 to 'CustomKey'
// Then where taRegisterTool(...) is called, add a commandKeyCode: 'CustomKey' and your
// tool will be bound to ctrl+9.
//
// To disble one of the already bound commandKeyCodes such as 'RedoKey' or 'UndoKey' add:
// {commandKeyCode: 'RedoKey', testForKey: function (event) { return false; } },
// {commandKeyCode: 'UndoKey', testForKey: function (event) { return false; } },
// to disable them.
//
keyMappings:[],toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},defaultTagAttributes:{a:{target:""}},setup:{
// wysiwyg mode
textEditorSetup:function(a){},
// raw html
htmlEditorSetup:function(a){}},defaultFileDropHandler:/* istanbul ignore next: untestable image processing */
function(a,b){var c=new FileReader;return"image"===a.type.substring(0,5)&&(c.onload=function(){""!==c.result&&b("insertImage",c.result,!0)},c.readAsDataURL(a),!0)}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{
// Parse back out: '<div class="ta-insert-video" ta-insert-video src="' + urlLink + '" allowfullscreen="true" width="300" frameborder="0" height="250"></div>'
// To correct video element. For now only support youtube
selector:"img",customAttribute:"ta-insert-video",renderLogic:function(a){var b=angular.element("<iframe></iframe>"),c=a.prop("attributes");
// loop through element attributes and apply them on iframe
angular.forEach(c,function(a){b.attr(a.name,a.value)}),b.attr("src",b.attr("ta-insert-video")),a.replaceWith(b)}}]).value("taTranslations",{
// moved to sub-elements
//toggleHTML: "Toggle HTML",
//insertImage: "Please enter a image URL to insert",
//insertLink: "Please enter a URL to insert",
//insertVideo: "Please enter a youtube URL to embed",
html:{tooltip:"Toggle html / Rich Text"},
// tooltip for heading - might be worth splitting
heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyFull:{tooltip:"Justify text"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).factory("taToolFunctions",["$window","taTranslations",function(a,b){return{imgOnSelectAction:function(a,b,c){
// setup the editor toolbar
// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic/display
var d=function(){c.updateTaBindtaTextElement(),c.hidePopover()};a.preventDefault(),c.displayElements.popover.css("width","375px");var e=c.displayElements.popoverContainer;e.empty();var f=angular.element('<div class="btn-group" style="padding-right: 6px;">'),g=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');g.on("click",function(a){a.preventDefault(),b.css({width:"100%",height:""}),d()});var h=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');h.on("click",function(a){a.preventDefault(),b.css({width:"50%",height:""}),d()});var i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');i.on("click",function(a){a.preventDefault(),b.css({width:"25%",height:""}),d()});var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');j.on("click",function(a){a.preventDefault(),b.css({width:"",height:""}),d()}),f.append(g),f.append(h),f.append(i),f.append(j),e.append(f),f=angular.element('<div class="btn-group" style="padding-right: 6px;">');var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');k.on("click",function(a){a.preventDefault(),
// webkit
b.css("float","left"),
// firefox
b.css("cssFloat","left"),
// IE < 8
b.css("styleFloat","left"),d()});var l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');l.on("click",function(a){a.preventDefault(),
// webkit
b.css("float","right"),
// firefox
b.css("cssFloat","right"),
// IE < 8
b.css("styleFloat","right"),d()});var m=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');m.on("click",function(a){a.preventDefault(),
// webkit
b.css("float",""),
// firefox
b.css("cssFloat",""),
// IE < 8
b.css("styleFloat",""),d()}),f.append(k),f.append(m),f.append(l),e.append(f),f=angular.element('<div class="btn-group">');var n=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');n.on("click",function(a){a.preventDefault(),b.remove(),d()}),f.append(n),e.append(f),c.showPopover(b),c.showResizeOverlay(b)},aOnSelectAction:function(c,d,e){
// setup the editor toolbar
// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic
c.preventDefault(),e.displayElements.popover.css("width","436px");var f=e.displayElements.popoverContainer;f.empty(),f.css("line-height","28px");var g=angular.element('<a href="'+d.attr("href")+'" target="_blank">'+d.attr("href")+"</a>");g.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),f.append(g);var h=angular.element('<div class="btn-group pull-right">'),i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');i.on("click",function(c){c.preventDefault();var f=a.prompt(b.insertLink.dialogPrompt,d.attr("href"));f&&""!==f&&"http://"!==f&&(d.attr("href",f),e.updateTaBindtaTextElement()),e.hidePopover()}),h.append(i);var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');
// directly before this click event is fired a digest is fired off whereby the reference to $element is orphaned off
j.on("click",function(a){a.preventDefault(),d.replaceWith(d.contents()),e.updateTaBindtaTextElement(),e.hidePopover()}),h.append(j);var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+b.editLink.targetToggle.buttontext+"</button>");"_blank"===d.attr("target")&&k.addClass("active"),k.on("click",function(a){a.preventDefault(),d.attr("target","_blank"===d.attr("target")?"":"_blank"),k.toggleClass("active"),e.updateTaBindtaTextElement()}),h.append(k),f.append(h),e.showPopover(d)},extractYoutubeVideoId:function(a){var b=/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,c=a.match(b);return c&&c[1]||null}}}]).run(["taRegisterTool","$window","taTranslations","taSelection","taToolFunctions","$sanitize","taOptions","$log",function(a,b,c,d,e,f,g,h){
// test for the version of $sanitize that is in use
// You can disable this check by setting taOptions.textAngularSanitize == false
var i={};/* istanbul ignore next, throws error */
if(f("",i),g.forceTextAngularSanitize===!0&&"taSanitize"!==i.version)throw angular.$$minErr("textAngular")("textAngularSetup","The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");a("html",{iconclass:"fa fa-code",tooltiptext:c.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});
// add the Header tools
// convenience functions so that the loop works correctly
var j=function(a){return function(){return this.$editor().queryFormatBlockState(a)}},k=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(b){a(b.toLowerCase(),{buttontext:b.toUpperCase(),tooltiptext:c.heading.tooltip+b.charAt(1),action:k,activeState:j(b.toLowerCase())})}),a("p",{buttontext:"P",tooltiptext:c.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),
// key: pre -> taTranslations[key].tooltip, taTranslations[key].buttontext
a("pre",{buttontext:"pre",tooltiptext:c.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),a("ul",{iconclass:"fa fa-list-ul",tooltiptext:c.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),a("ol",{iconclass:"fa fa-list-ol",tooltiptext:c.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),a("quote",{iconclass:"fa fa-quote-right",tooltiptext:c.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),a("undo",{iconclass:"fa fa-undo",tooltiptext:c.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),a("redo",{iconclass:"fa fa-repeat",tooltiptext:c.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),a("bold",{iconclass:"fa fa-bold",tooltiptext:c.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),a("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:c.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="left"===a.css("text-align")||"left"===a.attr("align")||"right"!==a.css("text-align")&&"center"!==a.css("text-align")&&"justify"!==a.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyLeft")}}),a("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:c.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="right"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyRight")}}),a("justifyFull",{iconclass:"fa fa-align-justify",tooltiptext:c.justifyFull.tooltip,action:function(){return this.$editor().wrapSelection("justifyFull",null)},activeState:function(a){var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="justify"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyFull")}}),a("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:c.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(a){/* istanbul ignore next: */
if(a&&"#document"===a.nodeName)return!1;var b=!1;if(a)
// commonELement.css('text-align') can throw an error 'Cannot read property 'defaultView' of null' in rare conditions
// so we do try catch here...
try{b="center"===a.css("text-align")}catch(a){/* istanbul ignore next: error handler */
//console.log(e);
b=!1}return b=b||this.$editor().queryCommandState("justifyCenter")}}),a("indent",{iconclass:"fa fa-indent",tooltiptext:c.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")},commandKeyCode:"TabKey"}),a("outdent",{iconclass:"fa fa-outdent",tooltiptext:c.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1},commandKeyCode:"ShiftTabKey"}),a("italics",{iconclass:"fa fa-italic",tooltiptext:c.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),a("underline",{iconclass:"fa fa-underline",tooltiptext:c.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),a("strikeThrough",{iconclass:"fa fa-strikethrough",tooltiptext:c.strikeThrough.tooltip,action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),a("clear",{iconclass:"fa fa-ban",tooltiptext:c.clear.tooltip,action:function(a,b){var c;this.$editor().wrapSelection("removeFormat",null);var e=angular.element(d.getSelectionElement());c=d.getAllSelectedElements();
//$log.log('selectedElements:', selectedElements);
// remove lists
var f=function(a,b){a=angular.element(a);var c=b;return b||(c=a),angular.forEach(a.children(),function(a){if("ul"===a.tagName.toLowerCase()||"ol"===a.tagName.toLowerCase())c=f(a,c);else{var b=angular.element("<p></p>");b.html(angular.element(a).html()),c.after(b),c=b}}),a.remove(),c};angular.forEach(c,function(a){"ul"!==a.nodeName.toLowerCase()&&"ol"!==a.nodeName.toLowerCase()||
//console.log('removeListElements', element);
f(a)}),angular.forEach(e.find("ul"),f),angular.forEach(e.find("ol"),f);
// clear out all class attributes. These do not seem to be cleared via removeFormat
var g=this.$editor(),h=function(a){a=angular.element(a),/* istanbul ignore next: this is not triggered in tests any longer since we now never select the whole displayELement */
a[0]!==g.displayElements.text[0]&&a.removeAttr("class"),angular.forEach(a.children(),h)};angular.forEach(e,h),
// check if in list. If not in list then use formatBlock option
e[0]&&"li"!==e[0].tagName.toLowerCase()&&"ol"!==e[0].tagName.toLowerCase()&&"ul"!==e[0].tagName.toLowerCase()&&"true"!==e[0].getAttribute("contenteditable")&&this.$editor().wrapSelection("formatBlock","default"),b()}});/* jshint -W099 */
/****************************
     //  we don't use this code - since the previous way CLEAR is expected to work does not clear partially selected <li>

     var removeListElement = function(listE){
                console.log(listE);
                var _list = listE.parentNode.childNodes;
                console.log('_list', _list);
                var _preLis = [], _postLis = [], _found = false;
                for (i = 0; i < _list.length; i++) {
                    if (_list[i] === listE) {
                        _found = true;
                    } else if (!_found) _preLis.push(_list[i]);
                    else _postLis.push(_list[i]);
                }
                var _parent = angular.element(listE.parentNode);
                var newElem = angular.element('<p></p>');
                newElem.html(angular.element(listE).html());
                if (_preLis.length === 0 || _postLis.length === 0) {
                    if (_postLis.length === 0) _parent.after(newElem);
                    else _parent[0].parentNode.insertBefore(newElem[0], _parent[0]);

                    if (_preLis.length === 0 && _postLis.length === 0) _parent.remove();
                    else angular.element(listE).remove();
                } else {
                    var _firstList = angular.element('<' + _parent[0].tagName + '></' + _parent[0].tagName + '>');
                    var _secondList = angular.element('<' + _parent[0].tagName + '></' + _parent[0].tagName + '>');
                    for (i = 0; i < _preLis.length; i++) _firstList.append(angular.element(_preLis[i]));
                    for (i = 0; i < _postLis.length; i++) _secondList.append(angular.element(_postLis[i]));
                    _parent.after(_secondList);
                    _parent.after(newElem);
                    _parent.after(_firstList);
                    _parent.remove();
                }
                taSelection.setSelectionToElementEnd(newElem[0]);
            };

     elementsSeen = [];
     if (selectedElements.length !==0) console.log(selectedElements);
     angular.forEach(selectedElements, function (element) {
                if (elementsSeen.indexOf(element) !== -1 || elementsSeen.indexOf(element.parentElement) !== -1) {
                    return;
                }
                elementsSeen.push(element);
                if (element.nodeName.toLowerCase() === 'li') {
                    console.log('removeListElement', element);
                    removeListElement(element);
                }
                else if (element.parentElement && element.parentElement.nodeName.toLowerCase() === 'li') {
                    console.log('removeListElement', element.parentElement);
                    elementsSeen.push(element.parentElement);
                    removeListElement(element.parentElement);
                }
            });
     **********************/
/**********************
     if(possibleNodes[0].tagName.toLowerCase() === 'li'){
                var _list = possibleNodes[0].parentNode.childNodes;
                var _preLis = [], _postLis = [], _found = false;
                for(i = 0; i < _list.length; i++){
                    if(_list[i] === possibleNodes[0]){
                        _found = true;
                    }else if(!_found) _preLis.push(_list[i]);
                    else _postLis.push(_list[i]);
                }
                var _parent = angular.element(possibleNodes[0].parentNode);
                var newElem = angular.element('<p></p>');
                newElem.html(angular.element(possibleNodes[0]).html());
                if(_preLis.length === 0 || _postLis.length === 0){
                    if(_postLis.length === 0) _parent.after(newElem);
                    else _parent[0].parentNode.insertBefore(newElem[0], _parent[0]);

                    if(_preLis.length === 0 && _postLis.length === 0) _parent.remove();
                    else angular.element(possibleNodes[0]).remove();
                }else{
                    var _firstList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
                    var _secondList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
                    for(i = 0; i < _preLis.length; i++) _firstList.append(angular.element(_preLis[i]));
                    for(i = 0; i < _postLis.length; i++) _secondList.append(angular.element(_postLis[i]));
                    _parent.after(_secondList);
                    _parent.after(newElem);
                    _parent.after(_firstList);
                    _parent.remove();
                }
                taSelection.setSelectionToElementEnd(newElem[0]);
            }
     *******************/
/* istanbul ignore next: if it's javascript don't worry - though probably should show some kind of error message */
var l=function(a){return a.toLowerCase().indexOf("javascript")!==-1};a("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:c.insertImage.tooltip,action:function(){var a;if(a=b.prompt(c.insertImage.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a&&!l(a)){d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()&&
// due to differences in implementation between FireFox and Chrome, we must move the
// insertion point past the <a> element, otherwise FireFox inserts inside the <a>
// With this change, both FireFox and Chrome behave the same way!
d.setSelectionAfterElement(d.getSelectionElement());
// In the past we used the simple statement:
//return this.$editor().wrapSelection('insertImage', imageLink, true);
//
// However on Firefox only, when the content is empty this is a problem
// See Issue #1201
// Investigation reveals that Firefox only inserts a <p> only!!!!
// So now we use insertHTML here and all is fine.
// NOTE: this is what 'insertImage' is supposed to do anyway!
var e='<img src="'+a+'">';return this.$editor().wrapSelection("insertHTML",e,!0)}},onElementSelect:{element:"img",action:e.imgOnSelectAction}}),a("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:c.insertVideo.tooltip,action:function(){var a;
// block javascript here
/* istanbul ignore else: if it's javascript don't worry - though probably should show some kind of error message */
if(a=b.prompt(c.insertVideo.dialogPrompt,"https://"),!l(a)&&a&&""!==a&&"https://"!==a&&(videoId=e.extractYoutubeVideoId(a),videoId)){
// create the embed link
var f="https://www.youtube.com/embed/"+videoId,g='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg" ta-insert-video="'+f+'" contenteditable="false" allowfullscreen="true" frameborder="0" />';
// insert
/* istanbul ignore next: don't know how to test this... since it needs a dialogPrompt */
// due to differences in implementation between FireFox and Chrome, we must move the
// insertion point past the <a> element, otherwise FireFox inserts inside the <a>
// With this change, both FireFox and Chrome behave the same way!
return d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()&&d.setSelectionAfterElement(d.getSelectionElement()),this.$editor().wrapSelection("insertHTML",g,!0)}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:e.imgOnSelectAction}}),a("insertLink",{tooltiptext:c.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var a;if(
// if this link has already been set, we need to just edit the existing link
/* istanbul ignore if: we do not test this */
a=d.getSelectionElement().tagName&&"a"===d.getSelectionElement().tagName.toLowerCase()?b.prompt(c.insertLink.dialogPrompt,d.getSelectionElement().href):b.prompt(c.insertLink.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a&&!l(a))return this.$editor().wrapSelection("createLink",a,!0)},activeState:function(a){return!!a&&"A"===a[0].tagName},onElementSelect:{element:"a",action:e.aOnSelectAction}}),a("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){// this fires on keyup
var a=this.$editor().displayElements.text,b=a[0].innerHTML||"",c=0;/* istanbul ignore if: will default to '' when undefined */
//Set current scope
//Set editor scope
return""!==b.replace(/\s*<[^>]*?>\s*/g,"")&&""!==b.trim()&&(c=b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi,"").replace(/(<[^>]*?>\s*<[^>]*?>)/gi," ").replace(/(<[^>]*?>)/gi,"").replace(/\s+/gi," ").match(/\S+/g).length),this.wordcount=c,this.$editor().wordcount=c,!1}}),a("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){// this fires on keyup
var a=this.$editor().displayElements.text,b=a[0].innerText||a[0].textContent,c=b.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;
//Set current scope
//Set editor scope
return this.charcount=c,this.$editor().charcount=c,!1}})}]);// NOTE: textAngularVersion must match the Gruntfile.js 'setVersion' task.... and have format v/d+./d+./d+
var f="v1.5.16",g={ie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}(),webkit:/AppleWebKit\/([\d.]+)/i.test(navigator.userAgent),isFirefox:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},h=h||{};/* istanbul ignore next: untestable browser check */
h.now=function(){return h.now||h.mozNow||h.msNow||h.oNow||h.webkitNow||function(){return(new Date).getTime()}}();
// Global to textAngular REGEXP vars for block and list elements.
var i=/^(address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,j=/^(ul|li|ol)$/i,k=/^(#text|span|address|article|aside|audio|blockquote|canvas|center|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Compatibility
/* istanbul ignore next: trim shim for older browsers */
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});/*
    Custom stylesheet for the placeholders rules.
    Credit to: http://davidwalsh.name/add-rules-stylesheets
*/
var l,m,n,o,p,q;/* istanbul ignore else: IE <8 test*/
if(g.ie>8||void 0===g.ie){/* istanbul ignore next: preference for stylesheet loaded externally */
for(var r=document.styleSheets,s=0;s<r.length;s++)if((0===r[s].media.length||r[s].media.mediaText.match(/(all|screen)/gi))&&r[s].href&&r[s].href.match(/textangular\.(min\.|)css/gi)){l=r[s];break}/* istanbul ignore next: preference for stylesheet loaded externally */
l||(
// this sheet is used for the placeholders later on.
l=function(){
// Create the <style> tag
var a=document.createElement("style");/* istanbul ignore else : WebKit hack :( */
// Add the <style> element to the page, add as first so the styles can be overridden by custom stylesheets
return g.webkit&&a.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(a),a.sheet}()),
// use as: addCSSRule("header", "float: left");
m=function(a,b){return o(l,a,b)},o=function(a,b,c){var d,e;
// return the inserted stylesheet rule
// This order is important as IE 11 has both cssRules and rules but they have different lengths - cssRules is correct, rules gives an error in IE 11
/* istanbul ignore next: browser catches */
/* istanbul ignore else: untestable IE option */
/* istanbul ignore next: browser catches */
return a.cssRules?d=Math.max(a.cssRules.length-1,0):a.rules&&(d=Math.max(a.rules.length-1,0)),a.insertRule?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d),l.rules?e=l.rules[d]:l.cssRules&&(e=l.cssRules[d]),e},q=function(a,b){var c,d;for(c=0;c<b.length;c++)/* istanbul ignore else: check for correct rule */
if(b[c].cssText===a.cssText){d=c;break}return d},n=function(a){p(l,a)},/* istanbul ignore next: tests are browser specific */
p=function(a,b){var c=a.cssRules||a.rules;if(c&&0!==c.length){var d=q(b,c);a.removeRule?a.removeRule(d):a.deleteRule(d)}}}angular.module("textAngular.factories",[]).factory("taBrowserTag",[function(){return function(a){/* istanbul ignore next: ie specific test */
/* istanbul ignore next: ie specific test */
return a?""===a?void 0===g.ie?"div":g.ie<=8?"P":"p":g.ie<=8?a.toUpperCase():a:g.ie<=8?"P":"p"}}]).factory("taApplyCustomRenderers",["taCustomRenderers","taDOM",function(a,b){return function(c){var d=angular.element("<div></div>");return d[0].innerHTML=c,angular.forEach(a,function(a){var c=[];
// get elements based on what is defined. If both defined do secondary filter in the forEach after using selector string
a.selector&&""!==a.selector?c=d.find(a.selector):a.customAttribute&&""!==a.customAttribute&&(c=b.getByAttribute(d,a.customAttribute)),
// process elements if any found
angular.forEach(c,function(b){b=angular.element(b),a.selector&&""!==a.selector&&a.customAttribute&&""!==a.customAttribute?void 0!==b.attr(a.customAttribute)&&a.renderLogic(b):a.renderLogic(b)})}),d[0].innerHTML}}]).factory("taFixChrome",function(){
// get whaterever rubbish is inserted in chrome
// should be passed an html string, returns an html string
var a=function(a,b){if(!a||!angular.isString(a)||a.length<=0)return a;
// remove all the Apple-converted-space spans and replace with the content of the span
//console.log('before:', html);
/* istanbul ignore next: apple-contereted-space span match */
for(
// grab all elements with a style attibute
// a betterSpanMatch matches only a style=... with matching quotes
// this captures the whole:
// 'style="background-color: rgb(255, 255, 255);"'
var c,d,e,f=/style\s?=\s?(["'])(?:(?=(\\?))\2.)*?\1/gi,g=/<span class="Apple-converted-space">([^<]+)<\/span>/gi,h="",i=0;c=g.exec(a);)e=c[1],e=e.replace(/&nbsp;/gi," "),h+=a.substring(i,c.index)+e,i=c.index+c[0].length;
/////////////////////////////////////////////////////////////
//
// Allow control of this modification
// taKeepStyles: False - removes these modification
//
// taFixChrome removes the following styles:
//    font-family: inherit;
//    line-height: <number>
//    color: inherit;
//    color: rgb( <rgb-component>#{3} )
//    background-color: rgb( <rgb-component>#{3} )
//
/////////////////////////////////////////////////////////////
if(/* istanbul ignore next: apple-contereted-space span has matched */
i&&(
// modified....
h+=a.substring(i),a=h,h="",i=0),!b){for(;c=f.exec(a);)h+=a.substring(i,c.index-1),d=c[0],
// test for chrome inserted junk
c=/font-family: inherit;|line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;|color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi.exec(d),c?(d=d.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;|( |)color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);|( |)background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/gi,""),
//console.log(styleVal, styleVal.length);
d.length>8&&(h+=" "+d)):h+=" "+d,i=f.lastIndex;h+=a.substring(i)}
//console.log('final:', finalHtml);
// only replace when something has changed, else we get focus problems on inserting lists
if(i>0){
// replace all empty strings
var j=h.replace(/<span\s?>(.*?)<\/span>(<br(\/|)>|)/gi,"$1");return j}return a};return a}).factory("taSanitize",["$sanitize",function(a){function b(a,b){for(var c,d=0,e=0,f=/<[^>]*>/gi;c=f.exec(a);)if(e=c.index,"/"===c[0].substr(1,1)){if(0===d)break;d--}else d++;
// get the start tags reversed - this is safe as we construct the strings with no content except the tags
return b+a.substring(0,e)+angular.element(b)[0].outerHTML.substring(b.length)+a.substring(e)}function c(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var d,f,g,h,i,k,l=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,m="",n="",o=0;f=l.exec(a);){
// one of the quoted values ' or "
/* istanbul ignore next: quotations match */
h=f[3]||f[4];var p=new RegExp(j,"i");
// test for style values to change
if(angular.isString(h)&&p.test(h)){
// remove build tag list
i="";
// find relevand tags and build a string of them
for(
// init regex here for exec
var q=new RegExp(j,"ig");g=q.exec(h);)for(d=0;d<e.length;d++)g[2*d+2]&&(i+="<"+e[d].tag+">");
// recursively find more legacy styles in html before this tag and after the previous match (if any)
k=c(a.substring(o,f.index)),
// build up html
n+=m.length>0?b(k,m):k,
// grab the style val without the transformed values
h=h.replace(new RegExp(j,"ig"),""),
// build the html tag
n+="<"+f[1].trim(),h.length>0&&(n+=' style="'+h+'"'),n+=f[5]+">",
// update the start index to after this tag
o=f.index+f[0].length,m=i}}return n+=m.length>0?b(a.substring(o),m):a.substring(o)}function d(a){if(!a||!angular.isString(a)||a.length<=0)return a;
// match all attr tags
for(
// replace all align='...' tags with text-align attributes
var b,c=/<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi,d="",e=0;b=c.exec(a);){
// add all html before this tag
d+=a.substring(e,b.index),
// record last index after this tag
e=b.index+b[0].length;
// construct tag without the align attribute
var f="<"+b[1]+b[5];
// add the style attribute
/style=("([^"]+)"|'([^']+)')/gi.test(f)?/* istanbul ignore next: quotations match */
f=f.replace(/style=("([^"]+)"|'([^']+)')/i,'style="$2$3 text-align:'+(b[3]||b[4])+';"'):/* istanbul ignore next: quotations match */
f+=' style="text-align:'+(b[3]||b[4])+';"',f+=">",
// add to html
d+=f}
// return with remaining html
return d+a.substring(e)}for(var e=[{property:"font-weight",values:["bold"],tag:"b"},{property:"font-style",values:["italic"],tag:"i"}],f=[],g=0;g<e.length;g++){for(var h="("+e[g].property+":\\s*(",i=0;i<e[g].values.length;i++)/* istanbul ignore next: not needed to be tested yet */
i>0&&(h+="|"),h+=e[g].values[i];h+=");)",f.push(h)}var j="("+f.join("|")+")",k=new RegExp(/<span id="selectionBoundary_\d+_\d+" class="rangySelectionBoundary">[^<>]+?<\/span>/gi),l=new RegExp(/<span class="rangySelectionBoundary" id="selectionBoundary_\d+_\d+">[^<>]+?<\/span>/gi),m=new RegExp(/<span id="selectionBoundary_\d+_\d+" class="rangySelectionBoundary">[^<>]+?<\/span>/gi);return function(b,e,f){
// unsafe html should NEVER built into a DOM object via angular.element. This allows XSS to be inserted and run.
if(!f)try{b=c(b)}catch(a){}
// we had an issue in the past, where we dumped a whole bunch of <span>'s into the content...
// so we remove them here
// IN A FUTURE release this can be removed after all have updated through release 1.5.9
if(
// unsafe and oldsafe should be valid HTML strings
// any exceptions (lets say, color for example) should be made here but with great care
// setup unsafe element for modification
b=d(b))try{b=b.replace(k,""),b=b.replace(l,""),b=b.replace(k,""),b=b.replace(m,"")}catch(a){}var g;try{g=a(b),
// do this afterwards, then the $sanitizer should still throw for bad markup
f&&(g=b)}catch(a){g=e||""}
// Do processing for <pre> tags, removing tabs and return carriages outside of them
var h,i=g.match(/(<pre[^>]*>.*?<\/pre[^>]*>)/gi),j=g.replace(/(&#(9|10);)*/gi,""),n=/<pre[^>]*>.*?<\/pre[^>]*>/gi,o=0,p=0;for(g="";null!==(h=n.exec(j))&&o<i.length;)g+=j.substring(p,h.index)+i[o],p=h.index+h[0].length,o++;return g+j.substring(p)}}]).factory("taToolExecuteAction",["$q","$log",function(a,b){
// this must be called on a toolScope or instance
return function(c){void 0!==c&&(this.$editor=function(){return c});var d,e=a.defer(),f=e.promise,g=this.$editor();try{d=this.action(e,g.startAction()),
// We set the .finally callback here to make sure it doesn't get executed before any other .then callback.
f.finally(function(){g.endAction.call(g)})}catch(a){b.error(a)}(d||void 0===d)&&
// if true or undefined is returned then the action has finished. Otherwise the deferred action will be resolved manually.
e.resolve()}}]),angular.module("textAngular.DOM",["textAngular.factories"]).factory("taExecCommand",["taSelection","taBrowserTag","$document",function(b,c,d){var e=function(a,c){var d,e,f=a.find("li");for(e=f.length-1;e>=0;e--)d=angular.element("<"+c+">"+f[e].innerHTML+"</"+c+">"),a.after(d);a.remove(),b.setSelectionToElementEnd(d[0])},f=function(a,d,e,f,g){var h,i,j,k,l,m=a.find("li");for(i=0;i<m.length;i++)if(m[i].outerHTML===d[0].outerHTML){
// found it...
l=i,i>0&&(j=m[i-1]),i+1<m.length&&(k=m[i+1]);break}
//console.log('listElementToSelfTag', list, listElement, selfTag, bDefault, priorElement, nextElement);
// un-list the listElement
var n="";
//console.log('$target', $target[0]);
if(f?n+="<"+g+">"+d[0].innerHTML+"</"+g+">":(n+="<"+c(e)+">",n+="<li>"+d[0].innerHTML+"</li>",n+="</"+c(e)+">"),h=angular.element(n),!j)
// this is the first the list, so we just remove it...
return d.remove(),a.after(angular.element(a[0].outerHTML)),a.after(h),a.remove(),void b.setSelectionToElementEnd(h[0]);if(k){var o=(a.parent(),""),p=a[0].nodeName.toLowerCase();for(o+="<"+p+">",i=0;i<l;i++)o+="<li>"+m[i].innerHTML+"</li>";o+="</"+p+">";var q="";for(q+="<"+p+">",i=l+1;i<m.length;i++)q+="<li>"+m[i].innerHTML+"</li>";q+="</"+p+">",
//console.log(html1, $target[0], html2);
a.after(angular.element(q)),a.after(h),a.after(angular.element(o)),a.remove(),
//console.log('parent ******XXX*****', p[0]);
b.setSelectionToElementEnd(h[0])}else
// this is the last in the list, so we just remove it..
d.remove(),a.after(h),b.setSelectionToElementEnd(h[0])},g=function(a,d,e,f,g){var h,i,j,k,l,m=a.find("li"),n=[];for(i=0;i<m.length;i++)for(j=0;j<d.length;j++)m[i].isEqualNode(d[j])&&(
// found it...
n[j]=i);n[0]>0&&(k=m[n[0]-1]),n[d.length-1]+1<m.length&&(l=m[n[d.length-1]+1]);
//console.log('listElementsToSelfTag', list, listElements, selfTag, bDefault, !priorElement, !afterElement, foundIndexes[listElements.length-1], children.length);
// un-list the listElements
var o="";if(f)for(j=0;j<d.length;j++)o+="<"+g+">"+d[j].innerHTML+"</"+g+">",d[j].remove();else{for(o+="<"+c(e)+">",j=0;j<d.length;j++)o+=d[j].outerHTML,d[j].remove();o+="</"+c(e)+">"}if(h=angular.element(o),!k)
// this is the first the list, so we just remove it...
return a.after(angular.element(a[0].outerHTML)),a.after(h),a.remove(),void b.setSelectionToElementEnd(h[0]);if(!l)
// this is the last in the list, so we just remove it..
return a.after(h),void b.setSelectionToElementEnd(h[0]);
// okay it was some where in the middle... so we need to break apart the list...
var p="",q=a[0].nodeName.toLowerCase();for(p+="<"+q+">",i=0;i<n[0];i++)p+="<li>"+m[i].innerHTML+"</li>";p+="</"+q+">";var r="";for(r+="<"+q+">",i=n[d.length-1]+1;i<m.length;i++)r+="<li>"+m[i].innerHTML+"</li>";r+="</"+q+">",a.after(angular.element(r)),a.after(h),a.after(angular.element(p)),a.remove(),
//console.log('parent ******YYY*****', list.parent()[0]);
b.setSelectionToElementEnd(h[0])},h=function(a){/(<br(|\/)>)$/i.test(a.innerHTML.trim())?b.setSelectionBeforeElement(angular.element(a).find("br")[0]):b.setSelectionToElementEnd(a)},k=function(a,b){var c=angular.element("<"+b+">"+a[0].innerHTML+"</"+b+">");a.after(c),a.remove(),h(c.find("li")[0])},l=function(a,b,d){for(var e="",f=0;f<a.length;f++)e+="<"+c("li")+">"+a[f].innerHTML+"</"+c("li")+">";var g=angular.element("<"+d+">"+e+"</"+d+">");b.after(g),b.remove(),h(g.find("li")[0])},m=function(a,b){for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];/* istanbul ignore next - more complex testing*/
d.tagName&&d.tagName.match(i)&&m(d,b)}/* istanbul ignore next - very rare condition that we do not test*/
if(null===a.parentNode)
// nothing left to do..
return a;/* istanbul ignore next - not sure have to test this */
if("<br>"===b)return a;var e=angular.element(b);return e[0].innerHTML=a.innerHTML,a.parentNode.insertBefore(e[0],a),a.parentNode.removeChild(a),e};return function(h,n){
// NOTE: here we are dealing with the html directly from the browser and not the html the user sees.
// IF you want to modify the html the user sees, do it when the user does a switchView
return h=c(h),function(o,p,q,r){var s,t,u,v,w,x,y,z,A=angular.element("<"+h+">");try{b.getSelection&&(z=b.getSelection()),y=b.getSelectionElement();
// special checks and fixes when we are selecting the whole container
var B,C;/* istanbul ignore next */
void 0!==y.tagName&&("div"===y.tagName.toLowerCase()&&/taTextElement.+/.test(y.id)&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
// opps we are actually selecting the whole container!
//console.log('selecting whole container!');
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;")),/<br\/>/i.test(B)&&(
// Firefox adds <br/>'s and so we remove the <br/>
B=B.replace(/<br\/>/i,"&#8203;")),
// remove stacked up <span>'s
/<span>(<span>)+/i.test(B)&&(B=__.replace(/<span>(<span>)+/i,"<span>")),
// remove stacked up </span>'s
/<\/span>(<\/span>)+/i.test(B)&&(B=__.replace(/<\/span>(<\/span>)+/i,"</span>")),/<span><\/span>/i.test(B)&&(
// if we end up with a <span></span> here we remove it...
B=B.replace(/<span><\/span>/i,"")),
//console.log('inner whole container', selectedElement.childNodes);
C="<div>"+B+"</div>",y.innerHTML=C,b.setSelectionToElementEnd(y.childNodes[0]),y=b.getSelectionElement()):"span"===y.tagName.toLowerCase()&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
// just a span -- this is a problem...
//console.log('selecting span!');
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;")),/<br\/>/i.test(B)&&(
// Firefox adds <br/>'s and so we remove the <br/>
B=B.replace(/<br\/>/i,"&#8203;")),
// remove stacked up <span>'s
/<span>(<span>)+/i.test(B)&&(B=__.replace(/<span>(<span>)+/i,"<span>")),
// remove stacked up </span>'s
/<\/span>(<\/span>)+/i.test(B)&&(B=__.replace(/<\/span>(<\/span>)+/i,"</span>")),/<span><\/span>/i.test(B)&&(
// if we end up with a <span></span> here we remove it...
B=B.replace(/<span><\/span>/i,"")),
//console.log('inner span', selectedElement.childNodes);
// we wrap this in a <div> because otherwise the browser get confused when we attempt to select the whole node
// and the focus is not set correctly no matter what we do
C="<div>"+B+"</div>",y.innerHTML=C,b.setSelectionToElementEnd(y.childNodes[0]),y=b.getSelectionElement()):"p"===y.tagName.toLowerCase()&&z&&z.start&&1===z.start.offset&&1===z.end.offset?(
//console.log('p special');
// we need to remove the </br> that firefox adds!
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,"&#8203;"),// no space-space
y.innerHTML=B)):"li"===y.tagName.toLowerCase()&&z&&z.start&&z.start.offset===z.end.offset&&(
// we need to remove the </br> that firefox adds!
B=y.innerHTML,/<br>/i.test(B)&&(
// Firefox adds <br>'s and so we remove the <br>
B=B.replace(/<br>/i,""),// nothing
y.innerHTML=B)))}catch(a){}
//console.log('************** selectedElement:', selectedElement);
/* istanbul ignore if: */
if(y){var D=angular.element(y),E=y&&y.tagName&&y.tagName.toLowerCase()||/* istanbul ignore next: */
"";if("insertorderedlist"===o.toLowerCase()||"insertunorderedlist"===o.toLowerCase()){var F=c("insertorderedlist"===o.toLowerCase()?"ol":"ul"),G=b.getOnlySelectedElements();
//console.log('PPPPPPPPPPPPP', tagName, selfTag, selectedElements, tagName.match(BLOCKELEMENTS), $selected.hasClass('ta-bind'), $selected.parent()[0].tagName);
if(G.length>1&&("ol"===E||"ul"===E))return g(D,G,F,F===E,h);if(E===F)
// if all selected then we should remove the list
// grab all li elements and convert to taDefaultWrap tags
//console.log('tagName===selfTag');
// if all selected then we should remove the list
// grab all li elements and convert to taDefaultWrap tags
//console.log('tagName===selfTag');
return D[0].childNodes.length!==G.length&&1===G.length?(D=angular.element(G[0]),f(D.parent(),D,F,!0,h)):e(D,h);if("li"===E&&D.parent()[0].tagName.toLowerCase()===F&&1===D.parent().children().length)
// catch for the previous statement if only one li exists
return e(D.parent(),h);if("li"===E&&D.parent()[0].tagName.toLowerCase()!==F&&1===D.parent().children().length)
// catch for the previous statement if only one li exists
return k(D.parent(),F);if(E.match(i)&&!D.hasClass("ta-bind")){
// if it's one of those block elements we have to change the contents
// if it's a ol/ul we are changing from one to the other
if(G.length&&D[0].childNodes.length!==G.length&&1===G.length)
//console.log('&&&&&&&&&&&&&&& --------- &&&&&&&&&&&&&&&&', selectedElements[0], $selected[0].childNodes);
return D=angular.element(G[0]),f(D.parent(),D,F,F===E,h);if("ol"===E||"ul"===E)
// now if this is a set of selected elements... behave diferently
return k(D,F);var H=!1;return angular.forEach(D.children(),function(a){a.tagName.match(i)&&(H=!0)}),H?l(D.children(),D,F):l([angular.element("<div>"+y.innerHTML+"</div>")[0]],D,F)}if(E.match(i)){
//console.log('_nodes', _nodes, tagName);
if(
// if we get here then the contents of the ta-bind are selected
v=b.getOnlySelectedElements(),0===v.length)
// here is if there is only text in ta-bind ie <div ta-bind>test content</div>
t=angular.element("<"+F+"><li>"+y.innerHTML+"</li></"+F+">"),D.html(""),D.append(t);else{if(1===v.length&&("ol"===v[0].tagName.toLowerCase()||"ul"===v[0].tagName.toLowerCase()))return v[0].tagName.toLowerCase()===F?e(angular.element(v[0]),h):k(angular.element(v[0]),F);u="";var I=[];for(s=0;s<v.length;s++)/* istanbul ignore else: catch for real-world can't make it occur in testing */
if(3!==v[s].nodeType){var J=angular.element(v[s]);/* istanbul ignore if: browser check only, phantomjs doesn't return children nodes but chrome at least does */
if("li"===v[s].tagName.toLowerCase())continue;u+="ol"===v[s].tagName.toLowerCase()||"ul"===v[s].tagName.toLowerCase()?J[0].innerHTML:"span"!==v[s].tagName.toLowerCase()||"ol"!==v[s].childNodes[0].tagName.toLowerCase()&&"ul"!==v[s].childNodes[0].tagName.toLowerCase()?"<"+c("li")+">"+J[0].innerHTML+"</"+c("li")+">":J[0].childNodes[0].innerHTML,I.unshift(J)}
//console.log('$nodes', $nodes);
t=angular.element("<"+F+">"+u+"</"+F+">"),I.pop().replaceWith(t),angular.forEach(I,function(a){a.remove()})}return void b.setSelectionToElementEnd(t[0])}}else{if("formatblock"===o.toLowerCase()){
// find the first blockElement
for(x=q.toLowerCase().replace(/[<>]/gi,""),"default"===x.trim()&&(x=h,q="<"+h+">"),t="li"===E?D.parent():D;!t[0].tagName||!t[0].tagName.match(i)&&!t.parent().attr("contenteditable");)t=t.parent(),/* istanbul ignore next */
E=(t[0].tagName||"").toLowerCase();if(E===x){
// $target is wrap element
v=t.children();var K=!1;for(s=0;s<v.length;s++)K=K||v[s].tagName.match(i);K?(t.after(v),w=t.next(),t.remove(),t=w):(A.append(t[0].childNodes),t.after(A),t.remove(),t=A)}else if(t.parent()[0].tagName.toLowerCase()!==x||t.parent().hasClass("ta-bind"))if(E.match(j))
// wrapping a list element
t.wrap(q);else{
// find the parent block element if any of the nodes are inline or text
for(
// default wrap behaviour
v=b.getOnlySelectedElements(),0===v.length&&(
// no nodes at all....
v=[t[0]]),s=0;s<v.length;s++)if(3===v[s].nodeType||!v[s].tagName.match(i))for(;3===v[s].nodeType||!v[s].tagName||!v[s].tagName.match(i);)v[s]=v[s].parentNode;if(
// remove any duplicates from the array of _nodes!
v=v.filter(function(a,b,c){return c.indexOf(a)===b}),
// remove all whole taTextElement if it is here... unless it is the only element!
v.length>1&&(v=v.filter(function(a,b,c){return!("div"===a.nodeName.toLowerCase()&&/^taTextElement/.test(a.id))})),angular.element(v[0]).hasClass("ta-bind"))t=angular.element(q),t[0].innerHTML=v[0].innerHTML,v[0].innerHTML=t[0].outerHTML;else if("blockquote"===x){for(
// blockquotes wrap other block elements
u="",s=0;s<v.length;s++)u+=v[s].outerHTML;for(t=angular.element(q),t[0].innerHTML=u,v[0].parentNode.insertBefore(t[0],v[0]),s=v.length-1;s>=0;s--)/* istanbul ignore else:  */
v[s].parentNode&&v[s].parentNode.removeChild(v[s])}else/* istanbul ignore next: not tested since identical to blockquote */
if("pre"===x&&b.getStateShiftKey()){for(
//console.log('shift pre', _nodes);
// pre wrap other block elements
u="",s=0;s<v.length;s++)u+=v[s].outerHTML;for(t=angular.element(q),t[0].innerHTML=u,v[0].parentNode.insertBefore(t[0],v[0]),s=v.length-1;s>=0;s--)/* istanbul ignore else:  */
v[s].parentNode&&v[s].parentNode.removeChild(v[s])}else
//console.log(optionsTagName, _nodes);
// regular block elements replace other block elements
for(s=0;s<v.length;s++){var L=m(v[s],q);v[s]===t[0]&&(t=angular.element(L))}}else{
//unwrap logic for parent
var M=t.parent(),N=M.contents();for(s=0;s<N.length;s++)/* istanbul ignore next: can't test - some wierd thing with how phantomjs works */
M.parent().hasClass("ta-bind")&&3===N[s].nodeType&&(A=angular.element("<"+h+">"),A[0].innerHTML=N[s].outerHTML,N[s]=A[0]),M.parent()[0].insertBefore(N[s],M[0]);M.remove()}
// looses focus when we have the whole container selected and no text!
// refocus on the shown display element, this fixes a bug when using firefox
return b.setSelectionToElementEnd(t[0]),void t[0].focus()}if("createlink"===o.toLowerCase()){/* istanbul ignore next: firefox specific fix */
if("a"===E)
// already a link!!! we are just replacing it...
return void(b.getSelectionElement().href=q);var O='<a href="'+q+'" target="'+(r.a.target?r.a.target:"")+'">',P="</a>",Q=b.getSelection();if(Q.collapsed)
//console.log('collapsed');
// insert text at selection, then select then just let normal exec-command run
b.insertHtml(O+q+P,n);else if(a.getSelection().getRangeAt(0).canSurroundContents()){var R=angular.element(O+P)[0];a.getSelection().getRangeAt(0).surroundContents(R)}return}if("inserthtml"===o.toLowerCase())
//console.log('inserthtml');
return void b.insertHtml(q,n)}try{d[0].execCommand(o,p,q)}catch(a){}}}}}]).service("taSelection",["$document","taDOM","$log",/* istanbul ignore next: all browser specifics and PhantomJS dosen't seem to support half of it */
function(b,c,d){
// need to dereference the document else the calls don't work correctly
var e,f=b[0],g=function(a,b){/* check if selection is a BR element at the beginning of a container. If so, get
        * the parentNode instead.
        * offset should be zero in this case. Otherwise, return the original
        * element.
        */
/* check if selection is a BR element at the beginning of a container. If so, get
        * the parentNode instead.
        * offset should be zero in this case. Otherwise, return the original
        * element.
        */
return a.tagName&&a.tagName.match(/^br$/i)&&0===b&&!a.previousSibling?{element:a.parentNode,offset:0}:{element:a,offset:b}},h={getSelection:function(){var b;try{
// catch any errors from rangy and ignore the issue
b=a.getSelection().getRangeAt(0)}catch(a){
//console.info(e);
return}var c=b.commonAncestorContainer,d={start:g(b.startContainer,b.startOffset),end:g(b.endContainer,b.endOffset),collapsed:b.collapsed};
//console.log('***selection container:', selection.container.nodeName, selection.start.offset, selection.container);
// This has problems under Firefox.
// On Firefox with
// <p>Try me !</p>
// <ul>
// <li>line 1</li>
// <li>line 2</li>
// </ul>
// <p>line 3</p>
// <ul>
// <li>line 4</li>
// <li>line 5</li>
// </ul>
// <p>Hello textAngular</p>
// WITH the cursor after the 3 on line 3, it gets the commonAncestorContainer as:
// <TextNode textContent='line 3'>
// AND Chrome gets the commonAncestorContainer as:
// <p>line 3</p>
//
// Check if the container is a text node and return its parent if so
// unless this is the whole taTextElement.  If so we return the textNode
//console.log('*********taTextElement************');
//console.log('commonAncestorContainer:', container);
return 3===c.nodeType&&("div"===c.parentNode.nodeName.toLowerCase()&&/^taTextElement/.test(c.parentNode.id)||(c=c.parentNode)),"div"===c.nodeName.toLowerCase()&&/^taTextElement/.test(c.id)?(d.start.element=c.childNodes[d.start.offset],d.end.element=c.childNodes[d.end.offset],d.container=c):c.parentNode===d.start.element||c.parentNode===d.end.element?d.container=c.parentNode:d.container=c,d},
// if we use the LEFT_ARROW and we are at the special place <span>&#65279;</span> we move the cursor over by one...
// Chrome and Firefox behave differently so so fix this for Firefox here.  No adjustment needed for Chrome.
updateLeftArrowKey:function(b){var c=a.getSelection().getRangeAt(0);if(c&&c.collapsed){var d=h.getFlattenedDom(c);if(!d.findIndex)return;var e,f,g=c.startContainer,i=d.findIndex(function(a,b){if(a.node===g)return!0;var c=a.parents.indexOf(g);return c!==-1});
//console.log('updateLeftArrowKey', range.startOffset, range.startContainer.textContent);
// this first section handles the case for Chrome browser
// if the first character of the nextNode is a \ufeff we know that we are just before the special span...
// and so we most left by one character
if(
//console.log('indexStartContainer', indexStartContainer, _nodes.length, 'startContainer:', _node, _node === _nodes[indexStartContainer].node);
d.forEach(function(a,b){
//console.log(i, n.node);
a.parents.forEach(function(a,b){})}),i+1<d.length&&(
// we need the node just after this startContainer
// so we can check and see it this is a special place
f=d[i+1].node),f&&f.textContent&&(e=/^\ufeff([^\ufeff]*)$/.exec(f.textContent)))
// we are before the special node with begins with a \ufeff character
//console.log('LEFT ...found it...', 'startOffset:', range.startOffset, m[0].length, m[1].length);
// no need to change anything in this case
return;var j;if(i>0&&(
// we need the node just after this startContainer
// so we can check and see it this is a special place
j=d[i-1].node),0===c.startOffset&&j&&(
//console.log(nextNodeToLeft, range.startOffset, nextNodeToLeft.textContent);
e=/^\ufeff([^\ufeff]*)$/.exec(j.textContent)))
//console.log('LEFT &&&&&&&&&&&&&&&&&&&...found it...&&&&&&&&&&&', nextNodeToLeft, m[0].length, m[1].length);
// move over to the left my one -- Firefox triggers this case
return void h.setSelectionToElementEnd(j)}},
// if we use the RIGHT_ARROW and we are at the special place <span>&#65279;</span> we move the cursor over by one...
updateRightArrowKey:function(a){},getFlattenedDom:function(a){function b(a){if(a.node.childNodes.length){var c=Array.prototype.slice.call(a.node.childNodes);// converts NodeList to Array
c.forEach(function(c){var d=a.parents.slice();d.slice(-1)[0]!==a.node&&d.push(a.node),b({parents:d,node:c})})}else d.push({parents:a.parents,node:a.node})}var c=a.commonAncestorContainer.parentNode;if(!c)return a.commonAncestorContainer.childNodes;var d=Array.prototype.slice.call(c.childNodes),e=d.indexOf(a.startContainer);
// make sure that we have a big enough set of nodes
// now walk the parent
return e+1<d.length&&e>0||c.parentNode&&(c=c.parentNode),d=[],b({parents:[c],node:c}),d},getOnlySelectedElements:function(){var b=a.getSelection().getRangeAt(0),c=b.commonAncestorContainer;
// get the nodes in the range that are ELEMENT_NODE and are children of the container
// in this range...
// Node.TEXT_NODE === 3
// Node.ELEMENT_NODE === 1
// Node.COMMENT_NODE === 8
// Check if the container is a text node and return its parent if so
return c=3===c.nodeType?c.parentNode:c,b.getNodes([1],function(a){return a.parentNode===c})},
// this includes the container element if all children are selected
getAllSelectedElements:function(){var b=a.getSelection().getRangeAt(0),c=b.commonAncestorContainer;
// Node.TEXT_NODE === 3
// Node.ELEMENT_NODE === 1
// Node.COMMENT_NODE === 8
// Check if the container is a text node and return its parent if so
c=3===c.nodeType?c.parentNode:c;
// get the nodes in the range that are ELEMENT_NODE and are children of the container
// in this range...
var d=b.getNodes([1],function(a){return a.parentNode===c}),e=c.innerHTML;
//console.log(innerHtml);
//console.log(range.toHtml());
//console.log(innerHtml === range.toHtml());
if(
// remove the junk that rangy has put down
e=e.replace(/<span id=.selectionBoundary[^>]+>\ufeff?<\/span>/gi,""),e===b.toHtml()&&("div"!==c.nodeName.toLowerCase()||!/^taTextElement/.test(c.id))){for(var f=[],g=d.length;g--;f.unshift(d[g]));d=f,d.push(c)}return d},
// Some basic selection functions
getSelectionElement:function(){var a=h.getSelection();return a?h.getSelection().container:void 0},setSelection:function(b,c,d,e){var f=a.createRange();f.setStart(b,d),f.setEnd(c,e),a.getSelection().setSingleRange(f)},setSelectionBeforeElement:function(b){var c=a.createRange();c.selectNode(b),c.collapse(!0),a.getSelection().setSingleRange(c)},setSelectionAfterElement:function(b){var c=a.createRange();c.selectNode(b),c.collapse(!1),a.getSelection().setSingleRange(c)},setSelectionToElementStart:function(b){var c=a.createRange();c.selectNodeContents(b),c.collapse(!0),a.getSelection().setSingleRange(c)},setSelectionToElementEnd:function(b){var c=a.createRange();c.selectNodeContents(b),c.collapse(!1),b.childNodes&&b.childNodes[b.childNodes.length-1]&&"br"===b.childNodes[b.childNodes.length-1].nodeName&&(c.startOffset=c.endOffset=c.startOffset-1),a.getSelection().setSingleRange(c)},setStateShiftKey:function(a){e=a},getStateShiftKey:function(){return e},
// from http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
// topNode is the contenteditable normally, all manipulation MUST be inside this.
insertHtml:function(b,d){var e,g,j,l,m,n,o,p=angular.element("<div>"+b+"</div>"),q=a.getSelection().getRangeAt(0),r=f.createDocumentFragment(),s=p[0].childNodes,t=!0;if(s.length>0){for(
// NOTE!! We need to do the following:
// check for blockelements - if they exist then we have to split the current element in half (and all others up to the closest block element) and insert all children in-between.
// If there are no block elements, or there is a mixture we need to create textNodes for the non wrapped text (we don't want them spans messing up the picture).
l=[],j=0;j<s.length;j++){var u=s[j];"p"===u.nodeName.toLowerCase()&&""===u.innerHTML.trim()||(/****************
                     *  allow any text to be inserted...
                    if((   _cnode.nodeType === 3 &&
                           _cnode.nodeValue === '\ufeff'[0] &&
                           _cnode.nodeValue.trim() === '') // empty no-space space element
                        ) {
                        // no change to isInline
                        nodes.push(_cnode);
                        continue;
                    }
                    if(_cnode.nodeType === 3 &&
                         _cnode.nodeValue.trim() === '') { // empty text node
                        continue;
                    }
                    *****************/
t=t&&!i.test(u.nodeName),l.push(u))}for(var v=0;v<l.length;v++)n=r.appendChild(l[v]);!t&&q.collapsed&&/^(|<br(|\/)>)$/i.test(q.startContainer.innerHTML)&&q.selectNode(q.startContainer)}else t=!0,
// paste text of some sort
n=r=f.createTextNode(b);
// Other Edge case - selected data spans multiple blocks.
if(t)q.deleteContents();else// not inline insert
if(q.collapsed&&q.startContainer!==d)if(q.startContainer.innerHTML&&q.startContainer.innerHTML.match(/^<[^>]*>$/i))
// this log is to catch when innerHTML is something like `<img ...>`
e=q.startContainer,1===q.startOffset?(
// before single tag
q.setStartAfter(e),q.setEndAfter(e)):(
// after single tag
q.setStartBefore(e),q.setEndBefore(e));else{
// split element into 2 and insert block element in middle
if(3===q.startContainer.nodeType&&q.startContainer.parentNode!==d)
// Escape out of the inline tags like b
for(// if text node
e=q.startContainer.parentNode,g=e.cloneNode(),
// split the nodes into two lists - before and after, splitting the node with the selection into 2 text nodes.
c.splitNodes(e.childNodes,e,g,q.startContainer,q.startOffset);!k.test(e.nodeName);){angular.element(e).after(g),e=e.parentNode;var w=g;g=e.cloneNode(),
// split the nodes into two lists - before and after, splitting the node with the selection into 2 text nodes.
c.splitNodes(e.childNodes,e,g,w)}else e=q.startContainer,g=e.cloneNode(),c.splitNodes(e.childNodes,e,g,void 0,void 0,q.startOffset);if(angular.element(e).after(g),
// put cursor to end of inserted content
//console.log('setStartAfter', parent);
q.setStartAfter(e),q.setEndAfter(e),/^(|<br(|\/)>)$/i.test(e.innerHTML.trim())&&(q.setStartBefore(e),q.setEndBefore(e),angular.element(e).remove()),/^(|<br(|\/)>)$/i.test(g.innerHTML.trim())&&angular.element(g).remove(),"li"===e.nodeName.toLowerCase()){for(o=f.createDocumentFragment(),m=0;m<r.childNodes.length;m++)p=angular.element("<li>"),c.transferChildNodes(r.childNodes[m],p[0]),c.transferNodeAttributes(r.childNodes[m],p[0]),o.appendChild(p[0]);r=o,n&&(n=r.childNodes[r.childNodes.length-1],n=n.childNodes[n.childNodes.length-1])}}else q.deleteContents();q.insertNode(r),n&&h.setSelectionToElementEnd(n)}};return h}]).service("taDOM",function(){var a={
// recursive function that returns an array of angular.elements that have the passed attribute set on them
getByAttribute:function(b,c){var d=[],e=b.children();return e.length&&angular.forEach(e,function(b){d=d.concat(a.getByAttribute(angular.element(b),c))}),void 0!==b.attr(c)&&d.push(b),d},transferChildNodes:function(a,b){for(
// clear out target
b.innerHTML="";a.childNodes.length>0;)b.appendChild(a.childNodes[0]);return b},splitNodes:function(b,c,d,e,f,g){if(!e&&isNaN(g))throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");for(var h=document.createDocumentFragment(),i=document.createDocumentFragment(),j=0;b.length>0&&(isNaN(g)||g!==j)&&b[0]!==e;)h.appendChild(b[0]),// this removes from the nodes array (if proper childNodes object.
j++;for(!isNaN(f)&&f>=0&&b[0]&&(h.appendChild(document.createTextNode(b[0].nodeValue.substring(0,f))),b[0].nodeValue=b[0].nodeValue.substring(f));b.length>0;)i.appendChild(b[0]);a.transferChildNodes(h,c),a.transferChildNodes(i,d)},transferNodeAttributes:function(a,b){for(var c=0;c<a.attributes.length;c++)b.setAttribute(a.attributes[c].name,a.attributes[c].value);return b}};return a}),angular.module("textAngular.validators",[]).directive("taMaxText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMaxText));if(isNaN(e))throw"Max text must be an integer";c.$observe("taMaxText",function(a){if(e=parseInt(a),isNaN(e))throw"Max text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMaxText=function(a){var b=angular.element("<div/>");return b.html(a),b.text().length<=e}}}}).directive("taMinText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMinText));if(isNaN(e))throw"Min text must be an integer";c.$observe("taMinText",function(a){if(e=parseInt(a),isNaN(e))throw"Min text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMinText=function(a){var b=angular.element("<div/>");return b.html(a),!b.text().length||b.text().length>=e}}}}),angular.module("textAngular.taBind",["textAngular.factories","textAngular.DOM"]).service("_taBlankTest",[function(){return function(a){
// we radically restructure this code.
// what was here before was incredibly fragile.
// What we do now is to check that the html is non-blank visually
// which we check by looking at html->text
if(!a)return!0;
// find first non-tag match - ie start of string or after tag that is not whitespace
// var t0 = performance.now();
// Takes a small fraction of a mSec to do this...
var b=d(a);
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
// var t1 = performance.now();
// console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
return""===b&&!/<img[^>]+>/.test(a)}}]).directive("taButton",[function(){return{link:function(a,b,c){b.attr("unselectable","on"),b.on("mousedown",function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
// this prevents focusout from firing on the editor when clicking toolbar buttons
return b&&angular.extend(a,b),a.preventDefault(),!1})}}}]).directive("taBind",["taSanitize","$timeout","$document","taFixChrome","taBrowserTag","taSelection","taSelectableElements","taApplyCustomRenderers","taOptions","_taBlankTest","$parse","taDOM","textAngularManager",function(b,c,d,e,f,h,j,l,o,p,q,r,s){
// Uses for this are textarea or input with ng-model and ta-bind='text'
// OR any non-form element with contenteditable="contenteditable" ta-bind="html|text" ng-model
return{priority:2,// So we override validators correctly
require:["ngModel","?ngModelOptions"],link:function(f,r,u,v){function w(a){var b;return V.forEach(function(c){if(c.keyCode===a.keyCode){var d=(a.metaKey?N:0)+(a.ctrlKey?M:0)+(a.shiftKey?P:0)+(a.altKey?O:0);if(c.forbiddenModifiers&d)return;c.mustHaveModifiers.every(function(a){return d&a})&&(b=c.specialKey)}}),b}var x,y,z,A,B=v[0],C=v[1]||{},D=void 0!==r.attr("contenteditable")&&r.attr("contenteditable"),E=D||"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase(),F=!1,G=!1,H=!1,I=u.taUnsafeSanitizer||o.disableSanitizer,J=u.taKeepStyles||o.keepStyles,K=/^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,L=/^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,M=1,N=2,O=4,P=8,Q=13,R=16,S=9,T=37,U=39,V=[
//      ctrl/command + z
{specialKey:"UndoKey",forbiddenModifiers:O+P,mustHaveModifiers:[N+M],keyCode:90},
//      ctrl/command + shift + z
{specialKey:"RedoKey",forbiddenModifiers:O,mustHaveModifiers:[N+M,P],keyCode:90},
//      ctrl/command + y
{specialKey:"RedoKey",forbiddenModifiers:O+P,mustHaveModifiers:[N+M],keyCode:89},
//      TabKey
{specialKey:"TabKey",forbiddenModifiers:N+P+O+M,mustHaveModifiers:[],keyCode:S},
//      shift + TabKey
{specialKey:"ShiftTabKey",forbiddenModifiers:N+O+M,mustHaveModifiers:[P],keyCode:S}];
// set the default to be a paragraph value
void 0===u.taDefaultWrap&&(u.taDefaultWrap="p"),/* istanbul ignore next: ie specific test */
""===u.taDefaultWrap?(z="",A=void 0===g.ie?"<div><br></div>":g.ie>=11?"<p><br></p>":g.ie<=8?"<P>&nbsp;</P>":"<p>&nbsp;</p>"):(z=void 0===g.ie||g.ie>=11?"br"===u.taDefaultWrap.toLowerCase()?"<BR><BR>":"<"+u.taDefaultWrap+"><br></"+u.taDefaultWrap+">":g.ie<=8?"<"+u.taDefaultWrap.toUpperCase()+"></"+u.taDefaultWrap.toUpperCase()+">":"<"+u.taDefaultWrap+"></"+u.taDefaultWrap+">",A=void 0===g.ie||g.ie>=11?"br"===u.taDefaultWrap.toLowerCase()?"<br><br>":"<"+u.taDefaultWrap+"><br></"+u.taDefaultWrap+">":g.ie<=8?"<"+u.taDefaultWrap.toUpperCase()+">&nbsp;</"+u.taDefaultWrap.toUpperCase()+">":"<"+u.taDefaultWrap+">&nbsp;</"+u.taDefaultWrap+">"),/* istanbul ignore else */
C.$options||(C.$options={});// ng-model-options support
var W=function(a){if(p(a))return a;var b=angular.element("<div>"+a+"</div>");
//console.log('domTest.children().length():', domTest.children().length);
//console.log('_ensureContentWrapped', domTest.children());
//console.log(value, attrs.taDefaultWrap);
if(0===b.children().length)
// if we have a <br> and the attrs.taDefaultWrap is a <p> we need to remove the <br>
//value = value.replace(/<br>/i, '');
a="<"+u.taDefaultWrap+">"+a+"</"+u.taDefaultWrap+">";else{var c,d=b[0].childNodes,e=!1;for(c=0;c<d.length&&!(e=d[c].nodeName.toLowerCase().match(i));c++);if(e)for(a="",c=0;c<d.length;c++){var f=d[c],g=f.nodeName.toLowerCase();
//console.log('node#:', i, 'name:', nodeName);
if("#comment"===g)a+="<!--"+f.nodeValue+"-->";else if("#text"===g){
// determine if this is all whitespace, if so, we will leave it as it is.
// otherwise, we will wrap it as it is
var h=f.textContent;
// not pure white space so wrap in <p>...</p> or whatever attrs.taDefaultWrap is set to.
a+=h.trim()?"<"+u.taDefaultWrap+">"+h+"</"+u.taDefaultWrap+">":h}else if(g.match(i))a+=f.outerHTML;else{/* istanbul ignore  next: Doesn't seem to trigger on tests */
var j=f.outerHTML||f.nodeValue;/* istanbul ignore else: Doesn't seem to trigger on tests, is tested though */
a+=""!==j.trim()?"<"+u.taDefaultWrap+">"+j+"</"+u.taDefaultWrap+">":j}}else a="<"+u.taDefaultWrap+">"+a+"</"+u.taDefaultWrap+">"}
//console.log(value);
return a};u.taPaste&&(y=q(u.taPaste)),r.addClass("ta-bind");var X;f["$undoManager"+(u.id||"")]=B.$undoManager={_stack:[],_index:0,_max:1e3,push:function(a){return"undefined"==typeof a||null===a||"undefined"!=typeof this.current()&&null!==this.current()&&a===this.current()?a:(this._index<this._stack.length-1&&(this._stack=this._stack.slice(0,this._index+1)),this._stack.push(a),X&&c.cancel(X),this._stack.length>this._max&&this._stack.shift(),this._index=this._stack.length-1,a)},undo:function(){return this.setToIndex(this._index-1)},redo:function(){return this.setToIndex(this._index+1)},setToIndex:function(a){if(!(a<0||a>this._stack.length-1))return this._index=a,this.current()},current:function(){return this._stack[this._index]}};
// in here we are undoing the converts used elsewhere to prevent the < > and & being displayed when they shouldn't in the code.
var Y,Z=function(){if(D)return r[0].innerHTML;if(E)return r.val();throw"textAngular Error: attempting to update non-editable taBind"},$=function(a){
// emit the element-select event, pass the element
return f.$emit("ta-element-select",this),a.preventDefault(),!1},_=f["reApplyOnSelectorHandlers"+(u.id||"")]=function(){/* istanbul ignore else */
F||angular.forEach(j,function(a){
// check we don't apply the handler twice
r.find(a).off("click",$).on("click",$)})},aa=function(a,b,c){H=c||!1,"undefined"!=typeof b&&null!==b||(b=D),// if not contentEditable then the native undo/redo is fine
"undefined"!=typeof a&&null!==a||(a=Z()),p(a)?(
// this avoids us from tripping the ng-pristine flag if we click in and out with out typing
""!==B.$viewValue&&B.$setViewValue(""),b&&""!==B.$undoManager.current()&&B.$undoManager.push("")):(_(),B.$viewValue!==a&&(B.$setViewValue(a),b&&B.$undoManager.push(a))),B.$render()},ba=function(a){r[0].innerHTML=a},ca=f["$undoTaBind"+(u.id||"")]=function(){/* istanbul ignore else: can't really test it due to all changes being ignored as well in readonly */
if(!F&&D){var a=B.$undoManager.undo();"undefined"!=typeof a&&null!==a&&(ba(a),aa(a,!1),Y&&c.cancel(Y),Y=c(function(){r[0].focus(),h.setSelectionToElementEnd(r[0])},1))}},da=f["$redoTaBind"+(u.id||"")]=function(){/* istanbul ignore else: can't really test it due to all changes being ignored as well in readonly */
if(!F&&D){var a=B.$undoManager.redo();"undefined"!=typeof a&&null!==a&&(ba(a),aa(a,!1),/* istanbul ignore next */
Y&&c.cancel(Y),Y=c(function(){r[0].focus(),h.setSelectionToElementEnd(r[0])},1))}};
//used for updating when inserting wrapped elements
f["updateTaBind"+(u.id||"")]=function(){F||aa(void 0,void 0,!0)};
// catch DOM XSS via taSanitize
// Sanitizing both ways is identical
var ea=function(a){return B.$oldViewValue=b(e(a,J),B.$oldViewValue,I)};
//this code is used to update the models when data is entered/deleted
if(
// trigger the validation calls
r.attr("required")&&(B.$validators.required=function(a,b){return!p(a||b)}),
// parsers trigger from the above keyup function or any other time that the viewValue is updated and parses it for storage in the ngModel
B.$parsers.push(ea),B.$parsers.unshift(W),
// because textAngular is bi-directional (which is awesome) we need to also sanitize values going in from the server
B.$formatters.push(ea),B.$formatters.unshift(W),B.$formatters.unshift(function(a){return B.$undoManager.push(a||"")}),E)if(f.events={},D){
// all the code specific to contenteditable divs
var fa=!1,ga=function(a){var d=void 0!==a&&a.match(/content=["']*OneNote.File/i);/* istanbul ignore else: don't care if nothing pasted */
//console.log(text);
if(a&&a.trim().length){
// test paste from word/microsoft product
if(a.match(/class=["']*Mso(Normal|List)/i)||a.match(/content=["']*Word.Document/i)||a.match(/content=["']*OneNote.File/i)){var e=a.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);e=e?e[1]:a,e=e.replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/class=(["']|)MsoNormal(["']|)/gi,"");var g=angular.element("<div>"+e+"</div>"),i=angular.element("<div></div>"),j={element:null,lastIndent:[],lastLi:null,isUl:!1};j.lastIndent.peek=function(){var a=this.length;if(a>0)return this[a-1]};for(var k=function(a){j.isUl=a,j.element=angular.element(a?"<ul>":"<ol>"),j.lastIndent=[],j.lastIndent.peek=function(){var a=this.length;if(a>0)return this[a-1]},j.lastLevelMatch=null},l=0;l<=g[0].childNodes.length;l++)if(g[0].childNodes[l]&&"#text"!==g[0].childNodes[l].nodeName){var m=g[0].childNodes[l].tagName.toLowerCase();if("p"===m||"ul"===m||"h1"===m||"h2"===m||"h3"===m||"h4"===m||"h5"===m||"h6"===m||"table"===m){var n=angular.element(g[0].childNodes[l]),o=(n.attr("class")||"").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);if(o){if(n[0].childNodes.length<2||n[0].childNodes[1].childNodes.length<1)continue;var p="bullet"===o[1].toLowerCase()||"number"!==o[1].toLowerCase()&&!(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(n[0].childNodes[1].innerHTML)||/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(n[0].childNodes[1].childNodes[0].innerHTML)),q=(n.attr("style")||"").match(/margin-left:([\-\.0-9]*)/i),s=parseFloat(q?q[1]:0),t=(n.attr("style")||"").match(/mso-list:l([0-9]+) level([0-9]+) lfo[0-9+]($|;)/i);if(
// prefers the mso-list syntax
t&&t[2]&&(s=parseInt(t[2])),t&&(!j.lastLevelMatch||t[1]!==j.lastLevelMatch[1])||!o[3]||"first"===o[3].toLowerCase()||null===j.lastIndent.peek()||j.isUl!==p&&j.lastIndent.peek()===s)k(p),i.append(j.element);else if(null!=j.lastIndent.peek()&&j.lastIndent.peek()<s)j.element=angular.element(p?"<ul>":"<ol>"),j.lastLi.append(j.element);else if(null!=j.lastIndent.peek()&&j.lastIndent.peek()>s){for(;null!=j.lastIndent.peek()&&j.lastIndent.peek()>s;)if("li"!==j.element.parent()[0].tagName.toLowerCase()){if(!/[uo]l/i.test(j.element.parent()[0].tagName.toLowerCase()))// else it's it should be a sibling
break;j.element=j.element.parent(),j.lastIndent.pop()}else j.element=j.element.parent();j.isUl="ul"===j.element[0].tagName.toLowerCase(),p!==j.isUl&&(k(p),i.append(j.element))}j.lastLevelMatch=t,s!==j.lastIndent.peek()&&j.lastIndent.push(s),j.lastLi=angular.element("<li>"),j.element.append(j.lastLi),j.lastLi.html(n.html().replace(/<!(--|)\[if !supportLists\](--|)>[\s\S]*?<!(--|)\[endif\](--|)>/gi,"")),n.remove()}else k(!1),i.append(n)}}var u=function(a){a=angular.element(a);for(var b=a[0].childNodes.length-1;b>=0;b--)a.after(a[0].childNodes[b]);a.remove()};angular.forEach(i.find("span"),function(a){a.removeAttribute("lang"),a.attributes.length<=0&&u(a)}),angular.forEach(i.find("font"),u),a=i.html(),d&&(a=i.html()||g.html()),
// LF characters instead of spaces in some spots and they are replaced by '/n', so we need to just swap them to spaces
a=a.replace(/\n/g," ")}else{if(
// remove unnecessary chrome insert
a=a.replace(/<(|\/)meta[^>]*?>/gi,""),a.match(/<[^>]*?(ta-bind)[^>]*?>/)){
// entire text-angular or ta-bind has been pasted, REMOVE AT ONCE!!
if(a.match(/<[^>]*?(text-angular)[^>]*?>/)){var v=angular.element("<div>"+a+"</div>");v.find("textarea").remove();for(var w=0;w<binds.length;w++){for(var x=binds[w][0].parentNode.parentNode,z=0;z<binds[w][0].childNodes.length;z++)x.parentNode.insertBefore(binds[w][0].childNodes[z],x);x.parentNode.removeChild(x)}a=v.html().replace('<br class="Apple-interchange-newline">',"")}}else a.match(/^<span/)&&(
// in case of pasting only a span - chrome paste, remove them. THis is just some wierd formatting
// if we remove the '<span class="Apple-converted-space"> </span>' here we destroy the spacing
// on paste from even ourselves!
a.match(/<span class=(\"Apple-converted-space\"|\'Apple-converted-space\')>.<\/span>/gi)||(a=a.replace(/<(|\/)span[^>]*?>/gi,"")));
// Webkit on Apple tags
a=a.replace(/<br class="Apple-interchange-newline"[^>]*?>/gi,"").replace(/<span class="Apple-converted-space">( |&nbsp;)<\/span>/gi,"&nbsp;")}/<li(\s.*)?>/i.test(a)&&/(<ul(\s.*)?>|<ol(\s.*)?>).*<li(\s.*)?>/i.test(a)===!1&&(
// insert missing parent of li element
a=a.replace(/<li(\s.*)?>.*<\/li(\s.*)?>/i,"<ul>$&</ul>")),
// parse whitespace from plaintext input, starting with preceding spaces that get stripped on paste
a=a.replace(/^[ |\u00A0]+/gm,function(a){for(var b="",c=0;c<a.length;c++)b+="&nbsp;";return b}).replace(/\n|\r\n|\r/g,"<br />").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),y&&(a=y(f,{$html:a})||a),
// turn span vertical-align:super into <sup></sup>
a=a.replace(/<span style=("|')([^<]*?)vertical-align\s*:\s*super;?([^>]*?)("|')>([^<]+?)<\/span>/g,"<sup style='$2$3'>$5</sup>"),a=b(a,"",I),
//console.log('DONE\n', text);
h.insertHtml(a,r[0]),c(function(){B.$setViewValue(Z()),fa=!1,r.removeClass("processing-paste")},0)}else fa=!1,r.removeClass("processing-paste")};r.on("paste",f.events.paste=function(b,e){if(/* istanbul ignore else: this is for catching the jqLite testing*/
e&&angular.extend(b,e),F||fa)return b.stopPropagation(),b.preventDefault(),!1;
// Code adapted from http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser/6804718#6804718
fa=!0,r.addClass("processing-paste");var f,g=(b.originalEvent||b).clipboardData;/* istanbul ignore next: Handle legacy IE paste */
if(!g&&window.clipboardData&&window.clipboardData.getData)return f=window.clipboardData.getData("Text"),ga(f),b.stopPropagation(),b.preventDefault(),!1;if(g&&g.getData&&g.types.length>0){for(var h="",i=0;i<g.types.length;i++)h+=" "+g.types[i];/* istanbul ignore next: browser tests */
return/text\/html/i.test(h)?f=g.getData("text/html"):/text\/plain/i.test(h)&&(f=g.getData("text/plain")),ga(f),b.stopPropagation(),b.preventDefault(),!1}// Everything else - empty editdiv and allow browser to paste content into it, then cleanup
var j=a.saveSelection(),k=angular.element('<div class="ta-hidden-input" contenteditable="true"></div>');d.find("body").append(k),k[0].focus(),c(function(){
// restore selection
a.restoreSelection(j),ga(k[0].innerHTML),r[0].focus(),k.remove()},0)}),r.on("cut",f.events.cut=function(a){
// timeout to next is needed as otherwise the paste/cut event has not finished actually changing the display
F?a.preventDefault():c(function(){B.$setViewValue(Z())},0)}),r.on("keydown",f.events.keydown=function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.keyCode===R?h.setStateShiftKey(!0):h.setStateShiftKey(!1),a.specialKey=w(a);var c;/* istanbul ignore else: readonly check */
if(/* istanbul ignore next: difficult to test */
o.keyMappings.forEach(function(b){a.specialKey===b.commandKeyCode&&(
// taOptions has remapped this binding... so
// we disable our own
a.specialKey=void 0),b.testForKey(a)&&(c=b.commandKeyCode),"UndoKey"!==b.commandKeyCode&&"RedoKey"!==b.commandKeyCode||b.enablePropagation||a.preventDefault()}),/* istanbul ignore next: difficult to test */
"undefined"!=typeof c&&(a.specialKey=c),/* istanbul ignore next: difficult to test as can't seem to select */
"undefined"==typeof a.specialKey||"UndoKey"===a.specialKey&&"RedoKey"===a.specialKey||(a.preventDefault(),s.sendKeyCommand(f,a)),!(F||("UndoKey"===a.specialKey&&(ca(),a.preventDefault()),"RedoKey"===a.specialKey&&(da(),a.preventDefault()),a.keyCode!==Q||a.shiftKey||a.ctrlKey||a.metaKey||a.altKey))){var d,e=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},g=h.getSelectionElement();
// shifted to nodeName here from tagName since it is more widely supported see: http://stackoverflow.com/questions/4878484/difference-between-tagname-and-nodename
if(!g.nodeName.match(k))return;var i=angular.element(z),j=["blockquote","ul","ol"];if(e(j,g.parentNode.tagName.toLowerCase())){if(/^<br(|\/)>$/i.test(g.innerHTML.trim())&&!g.nextSibling){
// if last element is blank, pull element outside.
d=angular.element(g);var l=d.parent();l.after(i),d.remove(),0===l.children().length&&l.remove(),h.setSelectionToElementStart(i[0]),a.preventDefault()}/^<[^>]+><br(|\/)><\/[^>]+>$/i.test(g.innerHTML.trim())&&(d=angular.element(g),d.after(i),d.remove(),h.setSelectionToElementStart(i[0]),a.preventDefault())}}});var ha;r.on("keyup",f.events.keyup=function(a,b){// clear the ShiftKey state
/* istanbul ignore next: FF specific bug fix */
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),h.setStateShiftKey(!1),a.keyCode===S){var d=h.getSelection();return void(d.start.element===r[0]&&r.children().length&&h.setSelectionToElementStart(r.children()[0]))}if(
// we do this here during the 'keyup' so that the browser has already moved the slection by one character...
a.keyCode!==T||a.shiftKey||h.updateLeftArrowKey(r),
// we do this here during the 'keyup' so that the browser has already moved the slection by one character...
a.keyCode!==U||a.shiftKey||h.updateRightArrowKey(r),X&&c.cancel(X),!F&&!K.test(a.keyCode))/* istanbul ignore next: Ignore any _ENTER_KEYCODE that has ctrlKey, metaKey or alKey */
if(a.keyCode===Q&&(a.ctrlKey||a.metaKey||a.altKey));else{
// if enter - insert new taDefaultWrap, if shift+enter insert <br/>
if(""!==z&&"<BR><BR>"!==z&&a.keyCode===Q&&!a.ctrlKey&&!a.metaKey&&!a.altKey){for(var e=h.getSelectionElement();!e.nodeName.match(k)&&e!==r[0];)e=e.parentNode;if(a.shiftKey){
// shift + Enter
var f=e.tagName.toLowerCase();
//console.log('Shift+Enter', selection.tagName, attrs.taDefaultWrap, selection.innerHTML.trim());
// For an LI: We see: LI p ....<br><br>
// For a P: We see: P p ....<br><br>
// on Safari, the browser ignores the Shift+Enter and acts just as an Enter Key
// For an LI: We see: LI p <br>
// For a P: We see: P p <br>
if((f===u.taDefaultWrap||"li"===f||"pre"===f||"div"===f)&&!/.+<br><br>/.test(e.innerHTML.trim())){var g=e.previousSibling;
//console.log('wrong....', ps);
// we need to remove this selection and fix the previousSibling up...
g&&(g.innerHTML=g.innerHTML+"<br><br>",angular.element(e).remove(),h.setSelectionToElementEnd(g))}}else
// new paragraph, br should be caught correctly
// shifted to nodeName here from tagName since it is more widely supported see: http://stackoverflow.com/questions/4878484/difference-between-tagname-and-nodename
//console.log('Enter', selection.nodeName, attrs.taDefaultWrap, selection.innerHTML.trim());
if(e.tagName.toLowerCase()!==u.taDefaultWrap&&"li"!==e.nodeName.toLowerCase()&&(""===e.innerHTML.trim()||"<br>"===e.innerHTML.trim())){
// Chrome starts with a <div><br></div> after an EnterKey
// so we replace this with the _defaultVal
var i=angular.element(z);angular.element(e).replaceWith(i),h.setSelectionToElementStart(i[0])}}var j=Z();""===z||""!==j.trim()&&"<br>"!==j.trim()?"<"!==j.substring(0,1)&&""!==u.taDefaultWrap:(ba(z),h.setSelectionToElementStart(r.children()[0]));var l=x!==a.keyCode&&L.test(a.keyCode);ha&&c.cancel(ha),ha=c(function(){aa(j,l,!0)},C.$options.debounce||400),l||(X=c(function(){B.$undoManager.push(j)},250)),x=a.keyCode}});
// when there is a change from a spelling correction in the browser, the only
// change that is seen is a 'input' and the $watch('html') sees nothing... So
// we added this element.on('input') to catch this change and call the _setViewValue()
// so the ngModel is updated and all works as it should.
var ia;
// Placeholders not supported on ie 8 and below
if(r.on("input",function(){Z()!==B.$viewValue&&(
// we wait a time now to allow the natural $watch('html') to handle this change
// and then after a 1 second delay, if there is still a difference we will do the
// _setViewValue() call.
/* istanbul ignore if: can't test */
ia&&c.cancel(ia),/* istanbul ignore next: cant' test? */
ia=c(function(){var b=a.saveSelection(),c=Z();c!==B.$viewValue&&
//console.log('_setViewValue');
//console.log('old:', ngModel.$viewValue);
//console.log('new:', _val);
aa(c,!0),
// if the savedSelection marker is gone at this point, we cannot restore the selection!!!
//console.log('rangy.restoreSelection', ngModel.$viewValue.length, _savedSelection);
0!==B.$viewValue.length&&a.restoreSelection(b)},1e3))}),r.on("blur",f.events.blur=function(){G=!1,/* istanbul ignore else: if readonly don't update model */
F?(H=!0,// don't redo the whole thing, just check the placeholder logic
B.$render()):aa(void 0,void 0,!0)}),u.placeholder&&(g.ie>8||void 0===g.ie)){var ja;if(!u.id)throw"textAngular Error: An unique ID is required for placeholders to work";ja=m("#"+u.id+".placeholder-text:before",'content: "'+u.placeholder+'"'),f.$on("$destroy",function(){n(ja)})}r.on("focus",f.events.focus=function(){G=!0,r.removeClass("placeholder-text"),_()}),r.on("mouseup",f.events.mouseup=function(){var a=h.getSelection();a&&a.start.element===r[0]&&r.children().length&&h.setSelectionToElementStart(r.children()[0])}),
// prevent propagation on mousedown in editor, see #206
r.on("mousedown",f.events.mousedown=function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.stopPropagation()})}else{
// if a textarea or input just add in change and blur handlers, everything else is done by angulars input directive
r.on("change blur",f.events.change=f.events.blur=function(){F||B.$setViewValue(Z())}),r.on("keydown",f.events.keydown=function(a,b){
// Reference to http://stackoverflow.com/questions/6140632/how-to-handle-tab-in-textarea
/* istanbul ignore else: otherwise normal functionality */
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),a.keyCode===S){// tab was pressed
// get caret position/selection
var c=this.selectionStart,d=this.selectionEnd,e=r.val();if(a.shiftKey){
// find \t
var f=e.lastIndexOf("\n",c),g=e.lastIndexOf("\t",c);g!==-1&&g>=f&&(
// set textarea value to: text before caret + tab + text after caret
r.val(e.substring(0,g)+e.substring(g+1)),
// put caret at right position again (add one for the tab)
this.selectionStart=this.selectionEnd=c-1)}else
// set textarea value to: text before caret + tab + text after caret
r.val(e.substring(0,c)+"\t"+e.substring(d)),
// put caret at right position again (add one for the tab)
this.selectionStart=this.selectionEnd=c+1;
// prevent the focus lose
a.preventDefault()}});var ka=function(a,b){for(var c="",d=0;d<b;d++)c+=a;return c},la=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},ma=function(a,b){var c="",d=a.childNodes;
// tab out and add the <ul> or <ol> html piece
// now add on the </ol> or </ul> piece
return b++,c+=ka("\t",b-1)+a.outerHTML.substring(0,4),la(d,function(a,d){/* istanbul ignore next: browser catch */
var e=d.nodeName.toLowerCase();/* istanbul ignore next: not tested, and this was original code -- so not wanting to possibly cause an issue, leaving it... */
return"#comment"===e?void(c+="<!--"+d.nodeValue+"-->"):"#text"===e?void(c+=d.textContent):void(d.outerHTML&&(c+="ul"===e||"ol"===e?"\n"+ma(d,b):"\n"+ka("\t",b)+d.outerHTML))}),c+="\n"+ka("\t",b-1)+a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))};
// handle formating of something like:
// <ol><!--First comment-->
//  <li>Test Line 1<!--comment test list 1--></li>
//    <ul><!--comment ul-->
//      <li>Nested Line 1</li>
//        <!--comment between nested lines--><li>Nested Line 2</li>
//    </ul>
//  <li>Test Line 3</li>
// </ol>
B.$formatters.unshift(function(a){
// tabulate the HTML so it looks nicer
//
// first get a list of the nodes...
// we do this by using the element parser...
//
// doing this -- which is simpiler -- breaks our tests...
//var _nodes=angular.element(htmlValue);
var b=angular.element("<div>"+a+"</div>")[0].childNodes;
// do the reformatting of the layout...
return b.length>0&&(a="",la(b,function(b,c){var d=c.nodeName.toLowerCase();/* istanbul ignore next: not tested, and this was original code -- so not wanting to possibly cause an issue, leaving it... */
// we aready have some content, so drop to a new line
// okay a set of list stuff we want to reformat in a nested way
return"#comment"===d?void(a+="<!--"+c.nodeValue+"-->"):"#text"===d?void(a+=c.textContent):void(c.outerHTML&&(a.length>0&&(a+="\n"),a+="ul"===d||"ol"===d?""+ma(c,0):""+c.outerHTML))})),a})}var na,oa=function(a,b){
// emit the drop event, pass the element, preventing should be done elsewhere
if(/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),!t&&!F){t=!0;var d;d=a.originalEvent?a.originalEvent.dataTransfer:a.dataTransfer,f.$emit("ta-drop-event",this,a,d),c(function(){t=!1,aa(void 0,void 0,!0)},100)}},pa=!1;
// changes to the model variable from outside the html/text inputs
B.$render=function(){/* istanbul ignore if: Catches rogue renders, hard to replicate in tests */
if(!pa){pa=!0;
// catch model being null or undefined
var a=B.$viewValue||"";
// if the editor isn't focused it needs to be updated, otherwise it's receiving user input
H||(/* istanbul ignore else: in other cases we don't care */
D&&G&&(
// update while focussed
r.removeClass("placeholder-text"),/* istanbul ignore next: don't know how to test this */
na&&c.cancel(na),na=c(function(){/* istanbul ignore if: Can't be bothered testing this... */
G||(r[0].focus(),h.setSelectionToElementEnd(r.children()[r.children().length-1])),na=void 0},1)),D?(
// blank
ba(
// WYSIWYG Mode
u.placeholder?""===a?z:a:""===a?z:a),
// if in WYSIWYG and readOnly we kill the use of links by clicking
F?r.off("drop",oa):(_(),r.on("drop",oa))):"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()?
// make sure the end user can SEE the html code as a display. This is a read-only display element
ba(l(a)):
// only for input and textarea inputs
r.val(a)),D&&u.placeholder&&(""===a?G?r.removeClass("placeholder-text"):r.addClass("placeholder-text"):r.removeClass("placeholder-text")),pa=H=!1}},u.taReadonly&&(
//set initial value
F=f.$eval(u.taReadonly),F?(r.addClass("ta-readonly"),
// we changed to readOnly mode (taReadonly='true')
"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()||r.attr("disabled","disabled"),void 0!==r.attr("contenteditable")&&r.attr("contenteditable")&&r.removeAttr("contenteditable")):(r.removeClass("ta-readonly"),
// we changed to NOT readOnly mode (taReadonly='false')
"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase()?r.removeAttr("disabled"):D&&r.attr("contenteditable","true")),
// taReadonly only has an effect if the taBind element is an input or textarea or has contenteditable='true' on it.
// Otherwise it is readonly by default
f.$watch(u.taReadonly,function(a,b){b!==a&&(a?(r.addClass("ta-readonly"),
// we changed to readOnly mode (taReadonly='true')
"textarea"!==r[0].tagName.toLowerCase()&&"input"!==r[0].tagName.toLowerCase()||r.attr("disabled","disabled"),void 0!==r.attr("contenteditable")&&r.attr("contenteditable")&&r.removeAttr("contenteditable"),
// turn ON selector click handlers
angular.forEach(j,function(a){r.find(a).on("click",$)}),r.off("drop",oa)):(r.removeClass("ta-readonly"),
// we changed to NOT readOnly mode (taReadonly='false')
"textarea"===r[0].tagName.toLowerCase()||"input"===r[0].tagName.toLowerCase()?r.removeAttr("disabled"):D&&r.attr("contenteditable","true"),
// remove the selector click handlers
angular.forEach(j,function(a){r.find(a).off("click",$)}),r.on("drop",oa)),F=a)})),
// Initialise the selectableElements
// if in WYSIWYG and readOnly we kill the use of links by clicking
D&&!F&&(angular.forEach(j,function(a){r.find(a).on("click",$)}),r.on("drop",oa))}}}]);
// this global var is used to prevent multiple fires of the drop event. Needs to be global to the textAngular file.
var t=!1,u=angular.module("textAngular",["ngSanitize","textAngularSetup","textAngular.factories","textAngular.DOM","textAngular.validators","textAngular.taBind"]);//This makes ngSanitize required
return u.config([function(){
// clear taTools variable. Just catches testing and any other time that this config may run multiple times...
angular.forEach(e,function(a,b){delete e[b]})}]),u.directive("textAngular",["$compile","$timeout","taOptions","taSelection","taExecCommand","textAngularManager","$document","$animate","$log","$q","$parse",function(b,c,d,e,f,g,h,i,j,k,l){return{require:"?ngModel",scope:{},restrict:"EA",priority:2,// So we override validators correctly
link:function(m,n,o,p){
// all these vars should not be accessable outside this directive
var q,r,s,t,u,v,w,x,y,z,A,B,C=o.serial?o.serial:Math.floor(1e16*Math.random());m._name=o.name?o.name:"textAngularEditor"+C;var D=function(a,b,d){c(function(){a.one(b,d)},100)};if(y=f(o.taDefaultWrap),
// get the settings from the defaults and add our specific functions that need to be on the scope
angular.extend(m,angular.copy(d),{
// wraps the selection in the provided tag / execCommand function. Should only be called in WYSIWYG mode.
wrapSelection:function(a,b,c){
// we restore the saved selection that was saved when focus was lost
/* NOT FUNCTIONAL YET */
/* textAngularManager.restoreFocusSelection(scope._name, scope); */
"undo"===a.toLowerCase()?m["$undoTaBindtaTextElement"+C]():"redo"===a.toLowerCase()?m["$redoTaBindtaTextElement"+C]():(
// catch errors like FF erroring when you try to force an undo with nothing done
y(a,!1,b,m.defaultTagAttributes),c&&
// re-apply the selectable tool events
m["reApplyOnSelectorHandlerstaTextElement"+C](),
// refocus on the shown display element, this fixes a display bug when using :focus styles to outline the box.
// You still have focus on the text/html input it just doesn't show up
m.displayElements.text[0].focus())},showHtml:m.$eval(o.taShowHtml)||!1}),
// setup the options from the optional attributes
o.taFocussedClass&&(m.classes.focussed=o.taFocussedClass),o.taTextEditorClass&&(m.classes.textEditor=o.taTextEditorClass),o.taHtmlEditorClass&&(m.classes.htmlEditor=o.taHtmlEditorClass),o.taDefaultTagAttributes)try{
//  TODO: This should use angular.merge to enhance functionality once angular 1.4 is required
angular.extend(m.defaultTagAttributes,angular.fromJson(o.taDefaultTagAttributes))}catch(a){j.error(a)}
// optional setup functions
o.taTextEditorSetup&&(m.setup.textEditorSetup=m.$parent.$eval(o.taTextEditorSetup)),o.taHtmlEditorSetup&&(m.setup.htmlEditorSetup=m.$parent.$eval(o.taHtmlEditorSetup)),
// optional fileDropHandler function
o.taFileDrop?m.fileDropHandler=m.$parent.$eval(o.taFileDrop):m.fileDropHandler=m.defaultFileDropHandler,w=n[0].innerHTML,
// clear the original content
n[0].innerHTML="",
// Setup the HTML elements as variable references for use later
m.displayElements={
// we still need the hidden input even with a textarea as the textarea may have invalid/old input in it,
// wheras the input will ALLWAYS have the correct value.
forminput:angular.element("<input type='hidden' tabindex='-1' style='display: none;'>"),html:angular.element("<textarea></textarea>"),text:angular.element("<div></div>"),
// other toolbased elements
scrollWindow:angular.element("<div class='ta-scroll-window'></div>"),popover:angular.element('<div class="popover fade bottom" style="max-width: none; width: 305px;"></div>'),popoverArrow:angular.element('<div class="arrow"></div>'),popoverContainer:angular.element('<div class="popover-content"></div>'),resize:{overlay:angular.element('<div class="ta-resizer-handle-overlay"></div>'),background:angular.element('<div class="ta-resizer-handle-background"></div>'),anchors:[angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tr"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-bl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-br"></div>')],info:angular.element('<div class="ta-resizer-handle-info"></div>')}},
// Setup the popover
m.displayElements.popover.append(m.displayElements.popoverArrow),m.displayElements.popover.append(m.displayElements.popoverContainer),m.displayElements.scrollWindow.append(m.displayElements.popover),m.displayElements.popover.on("mousedown",function(a,b){/* istanbul ignore else: this is for catching the jqLite testing*/
// this prevents focusout from firing on the editor when clicking anything in the popover
return b&&angular.extend(a,b),a.preventDefault(),!1}),/* istanbul ignore next: popover resize and scroll events handled */
m.handlePopoverEvents=function(){"block"===m.displayElements.popover.css("display")&&(B&&c.cancel(B),B=c(function(){
//console.log('resize', scope.displayElements.popover.css('display'));
m.reflowPopover(m.resizeElement),m.reflowResizeOverlay(m.resizeElement)},100))},/* istanbul ignore next: browser resize check */
angular.element(window).on("resize",m.handlePopoverEvents),/* istanbul ignore next: browser scroll check */
angular.element(window).on("scroll",m.handlePopoverEvents);
// we want to know if a given node has a scrollbar!
// credit to lotif on http://stackoverflow.com/questions/4880381/check-whether-html-element-has-scrollbars
var E=function(a){var b,c={vertical:!1,horizontal:!1};try{if(b=window.getComputedStyle(a),null===b)return c}catch(a){/* istanbul ignore next: error handler */
return c}var d=b["overflow-y"],e=b["overflow-x"];return{vertical:("scroll"===d||"auto"===d)&&/* istanbul ignore next: not tested */
a.scrollHeight>a.clientHeight,horizontal:("scroll"===e||"auto"===e)&&/* istanbul ignore next: not tested */
a.scrollWidth>a.clientWidth}};
// getScrollTop
//
// we structure this so that it can climb the parents of the _el and when it finds
// one with scrollbars, it adds an EventListener, so that no matter how the
// DOM is structured in the user APP, if there is a scrollbar not as part of the
// ta-scroll-window, we will still capture the 'scroll' events...
// and handle the scroll event properly and do the resize, etc.
//
m.getScrollTop=function(a,b){var c=a.scrollTop;/* istanbul ignore next: triggered only if has scrollbar and scrolled */
/* istanbul ignore next: triggered only if has scrollbar */
// remove element eventListener
/* istanbul ignore next: triggered only if has scrollbar and scrolled */
/* istanbul ignore else: catches only if no scroll */
return"undefined"==typeof c&&(c=0),b&&E(a).vertical&&(a.removeEventListener("scroll",m._scrollListener,!1),a.addEventListener("scroll",m._scrollListener,!1)),0!==c?{node:a.nodeName,top:c}:a.parentNode?m.getScrollTop(a.parentNode,b):{node:"<none>",top:0}},
// define the popover show and hide functions
m.showPopover=function(a){m.getScrollTop(m.displayElements.scrollWindow[0],!0),m.displayElements.popover.css("display","block"),
// we must use a $timeout here, or the css change to the
// displayElements.resize.overlay will not take!!!
// WHY???
c(function(){m.displayElements.resize.overlay.css("display","block")}),m.resizeElement=a,m.reflowPopover(a),i.addClass(m.displayElements.popover,"in"),D(h.find("body"),"click keyup",function(){m.hidePopover()})},/* istanbul ignore next: browser scroll event handler */
m._scrollListener=function(a,b){m.handlePopoverEvents()},m.reflowPopover=function(a){var b=m.getScrollTop(m.displayElements.scrollWindow[0],!1),c=a[0].offsetTop-b.top;
//var spaceBelowImage = scope.displayElements.text[0].offsetHeight - _el[0].offsetHeight - spaceAboveImage;
//console.log(spaceAboveImage, spaceBelowImage);
/* istanbul ignore if: catches only if near bottom of editor */
c<51?(m.displayElements.popover.css("top",a[0].offsetTop+a[0].offsetHeight+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("top").addClass("bottom")):(m.displayElements.popover.css("top",a[0].offsetTop-54+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("bottom").addClass("top"));var d=m.displayElements.text[0].offsetWidth-m.displayElements.popover[0].offsetWidth,e=a[0].offsetLeft+a[0].offsetWidth/2-m.displayElements.popover[0].offsetWidth/2,f=Math.max(0,Math.min(d,e)),g=Math.min(e,Math.max(0,e-d))-11;f+=window.scrollX,g-=window.scrollX,m.displayElements.popover.css("left",f+"px"),m.displayElements.popoverArrow.css("margin-left",g+"px")},m.hidePopover=function(){m.displayElements.popover.css("display","none"),m.displayElements.popoverContainer.attr("style",""),m.displayElements.popoverContainer.attr("class","popover-content"),m.displayElements.popover.removeClass("in"),m.displayElements.resize.overlay.css("display","none")},
// setup the resize overlay
m.displayElements.resize.overlay.append(m.displayElements.resize.background),angular.forEach(m.displayElements.resize.anchors,function(a){m.displayElements.resize.overlay.append(a)}),m.displayElements.resize.overlay.append(m.displayElements.resize.info),m.displayElements.scrollWindow.append(m.displayElements.resize.overlay),
// A click event on the resize.background will now shift the focus to the editor
/* istanbul ignore next: click on the resize.background to focus back to editor */
m.displayElements.resize.background.on("click",function(a){m.displayElements.text[0].focus()}),
// define the show and hide events
m.reflowResizeOverlay=function(a){a=angular.element(a)[0],m.displayElements.resize.overlay.css({display:"block",left:a.offsetLeft-5+"px",top:a.offsetTop-5+"px",width:a.offsetWidth+10+"px",height:a.offsetHeight+10+"px"}),m.displayElements.resize.info.text(a.offsetWidth+" x "+a.offsetHeight)},/* istanbul ignore next: pretty sure phantomjs won't test this */
m.showResizeOverlay=function(a){var b=h.find("body");z=function(c){var d={width:parseInt(a.attr("width")),height:parseInt(a.attr("height")),x:c.clientX,y:c.clientY};(void 0===d.width||isNaN(d.width))&&(d.width=a[0].offsetWidth),(void 0===d.height||isNaN(d.height))&&(d.height=a[0].offsetHeight),m.hidePopover();var e=d.height/d.width,f=function(b){function c(a){return Math.round(Math.max(0,a))}
// calculate new size
var f={x:Math.max(0,d.width+(b.clientX-d.x)),y:Math.max(0,d.height+(b.clientY-d.y))},g=void 0!==o.taResizeForceAspectRatio,h=o.taResizeMaintainAspectRatio,i=g||h&&!b.shiftKey;if(i){var j=f.y/f.x;f.x=e>j?f.x:f.y/e,f.y=e>j?f.x*e:f.y}var k=angular.element(a);k.css("height",c(f.y)+"px"),k.css("width",c(f.x)+"px"),
// reflow the popover tooltip
m.reflowResizeOverlay(a)};b.on("mousemove",f),D(b,"mouseup",function(a){a.preventDefault(),a.stopPropagation(),b.off("mousemove",f),
// at this point, we need to force the model to update! since the css has changed!
// this fixes bug: #862 - we now hide the popover -- as this seems more consitent.
// there are still issues under firefox, the window does not repaint. -- not sure
// how best to resolve this, but clicking anywhere works.
m.$apply(function(){m.hidePopover(),m.updateTaBindtaTextElement()},100)}),c.stopPropagation(),c.preventDefault()},m.displayElements.resize.anchors[3].off("mousedown"),m.displayElements.resize.anchors[3].on("mousedown",z),m.reflowResizeOverlay(a),D(b,"click",function(){m.hideResizeOverlay()})},/* istanbul ignore next: pretty sure phantomjs won't test this */
m.hideResizeOverlay=function(){m.displayElements.resize.anchors[3].off("mousedown",z),m.displayElements.resize.overlay.css("display","none")},
// allow for insertion of custom directives on the textarea and div
m.setup.htmlEditorSetup(m.displayElements.html),m.setup.textEditorSetup(m.displayElements.text),m.displayElements.html.attr({id:"taHtmlElement"+C,"ng-show":"showHtml","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.text.attr({id:"taTextElement"+C,contentEditable:"true","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.scrollWindow.attr({"ng-hide":"showHtml"}),o.taDefaultWrap&&
// taDefaultWrap is only applied to the text and not the html view
m.displayElements.text.attr("ta-default-wrap",o.taDefaultWrap),o.taUnsafeSanitizer&&(m.displayElements.text.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer),m.displayElements.html.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer)),o.taKeepStyles&&(m.displayElements.text.attr("ta-keep-styles",o.taKeepStyles),m.displayElements.html.attr("ta-keep-styles",o.taKeepStyles)),
// add the main elements to the origional element
m.displayElements.scrollWindow.append(m.displayElements.text),n.append(m.displayElements.scrollWindow),n.append(m.displayElements.html),m.displayElements.forminput.attr("name",m._name),n.append(m.displayElements.forminput),o.tabindex&&(n.removeAttr("tabindex"),m.displayElements.text.attr("tabindex",o.tabindex),m.displayElements.html.attr("tabindex",o.tabindex)),o.placeholder&&(m.displayElements.text.attr("placeholder",o.placeholder),m.displayElements.html.attr("placeholder",o.placeholder)),o.taDisabled&&(m.displayElements.text.attr("ta-readonly","disabled"),m.displayElements.html.attr("ta-readonly","disabled"),m.disabled=m.$parent.$eval(o.taDisabled),m.$parent.$watch(o.taDisabled,function(a){m.disabled=a,m.disabled?n.addClass(m.classes.disabled):n.removeClass(m.classes.disabled)})),o.taPaste&&(m._pasteHandler=function(a){return l(o.taPaste)(m.$parent,{$html:a})},m.displayElements.text.attr("ta-paste","_pasteHandler($html)")),
// compile the scope with the text and html elements only - if we do this with the main element it causes a compile loop
b(m.displayElements.scrollWindow)(m),b(m.displayElements.html)(m),m.updateTaBindtaTextElement=m["updateTaBindtaTextElement"+C],m.updateTaBindtaHtmlElement=m["updateTaBindtaHtmlElement"+C],
// add the classes manually last
n.addClass("ta-root"),m.displayElements.scrollWindow.addClass("ta-text ta-editor "+m.classes.textEditor),m.displayElements.html.addClass("ta-html ta-editor "+m.classes.htmlEditor);var F=function(a,b){/* istanbul ignore next: this is only here because of a bug in rangy where rangy.saveSelection() has cleared the state */
b!==h[0].queryCommandState(a)&&h[0].execCommand(a,!1,null)};
// used in the toolbar actions
m._actionRunning=!1;var G=!1;
// changes to the model variable from outside the html/text inputs
// if no ngModel, then the only input is from inside text-angular
if(m.startAction=function(){var b=!1,c=!1,d=!1,e=!1;
//console.log('B', $document[0].queryCommandState('bold'), 'I', $document[0].queryCommandState('italic'), '_', $document[0].queryCommandState('underline'), 'S', $document[0].queryCommandState('strikeThrough') );
//console.log('B', _beforeStateBold, 'I', _beforeStateItalic, '_', _beforeStateUnderline, 'S', _beforeStateStrikethough);
// if rangy library is loaded return a function to reload the current selection
// rangy.saveSelection() clear the state of bold, italic, underline, strikethrough
// so we reset them here....!!!
// this fixes bugs #423, #1129, #1105, #693 which are actually rangy bugs!
return m._actionRunning=!0,b=h[0].queryCommandState("bold"),c=h[0].queryCommandState("italic"),d=h[0].queryCommandState("underline"),e=h[0].queryCommandState("strikeThrough"),G=a.saveSelection(),F("bold",b),F("italic",c),F("underline",d),F("strikeThrough",e),function(){G&&a.restoreSelection(G)}},m.endAction=function(){m._actionRunning=!1,G&&(m.showHtml?m.displayElements.html[0].focus():m.displayElements.text[0].focus(),
// rangy.restoreSelection(_savedSelection);
a.removeMarkers(G)),G=!1,m.updateSelectedStyles(),
// only update if in text or WYSIWYG mode
m.showHtml||m["updateTaBindtaTextElement"+C]()},
// note that focusout > focusin is called everytime we click a button - except bad support: http://www.quirksmode.org/dom/events/blurfocus.html
// cascades to displayElements.text and displayElements.html automatically.
u=function(a){m.focussed=!0,n.addClass(m.classes.focussed),/*******  NOT FUNCTIONAL YET
                    if (e.target.id === 'taTextElement' + _serial) {
                        console.log('_focusin taTextElement');
                        // we only do this if NOT focussed
                        textAngularManager.restoreFocusSelection(scope._name);
                    }
*******/
x.focus(),n.triggerHandler("focus"),
// we call editorScope.updateSelectedStyles() here because we want the toolbar to be focussed
// as soon as we have focus.  Otherwise this only happens on mousedown or keydown etc...
/* istanbul ignore else: don't run if already running */
m.updateSelectedStyles&&!m._bUpdateSelectedStyles&&
// we don't set editorScope._bUpdateSelectedStyles here, because we do not want the
// updateSelectedStyles() to run twice which it will do after 200 msec if we have
// set editorScope._bUpdateSelectedStyles
//
// WOW, normally I would do a scope.$apply here, but this causes ERRORs when doing tests!
c(function(){m.updateSelectedStyles()},0)},m.displayElements.html.on("focus",u),m.displayElements.text.on("focus",u),v=function(a){/****************** NOT FUNCTIONAL YET
                    try {
                        var _s = rangy.getSelection();
                        if (_s) {
                            // we save the selection when we loose focus so that if do a wrapSelection, the
                            // apropriate selection in the editor is restored before action.
                            var _savedFocusRange = rangy.saveRange(_s.getRangeAt(0));
                            textAngularManager.saveFocusSelection(scope._name, _savedFocusRange);
                        }
                    } catch(error) { }
                    *****************/
// if we are NOT runnig an action and have NOT focussed again on the text etc then fire the blur events
// to prevent multiple apply error defer to next seems to work.
return m._actionRunning||h[0].activeElement===m.displayElements.html[0]||h[0].activeElement===m.displayElements.text[0]||(n.removeClass(m.classes.focussed),x.unfocus(),c(function(){m._bUpdateSelectedStyles=!1,n.triggerHandler("blur"),m.focussed=!1},0)),a.preventDefault(),!1},m.displayElements.html.on("blur",v),m.displayElements.text.on("blur",v),m.displayElements.text.on("paste",function(a){n.triggerHandler("paste",a)}),
// Setup the default toolbar tools, this way allows the user to add new tools like plugins.
// This is on the editor for future proofing if we find a better way to do this.
m.queryFormatBlockState=function(a){
// $document[0].queryCommandValue('formatBlock') errors in Firefox if we call this when focussed on the textarea
return!m.showHtml&&a.toLowerCase()===h[0].queryCommandValue("formatBlock").toLowerCase()},m.queryCommandState=function(a){
// $document[0].queryCommandValue('formatBlock') errors in Firefox if we call this when focussed on the textarea
return m.showHtml?"":h[0].queryCommandState(a)},m.switchView=function(){m.showHtml=!m.showHtml,i.enabled(!1,m.displayElements.html),i.enabled(!1,m.displayElements.text),
//Show the HTML view
/* istanbul ignore next: ngModel exists check */
/* THIS is not the correct thing to do, here....
   The ngModel is correct, but it is not formatted as the user as done it...
                    var _model;
                    if (ngModel) {
                        _model = ngModel.$viewValue;
                    } else {
                        _model = scope.html;
                    }
                    var _html = scope.displayElements.html[0].value;
                    if (getDomFromHtml(_html).childElementCount !== getDomFromHtml(_model).childElementCount) {
                        // the model and the html do not agree
                        // they can get out of sync and when they do, we correct that here...
                        scope.displayElements.html.val(_model);
                    }
*/
m.showHtml?
//defer until the element is visible
c(function(){
// [0] dereferences the DOM object from the angular.element
return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.html[0].focus()},100):
//Show the WYSIWYG view
//defer until the element is visible
c(function(){
// [0] dereferences the DOM object from the angular.element
return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.text[0].focus()},100)},o.ngModel){var H=!0;p.$render=function(){if(H){
// we need this firstRun to set the originalContents otherwise it gets overrided by the setting of ngModel to undefined from NaN
H=!1;
// if view value is null or undefined initially and there was original content, set to the original content
var a=m.$parent.$eval(o.ngModel);void 0!==a&&null!==a||!w||""===w||
// on passing through to taBind it will be sanitised
p.$setViewValue(w)}m.displayElements.forminput.val(p.$viewValue),
// if the editors aren't focused they need to be updated, otherwise they are doing the updating
m.html=p.$viewValue||""},
// trigger the validation calls
n.attr("required")&&(p.$validators.required=function(a,b){var c=a||b;return!(!c||""===c.trim())})}else
// if no ngModel then update from the contents of the origional html.
m.displayElements.forminput.val(w),m.html=w;if(
// changes from taBind back up to here
m.$watch("html",function(a,b){a!==b&&(o.ngModel&&p.$viewValue!==a&&p.$setViewValue(a),m.displayElements.forminput.val(a))}),o.taTargetToolbars)x=g.registerEditor(m._name,m,o.taTargetToolbars.split(","));else{var I=angular.element('<div text-angular-toolbar name="textAngularToolbar'+C+'">');
// passthrough init of toolbar options
o.taToolbar&&I.attr("ta-toolbar",o.taToolbar),o.taToolbarClass&&I.attr("ta-toolbar-class",o.taToolbarClass),o.taToolbarGroupClass&&I.attr("ta-toolbar-group-class",o.taToolbarGroupClass),o.taToolbarButtonClass&&I.attr("ta-toolbar-button-class",o.taToolbarButtonClass),o.taToolbarActiveButtonClass&&I.attr("ta-toolbar-active-button-class",o.taToolbarActiveButtonClass),o.taFocussedClass&&I.attr("ta-focussed-class",o.taFocussedClass),n.prepend(I),b(I)(m.$parent),x=g.registerEditor(m._name,m,["textAngularToolbar"+C])}m.$on("$destroy",function(){g.unregisterEditor(m._name),angular.element(window).off("blur"),angular.element(window).off("resize",m.handlePopoverEvents),angular.element(window).off("scroll",m.handlePopoverEvents)}),
// catch element select event and pass to toolbar tools
m.$on("ta-element-select",function(a,b){x.triggerElementSelect(a,b)&&m["reApplyOnSelectorHandlerstaTextElement"+C]()}),/******************* no working fully
                var distanceFromPoint = function (px, py, x, y) {
                    return Math.sqrt((px-x)*(px-x)+(py-y)*(py-y));
                };
                // because each object is a rectangle and we have a single point,
                // we need to give priority if the point is inside the rectangle
                var getPositionDistance = function(el, x, y) {
                    var range = document.createRange();
                    range.selectNode(el);
                    var rect = range.getBoundingClientRect();
                    console.log(el, rect);
                    range.detach();
                    var bcr = rect;
                    // top left
                    var d1 = distanceFromPoint(bcr.left, bcr.top, x, y);
                    // bottom left
                    var d2 = distanceFromPoint(bcr.left, bcr.bottom, x, y);
                    // top right
                    var d3 = distanceFromPoint(bcr.right, bcr.top, x, y);
                    // bottom right
                    var d4 = distanceFromPoint(bcr.right, bcr.bottom, x, y);
                    return Math.min(d1, d2, d3, d4);
                };
                var findClosest = function(el, minElement, maxDistance, x, y) {
                    var _d=0;
                    for (var i = 0; i < el.childNodes.length; i++) {
                        var _n = el.childNodes[i];
                        if (!_n.childNodes.length) {
                            _d = getPositionDistance(_n, x, y);
                            //console.log(_n, _n.childNodes, _d);
                            if (_d < maxDistance) {
                                maxDistance = _d;
                                minElement = _n;
                            }
                        }
                        var res = findClosest(_n, minElement, maxDistance, x, y);
                        if (res.max < maxDistance) {
                            maxDistance = res.max;
                            minElement = res.min;
                        }
                    }
                    return { max: maxDistance, min: minElement };
                };
                var getClosestElement = function (el, x, y) {
                    return findClosest(el, null, 12341234124, x, y);
                };
****************/
m.$on("ta-drop-event",function(a,b,d,f){f&&f.files&&f.files.length>0?(m.displayElements.text[0].focus(),
// we must set the location of the drop!
//console.log(dropEvent.clientX, dropEvent.clientY, dropEvent.target);
e.setSelectionToElementEnd(d.target),angular.forEach(f.files,function(a){
// taking advantage of boolean execution, if the fileDropHandler returns true, nothing else after it is executed
// If it is false then execute the defaultFileDropHandler if the fileDropHandler is NOT the default one
// Once one of these has been executed wrap the result as a promise, if undefined or variable update the taBind, else we should wait for the promise
try{k.when(m.fileDropHandler(a,m.wrapSelection)||m.fileDropHandler!==m.defaultFileDropHandler&&k.when(m.defaultFileDropHandler(a,m.wrapSelection))).then(function(){m["updateTaBindtaTextElement"+C]()})}catch(a){j.error(a)}}),d.preventDefault(),d.stopPropagation()):c(function(){m["updateTaBindtaTextElement"+C]()},0)}),
// the following is for applying the active states to the tools that support it
m._bUpdateSelectedStyles=!1,/* istanbul ignore next: browser window/tab leave check */
angular.element(window).on("blur",function(){m._bUpdateSelectedStyles=!1,m.focussed=!1}),
// loop through all the tools polling their activeState function if it exists
m.updateSelectedStyles=function(){var a;/* istanbul ignore next: This check is to ensure multiple timeouts don't exist */
A&&c.cancel(A),
// test if the common element ISN'T the root ta-text node
void 0!==(a=e.getSelectionElement())&&a.parentNode!==m.displayElements.text[0]?x.updateSelectedStyles(angular.element(a)):x.updateSelectedStyles(),
// used to update the active state when a key is held down, ie the left arrow
/* istanbul ignore else: browser only check */
m._bUpdateSelectedStyles&&(A=c(m.updateSelectedStyles,200))},
// start updating on keydown
q=function(){/* istanbul ignore next: ie catch */
/* istanbul ignore next: ie catch */
/* istanbul ignore else: don't run if already running */
return m.focussed?void(m._bUpdateSelectedStyles||(m._bUpdateSelectedStyles=!0,m.$apply(function(){m.updateSelectedStyles()}))):void(m._bUpdateSelectedStyles=!1)},m.displayElements.html.on("keydown",q),m.displayElements.text.on("keydown",q),
// stop updating on key up and update the display/model
r=function(){m._bUpdateSelectedStyles=!1},m.displayElements.html.on("keyup",r),m.displayElements.text.on("keyup",r),
// stop updating on key up and update the display/model
s=function(a,b){
// bug fix for Firefox.  If we are selecting a <a> already, any characters will
// be added within the <a> which is bad!
/* istanbul ignore next: don't see how to test this... */
if(e.getSelection){var c=e.getSelection();
// in a weird case (can't reproduce) taSelection.getSelectionElement() can be undefined!!
// this comes from range.commonAncestorContainer;
// so I check for this here which fixes the error case
e.getSelectionElement()&&"a"===e.getSelectionElement().nodeName.toLowerCase()&&(
// check and see if we are at the edge of the <a>
3===c.start.element.nodeType&&c.start.element.textContent.length===c.end.offset&&
// we are at the end of the <a>!!!
// so move the selection to after the <a>!!
e.setSelectionAfterElement(e.getSelectionElement()),3===c.start.element.nodeType&&0===c.start.offset&&
// we are at the start of the <a>!!!
// so move the selection before the <a>!!
e.setSelectionBeforeElement(e.getSelectionElement()))}/* istanbul ignore else: this is for catching the jqLite testing*/
b&&angular.extend(a,b),m.$apply(function(){if(x.sendKeyCommand(a))/* istanbul ignore else: don't run if already running */
return m._bUpdateSelectedStyles||m.updateSelectedStyles(),a.preventDefault(),!1})},m.displayElements.html.on("keypress",s),m.displayElements.text.on("keypress",s),
// update the toolbar active states when we click somewhere in the text/html boxed
t=function(){
// ensure only one execution of updateSelectedStyles()
m._bUpdateSelectedStyles=!1,
// for some reason, unless we do a $timeout here, after a _mouseup when the line is
// highlighted, and instead use a scope.$apply(function(){ scope.updateSelectedStyles(); });
// doesn't work properly, so we replaced this with:
/* istanbul ignore next: not tested  */
c(function(){m.updateSelectedStyles()},0)},m.displayElements.html.on("mouseup",t),m.displayElements.text.on("mouseup",t)}}}]),u.service("textAngularManager",["taToolExecuteAction","taTools","taRegisterTool","$interval","$rootScope","$log",function(a,b,c,d,e,g){
// this service is used to manage all textAngular editors and toolbars.
// All publicly published functions that modify/need to access the toolbar or editor scopes should be in here
// these contain references to all the editors and toolbars that have been initialised in this app
var h,i={},j={},k=0,l=function(a){angular.forEach(j,function(b){b.editorFunctions.updateSelectedStyles(a)})},m=50,n=function(){k=Date.now(),/* istanbul ignore next: setup a one time updateStyles() */
h=d(function(){l(),h=void 0},m,1)};/* istanbul ignore next: make sure clean up on destroy */
e.$on("destroy",function(){h&&(d.cancel(h),h=void 0)});var o=function(){Math.abs(Date.now()-k)>m&&
// we have already triggered the updateStyles a long time back... so setup it again...
n()};
// when we focus into a toolbar, we need to set the TOOLBAR's $parent to be the toolbars it's linked to.
// We also need to set the tools to be updated to be the toolbars...
return{
// register an editor and the toolbars that it is affected by
registerEditor:function(c,d,e){
// NOTE: name === editorScope._name
// targetToolbars is an [] of 'toolbar name's
// targetToolbars are optional, we don't require a toolbar to function
if(!c||""===c)throw"textAngular Error: An editor requires a name";if(!d)throw"textAngular Error: An editor requires a scope";if(j[c])throw'textAngular Error: An Editor with name "'+c+'" already exists';return j[c]={scope:d,toolbars:e,
// toolbarScopes used by this editor
toolbarScopes:[],_registerToolbarScope:function(a){
// add to the list late
this.toolbars.indexOf(a.name)>=0&&
// if this toolbarScope is being used by this editor we add it as one of the scopes
this.toolbarScopes.push(a)},
// this is a suite of functions the editor should use to update all it's linked toolbars
editorFunctions:{disable:function(){
// disable all linked toolbars
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!0})},enable:function(){
// enable all linked toolbars
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!1})},focus:function(){
// this should be called when the editor is focussed
angular.forEach(j[c].toolbarScopes,function(a){a._parent=d,a.disabled=!1,a.focussed=!0}),d.focussed=!0},unfocus:function(){
// this should be called when the editor becomes unfocussed
angular.forEach(j[c].toolbarScopes,function(a){a.disabled=!0,a.focussed=!1}),d.focussed=!1},updateSelectedStyles:function(a){
// update the active state of all buttons on liked toolbars
angular.forEach(j[c].toolbarScopes,function(b){angular.forEach(b.tools,function(c){c.activeState&&(b._parent=d,
// selectedElement may be undefined if nothing selected
c.active=c.activeState(a))})})},sendKeyCommand:function(e){
// we return true if we applied an action, false otherwise
var f=!1;return(e.ctrlKey||e.metaKey||e.specialKey)&&angular.forEach(b,function(b,g){if(b.commandKeyCode&&(b.commandKeyCode===e.which||b.commandKeyCode===e.specialKey))for(var h=0;h<j[c].toolbarScopes.length;h++)if(void 0!==j[c].toolbarScopes[h].tools[g]){a.call(j[c].toolbarScopes[h].tools[g],d),f=!0;break}}),f},triggerElementSelect:function(a,e){
// search through the taTools to see if a match for the tag is made.
// if there is, see if the tool is on a registered toolbar and not disabled.
// NOTE: This can trigger on MULTIPLE tools simultaneously.
var f=function(a,b){for(var c=!0,d=0;d<b.length;d++)c=c&&a.attr(b[d]);return c},g=[],h={},i=!1;e=angular.element(e);
// get all valid tools by element name, keep track if one matches the
var k=!1;
// Run the actions on the first visible filtered tool only
if(angular.forEach(b,function(a,b){a.onElementSelect&&a.onElementSelect.element&&a.onElementSelect.element.toLowerCase()===e[0].tagName.toLowerCase()&&(!a.onElementSelect.filter||a.onElementSelect.filter(e))&&(
// this should only end up true if the element matches the only attributes
k=k||angular.isArray(a.onElementSelect.onlyWithAttrs)&&f(e,a.onElementSelect.onlyWithAttrs),a.onElementSelect.onlyWithAttrs&&!f(e,a.onElementSelect.onlyWithAttrs)||(h[b]=a))}),
// if we matched attributes to filter on, then filter, else continue
k?(angular.forEach(h,function(a,b){a.onElementSelect.onlyWithAttrs&&f(e,a.onElementSelect.onlyWithAttrs)&&g.push({name:b,tool:a})}),
// sort most specific (most attrs to find) first
g.sort(function(a,b){return b.tool.onElementSelect.onlyWithAttrs.length-a.tool.onElementSelect.onlyWithAttrs.length})):angular.forEach(h,function(a,b){g.push({name:b,tool:a})}),g.length>0)for(var l=0;l<g.length;l++){for(var m=g[l].tool,n=g[l].name,o=0;o<j[c].toolbarScopes.length;o++)if(void 0!==j[c].toolbarScopes[o].tools[n]){m.onElementSelect.action.call(j[c].toolbarScopes[o].tools[n],a,e,d),i=!0;break}if(i)break}return i}}},angular.forEach(e,function(a){i[a]&&j[c].toolbarScopes.push(i[a])}),o(),j[c].editorFunctions},
// retrieve editor by name, largely used by testing suites only
retrieveEditor:function(a){return j[a]},unregisterEditor:function(a){delete j[a],o()},
// registers a toolbar such that it can be linked to editors
registerToolbar:function(a){if(!a)throw"textAngular Error: A toolbar requires a scope";if(!a.name||""===a.name)throw"textAngular Error: A toolbar requires a name";if(i[a.name])throw'textAngular Error: A toolbar with name "'+a.name+'" already exists';i[a.name]=a,
// walk all the editors and connect this toolbarScope to the editors.... if we need to.  This way, it does
// not matter if we register the editors after the toolbars or not
// Note the editor will ignore this toolbarScope if it is not connected to it...
angular.forEach(j,function(b){b._registerToolbarScope(a)}),o()},
// retrieve toolbar by name, largely used by testing suites only
retrieveToolbar:function(a){return i[a]},
// retrieve toolbars by editor name, largely used by testing suites only
retrieveToolbarsViaEditor:function(a){var b=[],c=this;return angular.forEach(this.retrieveEditor(a).toolbars,function(a){b.push(c.retrieveToolbar(a))}),b},unregisterToolbar:function(a){delete i[a],o()},
// functions for updating the toolbar buttons display
updateToolsDisplay:function(a){
// pass a partial struct of the taTools, this allows us to update the tools on the fly, will not change the defaults.
var b=this;angular.forEach(a,function(a,c){b.updateToolDisplay(c,a)})},
// this function resets all toolbars to their default tool definitions
resetToolsDisplay:function(){var a=this;angular.forEach(b,function(b,c){a.resetToolDisplay(c)}),o()},
// update a tool on all toolbars
updateToolDisplay:function(a,b){var c=this;angular.forEach(i,function(d,e){c.updateToolbarToolDisplay(e,a,b)}),o()},
// resets a tool to the default/starting state on all toolbars
resetToolDisplay:function(a){var b=this;angular.forEach(i,function(c,d){b.resetToolbarToolDisplay(d,a)}),o()},
// update a tool on a specific toolbar
updateToolbarToolDisplay:function(a,b,c){if(!i[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';i[a].updateToolDisplay(b,c)},
// reset a tool on a specific toolbar to it's default starting value
resetToolbarToolDisplay:function(a,c){if(!i[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';i[a].updateToolDisplay(c,b[c],!0)},
// removes a tool from all toolbars and it's definition
removeTool:function(a){delete b[a],angular.forEach(i,function(b){delete b.tools[a];for(var c=0;c<b.toolbar.length;c++){for(var d,e=0;e<b.toolbar[c].length;e++){if(b.toolbar[c][e]===a){d={group:c,index:e};break}if(void 0!==d)break}void 0!==d&&(b.toolbar[d.group].slice(d.index,1),b._$element.children().eq(d.group).children().eq(d.index).remove())}}),o()},
// toolkey, toolDefinition are required. If group is not specified will pick the last group, if index isnt defined will append to group
addTool:function(a,b,d,e){c(a,b),angular.forEach(i,function(c){c.addTool(a,b,d,e)}),o()},
// adds a Tool but only to one toolbar not all
addToolToToolbar:function(a,b,d,e,f){c(a,b),i[d].addTool(a,b,e,f),o()},
// this is used when externally the html of an editor has been changed and textAngular needs to be notified to update the model.
// this will call a $digest if not already happening
refreshEditor:function(a){if(!j[a])throw'textAngular Error: No Editor with name "'+a+'" exists';j[a].scope.updateTaBindtaTextElement(),/* istanbul ignore else: phase catch */
j[a].scope.$$phase||j[a].scope.$digest(),o()},
// this is used by taBind to send a key command in response to a special key event
sendKeyCommand:function(a,b){var c=j[a._name];/* istanbul ignore else: if nothing to do, do nothing */
if(c&&c.editorFunctions.sendKeyCommand(b))/* istanbul ignore else: don't run if already running */
return a._bUpdateSelectedStyles||a.updateSelectedStyles(),b.preventDefault(),!1},
//
// When a toolbar and tools are created, it isn't until there is a key event or mouse event
// that the updateSelectedStyles() is called behind the scenes.
// This function forces an update through the existing editors to help the application make sure
// the inital state is correct.
//
updateStyles:l,
// return the current version of textAngular in use to the user
getVersion:function(){return f},
// for testing
getToolbarScopes:function(){var a=[];return angular.forEach(j,function(b){a=a.concat(b.toolbarScopes)}),a}}}]),u.directive("textAngularToolbar",["$compile","textAngularManager","taOptions","taTools","taToolExecuteAction","$window",function(a,b,c,d,e,f){return{scope:{name:"@"},restrict:"EA",link:function(g,h,i){if(!g.name||""===g.name)throw"textAngular Error: A toolbar requires a name";angular.extend(g,angular.copy(c)),i.taToolbar&&(g.toolbar=g.$parent.$eval(i.taToolbar)),i.taToolbarClass&&(g.classes.toolbar=i.taToolbarClass),i.taToolbarGroupClass&&(g.classes.toolbarGroup=i.taToolbarGroupClass),i.taToolbarButtonClass&&(g.classes.toolbarButton=i.taToolbarButtonClass),i.taToolbarActiveButtonClass&&(g.classes.toolbarButtonActive=i.taToolbarActiveButtonClass),i.taFocussedClass&&(g.classes.focussed=i.taFocussedClass),g.disabled=!0,g.focussed=!1,g._$element=h,h[0].innerHTML="",h.addClass("ta-toolbar "+g.classes.toolbar),g.$watch("focussed",function(){g.focussed?h.addClass(g.classes.focussed):h.removeClass(g.classes.focussed)});var j=function(b,c){var d;if(d=b&&b.display?angular.element(b.display):angular.element("<button type='button'>"),b&&b.class?d.addClass(b.class):d.addClass(g.classes.toolbarButton),d.attr("name",c.name),
// important to not take focus from the main text/html entry
d.attr("ta-button","ta-button"),d.attr("ng-disabled","isDisabled()"),d.attr("tabindex","-1"),d.attr("ng-click","executeAction()"),d.attr("ng-class","displayActiveToolClass(active)"),b&&b.tooltiptext&&d.attr("title",b.tooltiptext),b&&!b.display&&!c._display&&(
// first clear out the current contents if any
d[0].innerHTML="",
// add the buttonText
b.buttontext&&(d[0].innerHTML=b.buttontext),b.iconclass)){var e=angular.element("<i>"),f=d[0].innerHTML;e.addClass(b.iconclass),d[0].innerHTML="",d.append(e),f&&""!==f&&d.append("&nbsp;"+f)}return c._lastToolDefinition=angular.copy(b),a(d)(c)};
// Keep a reference for updating the active states later
g.tools={},
// create the tools in the toolbar
// default functions and values to prevent errors in testing and on init
g._parent={disabled:!0,showHtml:!1,queryFormatBlockState:function(){return!1},queryCommandState:function(){return!1}};var k={$window:f,$editor:function(){
// dynamically gets the editor as it is set
return g._parent},isDisabled:function(){
// view selection button is always enabled since it doesn not depend on a selction!
// view selection button is always enabled since it doesn not depend on a selction!
// this bracket is important as without it it just returns the first bracket and ignores the rest
// when the button's disabled function/value evaluates to true
// all buttons except the HTML Switch button should be disabled in the showHtml (RAW html) mode
// if the toolbar is disabled
// if the current editor is disabled
return("html"!==this.name||!g._parent.startAction)&&("function"!=typeof this.$eval("disabled")&&this.$eval("disabled")||this.$eval("disabled()")||"html"!==this.name&&this.$editor().showHtml||this.$parent.disabled||this.$editor().disabled)},displayActiveToolClass:function(a){return a?g.classes.toolbarButtonActive:""},executeAction:e};angular.forEach(g.toolbar,function(a){
// setup the toolbar group
var b=angular.element("<div>");b.addClass(g.classes.toolbarGroup),angular.forEach(a,function(a){
// init and add the tools to the group
// a tool name (key name from taTools struct)
//creates a child scope of the main angularText scope and then extends the childScope with the functions of this particular tool
// reference to the scope and element kept
g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]),
// append the tool compiled with the childScope to the group element
b.append(g.tools[a].$element)}),
// append the group to the toolbar
h.append(b)}),
// update a tool
// if a value is set to null, remove from the display
// when forceNew is set to true it will ignore all previous settings, used to reset to taTools definition
// to reset to defaults pass in taTools[key] as _newTool and forceNew as true, ie `updateToolDisplay(key, taTools[key], true);`
g.updateToolDisplay=function(a,b,c){var d=g.tools[a];if(d){if(
// get the last toolDefinition, then override with the new definition
d._lastToolDefinition&&!c&&(b=angular.extend({},d._lastToolDefinition,b)),null===b.buttontext&&null===b.iconclass&&null===b.display)throw'textAngular Error: Tool Definition for updating "'+a+'" does not have a valid display/iconclass/buttontext value';
// if tool is defined on this toolbar, update/redo the tool
null===b.buttontext&&delete b.buttontext,null===b.iconclass&&delete b.iconclass,null===b.display&&delete b.display;var e=j(b,d);d.$element.replaceWith(e),d.$element=e}},
// we assume here that all values passed are valid and correct
g.addTool=function(a,b,c,e){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]);var f;void 0===c&&(c=g.toolbar.length-1),f=angular.element(h.children()[c]),void 0===e?(f.append(g.tools[a].$element),g.toolbar[c][g.toolbar[c].length-1]=a):(f.children().eq(e).after(g.tools[a].$element),g.toolbar[c][e]=a)},b.registerToolbar(g),g.$on("$destroy",function(){b.unregisterToolbar(g.name)})}}}]),u.directive("textAngularVersion",["textAngularManager",function(a){var b=a.getVersion();return{restrict:"EA",link:function(a,c,d){c.html(b)}}}]),u.name});

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.multiMap","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){r=!!("horizontal"in g),r?(s={width:""},t={width:"0"}):(s={height:""},t={height:"0"}),d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(s)}function i(a){return r?{width:a.scrollWidth+"px"}:{height:a.scrollHeight+"px"}}function j(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(n(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:i(f[0])}).start()["finally"](k):a.addClass(f,"in",{css:{overflow:"hidden"},to:i(f[0])}).then(k)},angular.noop)}function k(){f.removeClass("collapsing").addClass("collapse").css(s),o(d)}function l(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(p(d)).then(function(){f.css(i(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:t}).start()["finally"](m):a.removeClass(f,"in",{to:t}).then(m)},angular.noop):m()}function m(){f.css(t),f.removeClass("collapsing").addClass("collapse"),q(d)}var n=c(g.expanding),o=c(g.expanded),p=c(g.collapsing),q=c(g.collapsed),r=!1,s={},t={};h(),d.$watch(g.uibCollapse,function(a){a?l():j()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(a,b,c){c.$observe("disabled",function(a){c.$set("tabindex",a?-1:null)})}}}),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){b.addClass("panel"),d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$element","$attrs","$interpolate","$timeout",function(a,b,c,d,e){a.closeable=!!c.close,b.addClass("alert"),c.$set("role","alert"),a.closeable&&b.addClass("alert-dismissible");var f=angular.isDefined(c.dismissOnTimeout)?d(c.dismissOnTimeout)(a.$parent):null;f&&e(function(){a.close()},parseInt(f,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,scope:{close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(a){for(var b=0;b<p.length;b++)p[b].slide.active=b===a}function g(c,d,g){if(!s){if(angular.extend(c,{direction:g}),angular.extend(p[r].slide||{},{direction:g}),e.enabled(b)&&!a.$currentTransition&&p[d].element&&o.slides.length>1){p[d].element.data(q,c.direction);var h=o.getCurrentIndex();angular.isNumber(h)&&p[h].element&&p[h].element.data(q,c.direction),a.$currentTransition=!0,e.on("addClass",p[d].element,function(b,c){"close"===c&&(a.$currentTransition=null,e.off("addClass",b))})}a.active=c.index,r=c.index,f(d),k()}}function h(a){for(var b=0;b<p.length;b++)if(p[b].slide===a)return b}function i(){m&&(c.cancel(m),m=null)}function j(b){b.length||(a.$currentTransition=null)}function k(){i();var b=+a.interval;!isNaN(b)&&b>0&&(m=c(l,b))}function l(){var b=+a.interval;n&&!isNaN(b)&&b>0&&p.length?a.next():a.pause()}var m,n,o=this,p=o.slides=a.slides=[],q="uib-slideDirection",r=a.active,s=!1;b.addClass("carousel"),o.addSlide=function(b,c){p.push({slide:b,element:c}),p.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===p.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),r=b.index,a.active=b.index,f(r),o.select(p[h(b)]),1===p.length&&a.play())},o.getCurrentIndex=function(){for(var a=0;a<p.length;a++)if(p[a].slide.index===r)return a},o.next=a.next=function(){var b=(o.getCurrentIndex()+1)%p.length;return 0===b&&a.noWrap()?void a.pause():o.select(p[b],"next")},o.prev=a.prev=function(){var b=o.getCurrentIndex()-1<0?p.length-1:o.getCurrentIndex()-1;return a.noWrap()&&b===p.length-1?void a.pause():o.select(p[b],"prev")},o.removeSlide=function(b){var c=h(b);p.splice(c,1),p.length>0&&r===c?c>=p.length?(r=p.length-1,a.active=r,f(r),o.select(p[p.length-1])):(r=c,a.active=r,f(r),o.select(p[c])):r>c&&(r--,a.active=r),0===p.length&&(r=null,a.active=null)},o.select=a.select=function(b,c){var d=h(b.slide);void 0===c&&(c=d>o.getCurrentIndex()?"next":"prev"),b.slide.index===r||a.$currentTransition||g(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===p.length-1&&a.noWrap()},a.pause=function(){a.noPause||(n=!1,i())},a.play=function(){n||(n=!0,k())},b.on("mouseenter",a.pause),b.on("mouseleave",a.play),a.$on("$destroy",function(){s=!0,i()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",k),a.$watchCollection("slides",j),a.$watch("active",function(a){if(angular.isNumber(a)&&r!==a){for(var b=0;b<p.length;b++)if(p[b].slide.index===a){a=b;break}var c=p[a];c&&(f(a),o.select(p[a]),r=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,controller:"UibCarouselController",controllerAs:"carousel",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",["$animate",function(a){return{require:"^uibCarousel",restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(b,c,d,e){c.addClass("item"),e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(b){a[b?"addClass":"removeClass"](c,"active")})}}}]).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter","filterFilter",function(a,b,c,d,e){function f(a){return e(s,{key:a},!0)[0]}function g(a){var b=[],c=a.split(""),e=a.indexOf("'");if(e>-1){var f=!1;a=a.split("");for(var g=e;g<a.length;g++)f?("'"===a[g]&&(g+1<a.length&&"'"===a[g+1]?(a[g+1]="$",c[g+1]=""):(c[g]="",f=!1)),a[g]="$"):"'"===a[g]&&(a[g]="$",c[g]="",f=!0);a=a.join("")}return angular.forEach(s,function(d){var e=a.indexOf(d.key);if(e>-1){a=a.split(""),c[e]="("+d.regex+")",a[e]="$";for(var f=e+1,g=e+d.key.length;g>f;f++)c[f]="",a[f]="$";a=a.join(""),b.push({index:e,key:d.key,apply:d.apply,matcher:d.regex})}}),{regex:new RegExp("^"+c.join("")+"$"),map:d(b,"index")}}function h(a){for(var b,c,d=[],e=0;e<a.length;)if(angular.isNumber(c)){if("'"===a.charAt(e))(e+1>=a.length||"'"!==a.charAt(e+1))&&(d.push(i(a,c,e)),c=null);else if(e===a.length)for(;c<a.length;)b=j(a,c),d.push(b),c=b.endIdx;e++}else"'"!==a.charAt(e)?(b=j(a,e),d.push(b.parser),e=b.endIdx):(c=e,e++);return d}function i(a,b,c){return function(){return a.substr(b+1,c-b-1)}}function j(a,b){for(var c=a.substr(b),d=0;d<s.length;d++)if(new RegExp("^"+s[d].key).test(c)){var e=s[d];return{endIdx:b+e.key.length,parser:e.formatter}}return{endIdx:b+1,parser:function(){return c.charAt(0)}}}function k(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function l(a){return parseInt(a,10)}function m(a,b){return a&&b?q(a,b):a}function n(a,b){return a&&b?q(a,b,!0):a}function o(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function p(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function q(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=o(b,d);return p(a,c*(e-d))}var r,s,t=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){r=b.id,this.parsers={},this.formatters={},s=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=l(c+d),this.minutes+=l(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}],angular.version.major>=1&&angular.version.minor>4&&s.push({key:"LLLL",regex:b.DATETIME_FORMATS.STANDALONEMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.STANDALONEMONTH.indexOf(a)},formatter:function(a){return c(a,"LLLL")}})},this.init(),this.getParser=function(a){var b=f(a);return b&&b.apply||null},this.overrideParser=function(a,b){var c=f(a);c&&angular.isFunction(b)&&(this.parsers={},c.apply=b)}.bind(this),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==r&&this.init(),this.formatters[c]||(this.formatters[c]=h(c));var d=this.formatters[c];return d.reduce(function(b,c){return b+c(a)},"")},this.parse=function(c,d,e){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(t,"\\$&"),b.id!==r&&this.init(),this.parsers[d]||(this.parsers[d]=g(d,"apply"));var f=this.parsers[d],h=f.regex,i=f.map,j=c.match(h),l=!1;if(j&&j.length){var m,n;angular.isDate(e)&&!isNaN(e.getTime())?m={year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}:(e&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,p=j.length;p>o;o++){var q=i[o-1];"Z"===q.matcher&&(l=!0),q.apply&&q.apply.call(m,j[o])}var s=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return k(m.year,m.month,m.date)&&(!angular.isDate(e)||isNaN(e.getTime())||l?(n=new Date(0),s.call(n,m.year,m.month,m.date),u.call(n,m.hours||0,m.minutes||0,m.seconds||0,m.milliseconds||0)):(n=new Date(e),s.call(n,m.year,m.month,m.date),u.call(n,m.hours,m.minutes,m.seconds,m.milliseconds))),n}},this.toTimezone=m,this.fromTimezone=n,this.timezoneToOffset=o,this.addDateMinutes=p,this.convertTimezoneToLocal=q}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}function n(b){var c;if(angular.version.minor<6)c=b.$options||a.datepickerOptions.ngModelOptions||i.ngModelOptions||{},c.getOption=function(a){return c[a]};else{var d=b.$options.getOption("timezone")||(a.datepickerOptions.ngModelOptions?a.datepickerOptions.ngModelOptions.timezone:null)||(i.ngModelOptions?i.ngModelOptions.timezone:null);c=b.$options.createChild(i.ngModelOptions).createChild(a.datepickerOptions.ngModelOptions).createChild(b.$options).createChild({timezone:d})}return c}var o=this,p={$setViewValue:angular.noop},q={},r=[];b.addClass("uib-datepicker"),c.$set("role","application"),a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:i.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":o[b]=angular.isDefined(a.datepickerOptions[b])?e(a.datepickerOptions[b])(a.$parent):i[b];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":o[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:i[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?o.startingDay=a.datepickerOptions.startingDay:angular.isNumber(i.startingDay)?o.startingDay=i.startingDay:o.startingDay=(f.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?o[b]=l.fromTimezone(new Date(a),q.getOption("timezone")):(j&&g.warn("Literal date support has been deprecated, please switch to date object usage"),o[b]=new Date(h(a,"medium"))):o[b]=i[b]?l.fromTimezone(new Date(i[b]),q.getOption("timezone")):null,o.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){o[b]=a[b]=angular.isDefined(c)?c:a.datepickerOptions[b],("minMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)<o.modes.indexOf(o[b])||"maxMode"===b&&o.modes.indexOf(a.datepickerOptions.datepickerMode)>o.modes.indexOf(o[b]))&&(a.datepickerMode=o[b],a.datepickerOptions.datepickerMode=o[b])}):o[b]=a[b]=i[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(c.disabled)||!1,angular.isDefined(c.ngDisabled)&&r.push(a.$parent.$watch(c.ngDisabled,function(b){a.disabled=b,o.refreshView()})),a.isActive=function(b){return 0===o.compare(b.date,o.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){p=b,q=n(p),a.datepickerOptions.initDate?(o.activeDate=l.fromTimezone(a.datepickerOptions.initDate,q.getOption("timezone"))||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(p.$isEmpty(p.$modelValue)||p.$invalid)&&(o.activeDate=l.fromTimezone(a,q.getOption("timezone")),o.refreshView())})):o.activeDate=new Date;var c=p.$modelValue?new Date(p.$modelValue):new Date;this.activeDate=isNaN(c)?l.fromTimezone(new Date,q.getOption("timezone")):l.fromTimezone(c,q.getOption("timezone")),p.$render=function(){o.render()}},this.render=function(){if(p.$viewValue){var a=new Date(p.$viewValue),b=!isNaN(a);b?this.activeDate=l.fromTimezone(a,q.getOption("timezone")):k||g.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=p.$viewValue?new Date(p.$viewValue):null;b=l.fromTimezone(b,q.getOption("timezone")),p.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=p.$viewValue?new Date(p.$viewValue):null;d=l.fromTimezone(d,q.getOption("timezone"));var e=new Date;e=l.fromTimezone(e,q.getOption("timezone"));var f=this.compare(b,e),g={date:b,label:l.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),o.activeDate&&0===this.compare(g.date,o.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===o.minMode){var c=p.$viewValue?l.fromTimezone(new Date(p.$viewValue),q.getOption("timezone")):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=l.toTimezone(c,q.getOption("timezone")),p.$setViewValue(c),p.$render()}else o.activeDate=b,m(o.modes[o.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=o.activeDate.getFullYear()+a*(o.step.years||0),c=o.activeDate.getMonth()+a*(o.step.months||0);o.activeDate.setFullYear(b,c,1),o.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===o.maxMode&&1===b||a.datepickerMode===o.minMode&&-1===b||(m(o.modes[o.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var s=function(){o.element[0].focus()};a.$on("uib:datepicker.focus",s),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),o.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(o.isDisabled(o.activeDate))return;a.select(o.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(o.handleKeyDown(c,b),o.refreshView()):a.toggleMode("up"===c?1:-1)},b.on("keydown",function(b){a.$apply(function(){a.keydown(b)})}),a.$on("$destroy",function(){for(;r.length;)r.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,this.monthColumns),a.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=this.monthColumns;else if("right"===a)c+=1;else if("down"===a)c+=this.monthColumns;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},
require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},adjustTop:function(a,b,c,d){return-1!==a.indexOf("top")&&c!==d?{top:b.top-d+"px"}:void 0},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,x,a.date);if(isNaN(c))for(var d=0;d<J.length;d++)if(c=l.parse(b,J[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,H.getOption("timezone"))}return H.getOption("allowInvalid")?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(d)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=I[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(I[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,z);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}function w(a){var b;return angular.version.minor<6?(b=angular.isObject(a.$options)?a.$options:{timezone:null},b.getOption=function(a){return b[a]}):b=a.$options,b}var x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(G=e,H=w(G),y=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,z=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,A=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,B=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,C=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,J=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(x=m.html5Types[c.type],K=!0):(x=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==x&&(x=c,G.$modelValue=null,!x))throw new Error("uibDatepickerPopup must have a date format specified.")})),!x)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");D=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),D.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":B}),E=angular.element(D.children()[0]),E.attr("template-url",C),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),E.attr("datepicker-options","datepickerOptions"),K?G.$formatters.push(function(b){return a.date=l.fromTimezone(b,H.getOption("timezone")),b}):(G.$$parserName="date",G.$validators.date=s,G.$parsers.unshift(r),G.$formatters.push(function(b){return G.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,H.getOption("timezone")),l.filter(a.date,x))})),G.$viewChangeListeners.push(function(){a.date=q(G.$viewValue)}),b.on("keydown",u),I=d(D)(a),D.remove(),z?h.find("body").append(I):b.after(I),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),I.remove(),b.off("keydown",u),h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,H.getOption("timezone")));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=new Date(a.datepickerOptions[b]):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){a.date=c;var d=a.date?l.filter(a.date,x):null;b.val(d),G.$setViewValue(d),y&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):(b=l.fromTimezone(d,H.getOption("timezone")),b.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),A&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;z||j.parsePlacement(d)[2]?(F=F||angular.element(j.scrollParent(b)),F&&F.on("scroll",v)):F=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),F&&F.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.multiMap",[]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.multiMap","ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope","$$multiMap",function(a,b,c){var d=null,e=c.createNew();this.isOnlyOpen=function(a,b){var c=e.get(b);if(c){var d=c.reduce(function(b,c){return c.scope===a?c:b},{});if(d)return 1===c.length}return!1},this.open=function(b,c,g){if(d||a.on("click",f),d&&d!==b&&(d.isOpen=!1),d=b,g){var h=e.get(g);if(h){var i=h.map(function(a){return a.scope});-1===i.indexOf(b)&&e.put(g,{scope:b})}else e.put(g,{scope:b})}},this.close=function(b,c,g){if(d===b&&(a.off("click",f),a.off("keydown",this.keybindFilter),d=null),g){var h=e.get(g);if(h){var i=h.reduce(function(a,c){return c.scope===b?c:a},{});i&&e.remove(g,i)}}};var f=function(a){if(d&&d.isOpen&&!(a&&"disabled"===d.getAutoClose()||a&&3===a.which)){var c=d.getToggleElement();if(!(a&&c&&c[0].contains(a.target))){var e=d.getDropdownElement();a&&"outsideClick"===d.getAutoClose()&&e&&e[0].contains(a.target)||(d.focusToggleElement(),d.isOpen=!1,b.$$phase||d.$apply())}}};this.keybindFilter=function(a){if(d){var b=d.getDropdownElement(),c=d.getToggleElement(),e=b&&b[0].contains(a.target),g=c&&c[0].contains(a.target);27===a.which?(a.stopPropagation(),d.focusToggleElement(),f()):d.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&d.isOpen&&(e||g)&&(a.preventDefault(),a.stopPropagation(),d.focusDropdownEntry(a.which))}}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){function l(){b.append(o.dropdownMenu)}var m,n,o=this,p=a.$new(),q=e.appendToOpenClass,r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=i.find("body");b.addClass("dropdown"),this.init=function(){c.isOpen&&(n=d(c.isOpen),s=n.assign,a.$watch(n,function(a){p.isOpen=!!a})),u=angular.isDefined(c.keyboardNav)},this.toggle=function(a){return p.isOpen=arguments.length?!!a:!p.isOpen,angular.isFunction(s)&&s(p,p.isOpen),p.isOpen},this.isOpen=function(){return p.isOpen},p.getToggleElement=function(){return o.toggleElement},p.getAutoClose=function(){return c.autoClose||"always"},p.getElement=function(){return b},p.isKeynavEnabled=function(){return u},p.focusDropdownEntry=function(a){var c=o.dropdownMenu?angular.element(o.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(o.selectedOption)?o.selectedOption=o.selectedOption===c.length-1?o.selectedOption:o.selectedOption+1:o.selectedOption=0;break;case 38:angular.isNumber(o.selectedOption)?o.selectedOption=0===o.selectedOption?0:o.selectedOption-1:o.selectedOption=c.length-1}c[o.selectedOption].focus()},p.getDropdownElement=function(){return o.dropdownMenu},p.focusToggleElement=function(){o.toggleElement&&o.toggleElement[0].focus()},p.$watch("isOpen",function(e,n){var u=null,w=!1;if(angular.isDefined(c.dropdownAppendTo)){var x=d(c.dropdownAppendTo)(p);x&&(u=angular.element(x))}if(angular.isDefined(c.dropdownAppendToBody)){var y=d(c.dropdownAppendToBody)(p);y!==!1&&(w=!0)}if(w&&!u&&(u=v),u&&o.dropdownMenu&&(e?(u.append(o.dropdownMenu),b.on("$destroy",l)):(b.off("$destroy",l),l())),u&&o.dropdownMenu){var z,A,B,C=h.positionElements(b,o.dropdownMenu,"bottom-left",!0),D=0;if(z={top:C.top+"px",display:e?"block":"none"},A=o.dropdownMenu.hasClass("dropdown-menu-right"),A?(z.left="auto",B=h.scrollbarPadding(u),B.heightOverflow&&B.scrollbarWidth&&(D=B.scrollbarWidth),z.right=window.innerWidth-D-(C.left+b.prop("offsetWidth"))+"px"):(z.left=C.left+"px",z.right="auto"),!w){var E=h.offset(u);z.top=C.top-E.top+"px",A?z.right=window.innerWidth-(C.left-E.left+b.prop("offsetWidth"))+"px":z.left=C.left-E.left+"px"}o.dropdownMenu.css(z)}var F=u?u:b,G=u?q:r,H=F.hasClass(G),I=f.isOnlyOpen(a,u);if(H===!e){var J;J=u?I?"removeClass":"addClass":e?"addClass":"removeClass",g[J](F,G).then(function(){angular.isDefined(e)&&e!==n&&t(a,{open:!!e})})}if(e)o.dropdownMenuTemplateUrl?k(o.dropdownMenuTemplateUrl).then(function(a){m=p.$new(),j(a.trim())(m,function(a){var b=a;o.dropdownMenu.replaceWith(b),o.dropdownMenu=b,i.on("keydown",f.keybindFilter)})}):i.on("keydown",f.keybindFilter),p.focusToggleElement(),f.open(p,b,u);else{if(f.close(p,b,u),o.dropdownMenuTemplateUrl){m&&m.$destroy();var K=angular.element('<ul class="dropdown-menu"></ul>');o.dropdownMenu.replaceWith(K),o.dropdownMenu=K}o.selectedOption=null}angular.isFunction(s)&&s(a,e)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.on("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.off("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.pop()},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.multiMap","ui.bootstrap.stackedMap","ui.bootstrap.position"]).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{restrict:"A",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();e.$$postDigest(function(){h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(a){return{link:function(b,c,d,e,f){f(b.$parent,function(b){c.empty(),a.enter(b,c)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){var b="-";return a.replace(E,function(a,c){return(c?b:"")+a.toLowerCase()})}function k(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function l(){for(var a=-1,b=x.keys(),c=0;c<b.length;c++)x.get(b[c]).value.backdrop&&(a=c);return a>-1&&A>a&&(a=A),a}function m(a,b){var c=x.get(a).value,d=c.appendTo;x.remove(a),B=x.top(),B&&(A=parseInt(B.value.modalDomEl.attr("index"),10)),p(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||w;y.remove(b,a);var e=y.hasKey(b);d.toggleClass(b,e),!e&&v&&v.heightOverflow&&v.scrollbarWidth&&(v.originalRight?d.css({paddingRight:v.originalRight+"px"}):d.css({paddingRight:""}),v=null),n(!0)},c.closedDeferred),o(),b&&b.focus?b.focus():d.focus&&d.focus()}function n(a){var b;x.length()>0&&(b=x.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function o(){if(t&&-1===l()){var a=u;p(t,u,function(){a=null}),t=void 0,u=void 0}}function p(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){d&&d(),b.remove(),e&&e.resolve()}),c.$destroy())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(z.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function q(a){if(a.isDefaultPrevented())return a;var b=x.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){z.dismiss(b.key,"escape key press")}));break;case 9:var c=z.loadFocusElementList(b),d=!1;a.shiftKey?(z.isFocusInFirstItem(a,c)||z.isModalFocused(a,b))&&(d=z.focusLastFocusableElement(c)):z.isFocusInLastItem(a,c)&&(d=z.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function r(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}function s(){Array.prototype.forEach.call(document.querySelectorAll("["+C+"]"),function(a){var b=parseInt(a.getAttribute(C),10),c=b-1;a.setAttribute(C,c),c||(a.removeAttribute(C),a.removeAttribute("aria-hidden"))})}var t,u,v,w="modal-open",x=h.createNew(),y=g.createNew(),z={NOW_CLOSING_EVENT:"modal.stack.now-closing"},A=0,B=null,C="data-bootstrap-modal-aria-hidden-count",D="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",E=/[A-Z]/g;return e.$watch(l,function(a){u&&(u.index=a)}),c.on("keydown",q),e.$on("$destroy",function(){c.off("keydown",q)}),z.open=function(b,f){function g(a){function b(a){var b=a.parent()?a.parent().children():[];return Array.prototype.filter.call(b,function(b){return b!==a[0]})}if(a&&"BODY"!==a[0].tagName)return b(a).forEach(function(a){var b="true"===a.getAttribute("aria-hidden"),c=parseInt(a.getAttribute(C),10);c||(c=b?1:0),a.setAttribute(C,c+1),a.setAttribute("aria-hidden","true")}),g(a.parent())}var h=c[0].activeElement,k=f.openedClass||w;n(!1),B=x.top(),x.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),y.put(k,b);var m=f.appendTo,o=l();o>=0&&!t&&(u=e.$new(!0),u.modalOptions=f,u.index=o,t=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),t.attr({"class":"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),f.backdropClass&&t.addClass(f.backdropClass),f.animation&&t.attr("modal-animation","true"),d(t)(u),a.enter(t,m),i.isScrollable(m)&&(v=i.scrollbarPadding(m),v.heightOverflow&&v.scrollbarWidth&&m.css({paddingRight:v.right+"px"})));var p;f.component?(p=document.createElement(j(f.component.name)),p=angular.element(p),p.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):p=f.content,A=B?parseInt(B.value.modalDomEl.attr("index"),10)+1:0;var q=angular.element('<div uib-modal-window="modal-window"></div>');q.attr({"class":"modal","template-url":f.windowTemplateUrl,"window-top-class":f.windowTopClass,role:"dialog","aria-labelledby":f.ariaLabelledBy,"aria-describedby":f.ariaDescribedBy,size:f.size,index:A,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(p),f.windowClass&&q.addClass(f.windowClass),f.animation&&q.attr("modal-animation","true"),m.addClass(k),f.scope&&(f.scope.$$topModalIndex=A),a.enter(d(q)(f.scope),m),x.top().value.modalDomEl=q,x.top().value.modalOpener=h,g(q)},z.close=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),m(a,c.value.modalOpener),!0):!c},z.dismiss=function(a,b){var c=x.get(a);return s(),c&&r(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),m(a,c.value.modalOpener),!0):!c},z.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},z.getTop=function(){return x.top()},z.modalRendered=function(a){var b=x.get(a);b&&b.value.renderDeferred.resolve()},z.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},z.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},z.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},z.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},z.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},z.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(D);return c?Array.prototype.filter.call(c,function(a){return k(a)}):c}}},z}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return q}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.appendTo.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if(!e.component&&!e.template&&!e.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var q;q=e.component?c.when(g.resolve(e.resolve,{},null,null)):c.all([i(e),g.resolve(e.resolve,{},null,null)]);var r;return r=k=c.all([k]).then(j,j).then(function(a){function c(b,c,d,e){b.$scope=g,b.$scope.$resolve={},d?b.$scope.$uibModalInstance=p:b.$uibModalInstance=p;var f=c?a[1]:a;angular.forEach(f,function(a,c){e&&(b[c]=a),b.$scope.$resolve[c]=a})}var d=e.scope||b,g=d.$new();g.$close=p.close,g.$dismiss=p.dismiss,g.$on("$destroy",function(){g.$$uibDestructionScheduled||g.$dismiss("$uibUnscheduledDestruction")});var i,j,k={scope:g,deferred:l,renderDeferred:o,closedDeferred:n,animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,ariaLabelledBy:e.ariaLabelledBy,ariaDescribedBy:e.ariaDescribedBy,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo},q={},r={};e.component?(c(q,!1,!0,!1),q.name=e.component,k.component=q):e.controller&&(c(r,!0,!1,!0),j=f(e.controller,r,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(i=j.instance,i.$close=g.$close,i.$dismiss=g.$dismiss,angular.extend(i,{$resolve:r.$scope.$resolve},d)),i=j(),angular.isFunction(i.$onInit)&&i.$onInit()),e.component||(k.content=a[0]),h.open(p,k),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===r&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){
b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],restrict:"A",controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},link:function(b,c,d,e){c.addClass("pager");var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,b.$set("role","menu"),d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],restrict:"A",controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},link:function(a,c,d,e){c.addClass("pagination");var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),b=null)}}var o=m.createNew();return h.on("keyup",n),k.$on("$destroy",function(){h.off("keyup",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'origin-scope="origScope" class="uib-position-measure '+k+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){P.isOpen?q():m()}function m(){O&&!a.$eval(d[k+"Enable"])||(u(),x(),P.popupDelay?H||(H=g(r,P.popupDelay,!1)):r())}function q(){s(),P.popupCloseDelay?I||(I=g(t,P.popupCloseDelay,!1)):t()}function r(){return s(),u(),P.content?(v(),void P.$evalAsync(function(){P.isOpen=!0,y(!0),U()})):angular.noop}function s(){H&&(g.cancel(H),H=null),J&&(g.cancel(J),J=null)}function t(){P&&P.$evalAsync(function(){P&&(P.isOpen=!1,y(!1),P.animation?G||(G=g(w,150,!1)):w())})}function u(){I&&(g.cancel(I),I=null),G&&(g.cancel(G),G=null)}function v(){E||(F=P.$new(),E=c(F,function(a){M?h.find("body").append(a):b.after(a)}),o.add(P,{close:t}),z())}function w(){s(),u(),A(),E&&(E.remove(),E=null,K&&g.cancel(K)),o.remove(P),F&&(F.$destroy(),F=null)}function x(){P.title=d[k+"Title"],S?P.content=S(a):P.content=d[e],P.popupClass=d[k+"Class"],P.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(P.placement);L=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);P.popupDelay=isNaN(c)?n.popupDelay:c,P.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){R&&angular.isFunction(R.assign)&&R.assign(a,b)}function z(){T.length=0,S?(T.push(a.$watch(S,function(a){P.content=a,!a&&P.isOpen&&t()})),T.push(F.$watch(function(){Q||(Q=!0,F.$$postDigest(function(){Q=!1,P&&P.isOpen&&U()}))}))):T.push(d.$observe(e,function(a){P.content=a,!a&&P.isOpen?t():U()})),T.push(d.$observe(k+"Title",function(a){P.title=a,P.isOpen&&U()})),T.push(d.$observe(k+"Placement",function(a){P.placement=a?a:n.placement,P.isOpen&&U()}))}function A(){T.length&&(angular.forEach(T,function(a){a()}),T.length=0)}function B(a){P&&P.isOpen&&E&&(b[0].contains(a.target)||E[0].contains(a.target)||q())}function C(a){27===a.which&&q()}function D(){var c=[],e=[],f=a.$eval(d[k+"Trigger"]);V(),angular.isObject(f)?(Object.keys(f).forEach(function(a){c.push(a),e.push(f[a])}),N={show:c,hide:e}):N=p(f),"none"!==N.show&&N.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===N.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(N.hide[c],q)),b.on("keypress",C)})}var E,F,G,H,I,J,K,L,M=angular.isDefined(n.appendToBody)?n.appendToBody:!1,N=p(void 0),O=angular.isDefined(d[k+"Enable"]),P=a.$new(!0),Q=!1,R=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,S=n.useContentExp?l(d[e]):!1,T=[],U=function(){E&&E.html()&&(J||(J=g(function(){var a=i.positionElements(b,E,P.placement,M),c=angular.isDefined(E.offsetHeight)?E.offsetHeight:E.prop("offsetHeight"),d=M?i.offset(b):i.position(b);E.css({top:a.top+"px",left:a.left+"px"});var e=a.placement.split("-");E.hasClass(e[0])||(E.removeClass(L.split("-")[0]),E.addClass(e[0])),E.hasClass(n.placementClassPrefix+a.placement)||(E.removeClass(n.placementClassPrefix+L),E.addClass(n.placementClassPrefix+a.placement)),K=g(function(){var a=angular.isDefined(E.offsetHeight)?E.offsetHeight:E.prop("offsetHeight"),b=i.adjustTop(e,d,c,a);b&&E.css(b),K=null},0,!1),E.hasClass("uib-position-measure")?(i.positionArrow(E,a.placement),E.removeClass("uib-position-measure")):L!==a.placement&&i.positionArrow(E,a.placement),L=a.placement,J=null},0,!1)))};P.origScope=a,P.isOpen=!1,P.contentExp=function(){return P.content},d.$observe("disabled",function(a){a&&s(),a&&P.isOpen&&t()}),R&&a.$watch(R,function(a){P&&!a===P.isOpen&&j()});var V=function(){N.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j)),b.off("keypress",C)}),N.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};D();var W=a.$eval(d[k+"Animation"]);P.animation=angular.isDefined(W)?!!W:n.animation;var X,Y=k+"AppendToBody";X=Y in d&&void 0===d[Y]?!0:a.$eval(d[Y]),M=angular.isDefined(X)?X:M,a.$on("$destroy",function(){V(),w(),P=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{restrict:"A",scope:{uibTitle:"@",contentExp:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&",uibTitle:"@"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{restrict:"A",scope:{uibTitle:"@",content:"@"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],restrict:"A",scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===y[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),x.$setViewValue(new Date(v)),n(a)}function m(){s&&s.$setValidity("hours",!0),t&&t.$setValidity("minutes",!0),u&&u.$setValidity("seconds",!0),x.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(x.$modelValue){var c=v.getHours(),d=v.getMinutes(),e=v.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!z),"m"!==b&&(a.minutes=k(d)),a.meridian=v.getHours()<12?y[0]:y[1],"s"!==b&&(a.seconds=k(e)),a.meridian=v.getHours()<12?y[0]:y[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=y[0]}function o(a){v=q(v,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s,t,u,v=new Date,w=[],x={$setViewValue:angular.noop},y=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,z=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){x=b,x.$render=this.render,x.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2);s=e.controller("ngModel"),t=f.controller("ngModel"),u=h.controller("ngModel");var i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var A=g.hourStep;c.hourStep&&w.push(a.$parent.$watch(d(c.hourStep),function(a){A=+a}));var B=g.minuteStep;c.minuteStep&&w.push(a.$parent.$watch(d(c.minuteStep),function(a){B=+a}));var C;w.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);C=isNaN(b)?void 0:b}));var D;w.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);D=isNaN(b)?void 0:b}));var E=!1;c.ngDisabled&&w.push(a.$parent.$watch(d(c.ngDisabled),function(a){E=a})),a.noIncrementHours=function(){var a=p(v,60*A);return E||a>D||v>a&&C>a},a.noDecrementHours=function(){var a=p(v,60*-A);return E||C>a||a>v&&a>D},a.noIncrementMinutes=function(){var a=p(v,B);return E||a>D||v>a&&C>a},a.noDecrementMinutes=function(){var a=p(v,-B);return E||C>a||a>v&&a>D},a.noIncrementSeconds=function(){var a=q(v,F);return E||a>D||v>a&&C>a},a.noDecrementSeconds=function(){var a=q(v,-F);return E||C>a||a>v&&a>D},a.noToggleMeridian=function(){return v.getHours()<12?E||p(v,720)>D:E||p(v,-720)<C};var F=g.secondStep;c.secondStep&&w.push(a.$parent.$watch(d(c.secondStep),function(a){F=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&w.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&w.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,x.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(v.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.on("mousewheel wheel",function(b){E||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.on("keydown",function(b){E||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){x.$setViewValue(null),x.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b,s&&s.$setValidity("hours",!1)),angular.isDefined(c)&&(a.invalidMinutes=c,t&&t.$setValidity("minutes",!1)),angular.isDefined(d)&&(a.invalidSeconds=d,u&&u.$setValidity("seconds",!1))};a.updateHours=function(){var a=h(),b=i();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(a),v.setMinutes(b),C>v||v>D?e(!0):l("h")):e(!0)},b.on("blur",function(b){x.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!z)})}),a.updateMinutes=function(){var a=i(),b=h();x.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(v.setHours(b),v.setMinutes(a),C>v||v>D?e(void 0,!0):l("m")):e(void 0,!0)},c.on("blur",function(b){x.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();x.$setDirty(),angular.isDefined(a)?(v.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.on("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=x.$viewValue;isNaN(b)?(x.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(v=b),C>v||v>D?(x.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*A*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-A*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*B)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-B)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(F)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-F)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(v.getHours()<12?60:-60)):a.meridian=a.meridian===y[0]?y[1]:y[0])},a.blur=function(){x.$setTouched()},a.$on("$destroy",function(){for(;w.length;)w.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],restrict:"A",controller:"UibTimepickerController",controllerAs:"timepicker",scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){P.moveInProgress||(P.moveInProgress=!0,P.$digest()),$()}function o(){P.position=F?l.offset(b):l.position(b),P.position.top+=b.prop("offsetHeight")}function p(a){var b;return angular.version.minor<6?(b=a.$options||{},b.getOption=function(a){return b[a]}):b=a.$options,b}var q,r,s=[9,13,27,38,40],t=200,u=a.$eval(c.typeaheadMinLength);u||0===u||(u=1),a.$watch(c.typeaheadMinLength,function(a){u=a||0===a?a:1});var v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){w=a!==!1});var x,y,z=e(c.typeaheadLoading).assign||angular.noop,A=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},B=e(c.typeaheadOnSelect),C=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,D=e(c.typeaheadNoResults).assign||angular.noop,E=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,F=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,G=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,H=a.$eval(c.typeaheadFocusFirst)!==!1,I=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,J=e(c.typeaheadIsOpen).assign||angular.noop,K=a.$eval(c.typeaheadShowHint)||!1,L=e(c.ngModel),M=e(c.ngModel+"($$$p)"),N=function(b,c){return angular.isFunction(L(a))&&r.getOption("getterSetter")?M(b,{$$$p:c}):L.assign(b,c)},O=m.parse(c.uibTypeahead),P=a.$new(),Q=a.$on("$destroy",function(){P.$destroy()});P.$on("$destroy",Q);var R="typeahead-"+P.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":R});var S,T;K&&(S=angular.element("<div></div>"),S.css("position","relative"),b.after(S),T=b.clone(),T.attr("placeholder",""),T.attr("tabindex","-1"),T.val(""),T.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),T.attr("id")&&T.removeAttr("id"),S.append(T),T.after(b));var U=angular.element("<div uib-typeahead-popup></div>");U.attr({id:R,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&U.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&U.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var V=function(){K&&T.val("")},W=function(){P.matches=[],P.activeIdx=-1,b.attr("aria-expanded",!1),V()},X=function(a){return R+"-option-"+a};P.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",X(a))});var Y=function(a,b){return P.matches.length>b&&a?a.toUpperCase()===P.matches[b].label.toUpperCase():!1},Z=function(c,d){var e={$viewValue:c};z(a,!0),D(a,!1),f.when(O.source(a,e)).then(function(f){var g=c===q.$viewValue;if(g&&x)if(f&&f.length>0){P.activeIdx=H?0:-1,D(a,!1),P.matches.length=0;for(var h=0;h<f.length;h++)e[O.itemName]=f[h],P.matches.push({id:X(h),label:O.viewMapper(P,e),model:f[h]});if(P.query=c,o(),b.attr("aria-expanded",!0),I&&1===P.matches.length&&Y(c,0)&&(angular.isNumber(P.debounceUpdate)||angular.isObject(P.debounceUpdate)?k(function(){P.select(0,d)},angular.isNumber(P.debounceUpdate)?P.debounceUpdate:P.debounceUpdate["default"]):P.select(0,d)),K){var i=P.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?T.val(c+i.slice(c.length)):T.val("")}}else W(),D(a,!0);g&&z(a,!1)},function(){W(),z(a,!1),D(a,!0)})};F&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var $=k(function(){P.matches.length&&o(),P.moveInProgress=!1},t);P.moveInProgress=!1,P.query=void 0;var _,aa=function(a){_=g(function(){Z(a)},v)},ba=function(){_&&g.cancel(_)};W(),P.assignIsOpen=function(b){J(a,b)},P.select=function(d,e){var f,h,i={};y=!0,i[O.itemName]=h=P.matches[d].model,f=O.modelMapper(a,i),N(a,f),q.$setValidity("editable",!0),q.$setValidity("parse",!0),B(a,{$item:h,$model:f,$label:O.viewMapper(a,i),$event:e}),W(),P.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==P.matches.length&&-1!==s.indexOf(b.which)){var c=A(a,{$event:b});if(-1===P.activeIdx&&c||9===b.which&&b.shiftKey)return W(),void P.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),W(),a.$digest();break;case 38:P.activeIdx=(P.activeIdx>0?P.activeIdx:P.matches.length)-1,P.$digest(),d=U[0].querySelectorAll(".uib-typeahead-match")[P.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:P.activeIdx=(P.activeIdx+1)%P.matches.length,P.$digest(),d=U[0].querySelectorAll(".uib-typeahead-match")[P.activeIdx],
d.parentNode.scrollTop=d.offsetTop;break;default:c&&P.$apply(function(){angular.isNumber(P.debounceUpdate)||angular.isObject(P.debounceUpdate)?k(function(){P.select(P.activeIdx,b)},angular.isNumber(P.debounceUpdate)?P.debounceUpdate:P.debounceUpdate["default"]):P.select(P.activeIdx,b)})}}}),b.on("focus",function(a){x=!0,0!==u||q.$viewValue||g(function(){Z(q.$viewValue,a)},0)}),b.on("blur",function(a){C&&P.matches.length&&-1!==P.activeIdx&&!y&&(y=!0,P.$apply(function(){angular.isObject(P.debounceUpdate)&&angular.isNumber(P.debounceUpdate.blur)?k(function(){P.select(P.activeIdx,a)},P.debounceUpdate.blur):P.select(P.activeIdx,a)})),!w&&q.$error.editable&&(q.$setViewValue(),P.$apply(function(){q.$setValidity("editable",!0),q.$setValidity("parse",!0)}),b.val("")),x=!1,y=!1});var ca=function(c){b[0]!==c.target&&3!==c.which&&0!==P.matches.length&&(W(),j.$$phase||a.$digest())};h.on("click",ca),a.$on("$destroy",function(){h.off("click",ca),(F||G)&&da.remove(),F&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),U.remove(),K&&S.remove()});var da=d(U)(P);F?h.find("body").append(da):G?angular.element(G).eq(0).append(da):b.after(da),this.init=function(b){q=b,r=p(q),P.debounceUpdate=e(r.getOption("debounce"))(a),q.$parsers.unshift(function(b){return x=!0,0===u||b&&b.length>=u?v>0?(ba(),aa(b)):Z(b):(z(a,!1),ba(),W()),w?b:b?void q.$setValidity("editable",!1):(q.$setValidity("editable",!0),null)}),q.$formatters.push(function(b){var c,d,e={};return w||q.$setValidity("editable",!0),E?(e.$model=b,E(a,e)):(e[O.itemName]=b,c=O.viewMapper(a,e),e[O.itemName]=void 0,d=O.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","uibTypeahead"],link:function(a,b,c,d){d[1].init(d[0])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div class="text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,y){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=W(a)?a:a&&F(a)&&a.length?a.split(/\s+/):[];s(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(ua(a))}if(1===a.nodeType)return E(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Qa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Ra(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Y(a){return function(b,c){c.addClass&&(Qa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ra(a,b,c.removeClass),c.removeClass=null)}}function na(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function U(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Sa(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==P?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Sa(a,b,c){function d(a){F(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);s(b,function(a,b){f[b]=1});c=d(c);s(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};s(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function Q(a){return a instanceof E?a[0]:a}function Ta(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Z(d,X(c.addClass,"-add")));c.removeClass&&(d=Z(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function oa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,b){var c=f[a];if(c){var G=c.charAt(0);if("-"===G||"+"===G||0<=G)c=Ua(c);0===c&&(c=null);d[b]=c}});return d}function Ua(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function La(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){s(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,za,$,Aa;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",za="webkitTransitionEnd transitionend"):(S="transition",za=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var pa=$+"Delay",Ba=$+"Duration",la=S+"Delay",Na=S+"Duration",Oa=y.$$minErr("ng"),Va={transitionDuration:Na,transitionDelay:la,transitionProperty:S+"Property",animationDuration:Ba,animationDelay:pa,animationIterationCount:$+"IterationCount"},Wa={transitionDuration:Na,transitionDelay:la,animationDuration:Ba,animationDelay:pa},Ca,va,
s,W,ya,da,Da,aa,F,N,E,P;y.module("ngAnimate",[],function(){P=y.noop;Ca=y.copy;va=y.extend;E=y.element;s=y.forEach;W=y.isArray;F=y.isString;aa=y.isObject;N=y.isUndefined;ya=y.isDefined;Da=y.isFunction;da=y.isElement}).info({angularVersion:"1.6.4"}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,p){var K,G;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){K&&a.leave(K);G&&(G.$destroy(),G=
null);if(f||0===f)G=b.$new(),p(G,function(b){K=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;F(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),p=0;p<b.length;p++)b[p]();
f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c){return e[a].some(function(a){return a(b,c)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||
"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&f(a)});e.skip.push(function(a,b){return!a.structural&&!f(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;
var d=a.addClass,f=a.removeClass,e=b.addClass,qa=b.removeClass;return N(d)&&N(f)||N(e)&&N(qa)?!1:c(d,qa)||c(f,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,e,n,z,qa,J,u,H,k,O){function L(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function A(a,b,c){var g=[],d=h[c];d&&s(d,function(d){w.call(d.node,b)?g.push(d.callback):"leave"===c&&
w.call(d.node,a)&&g.push(d.callback)});return g}function B(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function q(a,h,v){function q(a,c,g,d){G(function(){var a=A(ta,k,c);a.length?b(function(){s(a,function(a){a(e,g,d)});"close"!==g||k.parentNode||ra.off(k)}):"close"!==g||k.parentNode||ra.off(k)});a.progress(c,g,d)}function B(a){var b=e,c=m;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);D(e,m);ha(e,m);m.domOperation();t.complete(!a)}var m=Ca(v),e=Ga(a),k=Q(e),ta=k&&k.parentNode,m=na(m),t=new J,G=L();W(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!F(m.addClass)&&(m.addClass=null);W(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!F(m.removeClass)&&(m.removeClass=null);m.from&&!aa(m.from)&&(m.from=null);m.to&&!aa(m.to)&&(m.to=null);if(!k)return B(),t;v=[k.getAttribute("class"),m.addClass,m.removeClass].join(" ");if(!Xa(v))return B(),
t;var n=0<=["enter","move","leave"].indexOf(h),w=O(),u=!g||w||ga.get(k);v=!u&&x.get(k)||{};var H=!!v.state;u||H&&1===v.state||(u=!M(k,ta,h));if(u)return w&&q(t,h,"start"),B(),w&&q(t,h,"close"),t;n&&sa(k);w={structural:n,element:e,event:h,addClass:m.addClass,removeClass:m.removeClass,close:B,options:m,runner:t};if(H){if(d("skip",w,v)){if(2===v.state)return B(),t;U(e,v,w);return v.runner}if(d("cancel",w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return U(e,v,w),v.runner;else if(d("join",
w,v))if(2===v.state)U(e,w,{});else return Ta(e,n?h:null,m),h=w.event=v.event,m=U(e,v,w),v.runner}else U(e,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||f(w));if(!H)return B(),l(k),t;var z=(v.counter||0)+1;w.counter=z;I(k,1,w);c.$$postDigest(function(){e=Ga(a);var b=x.get(k),c=!b,b=b||{},g=0<(e.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==z||!g){c&&(D(e,m),ha(e,m));if(c||n&&b.event!==h)m.domOperation(),t.end();g||l(k)}else h=
!b.structural&&f(b,!0)?"setClass":b.event,I(k,2),b=qa(e,h,b.options),t.setHost(b),q(t,h,"start",{}),b.done(function(a){B(!a);(a=x.get(k))&&a.counter===z&&l(k);q(t,h,"close",{})})});return t}function sa(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=x.get(a);if(c)switch(b){case 2:c.runner.end();case 1:x.delete(a)}})}function l(a){a.removeAttribute("data-ng-animate");x.delete(a)}function M(a,b,c){c=n[0].body;var g=Q(e),d=a===c||"HTML"===
a.nodeName,h=a===g,f=!1,k=ga.get(a),A;for((a=E.data(a,"$ngAnimatePin"))&&(b=Q(a));b;){h||(h=b===g);if(1!==b.nodeType)break;a=x.get(b)||{};if(!f){var q=ga.get(b);if(!0===q&&!1!==k){k=!0;break}else!1===q&&(k=!1);f=a.structural}if(N(A)||!0===A)a=E.data(b,"$$ngAnimateChildren"),ya(a)&&(A=a);if(f&&!1===A)break;d||(d=b===c);if(d&&h)break;if(!h&&(a=E.data(b,"$ngAnimatePin"))){b=Q(a);continue}b=b.parentNode}return(!f||A)&&!0!==k&&h&&d}function I(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);
c=(b=x.get(a))?va(b,c):c;x.set(a,c)}var x=new z,ga=new z,g=null,ta=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(ta(),c.$$postDigest(function(){c.$$postDigest(function(){null===g&&(g=!0)})}))}),h=Object.create(null),t=a.classNameFilter(),Xa=t?function(a){return t.test(a)}:function(){return!0},D=Y(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var g=ua(b);h[a]=h[a]||[];h[a].push({node:g,callback:c});
E(b).on("$destroy",function(){x.get(g)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||F(arguments[0])){var g=h[a];g&&(h[a]=1===arguments.length?null:B(g,b,c))}else for(g in b=arguments[0],h)h[g]=B(h[g],b)},pin:function(a,b){Ea(da(a),"element","not an element");Ea(da(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!g;else if(da(a)){var d=Q(a);1===
c?b=!ga.get(d):ga.set(d,!b)}else b=g=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,f,e,p,K){function G(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;f.set(d,a);for(var q;e;){if(q=f.get(e)){q.processed||(q=b(q));break}e=e.parentNode}(q||c).children.push(a);return a}var c={children:[]},d,f=new p;for(d=
0;d<a.length;d++){var e=a[d];f.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var n=[],z=Y(a);return function(p,J,u){function H(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");
var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function k(a){var b=[],c={};s(a,function(a,d){var h=Q(a.element),f=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var e=f?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:E(a)}})}else b.push(a)});var d={},f={};s(c,function(c,e){var k=c.from,A=c.to;if(k&&A){var q=a[k.animationID],x=a[A.animationID],l=k.animationID.toString();
if(!f[l]){var B=f[l]={structural:!0,beforeStart:function(){q.beforeStart();x.beforeStart()},close:function(){q.close();x.close()},classes:O(q.classes,x.classes),from:q,to:x,anchors:[]};B.classes.length?b.push(B):(b.push(q),b.push(x))}f[l].anchors.push({out:k.element,"in":A.element})}else k=k?k.animationID:A.animationID,A=k.toString(),d[A]||(d[A]=!0,b.push(a[k]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=
0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function L(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function A(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function B(){var a=p.data("$$animationRunner");!a||"leave"===J&&u.$$domOperationFired||a.end()}function q(b){p.off("$destroy",B);p.removeData("$$animationRunner");z(p,u);ha(p,u);u.domOperation();I&&a.removeClass(p,I);
p.removeClass("ng-animate");l.complete(!b)}u=na(u);var sa=0<=["enter","move","leave"].indexOf(J),l=new e({end:function(){q()},cancel:function(){q(!0)}});if(!b.length)return q(),l;p.data("$$animationRunner",l);var M=Fa(p.attr("class"),Fa(u.addClass,u.removeClass)),I=u.tempClasses;I&&(M+=" "+I,u.tempClasses=null);var x;sa&&(x="ng-"+J+"-prepare",a.addClass(p,x));n.push({element:p,classes:M,event:J,structural:sa,options:u,beforeStart:function(){p.addClass("ng-animate");I&&a.addClass(p,I);x&&(a.removeClass(p,
x),x=null)},close:q});p.on("$destroy",B);if(1<n.length)return l;d.$$postDigest(function(){var a=[];s(n,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});n.length=0;var b=k(a),c=[];s(b,function(a){c.push({domNode:Q(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=L(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),A(a,b)):c()}})});K(G(c))});return l}}]}]).provider("$animateCss",
["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,p,K,G,n,z){function y(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function J(e,k,q,p){var l;0<b.count(q)&&(l=c.get(q),l||(k=X(k,"-stagger"),f.addClass(e,k),l=Ja(a,e,p),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=
Math.max(l.transitionDuration,0),f.removeClass(e,k),c.put(q,l)));return l||{}}function u(a){L.push(a);n.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K(),d=0;d<L.length;d++)L[d](a);L.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ja(a,c,Va),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);
return c}var k=Y(f),O=0,L=[];return function(a,c){function d(){l()}function n(){l(!0)}function l(b){if(!(w||E&&O)){w=!0;O=!1;g.$$skipPreparationClasses||f.removeClass(a,fa);f.removeClass(a,da);wa(h,!1);oa(h,!1);s(t,function(a){h.style[a[0]]=""});k(a,g);ha(a,g);Object.keys(L).length&&s(L,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();ea&&ea.length&&a.off(ea.join(" "),x);var c=a.data("$$animateCss");c&&(p.cancel(c[0].timer),a.removeData("$$animateCss"));
F&&F.complete(!b)}}function M(a){r.blockTransition&&oa(h,a);r.blockKeyframeAnimation&&wa(h,!!a)}function I(){F=new e({end:d,cancel:n});u(P);l();return{$$willAnimate:!1,start:function(){return F},end:d}}function x(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=R&&b>=m&&(E=!0,l())}function ga(){function b(){if(!w){M(!1);s(t,function(a){h.style[a[0]]=a[1]});k(a,g);f.addClass(a,da);if(r.recalculateTimingStyles){ma=
h.getAttribute("class")+" "+fa;ja=y(h,ma);C=H(h,ma,ja);ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;if(0===m){l();return}r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration}r.applyAnimationDelay&&(ba="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ba,N=Math.max(ba,0),C.animationDelay=ba,ca=[pa,ba+"s"],t.push(ca),h.style[ca[0]]=ca[1]);R=1E3*N;U=1E3*m;if(g.easing){var d,e=g.easing;r.hasTransitions&&(d=S+"TimingFunction",t.push([d,e]),h.style[d]=e);r.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}C.transitionDuration&&ea.push(za);C.animationDuration&&ea.push(Aa);Y=Date.now();var n=R+1.5*U;d=Y+n;var e=a.data("$$animateCss")||[],q=!0;if(e.length){var I=e[0];(q=d>I.expectedEndTime)?p.cancel(I.timer):e.push(l)}q&&(n=p(c,n,!1),e[0]={timer:n,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(ea.length)a.on(ea.join(" "),x);g.to&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.to)),Ia(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(E)O&&a&&(O=!1,l());else if(O=!a,C.animationDuration)if(a=wa(h,O),O)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(C.transitionDuration&&0===V.transitionDuration||C.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);e?p(b,Math.floor(e*aa*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=na(Ca(g)));
var L={},h=Q(a);if(!h||!h.parentNode||!z.enabled())return I();var t=[],K=a.attr("class"),D=Pa(g),w,O,E,F,v,N,R,m,U,Y,ea=[];if(0===g.duration||!G.animations&&!G.transitions)return I();var ia=g.event&&W(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=X(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=X(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=X(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&k(a,g);var fa=[Z,T].join(" ").trim(),ma=K+" "+fa,da=X(fa,"-active"),K=D.to&&
0<Object.keys(D.to).length;if(!(0<(g.keyframeStyle||"").length||K||fa))return I();var ja,V;0<g.stagger?(D=parseFloat(g.stagger),V={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(ja=y(h,ma),V=J(h,fa,ja,Wa));g.$$skipPreparationClasses||f.addClass(a,fa);g.transitionStyle&&(D=[S,g.transitionStyle],ka(h,D),t.push(D));0<=g.duration&&(D=0<h.style[S].length,D=Ka(g.duration,D),ka(h,D),t.push(D));g.keyframeStyle&&(D=[$,g.keyframeStyle],ka(h,D),t.push(D));var aa=V?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&oa(h,9999);var C=H(h,ma,ja),ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;var r={};r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration;r.hasTransitionAll=r.hasTransitions&&"all"===C.transitionProperty;r.applyTransitionDuration=K&&(r.hasTransitions&&!r.hasTransitionAll||r.hasAnimations&&!r.hasTransitions);r.applyAnimationDuration=g.duration&&r.hasAnimations;r.applyTransitionDelay=xa(g.delay)&&(r.applyTransitionDuration||
r.hasTransitions);r.applyAnimationDelay=xa(g.delay)&&r.hasAnimations;r.recalculateTimingStyles=0<T.length;if(r.applyTransitionDuration||r.applyAnimationDuration)m=g.duration?parseFloat(g.duration):m,r.applyTransitionDuration&&(r.hasTransitions=!0,C.transitionDuration=m,D=0<h.style[S+"Property"].length,t.push(Ka(m,D))),r.applyAnimationDuration&&(r.hasAnimations=!0,C.animationDuration=m,t.push([Ba,m+"s"]));if(0===m&&!r.recalculateTimingStyles)return I();if(null!=g.delay){var ca;"boolean"!==typeof g.delay&&
(ca=parseFloat(g.delay),N=Math.max(ca,0));r.applyTransitionDelay&&t.push([la,ca+"s"]);r.applyAnimationDelay&&t.push([pa,ca+"s"])}null==g.duration&&0<C.transitionDuration&&(r.recalculateTimingStyles=r.recalculateTimingStyles||ia);R=1E3*N;U=1E3*m;g.skipBlocking||(r.blockTransition=0<C.transitionDuration,r.blockKeyframeAnimation=0<C.animationDuration&&0<V.animationDelay&&0===V.animationDuration);g.from&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.from)),Ha(a,g));r.blockTransition||r.blockKeyframeAnimation?
M(m):g.skipBlocking||oa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!w)return v={end:d,cancel:n,resume:null,pause:null},F=new e(v),u(ga),F}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,p,K){function G(a){return a.replace(/\bng-\S+\b/g,"")}function n(a,b){F(a)&&(a=a.split(" "));F(b)&&(b=b.split(" "));
return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function z(c,e,f){function p(a){var b={},c=Q(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function K(){var c=G(f.attr("class")||""),d=n(c,l),c=n(l,c),d=a(z,{to:p(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function q(){z.remove();e.removeClass("ng-animate-shim");
f.removeClass("ng-animate-shim")}var z=E(Q(e).cloneNode(!0)),l=G(z.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");z.addClass("ng-anchor");H.append(z);var M;c=function(){var c=a(z,{addClass:"ng-anchor-out",delay:!0,from:p(e)});return c.$$willAnimate?c:null}();if(!c&&(M=K(),!M))return q();var I=c||M;return{start:function(){function a(){c&&c.end()}var b,c=I.start();c.done(function(){c=null;if(!M&&(M=K()))return c=M.start(),c.done(function(){c=null;q();b.complete()}),c;
q();b.complete()});return b=new d({end:a,cancel:a})}}}function y(a,b,c,e){var f=J(a,P),p=J(b,P),n=[];s(e,function(a){(a=z(c,a.out,a["in"]))&&n.push(a)});if(f||p||0!==n.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());p&&b.push(p.start());s(n,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function J(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=
!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return P;var u=K[0].body;c=Q(f);var H=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);return function(a){return a.from&&a.to?y(a.from,a.to,a.classes,a.anchors):J(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=
W(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var s=c[f],y=a.$$registeredAnimations[s];y&&!e[s]&&(d.push(b.get(y)),e[s]=!0)}return d}var e=Y(d);return function(a,b,d,n){function z(){n.domOperation();e(a,n)}function y(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,k,F,f];break;case "addClass":b=[b,k,f];break;case "removeClass":b=[b,F,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;
return P}function J(a,b,d,e,f){var k=[];s(e,function(e){var l=e[f];l&&k.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=y(l,a,b,d,function(a){h(!1===a)});return e})});return k}function u(a,b,d,e,f){var k=J(a,b,d,e,f);if(0===k.length){var h,l;"beforeSetClass"===f?(h=J(a,"removeClass",d,e,"beforeRemoveClass"),l=J(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=J(a,"removeClass",d,e,"removeClass"),l=J(a,"addClass",
d,e,"addClass"));h&&(k=k.concat(h));l&&(k=k.concat(l))}if(0!==k.length)return function(a){var b=[];k.length&&s(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&aa(d)&&(n=d,d=null);n=na(n);d||(d=a.attr("class")||"",n.addClass&&(d+=" "+n.addClass),n.removeClass&&(d+=" "+n.removeClass));var k=n.addClass,F=n.removeClass,L=f(d),A,B;if(L.length){var q,E;"leave"===b?(E="leave",q="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+
b.substr(1),q=b);"enter"!==b&&"move"!==b&&(A=u(a,b,n,L,E));B=u(a,b,n,L,q)}if(A||B){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,z(),ha(a,n),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;z();ha(a,n);l.complete(c)}if(l)return l;l=new c;var d,e=[];A&&e.push(function(a){d=A(a)});e.length?e.push(function(a){z();a(!0)}):z();B&&e.push(function(a){d=B(a)});l.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),p=d(a.to);if(b||p)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());p&&d.push(p.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,p){'use strict';function s(f,k){var e=!1,a=!1;this.ngClickOverrideEnabled=function(b){return p.isDefined(b)?(b&&!a&&(a=!0,t.$$moduleName="ngTouch",k.directive("ngClick",t),f.decorator("ngClickDirective",["$delegate",function(a){if(e)a.shift();else for(var b=a.length-1;0<=b;){if("ngTouch"===a[b].$$moduleName){a.splice(b,1);break}b--}return a}])),e=b,this):e};this.$get=function(){return{ngClickOverrideEnabled:function(){return e}}}}function v(f,k,e){n.directive(f,["$parse","$swipe",function(a,
b){return function(l,u,g){function h(c){if(!d)return!1;var a=Math.abs(c.y-d.y);c=(c.x-d.x)*k;return r&&75>a&&0<c&&30<c&&.3>a/c}var m=a(g[f]),d,r,c=["touch"];p.isDefined(g.ngSwipeDisableMouse)||c.push("mouse");b.bind(u,{start:function(c,a){d=c;r=!0},cancel:function(c){r=!1},end:function(c,d){h(c)&&l.$apply(function(){u.triggerHandler(e);m(l,{$event:d})})}},c)}}])}var n=p.module("ngTouch",[]);n.info({angularVersion:"1.6.5"});n.provider("$touch",s);s.$inject=["$provide","$compileProvider"];n.factory("$swipe",
[function(){function f(a){a=a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function k(a,b){var l=[];p.forEach(a,function(a){(a=e[a][b])&&l.push(a)});return l.join(" ")}var e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}};return{bind:function(a,
b,l){var e,g,h,m,d=!1;l=l||["mouse","touch","pointer"];a.on(k(l,"start"),function(c){h=f(c);d=!0;g=e=0;m=h;b.start&&b.start(h,c)});var r=k(l,"cancel");if(r)a.on(r,function(c){d=!1;b.cancel&&b.cancel(c)});a.on(k(l,"move"),function(c){if(d&&h){var a=f(c);e+=Math.abs(a.x-m.x);g+=Math.abs(a.y-m.y);m=a;10>e&&10>g||(g>e?(d=!1,b.cancel&&b.cancel(c)):(c.preventDefault(),b.move&&b.move(a,c)))}});a.on(k(l,"end"),function(c){d&&(d=!1,b.end&&b.end(f(c),c))})}}}]);var t=["$parse","$timeout","$rootElement",function(f,
k,e){function a(a,d,b){for(var c=0;c<a.length;c+=2){var g=a[c+1],e=b;if(25>Math.abs(a[c]-d)&&25>Math.abs(g-e))return a.splice(c,c+2),!0}return!1}function b(b){if(!(2500<Date.now()-u)){var d=b.touches&&b.touches.length?b.touches:[b],e=d[0].clientX,d=d[0].clientY;if(!(1>e&&1>d||h&&h[0]===e&&h[1]===d)){h&&(h=null);var c=b.target;"label"===p.lowercase(c.nodeName||c[0]&&c[0].nodeName)&&(h=[e,d]);a(g,e,d)||(b.stopPropagation(),b.preventDefault(),b.target&&b.target.blur&&b.target.blur())}}}function l(a){a=
a.touches&&a.touches.length?a.touches:[a];var b=a[0].clientX,e=a[0].clientY;g.push(b,e);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]===b&&g[a+1]===e){g.splice(a,a+2);break}},2500,!1)}var u,g,h;return function(h,d,k){var c=f(k.ngClick),n=!1,q,s,t,v;d.on("touchstart",function(a){n=!0;q=a.target?a.target:a.srcElement;3===q.nodeType&&(q=q.parentNode);d.addClass("ng-click-active");s=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:[a])[0];t=a.clientX;v=a.clientY});d.on("touchcancel",
function(a){n=!1;d.removeClass("ng-click-active")});d.on("touchend",function(c){var h=Date.now()-s,f=c.originalEvent||c,m=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=m.clientX,m=m.clientY,w=Math.sqrt(Math.pow(f-t,2)+Math.pow(m-v,2));n&&750>h&&12>w&&(g||(e[0].addEventListener("click",b,!0),e[0].addEventListener("touchstart",l,!0),g=[]),u=Date.now(),a(g,f,m),q&&q.blur(),p.isDefined(k.disabled)&&!1!==k.disabled||d.triggerHandler("click",
[c]));n=!1;d.removeClass("ng-click-active")});d.onclick=function(a){};d.on("click",function(a,b){h.$apply(function(){c(h,{$event:b||a})})});d.on("mousedown",function(a){d.addClass("ng-click-active")});d.on("mousemove mouseup",function(a){d.removeClass("ng-click-active")})}}];v("ngSwipeLeft",-1,"swipeleft");v("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map
