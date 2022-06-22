"use strict";(self.webpackChunkIPSEN5_SecurityChecker_Frontend=self.webpackChunkIPSEN5_SecurityChecker_Frontend||[]).push([[907],{8907:(D,l,c)=>{c.r(l),c.d(l,{AdminHomeModule:()=>Y});var s=c(9808),o=c(2382),u=c(9560),e=c(1223),h=c(4136);let v=(()=>{class n{constructor(){this.adminPageNavigation="scans"}changeDropDownLocation(t){this.adminPageNavigation=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),A=(()=>{class n{constructor(t,i){this.auth=t,this.adminService=i}ngOnInit(){}activateAdminDropDown(t){this.adminService.changeDropDownLocation(t)}logOutAsUser(){this.auth.logOutAsUser()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.k),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-menu"]],decls:15,vars:0,consts:[[1,"navbar","navbar-expand-lg"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],[3,"click"],[1,"nav-item","active"]],template:function(t,i){1&t&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"button",3),e.NdJ("click",function(){return i.activateAdminDropDown("scans")}),e.TgZ(4,"a"),e._uU(5,"Scans"),e.qZA()()(),e.TgZ(6,"li",4)(7,"button",3),e.NdJ("click",function(){return i.activateAdminDropDown("tips")}),e.TgZ(8,"a"),e._uU(9,"Tips"),e.qZA()()()(),e.TgZ(10,"ul",1)(11,"li",2)(12,"button",3),e.NdJ("click",function(){return i.logOutAsUser()}),e.TgZ(13,"a"),e._uU(14,"log uit"),e.qZA()()()()())},styles:[""]}),n})();var g=c(1733),_=c(7922),Z=c(1529),T=c(4691),S=c(2290);let d=(()=>{class n{constructor(t,i){this.http=t,this.toastr=i,this.emptyScanUser=new _.g("-",!0,"-","-"),this.emptyScanReport=[],this.emptyReport=new g.y(this.emptyScanUser,this.emptyScanReport,"22-06-22"),this.scanLimit=0,this.reports=[],this.currentViewedReport=new g.y(this.emptyScanUser,this.emptyScanReport,"-")}getAllCustomerDataFromDatabase(){this.emptyScanReport.push(new Z.S("-","-",[],1)),this.emptyReport.scanReports=this.emptyScanReport,this.subscription=this.getAll().subscribe(t=>{this.reports=t})}getAll(){return this.http.getAll("/reports")}getScanLimit(){this.http.get("/scan/scanlimiet").subscribe(t=>{this.scanLimit=t})}changeMaxScanLimit(t){this.scanLimit=+t.value,this.http.post("/scan/scanlimiet",this.scanLimit).subscribe(i=>{})}changeCurrentViewedRapport(t){this.currentViewedReport=t}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(T.O),e.LFG(S._W))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function C(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"button",2),e.NdJ("click",function(){const p=e.CHM(t).$implicit;return e.oxw().onRapportSelected(p)}),e._uU(2),e.qZA()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.scanUser.name)}}let b=(()=>{class n{constructor(t){this.reportService=t}onRapportSelected(t){this.reportService.changeCurrentViewedRapport(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-singlescan"]],decls:2,vars:1,consts:[[1,"scanList"],[4,"ngFor","ngForOf"],[1,"singleCustomer",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,C,3,1,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.reportService.reports.reverse()))},directives:[s.sg],styles:[".singleCustomer[_ngcontent-%COMP%]{text-align:left;border:2px;border-bottom-style:dotted;border-color:gray;padding-top:1em;width:100%}.scanList[_ngcontent-%COMP%]{height:20em;overflow-y:scroll;overflow-x:hidden;word-break:break-word}"]}),n})();function w(n,r){if(1&n&&(e.TgZ(0,"div",13)(1,"div",14)(2,"p",15),e._uU(3,"Titel: "),e.qZA(),e.TgZ(4,"h5",16),e._uU(5),e.qZA()(),e._UZ(6,"hr"),e.TgZ(7,"div",17)(8,"div",18)(9,"h6"),e._uU(10,"cijfer:"),e.qZA(),e.TgZ(11,"h1"),e._uU(12),e.qZA()(),e.TgZ(13,"div",19)(14,"p"),e._uU(15,"Endpoint: "),e.qZA(),e.TgZ(16,"h6"),e._uU(17),e.qZA()()()()),2&n){const t=r.$implicit;e.xp6(5),e.hij(" ",t.title,""),e.xp6(7),e.hij(" ",t.grade,"/10"),e.xp6(5),e.Oqu(t.endpoint)}}let y=(()=>{class n{constructor(t){this.raportService=t}ngOnInit(){this.raportService.getAllCustomerDataFromDatabase()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-scanresult"]],decls:30,vars:6,consts:[[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","col-md-12"],[1,""],[1,"line"],[1,"sml-line"],[1,"col-lg-5"],[1,"execute-right"],[1,"col-lg-7","col-md-7"],[1,"d-flex","justify-content-between"],[1,"border-secondary","border","p-3",2,"margin-right","5em"],[1,"scanresult"],["class","border-secondary border p-3 m-2",4,"ngFor","ngForOf"],[1,"border-secondary","border","p-3","m-2"],[1,"row","text-center","mx-auto","mb-1",2,"width","98%"],[1,"col-2","w-25","fw-bolder"],[1,"col","w-25"],[1,"row","text-center","mx-auto","mb-2"],[1,"col-3","w-25","fw-bolder","border"],[1,"col","w-25","fw-bolder"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"span")(6,"span",5),e.qZA(),e.TgZ(7,"h2"),e._uU(8,"Admin Dashboard - Scans"),e.qZA()()(),e.TgZ(9,"div",6)(10,"div",7),e._UZ(11,"app-admin-singlescan"),e.qZA()(),e.TgZ(12,"div",8)(13,"div",9)(14,"div")(15,"p"),e._uU(16),e.qZA(),e._UZ(17,"hr"),e.TgZ(18,"p"),e._uU(19),e.qZA(),e.TgZ(20,"p"),e._uU(21),e.qZA()(),e.TgZ(22,"div",10)(23,"p"),e._uU(24),e.qZA(),e.TgZ(25,"p"),e._uU(26),e.qZA()()(),e._UZ(27,"hr"),e.TgZ(28,"div",11),e.YNc(29,w,18,3,"div",12),e.qZA()()()()),2&t&&(e.xp6(16),e.hij("Naam: ",i.raportService.currentViewedReport.scanUser.name,""),e.xp6(3),e.hij("Website: ",i.raportService.currentViewedReport.scanUser.website,""),e.xp6(2),e.hij("Datum: ",i.raportService.currentViewedReport.dateCreated,""),e.xp6(3),e.hij("Email: ",i.raportService.currentViewedReport.scanUser.email,""),e.xp6(2),e.hij("Ownership: ",i.raportService.currentViewedReport.scanUser.ownership,""),e.xp6(3),e.Q6J("ngForOf",i.raportService.currentViewedReport.scanReports))},directives:[b,s.sg],styles:[".scanresult[_ngcontent-%COMP%]{height:30em;margin-bottom:2em;overflow-y:scroll;overflow-x:hidden;word-break:break-word}"]}),n})();var f=c(9362);function U(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"button",2),e.NdJ("click",function(){const p=e.CHM(t).$implicit;return e.oxw().onTipSelected(p)}),e._uU(2),e.qZA()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.text)}}let x=(()=>{class n{constructor(t){this.tipsService=t}ngOnInit(){this.tipsService.setTipsIntoList()}onTipSelected(t){this.tipsService.changeCurrentUsedTip(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-tip"]],inputs:{tip:"tip"},decls:2,vars:1,consts:[[1,"tipList"],[4,"ngFor","ngForOf"],[1,"singleTip",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,U,3,1,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.tipsService.tips.reverse()))},directives:[s.sg],styles:[".singleTip[_ngcontent-%COMP%]{text-align:left;border:2px;border-bottom-style:dotted;border-color:gray;padding-top:1em;width:100%}.tipList[_ngcontent-%COMP%]{height:20em;overflow-y:scroll;overflow-x:hidden;word-break:break-word}"]}),n})();function F(n,r){1&n&&(e.TgZ(0,"div",13),e._UZ(1,"input",18),e.qZA())}function q(n,r){1&n&&(e.TgZ(0,"div",13),e._UZ(1,"input",19),e.qZA())}function k(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",13)(1,"input",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteTip()}),e.qZA()()}}let M=(()=>{class n{constructor(t){this.tipsService=t,this.tips=[]}ngOnInit(){}goCreateANewTip(){this.tipsService.cleanInputField()}submit(t){return!!this.checkIfFormInputIsValdid(t)&&(this.tipsService.inEditMode?(this.tipsService.updateTip(t.value),!0):(this.tipsService.createTip(t.value),t.value="",!0))}checkIfFormInputIsValdid(t){for(let i of[t])if(!i.checkValidity())return i.reportValidity(),!1;return!0}deleteTip(){this.tipsService.deleteTip()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-tips"]],decls:26,vars:4,consts:[[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","col-md-12"],[1,""],[1,"line"],[1,"sml-line"],[1,"col-lg-5","col-md-5"],[1,"execute-right","tipList"],["type","button","value","new tip",3,"click"],[1,"col-lg-7","col-md-7"],[1,"execute-right"],["id","loginForm",3,"ngSubmit"],["tipForm","ngForm"],[1,"form-column"],["name","tip","ngModel","","required","","type","text","placeholder","tip*","aria-label","tip",1,"form-control","bg2",3,"value"],["tip",""],[1,"form-row"],["class","form-column",4,"ngIf"],["type","submit","value","create","aria-label","Verzenden"],["type","submit","value","change","aria-label","Verzenden"],["type","button","value","Verwijder tip","aria-label","Verzenden",3,"click"]],template:function(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"span")(6,"span",5),e.qZA(),e.TgZ(7,"h2"),e._uU(8,"Admin Dashboard - Tips"),e.qZA()()(),e.TgZ(9,"div",6)(10,"div",7)(11,"input",8),e.NdJ("click",function(){return i.goCreateANewTip()}),e.qZA(),e._UZ(12,"app-admin-tip"),e.qZA()(),e.TgZ(13,"div",9)(14,"div",10)(15,"form",11,12),e.NdJ("ngSubmit",function(){e.CHM(a);const m=e.MAs(19);return i.submit(m)}),e.TgZ(17,"div",13),e._UZ(18,"input",14,15),e.qZA(),e.TgZ(20,"div",16),e.YNc(21,F,2,0,"div",17),e.YNc(22,q,2,0,"div",17),e.YNc(23,k,2,0,"div",17),e.qZA(),e.TgZ(24,"noscript"),e._uU(25,"Activeer JavaScript om gebruik te maken van dit formulier."),e.qZA()()()()()()}2&t&&(e.xp6(18),e.s9C("value",i.tipsService.tipToSendWithId.text),e.xp6(3),e.Q6J("ngIf",!i.tipsService.inEditMode),e.xp6(1),e.Q6J("ngIf",i.tipsService.inEditMode),e.xp6(1),e.Q6J("ngIf",i.tipsService.inEditMode))},directives:[x,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,o.Q7,s.O5],styles:[".tipList[_ngcontent-%COMP%]{margin:3em 3em 3em 0}"]}),n})(),I=(()=>{class n{constructor(t){this.raportService=t}ngOnInit(){this.raportService.getScanLimit()}submit(t){return!!this.checkIfFormInputIsValdid(t)&&(this.raportService.changeMaxScanLimit(t),!0)}checkIfFormInputIsValdid(t){for(let i of[t])if(!i.checkValidity())return i.reportValidity(),!1;return!0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-scanlimit"]],decls:36,vars:2,consts:[[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","col-md-12"],[1,""],[1,"line"],[1,"sml-line"],[1,"execute-right"],["id","scanForm","ngForm","",3,"ngSubmit"],["scanForm","ngForm"],[1,"form-row","align-self-center","my-4"],[1,"form-column","d-flex","justify-content-center","align-self-center"],["for","maxScanLimit"],["name","maxScanLimit","ngModel","","min","0","max","100","required","","type","number","aria-label","maxScanLimit",1,"form-control","bg1","my-0",3,"placeholder","value"],["maxScanLimit",""],["type","submit","value","pas scan limiet aan","aria-label","Verzenden",1,"my-0"],[1,"execute-left"]],template:function(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"span")(6,"span",5),e.qZA(),e.TgZ(7,"h2"),e._uU(8,"Admin Dashboard - scan limiet"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",2)(12,"div",6)(13,"form",7,8),e.NdJ("ngSubmit",function(){e.CHM(a);const m=e.MAs(21);return i.submit(m)}),e.TgZ(15,"div",9)(16,"div",10)(17,"label",11),e._uU(18,"maximaal aantal scans per website:"),e.qZA()(),e.TgZ(19,"div",10),e._UZ(20,"input",12,13),e.qZA(),e.TgZ(22,"div",10),e._UZ(23,"input",14),e.qZA()(),e.TgZ(24,"noscript"),e._uU(25,"Activeer JavaScript om gebruik te maken van dit formulier."),e.qZA()()()(),e.TgZ(26,"div",2)(27,"div",15)(28,"h3"),e._uU(29,"scan Limiet"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"met een scan limiet zorg je ervoor dat mensen niet te vaak hun website gaan scannen."),e.qZA(),e.TgZ(32,"p"),e._uU(33,"Door het limiet op 0 te zetten zorg je ervoor dat niemand kan scannen,"),e._UZ(34,"br"),e._uU(35," waardoor je eventuele problemen kan oplossen. Zonder dat de backend Gebruikt word!"),e.qZA()()()()()()()}2&t&&(e.xp6(20),e.s9C("placeholder",i.raportService.scanLimit),e.s9C("value",i.raportService.scanLimit))},directives:[o._Y,o.JL,o.F,o.Fj,o.wV,o.qQ,o.Fd,o.JJ,o.On,o.Q7],styles:[""]}),n})();function O(n,r){1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-admin-scanresult"),e.qZA())}function J(n,r){1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-admin-tips"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-admin-scanlimit"),e.qZA())}let L=(()=>{class n{constructor(t){this.adminService=t}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-window"]],decls:5,vars:3,consts:[[1,""],[1,"col-lg"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,O,2,0,"div",2),e.YNc(3,J,2,0,"div",2),e.YNc(4,N,2,0,"div",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf","scans"===i.adminService.adminPageNavigation),e.xp6(1),e.Q6J("ngIf","tips"===i.adminService.adminPageNavigation),e.xp6(1),e.Q6J("ngIf","scanlimit"===i.adminService.adminPageNavigation))},directives:[s.O5,y,M,I],styles:[""]}),n})();const R=[{path:"",pathMatch:"full",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin-home"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12","col-lg-1"],[1,"col-md-1","col-lg-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-admin-menu"),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"app-admin-window"),e.qZA()()())},directives:[A,L],styles:[""]}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.ez,V,o.u5]]}),n})()}}]);