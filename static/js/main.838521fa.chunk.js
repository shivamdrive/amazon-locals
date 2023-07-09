/*! For license information please see main.838521fa.chunk.js.LICENSE.txt */
(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),i=(a(58),a(45)),o=a(3),s=(a(59),a(60),a(47)),m=a.n(s),u=a(48),d=a.n(u),p=a(11),h=Object(n.createContext)(),E=function(e){var t=e.reducer,a=e.initialState,l=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(t,a)},l)},v=function(){return Object(n.useContext)(h)},f=a(32),g=a.n(f),b=g.a.initializeApp({apiKey:"AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",authDomain:"challenge-4b2b2.firebaseapp.com",databaseURL:"https://challenge-4b2b2.firebaseio.com",projectId:"challenge-4b2b2",storageBucket:"challenge-4b2b2.appspot.com",messagingSenderId:"962418448875",appId:"1:962418448875:web:f6cce5eeaf819481f661ae"}).firestore(),_=g.a.auth(),y=a(46),k=a.n(y);var x=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],n=a.basket,l=a.user;return t[1],r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"./locals.png"})),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option_1"},r.a.createElement("div",null," "),r.a.createElement(k.a,{className:"location_icon"}),r.a.createElement("span",{className:"header__optionLineOne"}),r.a.createElement("span",{className:"header__optionLineTwo"},"India"))),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",placeholder:"Search Amazon.in",type:"text"}),r.a.createElement(m.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(p.b,{to:!l&&"/login"},r.a.createElement("div",{onClick:function(){l&&_.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",l?l.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},l?"Sign Out":"Sign In"))),r.a.createElement(p.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(p.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(79),a(80),a(81);var w=function(e){var t=e.id,a=e.title,n=e.image,l=e.price,c=e.rating,i=v(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,l)),r.a.createElement("div",{className:"product__rating"},Array(c).fill().map((function(e,t){return r.a.createElement("p",null,"\ud83c\udf1f")})))),r.a.createElement("img",{src:n,alt:""}),r.a.createElement("button",{className:"btn btn-success",onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:l,rating:c}})}},"Add to Basket"))};var N=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide"},r.a.createElement("div",{class:"carousel-indicators"},r.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),r.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),r.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})),r.a.createElement("div",{class:"carousel-inner"},r.a.createElement("div",{class:"carousel-item active"},r.a.createElement("img",{src:"./Prime.jpg",class:"d-block w-100",alt:"..."})),r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{src:"./download.png",class:"d-block w-100",alt:"..."})),r.a.createElement("div",{class:"carousel-item"},r.a.createElement("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",class:"d-block w-100",alt:"..."}))),r.a.createElement("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"},r.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"visually-hidden"},"Previous")),r.a.createElement("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"},r.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"visually-hidden"},"Next"))),r.a.createElement("div",{className:"home__row"},r.a.createElement(w,{id:"12321341",title:"Men's Comfortable Stretchable Casual Denim Jeans Slim Fit Mid Rise Flat Front Full Length Modern",price:599,rating:5,image:"https://m.media-amazon.com/images/I/71a3OycnGYL._UY879_.jpg"}),r.a.createElement(w,{id:"49538094",title:"London Hills Men Round Neck Cotton Blend Multicolor Half Sleeve Solid T-Shirts (Pack of 3)",price:1239,rating:4,image:"https://m.media-amazon.com/images/I/71qStemLMxL._UX679_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(w,{id:"4903850",title:"Amazfit GTS 2 (New Version) Smart Watch with Ultra HD AMOLED Display, Built-in Amazon Alexa, Built-in GPS",price:6599,rating:3,image:"https://m.media-amazon.com/images/I/51T2nbc4v0L._SX522_.jpg"}),r.a.createElement(w,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:5499,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),r.a.createElement(w,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:126900,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(w,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:127399,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}))))},S=a(5),O=(a(82),a(83),a(21)),j=a.n(O),L=a(35),A=a(16),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(L.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(L.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(S.f)(),t=v(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:C(n),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(85);var I=function(e){var t=e.id,a=e.image,n=e.title,l=e.price,c=e.rating,i=e.hideButton,s=v(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:a}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,l)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(c).fill().map((function(e,t){return r.a.createElement("p",null,"\ud83c\udf1f")}))),!i&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var B=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],n=a.basket,l=a.user;return t[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===l||void 0===l?void 0:l.email),r.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return r.a.createElement(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(T,null)))};a(86);var z=function(){var e=Object(S.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"./localsblack.png"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"text",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(l,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to the amazon-locals Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(l,m).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},M=a(34),D=(a(87),a(20)),G=a(49),R=a.n(G).a.create({baseURL:"https://us-central1-challenge-4b2b2.cloudfunctions.net/api"});function U(){U=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(j){o=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var l=t&&t.prototype instanceof d?t:d,c=Object.create(l.prototype),i=new N(r||[]);return n(c,"_invoke",{value:y(e,a,i)}),c}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var u={};function d(){}function p(){}function h(){}var E={};o(E,l,(function(){return this}));var v=Object.getPrototypeOf,f=v&&v(v(S([])));f&&f!==t&&a.call(f,l)&&(E=f);var g=h.prototype=d.prototype=Object.create(E);function b(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var r;n(this,"_invoke",{value:function(n,l){function c(){return new t((function(r,c){!function n(r,l,c,i){var o=m(e[r],e,l);if("throw"!==o.type){var s=o.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(u).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,i)}))}i(o.arg)}(n,l,r,c)}))}return r=r?r.then(c,c):c()}})}function y(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return O()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var i=k(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var o=m(e,t,a);if("normal"===o.type){if(n=a.done?"completed":"suspendedYield",o.arg===u)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(n="completed",a.method="throw",a.arg=o.arg)}}}function k(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=o(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(_.prototype),o(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new _(s(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),o(g,i,"Generator"),o(g,l,(function(){return this})),o(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),o=a.call(l,"finallyLoc");if(i&&o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var F=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],l=a.basket,c=a.user,i=t[1],s=Object(S.f)(),m=Object(D.useStripe)(),u=Object(D.useElements)(),d=Object(n.useState)(!1),h=Object(o.a)(d,2),E=h[0],f=h[1],g=Object(n.useState)(""),_=Object(o.a)(g,2),y=_[0],k=_[1],x=Object(n.useState)(null),w=Object(o.a)(x,2),N=w[0],O=w[1],L=Object(n.useState)(!0),A=Object(o.a)(L,2),P=A[0],T=A[1],B=Object(n.useState)(!0),z=Object(o.a)(B,2),G=z[0],F=z[1];Object(n.useEffect)((function(){(function(){var e=Object(M.a)(U().mark((function e(){var t;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*C(l))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),console.log("THE SECRET IS >>>",G),console.log("\ud83d\udc71",c);var Y=function(){var e=Object(M.a)(U().mark((function e(t){return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.next=4,m.confirmCardPayment(G,{payment_method:{card:u.getElement(D.CardElement)}}).then((function(e){var t=e.paymentIntent;b.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").doc(t.id).set({basket:l,amount:t.amount,created:t.created}),f(!0),O(null),k(!1),i({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(p.b,{to:"/checkout"},null===l||void 0===l?void 0:l.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===c||void 0===c?void 0:c.email),r.a.createElement("p",null,"H-35 Dwarka Sec-8"),r.a.createElement("p",null,"Delhi, India"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},l.map((function(e){return r.a.createElement(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:Y},r.a.createElement(D.CardElement,{onChange:function(e){T(e.empty),O(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:C(l),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",{disabled:y||P||E},r.a.createElement("span",null,y?r.a.createElement("p",null,"Processing"):"Buy Now"))),N&&r.a.createElement("div",null,N))))))},Y=(a(104),a(105),a(50)),H=a.n(Y);var K=function(e){var t,a=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,H.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}))};var W=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],l=(a.basket,a.user),c=(t[1],Object(n.useState)([])),i=Object(o.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){l?b.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[l]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(K,{order:e})}))))},V=a(51),Q=(a(107),function(){return r.a.createElement("div",{className:"Maincont"},r.a.createElement("div",{class:"container"},r.a.createElement("footer",{class:"py-5"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-6 col-md-2 mb-3"},r.a.createElement("h5",null,"Get to Know us"),r.a.createElement("ul",{class:"nav flex-column"},r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"About Us")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Careers")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Pricing")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Press Releases")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Amazon Science")))),r.a.createElement("div",{class:"col-6 col-md-2 mb-3"},r.a.createElement("h5",null,"Make Money with Us"),r.a.createElement("ul",{class:"nav flex-column"},r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Sell on Amazon")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Sell under Amazon Accelerator")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Become an Affiliate")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Fulfilment by Amazon")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Advertise Your Products")))),r.a.createElement("div",{class:"col-6 col-md-2 mb-3"},r.a.createElement("h5",null,"Let Us Help You"),r.a.createElement("ul",{class:"nav flex-column"},r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"COVID-19 and Amazon")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Your Account")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"Amazon App Download")),r.a.createElement("li",{class:"nav-item mb-2"},r.a.createElement("a",{href:"#",class:"nav-link p-0 text-light"},"100% Purchase Protection")))),r.a.createElement("div",{class:"col-md-5 offset-md-1 mb-3"},r.a.createElement("form",null,r.a.createElement("h5",null,"Any Queries ?"),r.a.createElement("p",null,"We will get back to you on this."),r.a.createElement("div",{class:"d-flex flex-column flex-sm-row w-100 gap-2"},r.a.createElement("label",{for:"newsletter1",class:"visually-hidden"},"Email address"),r.a.createElement("input",{id:"newsletter1",type:"text",class:"form-control",placeholder:"Email address"}),r.a.createElement("button",{class:"btn btn-primary",type:"button"},"Send"))))))))}),X=(a(108),function(){return r.a.createElement("nav",{class:" bg-body-tertiary border-bottom"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{class:"container12 px-0 d-flex flex-wrap"},r.a.createElement("ul",{class:"nav me-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2 active","aria-current":"page"},"Amazon MiniTV")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Sell")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Best Sellers")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Today's Deals")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Mobiles")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Customer")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Prime")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Amazon Pay")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"},"Coupons"))),r.a.createElement("ul",{class:"nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"})),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{href:"#",class:"nav-link link-light px-2"}))))))}),J=Object(V.a)("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");var $=function(){var e=v(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/orders"},r.a.createElement(x,null),r.a.createElement(W,null),r.a.createElement(Q,null)),r.a.createElement(S.a,{path:"/login"},r.a.createElement(z,null)),r.a.createElement(S.a,{path:"/checkout"},r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement(Q,null)),r.a.createElement(S.a,{path:"/payment"},r.a.createElement(x,null),r.a.createElement(D.Elements,{stripe:J},r.a.createElement(F,null)),r.a.createElement(Q,null)),r.a.createElement(S.a,{path:"/"},r.a.createElement(x,null),r.a.createElement(X,null),r.a.createElement(N,null),r.a.createElement(Q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(109);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,{initialState:{basket:[],user:null},reducer:P},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(111)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.838521fa.chunk.js.map