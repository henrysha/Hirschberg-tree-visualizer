(this["webpackJsonphirschberg-visualizer"]=this["webpackJsonphirschberg-visualizer"]||[]).push([[0],{31:function(e,t,n){e.exports=n(79)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),s=(n(36),n(37),n(38),n(7)),c=n(8),h=n(10),i=n(9),u=n(6),g=n(11),m=n(27),f=n(82),p=n(81),v=n(29),d=n(83),b=n(12),S=n.n(b),E=(n(41),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(i.a)(t).call(this,e))).state={sequence1:"",sequence2:"",matchScore:0,mismatchScore:0,gapScore:0},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleScoreChange=n.handleScoreChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){console.log("handleChange e.target, e.t.value: ",e.target.id,e.target.value),this.setState(Object(m.a)({},e.target.id,e.target.value))}},{key:"handleScoreChange",value:function(e){console.log("handleScroeChange: ",e),this.setState(e)}},{key:"handleSubmit",value:function(e){console.log("handleSubmit event: ",e),e.preventDefault(),this.props.submitInput(this.state)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputForm"},r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{as:p.a,controlId:"sequence1"},r.a.createElement(f.a.Label,{column:!0,sm:3},"Sequence 1"),r.a.createElement(v.a,{sm:9},r.a.createElement(f.a.Control,{size:"sm",onChange:this.handleChange}))),r.a.createElement(f.a.Group,{as:p.a,controlId:"sequence2"},r.a.createElement(f.a.Label,{column:!0,sm:3},"Sequence 2"),r.a.createElement(v.a,{sm:9},r.a.createElement(f.a.Control,{size:"sm",onChange:this.handleChange}))),r.a.createElement(f.a.Group,{as:p.a,controlId:"matchScore"},r.a.createElement(f.a.Label,{className:"numericLabel",column:!0,sm:3},"Match Score"),r.a.createElement(v.a,{sm:4},r.a.createElement(S.a,{value:this.state.matchScore,onChange:function(t){return e.handleScoreChange({matchScore:t})}}))),r.a.createElement(f.a.Group,{as:p.a,controlId:"mismatchScore"},r.a.createElement(f.a.Label,{className:"numericLabel",column:!0,sm:3},"Mismatch Score"),r.a.createElement(v.a,{sm:4},r.a.createElement(S.a,{value:this.state.mismatchScore,onChange:function(t){return e.handleScoreChange({mismatchScore:t})}}))),r.a.createElement(f.a.Group,{as:p.a,controlId:"gapScore"},r.a.createElement(f.a.Label,{className:"numericLabel",column:!0,sm:3},"Gap Score"),r.a.createElement(v.a,{sm:4},r.a.createElement(S.a,{value:this.state.gapScore,onChange:function(t){return e.handleScoreChange({gapScore:t})}}))),r.a.createElement(d.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(a.Component)),C=n(30),j=n.n(C),O=(n(77),{x:512,y:50});var y=function(e){return r.a.createElement("div",{className:"TreeWrapper"},r.a.createElement(j.a,{data:e.data,orientation:"vertical",translate:O}))},I=[-1,0],k=[0,-1],q=[-1,-1],w=[0,0],L={};function N(e,t,n){for(var a=[],r=[],l=[],o=0;o<e.length+1;o++){a.push([]),r.push([]),l.push([]);for(var s=0;s<t.length+1;s++)a[o][s]=0,r[o][s]=0,l[o][s]=0}for(o=0;o<e.length+1;o++)for(s=1;s<t.length+1;s++)console.log("delta, w[j-1]: ",n,t[s-1]),a[o][s]=n["-"][t[s-1]];for(o=1;o<e.length+1;o++)for(s=0;s<t.length+1;s++)console.log("delta 26: ",n),console.log(e[o-1]),console.log("v: ",e),r[o][s]=n[e[o-1]]["-"];for(o=1;o<e.length+1;o++)for(s=1;s<t.length+1;s++)l[o][s]=n[e[o-1]][t[s-1]];return[a,r,l]}function x(e){return e.split("").reverse().join("")}function G(e,t,n){var a=N(e,t,n),r=a[0],l=a[1],o=a[2];console.log("rights, downs, dr: ",r,l,o);for(var s=[],c=[],h=0;h<e.length+1;h++){s.push([]),c.push([]);for(var i=0;i<t.length+1;i++)s[h][i]=0,c[h][i]=w}for(h=0;h<e.length+1;h++)for(i=0;i<t.length+1;i++)if(0!==h||0!==i)if(h>0&&0===i)s[h][i]=s[h-1][i]+l[h][i],c[h][i]=I;else if(0===h&&i>0)console.log("i, j, table, rights: ",h,i,s,r),s[h][i]=s[h][i-1]+r[h][i],c[h][i]=k;else{var u=s[h-1][i]+l[h][i],g=s[h][i-1]+r[h][i],m=s[h-1][i-1]+o[h][i];s[h][i]=Math.max(u,g,m),s[h][i]===u?c[h][i]=I:s[h][i]===g?c[h][i]=k:c[h][i]=q}for(var f=e.length,p=t.length,v="",d="";;){var b=c[f][p];if(b===I?(v+=e[f-1],d+="-"):b===k?(v+="-",d+=t[p-1]):b===q?(v+=e[f-1],d+=t[p-1]):(v+=e[f],d+=t[p]),f+=b[0],p+=b[1],0==f&&0==p)break}v=x(v),d=x(d);var S="";for(h=0;h<v.length;h++)v[h]===d[h]?S+="|":S+=" ";return[s,c,S=v+"\n"+S+"\n"+d]}function R(e,t){for(var n=e.indexOf("\n"),a=e.substring(0,n)+t.substring(0,n),r=e.substring(2*n+2,e.length)+t.substring(2*n+2,t.length),l="",o=0;o<a.length;o++)l+=a[o]===r[o]?"|":" ";return a+"\n"+l+"\n"+r}function z(e,t,n,a,r,l){console.log("d: ",L,", level: ",l);var o={name:"("+e+" / "+t+")",attributes:{prefix_i:a,suffix_j:r,i:e.length+a,j:e.length+r}};if(console.log("node: ",o),t.length>1){var s=function(e,t,n){for(var a=N(e,t,n),r=a[0],l=a[1],o=a[2],s=G(e,t,n),c=s[0],h=(s[1],s[2],Math.ceil(t.length/2)),i=[],u=[],g=[],m=0;m<e.length+1;m++){i.push([]),u.push([]),g.push([]);for(var f=0;f<h+1;f++)i[m][f]=r[m][f],u[m][f]=l[m][f],g[m][f]=o[m][f]}var p=[],v=[],d=[];for(m=0;m<e.length+1;m++){p.push([]),v.push([]),d.push([]);for(f=0;f<t.length+1;f++)p[m][f]=0,l[m][f]=0,o[m][f]=0}for(m=e.length;m>-1;m--)for(f=t.length-1;f>h-1;f--)p[m][f]=r[m][f+1];for(m=e.length-1;m>-1;m--)for(f=t.length;f>h-1;f--)v[m][f]=l[m+1][f];for(m=e.length-1;m>-1;m--)for(f=t.length-1;f>h-1;f--)d[m][f]=o[m+1][f+1];var b=[],S=[],E=[];for(m=0;m<e.length+1;m++){b.push([]),S.push([]),E.push([]);for(f=h;f<t.length+1;f++)b[m][f]=p[m][f],S[m][f]=v[m][f],E[m][f]=d[m][f]}var C=[],j=[];for(m=0;m<e.length+1;m++){C.push([]),j.push([]);for(f=0;f<t.length+1;f++)C[m][f]=0,j[m][f]=w}for(m=e.length;m>-1;m--)for(f=t.length;f>-1;f--)if(m!==e.length||f!==t.length)if(m===e.length&&f<t.length)j[m][f]=k,C[m][f]=C[m][f+1]+p[m][f];else if(m<e.length&&f===t.length)j[m][f]=I,C[m][f]=C[m+1][f]+v[m][f];else{var O=C[m][f+1]+p[m][f],y=C[m+1][f]+v[m][f],L=C[m+1][f+1]+d[m][f],x=Math.max(O,y,L);j[m][f]=x===O?k:x===y?I:q,C[m][f]=x}var R=[],z=[],M=[],D=[],A=[];for(m=0;m<e.length+1;m++){R.push([]);for(f=0;f<h+1;f++)R[m].push(c[m][f]);z.push([]);for(f=h;f<t.length+1;f++)z[m].push(C[m][f])}for(m=0;m<e.length+1;m++)M.push(R[m][R[0].length-1]),D.push(z[m][0]);for(m=0;m<e.length+1;m++)A.push(M[m]+D[m]);var W=0,B=A[0];for(console.log("sumList: ",A),m=0;m<e.length+1;m++)A[m]>B&&(B=A[m],W=m);return[W,h]}(e,t,n),c=s[0],h=s[1],i=z(e.substring(0,c),t.substring(0,h),n,a,r,l+1),u=z(e.substring(c,e.length),t.substring(h,t.length),n,a+c,r+h,l+1);return o.children=[i[1],u[1]],[R(i[0],u[0]),o]}return[G(e,t,n)[2],o]}var M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(i.a)(t).call(this,e))).state={sequence1:"",sequence2:"",matchScore:0,mismatchScore:0,gapScore:0,displayResult:!1,treeData:{}},n.submitInput=n.submitInput.bind(Object(u.a)(n)),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"submitInput",value:function(e){e.displayResult=!0,console.log("submitInput inputObj: ",e);var t=function(e,t){L={};for(var n=["A","C","T","G","-"],a={},r=0;r<n.length;r++){a[n[r]]={};for(var l=0;l<n.length;l++)a[n[r]][n[l]]=n[r]===n[l]?1:-1}console.log("delta: ",a);var o=z(e,t,a,0,0,0);return console.log("h:",o),o}(e.sequence1,e.sequence2);console.log("hResult: ",t),this.setState(e),this.setState({treeData:t[1]})}},{key:"render",value:function(){console.log("state in main: ",this.state),console.log("displayResult: ",this.state.displayResult);var e=null;return this.state.displayResult&&(console.log("curr state: ",this.state),e=r.a.createElement(y,{data:this.state.treeData})),r.a.createElement("div",null,r.a.createElement(E,{submitInput:this.submitInput}),e)}}]),t}(a.Component);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",{className:"title"},"Hirschberg's Algorithm Visualization"),r.a.createElement("div",{className:"title"},r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(78);o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.467ad61d.chunk.js.map