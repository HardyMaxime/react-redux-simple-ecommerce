(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,t,a){e.exports=a(448)},396:function(e,t,a){},448:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(63),i=a.n(c),u=a(469),l=(a(264),a(66)),o=a(26),s=a(224),d=a(20),p={products:[],error:null,loading:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=function(t){return e.products.find(function(e){return e.id===t})},n=function(a){return e.products.map(function(e){return e.id===t.id?Object(d.a)({},e,{quantity:a}):e})};switch(t.type){case"FETCH_DATA_BEGIN":return Object(d.a)({},e,{loading:!0});case"FETCH_DATA_SUCCESS":return Object(d.a)({},e,{loading:!1,error:null,products:t.data});case"FETCH_DATA_FAILED":return Object(d.a)({},e,{loading:!1,error:t.error});case"ADD_PRODUCT_QUANTITY":var r=a(t.id).quantity-t.quantity;return r<=0&&(r=0),Object(d.a)({},e,{products:n(r)});case"REMOVE_PRODUCT_QUANTITY":var c=a(t.id).quantity+t.quantity;return Object(d.a)({},e,{products:n(c)});case"ADD_REPLY_MESSAGE":return Object(d.a)({},e,{products:e.products.map(function(e){return e.id===t.idForUpdate?Object(d.a)({},e,{comments:e.comments.concat(t.payload)}):e})});case"RATING_PRODUCT":var i=a(t.id),u=((i.comments.length-1)*i.rating+t.rating)/i.comments.length;return Object(d.a)({},e,{products:e.products.map(function(e){return e.id===t.id?Object(d.a)({},e,{rating:u}):e})});default:return e}},E={filterString:"",categorieFilter:"",maxPrice:999},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_TEXT_CHANGE":return Object(d.a)({},e,{filterString:t.value});case"ON_CHANGE_CATEGORY":return Object(d.a)({},e,{categorieFilter:t.value});case"ON_CHANGE_FILTER_PRICE":return Object(d.a)({},e,{maxPrice:t.value});default:return e}},f={inCart:[]},g=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"ADD_TO_CART":return Object(d.a)({},n,{inCart:n.inCart.concat(r.value)});case"UPDATE_PRODUCT_ALREADY_IN_CART":return Object(d.a)({},n,{inCart:(e=r.value.id,t=r.value.quantityWanted,a=r.value.totalPrice,n.inCart.map(function(n){return n.id===e?Object(d.a)({},n,{quantityWanted:t,totalPrice:a}):n}))});case"DELETE_PRODUCT_IN_CART":return Object(d.a)({},n,{inCart:n.inCart.filter(function(e){return e.id!==r.id})});default:return n}},C=a(23),b=a(24),v=a(28),y=a(25),O=a(27),j=a(475),A=a(460),P=a(472),T=a(477),k=a(225),_=a.n(k),R=!1,D=function(e,t,a){return function(n){"add"===t?n(function(e,t){return{type:"ADD_PRODUCT_QUANTITY",id:e,quantity:t}}(e,a)):"remove"===t&&n(function(e,t){return{type:"REMOVE_PRODUCT_QUANTITY",id:e,quantity:t}}(e,a))}},I=function(e){return{type:"UPDATE_PRODUCT_ALREADY_IN_CART",value:e}},N=a(471),x=a(465),q=a(457),S=a(449),U=a(476),w=function(e){return r.a.createElement(x.a,null,r.a.createElement(x.a.Content,null,r.a.createElement(q.a,{to:"/produit/".concat(e.product.id)},r.a.createElement(S.a,{src:e.product.path})),r.a.createElement(x.a.Content,null,r.a.createElement(x.a.Header,null,r.a.createElement(q.a,{to:"/produit/".concat(e.product.id)},r.a.createElement("h1",null,e.product.name)))),r.a.createElement(x.a.Meta,null,e.product.price," \u20ac"),r.a.createElement(U.a,{defaultRating:e.product.rating,maxRating:5,disabled:!0}),r.a.createElement(x.a.Description,null,r.a.createElement("b",null,e.product.category," : "),r.a.createElement("br",null),"Description du produit",r.a.createElement(x.a.Content,{extra:!0},1===e.product.quantity?"1 exemplaire disponible":0!==e.product.quantity?"en stock (".concat(e.product.quantity," exemplaires restants)"):"Hors stock"))))},H=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(x.a.Group,null,this.props.products.filter(function(t){return t.name.toLowerCase().includes(e.props.filterString.toLowerCase())}).filter(function(t){return t.category.toLowerCase().includes(e.props.categorieFilter)}).filter(function(t){return t.price<=e.props.maxPrice}).map(function(e){return r.a.createElement(w,{key:e.id,product:e})})))}}]),t}(n.PureComponent),F=Object(o.b)(function(e){return{products:e.prod.products,filterString:e.filter.filterString,categorieFilter:e.filter.categorieFilter,maxPrice:e.filter.maxPrice}})(H),Q=a(458),L=a(461),G=a(467),W=a(473),Y=a(222),M=function(e){return r.a.createElement(G.a,{pointing:!0,vertical:!0},r.a.createElement(G.a.Item,null,r.a.createElement(W.a,{as:"h3"},r.a.createElement(Y.a,{name:"list layout"}),r.a.createElement(W.a.Content,null,"Categories"))),r.a.createElement(G.a.Item,{onClick:function(){return e.onChangeCategoryHandler("")}},"Afficher tout"),e.allCategories.map(function(t,a){return r.a.createElement(G.a.Item,{key:a,onClick:function(){return e.onChangeCategoryHandler(t.toLowerCase())}},t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}))},B=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products.map(function(e){return e.category}),a=parseInt(this.props.maxPrice,10);return t=function(e){var t,a,n=e.length,r=[],c={};for(t=0;t<n;t++)c[e[t]]=0;for(a in c)r.push(a);return r}(t),r.a.createElement(n.Fragment,null,r.a.createElement(Q.a,{icon:"search",placeholder:"Search...",onKeyUp:function(t){return e.props.onTextChange(t.target.value)}}),r.a.createElement(L.a,null,r.a.createElement(L.a.Input,{label:"Prix max : ".concat(a,"\u20ac "),min:0,max:999,name:"rangePrice",onChange:function(t){return e.props.onChangeFilterPrice(parseInt(t.target.value,10))},step:5,type:"range",value:a})),r.a.createElement(M,{onChangeCategoryHandler:this.props.onChangeCategory,allCategories:t}))}}]),t}(n.PureComponent),z=Object(o.b)(function(e){return{products:e.prod.products,maxPrice:e.filter.maxPrice}},function(e){return{onTextChange:function(t){return e(function(e){return{type:"ON_TEXT_CHANGE",value:e}}(t))},onChangeCategory:function(t){return e(function(e){return{type:"ON_CHANGE_CATEGORY",value:e}}(t))},onChangeFilterPrice:function(t){return e(function(e){return{type:"ON_CHANGE_FILTER_PRICE",value:e}}(t))}}})(B),V=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{container:!0,stackable:!0,columns:2},r.a.createElement(N.a.Row,{centered:!0},r.a.createElement(N.a.Column,{mobile:16,tablet:6,computer:3},r.a.createElement(z,null)),r.a.createElement(N.a.Column,{mobile:16,tablet:10,computer:13},r.a.createElement(F,null))))}}]),t}(n.Component),J=(a(396),function(){return r.a.createElement("div",{className:"sk-fading-circle"},r.a.createElement("div",{className:"sk-circle1 sk-circle"}),r.a.createElement("div",{className:"sk-circle2 sk-circle"}),r.a.createElement("div",{className:"sk-circle3 sk-circle"}),r.a.createElement("div",{className:"sk-circle4 sk-circle"}),r.a.createElement("div",{className:"sk-circle5 sk-circle"}),r.a.createElement("div",{className:"sk-circle6 sk-circle"}),r.a.createElement("div",{className:"sk-circle7 sk-circle"}),r.a.createElement("div",{className:"sk-circle8 sk-circle"}),r.a.createElement("div",{className:"sk-circle9 sk-circle"}),r.a.createElement("div",{className:"sk-circle10 sk-circle"}),r.a.createElement("div",{className:"sk-circle11 sk-circle"}),r.a.createElement("div",{className:"sk-circle12 sk-circle"}))}),X=a(462),K=a(468),$=function(e){return r.a.createElement(X.a,{trigger:r.a.createElement(K.a,{animated:"vertical",color:"yellow"},r.a.createElement(K.a.Content,{hidden:!0},"Cart"),r.a.createElement(K.a.Content,{visible:!0},r.a.createElement(Y.a,{name:"shop"}))),header:r.a.createElement(W.a,{icon:"cart",content:r.a.createElement(W.a,{as:"h2"},r.a.createElement(W.a.Content,null,e.title))}),content:e.children,actions:["Cancel",{key:"done",content:"Purchase",positive:!0}]})},Z=a(464),ee=a(32),te=function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(v.a)(this,Object(y.a)(t).call(this))).handleChange=function(t){var a=parseInt(t.target.value,10);e.setState({selectQuantities:a}),e.props.onUpdateProductAlreadyInCart({id:e.props.productId,quantityWanted:a,totalPrice:e.computedPrice(e.state.currentProduct.price,a,e.props.totalPrice)}),e.props.onUpdateQuantity(e.props.productId,"remove",e.props.quantitiesWanted-a)},e.computedPrice=function(e,t,a){var n=0;return n=1===t?a-e:e*t,parseInt(n,10)},e.state={currentProduct:null,selectQuantities:0},e.computedPrice=e.computedPrice.bind(Object(ee.a)(Object(ee.a)(e))),e.handleChange=e.handleChange.bind(Object(ee.a)(Object(ee.a)(e))),e}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.products.find(function(t){return t.id===e.props.productId});this.setState({currentProduct:t,selectQuantities:this.props.quantitiesWanted})}},{key:"render",value:function(){for(var e=[],t=this.props.quantitiesWanted,a=0;a<t;a++)e.push(a+1);return r.a.createElement("select",{name:"selectQuantities",value:this.state.selectQuantities,onChange:this.handleChange},e.map(function(e){return r.a.createElement("option",{key:e},e)}))}}]),t}(n.Component),ae=Object(o.b)(function(e){return{products:e.prod.products}},function(e){return{onUpdateProductAlreadyInCart:function(t){return e(I(t))},onUpdateQuantity:function(t,a,n){return e(D(t,a,n))}}})(te),ne=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"updateCart",value:function(e,t){this.props.onDeleteProduct(e,t),this.props.onUpdateQuantity(e,"remove",t)}},{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,{celled:!0,padded:!0},r.a.createElement(Z.a.Header,null,r.a.createElement(Z.a.Row,null,r.a.createElement(Z.a.HeaderCell,{textAlign:"center"},"Product name"),r.a.createElement(Z.a.HeaderCell,{textAlign:"center"},"Quantities"),r.a.createElement(Z.a.HeaderCell,{textAlign:"center"},"Total Price"),r.a.createElement(Z.a.HeaderCell,{textAlign:"center"},"Delete product"))),this.props.productInCart.map(function(t){for(var a=[],n=0;n<t.quantityWanted;n++)a.push(n+1);return r.a.createElement(Z.a.Body,{key:t.id},r.a.createElement(Z.a.Row,null,r.a.createElement(Z.a.Cell,null,r.a.createElement(W.a,{as:"h2",textAlign:"center"},t.name)),r.a.createElement(Z.a.Cell,{textAlign:"center"},r.a.createElement(ae,{quantitiesWanted:t.quantityWanted,productId:t.id,totalPrice:t.totalPrice})),r.a.createElement(Z.a.Cell,{textAlign:"center"},t.totalPrice),r.a.createElement(Z.a.Cell,{textAlign:"center"},r.a.createElement(K.a,{negative:!0,icon:"delete",onClick:function(){return e.updateCart(t.id,t.quantityWanted)}}))))}))}}]),t}(n.PureComponent),re=Object(o.b)(function(e){return{productInCart:e.cart.inCart}},function(e){return{onDeleteProduct:function(t){return e(function(e){return{type:"DELETE_PRODUCT_IN_CART",id:e}}(t))},onUpdateQuantity:function(t,a,n){return e(D(t,a,n))}}})(ne),ce=function(){return r.a.createElement(G.a,{size:"large",inverted:!0},r.a.createElement(q.a,{to:"/"},r.a.createElement(G.a.Item,{name:"Ma Super Boutique"})),r.a.createElement(G.a.Item,{position:"right"},r.a.createElement($,{title:"Your current cart"},r.a.createElement(re,null))))},ie=a(101),ue=a(470),le=a(466),oe=a(474),se=function(e){return r.a.createElement(oe.a,null,r.a.createElement(oe.a.Section,null,r.a.createElement(q.a,{to:"/"},"Boutique")),r.a.createElement(oe.a.Divider,{icon:"right angle"}),r.a.createElement(oe.a.Section,{active:!0},e.productName))},de=a(459),pe=function(e){return r.a.createElement(n.Fragment,null,"Price :",r.a.createElement(W.a,{as:"h2",color:"red"},r.a.createElement(W.a.Content,null,e.product.price," $")),r.a.createElement(U.a,{icon:"star",rating:e.productRating,maxRating:5,disabled:!0}),r.a.createElement("br",null),r.a.createElement(de.a,null),r.a.createElement("p",null,"Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque quibusdam, nam omnis labore ipsam accusamus maxime expedita voluptatum beatae? Temporibus quasi cumque optio nisi autem repellendus sapiente consequuntur voluptatem."),r.a.createElement(de.a,null),e.product.quantity>0?r.a.createElement(le.a,{positive:!0},r.a.createElement(le.a.Header,null,"Ce produit est encore disponible"),r.a.createElement("p",null,"il reste exactement ",e.product.quantity," produit(s) en stock")):r.a.createElement(le.a,{negative:!0},r.a.createElement(le.a.Header,null,"D\xe9sole, ce produit n'est plus disponible")))},me=a(463),Ee=a(248),he=a.n(Ee),fe=function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(v.a)(this,Object(y.a)(t).call(this))).handleChange=function(t){return e.setState({message:t.target.value})},e.handleRate=function(t,a){var n=a.rating;e.setState({rating:n})},e.handleSubmit=function(){e.setState({message:"",rating:0}),e.props.onAddReplyMessage(e.props.productId,he()().fromNow(),e.state.message,e.state.rating),e.props.onRatingProduct(e.props.productId,e.state.rating)},e.state={message:"",rating:0},e.handleChange=e.handleChange.bind(Object(ee.a)(Object(ee.a)(e))),e.handleRate=e.handleRate.bind(Object(ee.a)(Object(ee.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(ee.a)(Object(ee.a)(e))),e}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(me.a.Group,null,r.a.createElement(W.a,{as:"h3",dividing:!0},"Comments"),this.props.comments.map(function(e){return r.a.createElement(me.a,{key:e.id},r.a.createElement(me.a.Content,null,r.a.createElement(me.a.Author,{as:"a"},e.author," ",r.a.createElement(U.a,{icon:"star",defaultRating:e.commentRatingProduct,maxRating:5,disabled:!0})),r.a.createElement(me.a.Metadata,null,e.date),r.a.createElement(me.a.Text,null,e.message)))}),r.a.createElement(W.a,{as:"h3",dividing:!0},"Share your experience"),r.a.createElement(U.a,{icon:"star",defaultRating:0,maxRating:5,onRate:this.handleRate}),r.a.createElement(L.a,{reply:!0,onSubmit:this.handleSubmit},r.a.createElement(L.a.TextArea,{onChange:this.handleChange}),r.a.createElement(K.a,{content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0}))))}}]),t}(n.Component),ge=Object(o.b)(null,function(e){return{onAddReplyMessage:function(t,a,n,r){return e(function(e,t,a,n){return{type:"ADD_REPLY_MESSAGE",idForUpdate:e,payload:{id:new Date,author:"You",date:t,message:a,commentRatingProduct:n}}}(t,a,n,r))},onRatingProduct:function(t,a){return e(function(e,t){return{type:"RATING_PRODUCT",id:e,rating:t}}(t,a))}}})(fe),Ce=function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(v.a)(this,Object(y.a)(t).call(this))).handleChange=function(t,a){var n=a.name,r=a.value;return e.setState(Object(ie.a)({},n,r))},e.handleClick=function(t){var a=parseInt(e.state.selectQuantity,10);if(a<=0||null===a)return e.setState({message:"Veuillez choisir une quantit\xe9 valide"});if(a>e.props.product.quantity)return e.setState({message:"Ce produit ne poss\xe8de plus assez de stock (stock actuel : ".concat(e.props.product.quantity,")")});e.setState({message:"",selectQuantity:0});var n=e.props.productInCart.find(function(e){return e.id===t});if(n)n={id:e.props.product.id,quantityWanted:n.quantityWanted+a,totalPrice:n.totalPrice+e.computedPrice(a)},e.props.onUpdateProductAlreadyInCart(n);else{var r=e.computedPrice(a),c={id:e.props.product.id,name:e.props.product.name,quantityWanted:a,totalPrice:r};e.props.addToCart(c)}return e.props.updateQuantity(e.props.product.id,"add",a),!0},e.state={selectQuantity:0,message:""},e}return Object(O.a)(t,e),Object(b.a)(t,[{key:"computedPrice",value:function(e){var t=this.props.product.price*e;return parseInt(t,10)}},{key:"render",value:function(){var e=this;return r.a.createElement(N.a,{container:!0,stackable:!0,columns:"equal"},r.a.createElement(ue.a,{style:{width:"100%"},textAlign:"center"},r.a.createElement("h1",null,this.props.product.name)),r.a.createElement(se,{productName:this.props.product.name}),r.a.createElement(N.a.Row,{centered:!0},r.a.createElement(N.a.Column,null,r.a.createElement(S.a,{src:this.props.product.path,size:"big"})),r.a.createElement(N.a.Column,null,r.a.createElement(pe,{product:this.props.product,productRating:this.props.product.rating}),this.state.message?r.a.createElement(le.a,{warning:!0},r.a.createElement(le.a.Header,null,this.state.message)):null,r.a.createElement(L.a,null,r.a.createElement(L.a.Input,{name:"selectQuantity",type:"number",value:this.state.selectQuantity,onChange:this.handleChange})),0!==this.props.product.quantity?r.a.createElement(K.a,{basic:!0,color:"green",onClick:function(){return e.handleClick(e.props.product.id)}},"Ajouter au panier"):r.a.createElement(K.a,{disabled:!0,basic:!0,color:"red"},"Article epuis\xe9"))),r.a.createElement(N.a.Row,null,r.a.createElement(N.a.Column,null,r.a.createElement(ge,{productId:this.props.product.id,comments:this.props.product.comments}))))}}]),t}(n.Component),be=Object(o.b)(function(e){return{productInCart:e.cart.inCart}},function(e){return{addToCart:function(t){return e({type:"ADD_TO_CART",value:t})},onUpdateProductAlreadyInCart:function(t){return e(I(t))},updateQuantity:function(t,a,n){return e(D(t,a,n))}}})(Ce),ve=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData()}},{key:"render",value:function(){var e=this;return this.props.isLoading?r.a.createElement(J,null):this.props.error?r.a.createElement("div",null,"Un erreur est survenu : ",this.props.error.message," "):r.a.createElement("div",{className:"App"},r.a.createElement(ce,null),r.a.createElement(j.a,null,r.a.createElement(A.a,{path:"/produit/:id",render:function(t){var a=parseInt(t.match.params.id,10),n=e.props.products.find(function(e){return e.id===a});return n?r.a.createElement(be,{product:n}):r.a.createElement(P.a,{to:"/"})}}),r.a.createElement(A.a,{exact:!0,path:"/",component:V}),r.a.createElement(P.a,{to:"/"})))}}]),t}(n.Component),ye=Object(T.a)(Object(o.b)(function(e){return{products:e.prod.products,isLoading:e.prod.loading,error:e.prod.error}},function(e){return{fetchData:function(){return e(function(){if(!R)return R=!0,function(e){return e({type:"FETCH_DATA_BEGIN"}),_.a.get("data/fakeServerData.json").then(function(t){return e({type:"FETCH_DATA_SUCCESS",data:t.data.products})}).catch(function(t){return e({type:"FETCH_DATA_FAILED",error:t})})}}())}}})(ve)),Oe=Object(l.c)({prod:m,filter:h,cart:g}),je=Object(l.d)(Oe,Object(l.a)(s.a)),Ae=r.a.createElement(o.a,{store:je},r.a.createElement(u.a,{basename:"/react-redux-simple-ecommerce"},r.a.createElement(ye,null)));i.a.render(Ae,document.getElementById("root"))}},[[259,2,1]]]);
//# sourceMappingURL=main.1acef23d.chunk.js.map