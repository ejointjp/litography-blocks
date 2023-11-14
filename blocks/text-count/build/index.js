(()=>{"use strict";var e,t={892:(e,t,o)=>{const r=window.wp.blocks,n=window.React,l=window.wp.blockEditor,a=window.wp.components,i=window.wp.serverSideRender;var s=o.n(i);const p=JSON.parse('{"u2":"lito/text-count"}');(0,r.registerBlockType)(p.u2,{edit:function({attributes:e,setAttributes:t}){const o=(0,l.useBlockProps)(),{wordsPerMinute:r,showType:i,showAsApproximate:p,preText:c,postText:u}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(a.PanelBody,{title:"表示設定",initialOpen:!0,className:"unko"},(0,n.createElement)(a.RangeControl,{help:"",label:"1分あたりに読む文字数",onChange:e=>{t({wordsPerMinute:e})},value:r,min:100,max:1e3,step:50}),(0,n.createElement)(a.RadioControl,{label:"表示タイプ",help:"",onChange:e=>{t({showType:e}),t("readingTime"===e?{preText:"約",postText:"分で読めます"}:{preText:"",postText:"文字"})},options:[{label:"文字数",value:"textCount"},{label:"読了時間（分）",value:"readingTime"}],selected:i}),"readingTime"!==i&&(0,n.createElement)(a.CheckboxControl,{label:"文字数を丸める（50単位）",help:"例 1231 -> 1250",onChange:e=>{t({showAsApproximate:e,text:e})},checked:p}),(0,n.createElement)(a.TextControl,{label:"接頭辞",placeholder:"約",value:c,onChange:e=>t({preText:e})}),(0,n.createElement)(a.TextControl,{label:"接尾辞",placeholder:"readingTime"===i?"分で読めます":"文字",value:u,onChange:e=>t({postText:e})}))),(0,n.createElement)("div",{...o},(0,n.createElement)(s(),{block:"lito/text-count",attributes:e})))}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,n,l)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,n,l]=e[c],i=!0,s=0;s<o.length;s++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var p=n();void 0!==p&&(t=p)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,n,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,l,[a,i,s]=o,p=0;if(a.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var c=s(r)}for(t&&t(o);p<a.length;p++)l=a[p],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},o=globalThis.webpackChunktext_count=globalThis.webpackChunktext_count||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[431],(()=>r(892)));n=r.O(n)})();