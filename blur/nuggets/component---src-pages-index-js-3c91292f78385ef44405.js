(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2ajD":function(n,e){n.exports=function(n){return n!=n}},CZoQ:function(n,e){n.exports=function(n,e,t){for(var r=t-1,a=n.length;++r<a;)if(n[r]===e)return r;return-1}},JmpY:function(n,e,t){var r=t("eUgh");n.exports=function(n,e){return r(e,(function(e){return n[e]}))}},"P/G1":function(n,e,t){var r=t("JmpY"),a=t("7GkX");n.exports=function(n){return null==n?[]:r(n,a(n))}},"R/W3":function(n,e,t){var r=t("KwMD"),a=t("2ajD"),o=t("CZoQ");n.exports=function(n,e,t){return e==e?o(n,e,t):r(n,a,t)}},RXBc:function(n,e,t){"use strict";t.r(e);t("f3/d");var r=t("q1tI"),a=t.n(r),o=t("k4Da"),i=t.n(o),u=t("P/G1"),c=t.n(u),l=t("ijCd"),g=t.n(l),s=t("E+oP"),d=t.n(s),_=t("J2m7"),m=t.n(_),p=t("q7Qy"),f=t("wG+1"),v=t("zpb6"),y=(t("E4uU"),function(n){var e=n.content,t=e.title,r=e.description,o=Object(v.d)(t,r);return a.a.createElement(a.a.Fragment,null,o&&a.a.createElement("section",{className:"section-spacer introduction",id:"nugget-summary"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row "},a.a.createElement("div",{className:"col-12 col-lg-5 offset-xl-1 col-xl-3 introduction__title"},a.a.createElement(f.RichText,{render:t})),a.a.createElement("div",{className:"col-12 col-lg-7 offset-xl-1 col-xl-7 introduction__description"},a.a.createElement(f.RichText,{render:r}))))))}),h=t("C272"),b=t("l6gH"),k=t("jNNy");t.d(e,"query",(function(){return x}));var x={id:"3292807049",source:'\n  query {\n    prismic {\n      page_overview(lang: "en-gb", uid: "nuggets") {\n        _meta {\n          uid\n        }\n        body {\n          ... on PRISMIC_Page_overviewBodyNugget_hero_banner {\n            type\n            primary {\n              nugget_hero_title\n              nugget_hero_subheader\n              nugget_hero_animation\n              nugget_hero_background_image\n            }\n          }\n          ... on PRISMIC_Page_overviewBodyChoose_your_nugget {\n            type\n            label\n            primary {\n              description\n              title\n            }\n          }\n        }\n        seo_title\n        seo_description\n      }\n      allNugget_buckets(sortBy: rank_ASC) {\n        edges {\n          node {\n            colour\n            name\n            rank\n            _meta {\n              id\n            }\n          }\n        }\n      }\n      allPage_details(sortBy: rank_ASC) {\n        edges {\n          node {\n            _meta {\n              uid\n              id\n              type\n            }\n            body {\n              __typename\n              ... on PRISMIC_Page_detailBodyNugget_hero_banner {\n                primary {\n                  nugget_hero_title\n                  nugget_hero_subheader\n                  nugget_hero_background_image\n                }\n              }\n            }\n            bucket {\n              ... on PRISMIC_Nugget_bucket {\n                colour\n                name\n                rank\n                _meta {\n                  id\n                }\n              }\n            }\n            rank\n            category\n            overview_headline\n          }\n        }\n      }\n    }\n  }\n',toString:function(){return this.id}};e.default=function(n){var e=n.data,t=e.prismic,r=t.page_overview,o=r.body,u=r.seo_title,l=r.seo_description,s=t.allPage_details.edges,_=t.allNugget_buckets.edges,f=m()(o,{type:"nugget_hero_banner"}),v=m()(o,{type:"choose_your_nugget"});return console.log("overview page data",e),a.a.createElement(h.a,{className:"nugget"},a.a.createElement(k.a,{title:u,description:l}),f&&a.a.createElement(p.a,{content:f.primary,heroHeadingClass:"h1"}),v&&a.a.createElement(y,{content:v.primary}),_&&a.a.createElement(a.a.Fragment,null,_.map((function(n,e){var t=n.node,r=t.name,o=t._meta.id,u=i()(s,(function(n){var e=n.node.bucket._meta;return g()(c()(e),o)}));return d()(u)?null:a.a.createElement(b.a,{content:u,title:r,key:"nugget-tiles-"+e,id:"nugget-tiles-"+e})}))))}},ijCd:function(n,e,t){var r=t("R/W3"),a=t("MMmD"),o=t("4qC0"),i=t("Sxd8"),u=t("P/G1"),c=Math.max;n.exports=function(n,e,t,l){n=a(n)?n:u(n),t=t&&!l?i(t):0;var g=n.length;return t<0&&(t=c(g+t,0)),o(n)?t<=g&&n.indexOf(e,t)>-1:!!g&&r(n,e,t)>-1}},k4Da:function(n,e,t){var r=t("LXxW"),a=t("n3Sm"),o=t("ut/Y"),i=t("Z0cm");n.exports=function(n,e){return(i(n)?r:a)(n,o(e,3))}},n3Sm:function(n,e,t){var r=t("SKAX");n.exports=function(n,e){var t=[];return r(n,(function(n,r,a){e(n,r,a)&&t.push(n)})),t}}}]);
//# sourceMappingURL=component---src-pages-index-js-3c91292f78385ef44405.js.map