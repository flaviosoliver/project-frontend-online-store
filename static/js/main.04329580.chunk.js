(this["webpackJsonpsd-0x-block15-project-frontend-online-store"]=this["webpackJsonpsd-0x-block15-project-frontend-online-store"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/mercadolivre.0d01d268.png"},26:function(e,t,a){e.exports=a.p+"static/media/quindimshop.f24705c0.png"},27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),o=(a(32),a(12)),l=a.n(o),u=a(13),s=a(20),d=a(1),m=a(2),p=a(6),h=a(4),v=a(3),b=(a(34),a(8)),E=a(5),f=a(16),y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.cart;return r.a.createElement("div",{className:"cart-button-container"},r.a.createElement("button",{className:"cart-button",type:"button"},r.a.createElement(b.b,{"data-testid":"shopping-cart-button",to:"/cart"},r.a.createElement(f.b,null)),r.a.createElement("div",{"data-testid":"shopping-cart-size"},e?e.totalQtd:0)))}}]),a}(r.a.Component),g=a(25),k=a.n(g),O=a(26),C=a.n(O),j=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.inputValue,a=e.handleEvent,n=e.onClick,c=e.cart;return r.a.createElement("div",{className:"header"},r.a.createElement("img",{id:"logo-quindim-header",alt:"logomarca quindim shop",src:C.a}),r.a.createElement("div",{id:"box"},r.a.createElement("input",{id:"box-search",onChange:a,value:t,"data-testid":"query-input",type:"text",placeholder:"Buscar produtos, marcas e muito mais..."}),r.a.createElement("button",{id:"button-search",onClick:n,"data-testid":"query-button",type:"button"},r.a.createElement(f.a,null)),r.a.createElement("h3",{id:"message-header","data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria.")),r.a.createElement("div",{id:"logo-ml-container"},r.a.createElement("p",{id:"subtitle-ml"},"Com API",r.a.createElement("img",{id:"logo-ml",alt:"logomarca mercado livre",src:k.a}))),r.a.createElement(y,{cart:c}),r.a.createElement("div",{id:"header-bar-grey"}),r.a.createElement("div",{id:"header-bar-black"}),r.a.createElement("div",{id:"header-bar-yellow"}))}}]),a}(n.Component),I="https://api.mercadolibre.com/sites/MLB/";function S(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"categories"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(t){var a,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.categoryId,n=t.query,a&&n?r="search?category=".concat(a,"_ID&q=").concat(n):a?r="search?category=".concat(a):n&&(r="search?q=".concat(n)),e.next=4,fetch("".concat(I).concat(r));case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.props,a=t.handleEventChecked,n=t.checkedId===e.id;return r.a.createElement("div",{className:"radio"},r.a.createElement("label",{htmlFor:e.id},r.a.createElement("input",{id:e.id,type:"radio",name:"categories","data-testid":"category",value:e.id,onChange:a,checked:n}),e.name))}}]),a}(r.a.Component),N=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).fetchCategories=e.fetchCategories.bind(Object(p.a)(e)),e.state={data:null},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchCategories()}},{key:"fetchCategories",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.handleEventChecked,n=t.checkedId;return r.a.createElement("aside",{className:"categories"},r.a.createElement("h4",{className:"titleCategories"},"Categorias:"),r.a.createElement("form",null,null===e?"Loading...":e.map((function(e){return r.a.createElement(P,{checkedId:n,key:e.id,data:e,handleEventChecked:a})}))))}}]),a}(r.a.Component),R=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).cartStateSave=e.cartStateSave.bind(Object(p.a)(e)),e.btRemove=e.btRemove.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"cartStateSave",value:function(e){var t=this.props,a=t.data;(0,t.handleCartItems)(a,e)}},{key:"btHome",value:function(){var e,t=this.props,a=t.bt,n=t.data,c=t.handleCartItems;"home"===a&&(e="product-add-to-cart"),"productDetails"===a&&(e="product-detail-add-to-cart");var i=!1;return n.aqtd===n.available_quantity&&(i=!0),r.a.createElement("div",{id:"cart-button"},r.a.createElement("button",{"data-testid":e,type:"button",onClick:function(){return c(n,"plus")},disabled:i},"Adicionar ao Carrinho de Compras"))}},{key:"removeButton",value:function(){var e=this.props,t=e.data,a=e.removeItem;return r.a.createElement("button",{"data-testid":"product-add-to-cart",type:"button",onClick:function(e){return a(t.id)}},"Remover")}},{key:"btRemove",value:function(){var e=this.props,t=e.data,a=e.handleCartItems,n=e.showBtRemove,c=!1;return t.aqtd===t.available_quantity&&(c=!0),r.a.createElement("div",{id:"cart-button"},r.a.createElement("div",null,"Quantidade:",r.a.createElement("div",{"data-testid":"shopping-cart-product-quantity"},t.aqtd?t.aqtd:0)),r.a.createElement("button",{disabled:c,id:"bt-plus","data-testid":"product-increase-quantity",type:"button",onClick:function(){return a(t,"plus")}},"+"),r.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",onClick:function(){return a(t,"minus")}},"-"),n?this.removeButton():null)}},{key:"render",value:function(){var e=this.props,t=e.bt;e.data;return r.a.createElement("div",null,"cart"===t?this.btRemove():this.btHome())}}]),a}(r.a.Component),w=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"estrelas")}}]),a}(r.a.Component),A=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).submit=e.submit.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"submit",value:function(e){(0,this.props.ratingSubmit)({id:e,email:document.querySelector("#rating-email").value,msg:document.querySelector("#rating-msg").value,stars:4})}},{key:"render",value:function(){var e=this,t=this.props.productDetails;return r.a.createElement("fieldset",{label:"Avalia\xe7\xf5es"},r.a.createElement("legend",null,"Avalia\xe7\xf5es"),r.a.createElement("form",null,r.a.createElement("input",{id:"rating-email",placeholder:"E-mail",type:"text",required:"required"}),r.a.createElement(w,null),r.a.createElement("textarea",{id:"rating-msg",placeholder:"Mensagem (Opcional)","data-testid":"product-detail-evaluation",type:"text"}),r.a.createElement("button",{type:"button",onClick:function(){return e.submit(t.id)}},"Avaliar")))}}]),a}(r.a.Component),B=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.item;return console.log(e),r.a.createElement("div",null,r.a.createElement("h4",null,e.email),r.a.createElement("div",null,e.stars),r.a.createElement("div",null,e.msg))}}]),a}(r.a.Component),Q=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).dataOK=e.dataOK.bind(Object(p.a)(e)),e}return Object(m.a)(a,[{key:"dataOK",value:function(e){var t=this.props.handleCartItems;return r.a.createElement("div",{className:"product-details"},r.a.createElement("div",{"data-testid":"product"},r.a.createElement("h4",{className:"product-title","data-testid":"product-detail-name"},e.title),r.a.createElement("img",{src:e.thumbnail,alt:e.title}),r.a.createElement("div",null,"Quantidade dispon\xedvel: ",e.available_quantity),r.a.createElement("div",null,"R$ ",e.price),e.shipping.free_shipping?r.a.createElement("div",{"data-testid":"free-shipping"},"'Frete Gr\xe1tis'"):"",r.a.createElement(R,{handleCartItems:t,bt:"productDetails",data:e}),r.a.createElement(R,{handleCartItems:t,bt:"cart",showBtRemove:!1,data:e})))}},{key:"render",value:function(){var e=this.props,t=e.textInput,a=e.cart,n=e.handleEvent,c=e.onClick,i=this.props,o=i.productDetails,l=i.ratingSubmit,u=i.ratingProducts.filter((function(e){return e.id===o.id}));return r.a.createElement("div",null,r.a.createElement(j,{cart:a,inputValue:t,handleEvent:n,onClick:c}),o?this.dataOK(o):"Loading...",r.a.createElement(A,{ratingSubmit:l,productDetails:o}),u?u.map((function(e){return r.a.createElement(B,{item:e})})):"Seja o primeiro a avaliar este produto",r.a.createElement(b.b,{to:"/"},"Voltar para a Home"))}}]),a}(r.a.Component),M=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.bt,n=e.handleCartItems,c=e.removeItem,i=e.saveDetails;return r.a.createElement("div",{className:"product-group"},r.a.createElement(b.b,{"data-testid":"product-detail-link",to:"/products/".concat(t.id),onClick:function(){return i(t)}},r.a.createElement("div",{id:"product-view","data-testid":"product"},r.a.createElement("h4",{"data-testid":"shopping-cart-product-name",className:"product-title"},t.title),r.a.createElement("img",{id:"product-image",src:t.thumbnail,alt:t.title}),r.a.createElement("div",{id:"product-price"},"R$ ",t.price),t.shipping.free_shipping?r.a.createElement("div",{"data-testid":"free-shipping"},"'Frete Gr\xe1tis'"):"")),r.a.createElement(R,{showBtRemove:!0,removeItem:c,handleCartItems:n,id:"button-product-list",bt:a,data:t}))}}]),a}(r.a.Component),L=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.handleCartItems,n=e.saveDetails;return r.a.createElement("main",{className:"products-list"},r.a.createElement("h4",{className:"section-title"},"Produtos:"),r.a.createElement("div",{className:"product-items"},t?0===t.results.length?"Nenhum produto encontrado.":t.results.map((function(e){return r.a.createElement(M,{saveDetails:n,handleCartItems:a,bt:"home",key:e.id,data:e})})):"Loading..."))}}]),a}(r.a.Component),V=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.textInput,n=e.cart,c=e.handleEvent,i=e.onClick,o=this.props,l=o.handleEventChecked,u=o.handleCartItems,s=o.checkedId,d=o.saveDetails;return r.a.createElement("div",null,r.a.createElement(j,{cart:n,inputValue:a,handleEvent:c,onClick:i}),r.a.createElement("div",{className:"content"},r.a.createElement(N,{checkedId:s,handleEventChecked:l}),r.a.createElement(L,{saveDetails:d,handleCartItems:u,cart:n,data:t})))}}]),a}(n.Component),F=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleCartItems,a=e.saveDetails,n=e.removeItem,c=e.cart.products;return r.a.createElement("div",{className:"cart-product"},c&&c.length>0?c.map((function(e){return r.a.createElement(M,{saveDetails:a,removeItem:n,handleCartItems:t,bt:"cart",key:e.id,data:e})})):r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"),r.a.createElement(b.b,{to:"/"},"Voltar para a Home"),r.a.createElement(b.b,{to:"/checkout","data-testid":"checkout-products"},"Finalizar a compra"))}}]),a}(n.Component),_=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cleanState,a=e.handleCartItems,n=e.saveDetails,c=e.removeItem,i=e.cart,o=i.products,l=i.totalPrice,u=l||0;return r.a.createElement("div",{className:"cart-product"},o&&o.length>0?o.map((function(e){return r.a.createElement(M,{saveDetails:n,removeItem:c,handleCartItems:a,bt:"cart",key:e.id,data:e})})):r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"),r.a.createElement("div",null,"Total da compra: R$ ".concat(u)),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Informa\xe7\xf5es do Comprador"),r.a.createElement("input",{id:"input-name",type:"text",placeholder:"Nome Completo","data-testid":"checkout-fullname"}),r.a.createElement("input",{id:"input-cpf",type:"text",placeholder:"CPF","data-testid":"checkout-cpf"}),r.a.createElement("input",{id:"input-email",type:"text",placeholder:"Email","data-testid":"checkout-email"}),r.a.createElement("input",{id:"input-phone",type:"text",placeholder:"Telefone","data-testid":"checkout-phone"}),r.a.createElement("input",{id:"input-cep",type:"text",placeholder:"CEP","data-testid":"checkout-cep"}),r.a.createElement("input",{id:"input-address",type:"text",placeholder:"Endere\xe7o","data-testid":"checkout-address"}),r.a.createElement("input",{id:"input-other",type:"text",placeholder:"Complemento"}),r.a.createElement("input",{id:"input-number",type:"text",placeholder:"N\xfamero"}),r.a.createElement("input",{id:"input-city",type:"text",placeholder:"Cidade"}),r.a.createElement("select",{id:"input-state"},["","AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RO","RS","RR","SC","SE","SP","TO"].map((function(e){return r.a.createElement("option",{value:e},e)})))),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Pagamento"),r.a.createElement("label",{className:"payment"},"Boleto",r.a.createElement("input",{type:"radio",name:"payment-option"})),r.a.createElement("label",{className:"payment"},"VISA",r.a.createElement("input",{type:"radio",name:"payment-option"})),r.a.createElement("label",{className:"payment"},"MASTER CARD",r.a.createElement("input",{type:"radio",name:"payment-option"})),r.a.createElement("label",{className:"payment"},"ELO",r.a.createElement("input",{type:"radio",name:"payment-option"}))),r.a.createElement(b.b,{to:"/"},r.a.createElement("button",{onClick:t},"Comprar"))),r.a.createElement(b.b,{to:"/"},"Voltar para a Home"))}}]),a}(n.Component),H=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).onClick=e.onClick.bind(Object(p.a)(e)),e.fetchProducts=e.fetchProducts.bind(Object(p.a)(e)),e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e.handleEventChecked=e.handleEventChecked.bind(Object(p.a)(e)),e.handleCartItems=e.handleCartItems.bind(Object(p.a)(e)),e.removeItem=e.removeItem.bind(Object(p.a)(e)),e.saveDetails=e.saveDetails.bind(Object(p.a)(e)),e.calcQtdItems=e.calcQtdItems.bind(Object(p.a)(e)),e.ratingSubmit=e.ratingSubmit.bind(Object(p.a)(e)),e.cleanState=e.cleanState.bind(Object(p.a)(e)),e.getLocalStorageItems=e.getLocalStorageItems.bind(Object(p.a)(e)),e.state={textInput:"",data:null,checkedId:null,productDetails:null,ratingProducts:[],initialQtd:0,cart:{totalPrice:null,totalQtd:0,products:[]}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getLocalStorageItems()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("state",JSON.stringify(this.state))}},{key:"onClick",value:function(){var e=this.state.textInput.query;""!==e&&this.fetchProducts({query:e})}},{key:"getLocalStorageItems",value:function(){var e=JSON.parse(localStorage.getItem("state"));e&&this.setState(e)}},{key:"calcQtdItems",value:function(e){var t=this.state.initialQtd;return e.forEach((function(e){t+=e.aqtd})),t}},{key:"addOrRemoveProduct",value:function(e,t){console.log("Produto adicionado ao carrinho com sucesso!");var a=this.state.cart.products;return a?a.some((function(t){return t.id===e.id}))?a.map((function(a){return a.id===e.id?("plus"===t?a.aqtd+=1:"minus"===t&&a.aqtd>1&&(a.aqtd-=1),a):a})):[].concat(Object(s.a)(a),[e]):[e]}},{key:"handleCartItems",value:function(e,t){e.aqtd||(e.aqtd=1);var a=this.addOrRemoveProduct(e,t),n=this.calcQtdItems(a);this.setState({cart:{products:a,totalQtd:n}})}},{key:"removeItem",value:function(e){var t=this.state.cart.products;t.filter((function(t){return t.id===e}))[0].aqtd=0;var a=t.filter((function(t){return t.id!==e}));this.setState({cart:{products:a}})}},{key:"saveDetails",value:function(e){this.setState({productDetails:e})}},{key:"ratingSubmit",value:function(e){var t=e.id,a=e.email,n=e.msg,r=e.stars,c=this.state.ratingProducts,i=[].concat(Object(s.a)(c),[{id:t,email:a,msg:n,stars:r}]);this.setState({ratingProducts:i})}},{key:"handleEvent",value:function(e){var t=e.target.value;this.setState({textInput:t})}},{key:"handleEventChecked",value:function(e){var t=e.target.value;this.setState({checkedId:t}),this.fetchProducts({categoryId:t})}},{key:"cleanState",value:function(){this.setState({textInput:"",data:null,checkedId:null,productDetails:null,ratingProducts:[],cart:{totalPrice:null,totalQtd:0,products:[]},checkout:{fullName:"",cpf:"",email:"",phone:"",cep:"",address:"",other:"",number:"",city:"",state:""}})}},{key:"fetchProducts",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.categoryId,n=t.query,e.next=3,q({categoryId:a,query:n});case 3:r=e.sent,this.setState({data:r});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.textInput,c=t.cart,i=t.checkedId,o=t.productDetails,l=t.ratingProducts;return r.a.createElement(b.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/products/:id",component:function(){return r.a.createElement(Q,{ratingProducts:l,ratingSubmit:e.ratingSubmit,cart:c,productDetails:o,handleCartItems:e.handleCartItems})}}),r.a.createElement(E.a,{path:"/cart",component:function(){return r.a.createElement(F,{saveDetails:e.saveDetails,removeItem:e.removeItem,handleCartItems:e.handleCartItems,cart:c})}}),r.a.createElement(E.a,{exact:!0,path:"/",component:function(){return r.a.createElement(V,{cart:c,saveDetails:e.saveDetails,data:a,textInput:n,handleEvent:e.handleEvent,onClick:e.onClick,handleCartItems:e.handleCartItems,handleEventChecked:e.handleEventChecked,checkedId:i})}}),r.a.createElement(E.a,{path:"/checkout",component:function(){return r.a.createElement(_,{cleanState:e.cleanState,cart:c})}})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.04329580.chunk.js.map