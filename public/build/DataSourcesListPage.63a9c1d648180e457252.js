(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3/ef":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("TSYQ"),c=r.n(a),u=r("Csm0");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return s(this,t),l(this,p(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.dataSource;return o.a.createElement("li",{className:"card-item-wrapper"},o.a.createElement("a",{className:"card-item",href:"datasources/edit/".concat(e.id)},o.a.createElement("div",{className:"card-item-header"},o.a.createElement("div",{className:"card-item-type"},e.type)),o.a.createElement("div",{className:"card-item-body"},o.a.createElement("figure",{className:"card-item-figure"},o.a.createElement("img",{src:e.typeLogoUrl,alt:e.name})),o.a.createElement("div",{className:"card-item-details"},o.a.createElement("div",{className:"card-item-name","aria-label":u.selectors.pages.DataSources.dataSources(e.name)},e.name,e.isDefault&&o.a.createElement("span",{className:"btn btn-secondary btn-small card-item-label"},"default")),o.a.createElement("div",{className:"card-item-sub-name"},e.url)))))}}])&&f(r.prototype,n),a&&f(r,a),t}(n.PureComponent),m=r("Wu7z");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return h(this,t),S(this,g(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.dataSources,r=e.layoutMode,n=c()({"card-section":!0,"card-list-layout-grid":r===m.a.Grid,"card-list-layout-list":r===m.a.List});return o.a.createElement("section",{className:n},o.a.createElement("ol",{className:"card-list"},t.map((function(e,t){return o.a.createElement(b,{dataSource:e,key:"".concat(e.id,"-").concat(t)})}))))}}])&&v(r.prototype,n),a&&v(r,a),t}(n.PureComponent);t.a=O},"6jYb":function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("q1tI"),o=r.n(n),a=r("EKT6"),c=r("kDLi");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return i(this,t),f(this,l(t).apply(this,arguments))}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.searchQuery,r=e.linkButton,n=e.setSearchQuery,u=e.target,i={href:r.href};return u&&(i.target=u),o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("div",{className:"gf-form gf-form--grow"},o.a.createElement(a.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:n,placeholder:"Search by name or type"})),o.a.createElement("div",{className:"page-action-bar__spacer"}),o.a.createElement(c.LinkButton,i,r.title))}}])&&s(r.prototype,n),u&&s(r,u),t}(n.PureComponent)},rouV:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"DataSourcesListPage",(function(){return j}));var n=r("q1tI"),o=r.n(n),a=r("/MKj"),c=r("0cfB"),u=r("ZGyg"),i=r("6jYb"),s=r("QQVG"),f=r("3/ef"),l=r("5BCB"),p=r("lzJ5"),y=r("frIo"),b=r("FFN/");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void r(e)}u.done?t(i):Promise.resolve(i).then(n,o)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O={title:"There are no data sources defined yet",buttonIcon:"database",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"},j=function(e){function t(){return h(this,t),S(this,g(t).apply(this,arguments))}var r,n,a,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.fetchDataSources()}},{key:"fetchDataSources",value:(c=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadDataSources();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})),l=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=c.apply(e,t);function a(e){d(o,r,n,a,u,"next",e)}function u(e){d(o,r,n,a,u,"throw",e)}a(void 0)}))},function(){return l.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.dataSources,r=e.dataSourcesCount,n=e.navModel,a=e.layoutMode,c=e.searchQuery,l=e.setDataSourcesSearchQuery,p=e.hasFetched;return o.a.createElement(u.a,{navModel:n},o.a.createElement(u.a.Contents,{isLoading:!p},o.a.createElement(o.a.Fragment,null,p&&0===r&&o.a.createElement(s.a,O),p&&r>0&&[o.a.createElement(i.a,{searchQuery:c,setSearchQuery:function(e){return l(e)},linkButton:{href:"datasources/new",title:"Add data source"},key:"action-bar"}),o.a.createElement(f.a,{dataSources:t,layoutMode:a,key:"list"})])))}}])&&v(r.prototype,n),a&&v(r,a),t}(n.PureComponent);var E={loadDataSources:l.f,setDataSourcesSearchQuery:b.l,setDataSourcesLayoutMode:b.k};t.default=Object(c.hot)(e)(Object(a.connect)((function(e){return{navModel:Object(p.a)(e.navIndex,"datasources"),dataSources:Object(y.d)(e.dataSources),layoutMode:Object(y.f)(e.dataSources),dataSourcesCount:Object(y.e)(e.dataSources),searchQuery:Object(y.g)(e.dataSources),hasFetched:e.dataSources.hasFetched}}),E)(j))}.call(this,r("3UD+")(e))}}]);
//# sourceMappingURL=DataSourcesListPage.63a9c1d648180e457252.js.map