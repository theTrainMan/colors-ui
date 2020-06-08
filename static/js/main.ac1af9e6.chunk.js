(this["webpackJsonpcolor-ui-game"]=this["webpackJsonpcolor-ui-game"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(8),i=n.n(a),c=(n(7),n(2)),s=n(5),l=n(1),u=n(4),h=n(3),d=(n(14),function(e){var t=e.color,n="cell-"+e.size+" "+t;return r.a.createElement("div",{className:n})}),m=(n(15),function(e){var t=e.grid,n=e.colors,o=Object.keys(t.nodes).map((function(e){return r.a.createElement(d,{key:e,color:n[t.nodes[e].color],size:t.size})}));return r.a.createElement("div",{className:"grid"},o)}),f=(n(16),function(e){var t=e.color,n=e.colorIndex,o=e.clickHandler,a=e.incrementCount,i=t+" picker";return r.a.createElement("div",{className:i,onClick:function(e){a(),o(n)}})}),v=(n(17),function(e){var t=e.colors,n=e.clickHandler,o=e.incrementCount,a=t.map((function(e,t){return r.a.createElement(f,{color:e,key:"picker_"+e,colorIndex:t,clickHandler:n,incrementCount:o})}));return r.a.createElement("div",{className:"pickers"},a)}),g=[0,1,2,3,4],p=function(e){for(var t=0,n=1,o=e.length;n<o;n++)Math.random()<1/(n+1)&&(t=n);return t},b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){var r;return Object(c.a)(this,n),(r=t.call(this)).id=e,r.color=o,r}return n}(r.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o,r){var a;return Object(c.a)(this,n),(a=t.call(this)).sourceId=e,a.destId=o,a.weight=r,a}return n}(r.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;Object(c.a)(this,n),(e=t.call(this)).size=o,e.nodes={},e.edgesByNode={};for(var r=0;r<o*o;r++)e.nodes[r]=new b(r,p(g));return e.setEdgeWeights(),e}return Object(s.a)(n,[{key:"setEdgeWeight",value:function(e){var t=this.nodes[e].id,n=[],o=t-this.size,r=t+1,a=t+this.size,i=t-1;if(o>=0){var c=this.sameColor(t,o)?0:1;n.push(new k(t,o,c))}if(r%this.size>0){var s=this.sameColor(t,r)?0:1;n.push(new k(t,r,s))}if(a<this.size*this.size){var l=this.sameColor(t,a)?0:1;n.push(new k(t,a,l))}if(t%this.size!==0){var u=this.sameColor(t,i)?0:1;n.push(new k(t,i,u))}this.edgesByNode[t]=n}},{key:"setEdgeWeights",value:function(){var e=this;Object.keys(this.nodes).forEach((function(t){e.setEdgeWeight(t)}))}},{key:"updateColor",value:function(e,t){this.nodes[e].color=t}},{key:"colorFill",value:function(e){for(var t=this,n=[],o=[0],r=[],a=function(){var a=o.pop();t.updateColor(a,e),n.push(a),t.edgesByNode[a].forEach((function(i){n.indexOf(i.destId)>-1||(0===i.weight&&o.push(i.destId),1===i.weight&&t.nodes[a].color===e&&r.push(a))}))};o.length>0;)a();r.forEach((function(e){return t.setEdgeWeight(e)}))}},{key:"sameColor",value:function(e,t){return this.nodes[e].color===this.nodes[t].color}}]),n}(r.a.Component),C=["blue","red","green","yellow","orange"],w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).incrementCount=o.incrementCount.bind(Object(l.a)(o)),o.sliderInput=o.sliderInput.bind(Object(l.a)(o)),o.restart=o.restart.bind(Object(l.a)(o)),o.colorFill=o.colorFill.bind(Object(l.a)(o)),o.state={size:12,graph:new E(12),colors:C,count:0},o}return Object(s.a)(n,[{key:"incrementCount",value:function(){this.setState({count:this.state.count+1})}},{key:"restart",value:function(){this.setState({graph:new E(this.state.size),count:0})}},{key:"sliderInput",value:function(e){this.setState({size:e,graph:this.newGrid(e,this.state.colors),count:0})}},{key:"colorFill",value:function(e){this.state.graph.colorFill(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Color Balls"),r.a.createElement("div",{className:"newgame",onClick:function(t){return e.restart()}},"New Game"),r.a.createElement("div",{className:"count"},"Changes ",r.a.createElement("span",null,this.state.count))),r.a.createElement("div",null,r.a.createElement(v,{colors:this.state.colors,clickHandler:this.colorFill,incrementCount:this.incrementCount})),r.a.createElement(m,{grid:this.state.graph,colors:this.state.colors,size:this.state.size}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ac1af9e6.chunk.js.map