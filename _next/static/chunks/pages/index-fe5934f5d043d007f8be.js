(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3445:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),a=r(9008),s=r(1664);function o(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Super Metroid Practice Hack"})]}),(0,n.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,n.jsx)("nav",{className:"bg-gray-200",children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"flex justify-around h-16 px-20 shadow items-center",children:(0,n.jsxs)("div",{className:"flex items-center space-x-16",children:[(0,n.jsx)("h1",{className:"text-xl lg:text-2xl font-bold",children:(0,n.jsx)(s.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"text-black hover:text-indigo-600",children:"Super Metroid Practice Hack"})})}),(0,n.jsxs)("div",{className:"flex justify-around space-x-4",children:[(0,n.jsx)(s.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"hover:text-indigo-600 text-gray-700",children:"Patch"})}),(0,n.jsx)(s.default,{href:"/help",passHref:!0,children:(0,n.jsx)("a",{href:"#",className:"hover:text-indigo-600 text-gray-700",children:"Help"})}),(0,n.jsx)(s.default,{href:"/infohudmode",passHref:!0,children:(0,n.jsx)("a",{href:"#",className:"hover:text-indigo-600 text-gray-700",children:"Infohud Modes"})}),(0,n.jsx)(s.default,{href:"/changelog",passHref:!0,children:(0,n.jsx)("a",{href:"#",className:"hover:text-indigo-600 text-gray-700",children:"Changelog"})})]})]})})})}),(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("div",{className:"flex flex-wrap justify-center",children:t})})]})]})}},8639:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(5893),a=r(7757),s=r.n(a),o=r(4942),c=r(5861),i=r(3445),l=r(264),u=r(7236),f=JSON.parse('{"u2":"Super Metroid Practice Hack","i8":"2.2.6","oW":["NTSC","PAL"],"ue":{"NTSC":{"name":"Super Metroid (JU)","crc":"D63ED5F8"},"PAL":{"name":"Super Metroid (E)","crc":"AD2CBF9C"}},"_q":[{"id":"platform","name":"Platform","options":[{"id":"sd2snes","name":"SD2SNES / FXPAK"},{"id":"emulator","name":"Emulator, Everdrive, SNES Classic"}]}],"BV":[{"platform":"emulator","variant":"NTSC","file":"/patches/emulator-ntsc.ips","size":4194304},{"platform":"emulator","variant":"PAL","file":"/patches/emulator-pal.ips","size":4194304},{"platform":"sd2snes","variant":"NTSC","file":"/patches/sd2snes-ntsc.ips","size":4194304},{"platform":"sd2snes","variant":"PAL","file":"/patches/sd2snes-pal.ips","size":4194304}]}'),d=r(7294),h=r(3162);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){var t=e.variant,r=e.romData,a=(0,d.useState)(Object.fromEntries([].concat((0,u.Z)(f._q.map((function(e){return[e.id,e.options[0].id]}))),[["variant",t]]))),i=a[0],p=a[1],x=function(e,t){for(var r=!1,n=5,a=new DataView(t.buffer);n+3<t.length;){var s=(t[n]<<16)+a.getUint16(n+1,r),o=a.getUint16(n+3,r);n+=5,o>0?(e.set(t.slice(n,n+o),s),n+=o):function(){var o=a.getUint16(n,r),c=t[n+2];e.set(Uint8Array.from(new Array(o),(function(){return c})),s),n+=3}()}},b=function(){var e=(0,c.Z)(s().mark((function e(){var t,n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=f.BV.find((function(e){return Object.keys(i).every((function(t){return e[t]==i[t]}))})),e.t0=Uint8Array,e.next=5,fetch(t.file,{cache:"no-store"});case 5:return e.next=7,e.sent.arrayBuffer();case 7:e.t1=e.sent,n=new e.t0(e.t1),a=f.u2+"-v"+f.i8+Object.entries(t).filter((function(e){var t=(0,l.Z)(e,2),r=t[0];t[1];return"file"!==r&&"size"!==r})).reduce((function(e,t){var r=(0,l.Z)(t,2);r[0];return e+"-"+r[1].toString().toLowerCase()}),"")+".sfc",(o=new Uint8Array(t.size)).set(r),x(o,n),null!==o?(0,h.saveAs)(new Blob([o]),a):alert("Could not create patched file."),e.next=19;break;case 16:e.prev=16,e.t2=e.catch(0),console.log("Error patching rom",e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:"py-4 px-6 h-auto w-7/12 bg-white shadow-xl font-sans",children:[(0,n.jsxs)("div",{className:"p-4 mb-4 bg-blue-100 text-blue-500 rounded shadow-sm font-sans font-bold",children:[f.u2," - Version ",f.i8," - ",t]}),(0,n.jsx)("p",{}),f._q.map((function(e){return(0,n.jsxs)("div",{className:"mb-4 mt-4",children:[(0,n.jsx)("label",{className:"block mx-1 mb-2 text-sm font-bold text-base",htmlFor:e.id,children:e.name}),(0,n.jsx)("select",{id:e.id,className:"w-full px-2 h-10 border rounded shadow cursor-pointer",onChange:function(t){return p((function(r){return m(m({},r),{},(0,o.Z)({},e.id,t.target.value))}))},children:e.options.map((function(e){return(0,n.jsx)("option",{id:e.id,value:e.id,children:e.name},e.id)}))})]},e.id)})),(0,n.jsx)("div",{className:"mb-2 mt-8",children:(0,n.jsx)("button",{onClick:b,className:"px-4 h-10 ring-4 ring-blue-100 bg-blue-800 text-white font-bold rounded-lg font-mono",children:"Download"})})]})}var b=function(e){for(var t=window.crcTable||(window.crcTable=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}()),r=-1,n=0;n<e.length;n++)r=r>>>8^t[255&(r^e[n])];return(-1^r)>>>0};function v(e){var t=e.variant,r=e.onUploaded,a=(0,d.useRef)(null),o=f.ue[t],i=function(){var e=(0,c.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new FileReader,e.abrupt("return",new Promise((function(e,n){r.onerror=function(){r.abort(),n(new DOMException("Error parsing data"))},r.onload=function(t){e(t.target.result)},r.readAsArrayBuffer(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)(s().mark((function e(t){var n,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!=(n=a.current.files[0])){e.next=5;break}return alert("You must select a file first"),e.abrupt("return");case 5:return c=null,e.prev=6,e.t0=Uint8Array,e.next=10,i(n);case 10:e.t1=e.sent,c=new e.t0(e.t1),e.next=18;break;case 14:return e.prev=14,e.t2=e.catch(6),alert("Could not read uploaded file data",e.t2),e.abrupt("return");case 18:if((512&c.length)>0&&(c=c.slice(512,c.length)),b(c).toString(16).toUpperCase()===o.crc){e.next=23;break}return alert("The select file's checksum does not match the expected value, try with another file."),e.abrupt("return");case 23:r(c);case 24:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:"py-4 px-6 h-auto w-7/12 bg-white shadow-xl font-sans",children:[(0,n.jsx)("div",{className:"p-4 mb-4 bg-blue-100 text-blue-500 rounded shadow-sm font-sans font-bold",children:"Select your ROM"}),(0,n.jsx)("p",{children:"To be able to create a practice hack ROM you must first select your regular Super Metroid ROM."}),(0,n.jsxs)("p",{children:["It's usually named ",(0,n.jsx)("i",{children:o.name})," and it should have the CRC checksum: ",(0,n.jsx)("b",{children:o.crc})]}),(0,n.jsxs)("form",{onSubmit:l,children:[(0,n.jsxs)("div",{className:"mb-4 mt-4",children:[(0,n.jsx)("label",{className:"block mx-1 mb-2 text-sm font-bold text-base",htmlFor:"type",children:"Select your ROM"}),(0,n.jsx)("input",{type:"file",ref:a})]}),(0,n.jsx)("div",{className:"mb-2 mt-8",children:(0,n.jsx)("button",{type:"submit",className:"px-4 h-10 ring-4 ring-blue-100 bg-blue-800 text-white font-bold rounded-lg font-mono",children:"OK"})})]})]})}var j=r(9483),g=r.n(j),w=r(1664);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw s}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(){var e=(0,d.useState)(),t=e[0],r=e[1],a=(0,d.useState)(f.oW[0]),l=a[0],u=a[1];(0,d.useEffect)((function(){function e(){return(e=(0,c.Z)(s().mark((function e(){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=N(f.oW),e.prev=1,a=s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.prev=1,e.next=4,g().getItem("romData-".concat(t));case 4:a=e.sent,r((function(e){return O(O({},e),{},(0,o.Z)({},t,a))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),t.s();case 4:if((n=t.n()).done){e.next=8;break}return e.delegateYield(a(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),t.e(e.t1);case 13:return e.prev=13,t.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=(0,c.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().setItem("romData-".concat(l),t);case 3:r((function(e){return O(O({},e),{},(0,o.Z)({},l,t))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("div",{className:"flex px-6 h-auto mt-10 w-7/12 bg-white font-sans",children:f.oW.map((function(e){var t=e===l?"red":"gray";return(0,n.jsx)("div",{onClick:function(){return u(e)},className:"py-2 p-4 mt-4 mr-2 h-auto bg-".concat(t,"-100 text-").concat(t,"-500 rounded shadow-sm font-sans font-bold cursor-pointer"),children:e},e)}))}),void 0!==t?t[l]?(0,n.jsx)(x,{variant:l,romData:t[l]}):(0,n.jsx)(v,{variant:l,onUploaded:h}):"",(0,n.jsxs)("div",{className:"py-4 px-6 h-auto mt-10 w-7/12 bg-white shadow-xl font-sans",children:[(0,n.jsx)("div",{className:"p-4 mb-4 bg-yellow-100 text-yellow-500 rounded shadow-sm font-sans font-bold",children:"Information"}),(0,n.jsxs)("div",{className:"flex flex-col text-sm gap-4 mx-2",children:[(0,n.jsxs)("p",{children:["For information on what's available in the practice hack and how to use it, you can visit the ",(0,n.jsx)(w.default,{href:"/help",children:"Help"})]}),(0,n.jsxs)("p",{children:["If you're wondering what's changed since the last version, just head to the ",(0,n.jsx)(w.default,{href:"/changelog",children:"Changelog"})]}),(0,n.jsxs)("p",{children:["Strong with SNES Assembly? Take a look at the source code at ",(0,n.jsx)(w.default,{href:"https://github.com/tewtal/sm_practice_hack/",children:"GitHub"})]})]})]})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8639)}])}},function(e){e.O(0,[277,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);