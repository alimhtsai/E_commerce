"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[207],{9207:(g,m,s)=>{s.r(m),s.d(m,{BasketModule:()=>y});var c=s(6895),r=s(9838),t=s(1571),u=s(5866),d=s(5053),l=s(8795);function p(e,B){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"There are no items in your basket"),t.qZA()())}function v(e,B){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"app-basket-summary",4),t.NdJ("addItem",function(a){t.CHM(n);const i=t.oxw();return t.KtG(i.incrementQuantity(a))})("removeItem",function(a){t.CHM(n);const i=t.oxw();return t.KtG(i.removeItem(a))}),t.qZA()(),t.TgZ(4,"div",5)(5,"div",6),t._UZ(6,"app-order-totals"),t.TgZ(7,"div",7)(8,"a",8),t._uU(9," Proceed to checkout "),t.qZA()()()()(),t.BQk()}}const k=[{path:"",component:(()=>{class e{constructor(n){this.basketService=n}incrementQuantity(n){this.basketService.addItemToBasket(n)}removeItem(n){this.basketService.removeItemFromBasket(n.id,n.quantity)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.v))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-basket"]],decls:5,vars:6,consts:[[1,"container","mt-5"],[4,"ngIf"],[1,"container","mb-5"],[1,"row"],[3,"addItem","removeItem"],[1,"row","mt-3"],[1,"col-6","offset-6"],[1,"d-grid"],["routerLink","/checkout",1,"btn","btn-outline-primary","py-2"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.YNc(1,p,3,0,"div",1),t.ALo(2,"async"),t.YNc(3,v,10,0,"ng-container",1),t.ALo(4,"async"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",null===t.lcZ(2,2,a.basketService.basketSource$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,4,a.basketService.basketSource$)))},dependencies:[c.O5,r.rH,d.S,l.b,c.Ov],styles:[".text[_ngcontent-%COMP%]{color:#000}.text[_ngcontent-%COMP%]:hover{color:#ff9100}"]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(k),r.Bz]})}return e})();var h=s(4466);let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,f,h.m]})}return e})()}}]);