(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{O1Uq:function(n,t){n.exports=".announcement-form .announcement-content {\n  padding: 0;\n}\n.announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .quote,\n.announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .code,\n.announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .-h3,\n.announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .image,\n.announcement-form .announcement-content > .markdown-editor > .editor-toolbar > .menus .save {\n  display: none;\n}\n.announcement-search-form > .input-group > .form-control {\n  width: 16em;\n}\n.announcement-list {\n  position: relative;\n}\n.announcement-list .batch-checkbox {\n  text-align: left;\n  padding-left: 2em;\n}\n.announcement-list .announcement-err-msg {\n  margin: 1em 0;\n}\n.announcement-list tbody tr td {\n  line-height: 5em;\n}\n.announcement-list tbody tr td .content {\n  word-break: break-all;\n  line-height: 2.6;\n}\n.announcement-list tbody tr td .content p {\n  margin: 0;\n}\n.announcement-list tbody tr td .content img {\n  max-width: 4em;\n  margin: 0 1em;\n}"},iE5R:function(n,t,e){"use strict";e.r(t);var s,a=e("mrSG"),o=e("8Y7J"),i=e("SVse"),c=e("s7LF"),l=e("LqlI"),d=e("FE24"),r=e("6No5"),u=e("ZKRY"),h=e("iInd"),m=e("DlQD"),p=e.n(m),b=e("LvDl"),g=e("6p9a"),v=e("o0su"),f=e("JCLX"),S=e("Shlh");!function(n){n[n.List=0]="List"}(s||(s={}));const A={content:"",state:f.c.Published},w={keyword:""};let k=class{constructor(n,t){this.fb=n,this.httpService=t,this.Loading=s,this.PublishState=f.c,this.controlStateClass=S.a,this.apiPath=g.b,this.activeAnnouncement=null,this.announcementsSelectAll=!1,this.selectedAnnouncements=[],this.publishState=f.c.All,this.fetching={},this.announcements={data:[],pagination:null},this.editForm=this.fb.group({content:[A.content,c.g.compose([c.g.required])],state:[A.state,c.g.compose([c.g.required])]}),this.searchForm=this.fb.group({keyword:[w.keyword,c.g.compose([c.g.required])]}),Object(S.e)(this,this.editForm),Object(S.e)(this,this.searchForm)}ngOnInit(){p.a.setOptions({renderer:new p.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1}),this.getAnnouncements()}get currentListTotal(){const n=this.announcements.pagination;return n&&n.total||0}parseMarkdown(n){return p()(n)}isState(n){return this.publishState===n}switchState(n){n!==this.publishState&&(this.publishState=n,this.getAnnouncements())}resetEditForm(){this.editForm.reset(A),this.activeAnnouncement=null}resetSearchForm(){this.searchForm.reset(w)}editAnnouncement(n){this.activeAnnouncement=b.cloneDeep(n),this.editForm.reset(n)}submitEditForm(n){this.editForm.valid&&(this.activeAnnouncement?this.putAnnouncement(n):this.addAnnouncement(n))}submitSearchForm(){this.searchForm.valid&&this.getAnnouncements()}openDelModal(n){this.activeAnnouncement=b.cloneDeep(n),this.delModal.show()}canceldDelModal(){this.delModal.hide(),this.activeAnnouncement=null}openBatchDelModal(){this.activeAnnouncement=null,this.delModal.show()}handleBatchSelectChange(n){const t=this.announcements.data,e=this.selectedAnnouncements;this.selectedAnnouncements=Object(S.b)({data:t,selectedIds:e,isSelect:n})}handleItemSelectChange(){const n=this.announcements.data,t=this.selectedAnnouncements,e=Object(S.c)({data:n,selectedIds:t});this.announcementsSelectAll=e.all,this.selectedAnnouncements=e.selectedIds}handlePageChanged(n){this.getAnnouncements({page:n.page})}refreshAnnouncements(){this.getAnnouncements({page:this.announcements.pagination.current_page})}getAnnouncements(n={}){return this.keyword.value&&(n.keyword=this.keyword.value),this.publishState!==f.c.All&&(n.state=this.publishState),Object(S.d)(this.fetching,s.List,this.httpService.get(this.apiPath,n).then(n=>{this.announcements=n.result,this.selectedAnnouncements=[],this.announcementsSelectAll=!1}))}addAnnouncement(n){return this.httpService.post(this.apiPath,n).then(n=>{this.resetEditForm(),this.refreshAnnouncements()})}putAnnouncement(n){return this.httpService.put(`${this.apiPath}/${this.activeAnnouncement._id}`,Object.assign(this.activeAnnouncement,n)).then(n=>{this.resetEditForm(),this.refreshAnnouncements(),this.activeAnnouncement=null})}doDelAnnouncement(){this.httpService.delete(`${this.apiPath}/${this.activeAnnouncement._id}`).then(n=>{this.delModal.hide(),this.activeAnnouncement=null,this.refreshAnnouncements()}).catch(n=>{this.delModal.hide()})}doDelAnnouncements(){this.httpService.delete(this.apiPath,{announcement_ids:this.selectedAnnouncements}).then(n=>{this.delModal.hide(),this.refreshAnnouncements(),this.selectedAnnouncements=[]}).catch(n=>{this.delModal.hide()})}};k.ctorParameters=()=>[{type:c.a},{type:v.b}],a.b([Object(o.ViewChild)("delModal",{static:!1}),a.c("design:type",l.a)],k.prototype,"delModal",void 0);const y=[{path:"",component:k=a.b([Object(o.Component)({selector:"page-announcement",encapsulation:o.ViewEncapsulation.None,template:e("z/TE"),styles:[e("O1Uq")]}),a.c("design:paramtypes",[c.a,v.b])],k)}],x=h.d.forChild(y);let P=class{};P=a.b([Object(o.NgModule)({imports:[i.CommonModule,c.f,c.c,u.a,x,r.a.forRoot(),d.a.forRoot(),l.b.forRoot()],providers:[],declarations:[k]})],P);t.default=P},"z/TE":function(n,t){n.exports='<div class="row">\n  <div class="col-md-4 col-xs-12">\n    <sa-card title="\u6dfb\u52a0\u516c\u544a">\n      <form\n        class="announcement-form"\n        [formGroup]="editForm" \n        (ngSubmit)="submitEditForm(editForm.value)"\n      >\n        <div class="form-group" [ngClass]="controlStateClass(state)">\n          <label for="announcement-type">\n            <h5>\u516c\u544a\u72b6\u6001</h5>\n          </label>\n          <select class="form-control c-select" id="announcement-type" [formControl]="state">\n            <option [ngValue]="PublishState.Published">\u5df2\u53d1\u5e03</option>\n            <option [ngValue]="PublishState.Draft">\u8349\u7a3f</option>\n          </select>\n        </div>\n        <div  class="form-group" [ngClass]="controlStateClass(content)">\n          <label for="announcement-content">\n            <h5>\u516c\u544a\u5185\u5bb9</h5>\n          </label>\n          <sa-markdown-editor\n            id="announcement-content"\n            class="form-control announcement-content" \n            title="\u6587\u7ae0\u5185\u5bb9"\n            [config]="{ lineWrapping: true }"\n            [formControl]="content">\n          </sa-markdown-editor>\n        </div>\n        <hr>\n        <div class="col-sm-12">\n          <button\n            type="submit"\n            class="btn btn-success btn-with-icon"\n            [disabled]="!editForm.valid"\n          >\n            <i class="ion-md-done-all"></i>\n            <span>{{ activeAnnouncement ? \'\u4fee\u6539\' : \'\u6dfb\u52a0\' }}\u516c\u544a</span>\n          </button>\n          <span>&nbsp;&nbsp;</span>\n          <button class="btn btn-default btn-with-icon" (click)="resetEditForm()">\n            <i class="ion-md-refresh"></i>\n            <span>\u91cd\u7f6e</span>\n          </button>\n        </div>\n      </form>\n    </sa-card>\n  </div>\n  <div class="col-md-8 col-xs-12">\n    <sa-card title="\u5168\u90e8\u516c\u544a" baCardClass="with-scroll">\n      <div class="clearfix">\n        <div class="pull-left">\n          <div class="btn-group">\n            <button\n              type="button"\n              class="btn btn-default active"\n              [ngClass]="{ \'active\': isState(PublishState.All) }"\n              (click)="switchState(PublishState.All)"\n            >\n              <span>\u5168\u90e8</span>\n              <span *ngIf="isState(PublishState.All)">&nbsp;({{ currentListTotal }})</span>\n            </button>\n            <button\n              type="button"\n              class="btn btn-default"\n              [ngClass]="{ \'active\': isState(PublishState.Published) }"\n              (click)="switchState(PublishState.Published)"\n            >\n              <span>\u5df2\u53d1\u5e03</span>\n              <span *ngIf="isState(PublishState.Published)">&nbsp;({{ currentListTotal }})</span>\n            </button>\n            <button\n              type="button"\n              class="btn btn-default"\n              [ngClass]="{ \'active\': isState(PublishState.Draft) }"\n              (click)="switchState(PublishState.Draft)"\n            >\n              <span>\u8349\u7a3f</span>\n              <span *ngIf="isState(PublishState.Draft)">&nbsp;({{ currentListTotal }})</span>\n            </button>\n          </div>\n          <span>&nbsp;&nbsp;</span>\n          <div class="btn-group" role="group">\n            <button\n              type="button" \n              class="btn btn-default btn-with-icon" \n              (click)="refreshAnnouncements()"\n            >\n              <i class="ion-md-refresh"></i>\n              <span>\u5237\u65b0</span>\n            </button>\n            <button\n              type="button" \n              class="btn btn-default btn-with-icon"\n              (click)="resetSearchForm()"\n            >\n              <i class="ion-md-remove-circle-outline"></i>\n              <span>\u91cd\u7f6e\u53c2\u6570</span>\n            </button>\n            <div class="btn-group" dropdown [isDisabled]="!selectedAnnouncements.length">\n              <button\n                type="button"\n                class="btn btn-default btn-with-icon dropdown-toggle"\n                dropdownToggle\n              >\n                <i class="ion-md-list"></i>\n                <span>\u6279\u91cf\u64cd\u4f5c</span>\n              </button>\n              <ul class="dropdown-menu" *dropdownMenu>\n                <li class="dropdown-item">\n                  <a [href]="" (click)="openBatchDelModal()">\n                    <i class="ion-md-trash icon"></i>\n                    <span>\u6279\u91cf\u5220\u9664</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <form\n          class="pull-right form-inline navbar-form announcement-search-form" \n          [formGroup]="searchForm" \n          (ngSubmit)="submitSearchForm(searchForm.value)"\n        >\n          <div class="input-group" style="margin: 0">\n            <input\n              type="text"\n              placeholder="\u516c\u544a\u5185\u5bb9"\n              [formControl]="keyword"\n              class="form-control with-default-addon"\n            />\n            <span class="input-group-append">\n              <button class="btn btn-default" type="submit" [disabled]="!searchForm.valid">\u641c\u7d22</button>\n            </span>\n          </div>\n        </form>\n      </div>\n      <div class="table-responsive">\n        <div class="announcement-list">\n          <sa-loading-spider [show]="fetching[Loading.List]"></sa-loading-spider>\n          <table class="table table-striped table-no-borders black-muted-bg table-enrich">\n            <thead class="thead-inverse">\n              <tr>\n                <th class="batch-checkbox">\n                  <sa-checkbox [(ngModel)]="announcementsSelectAll" (ngModelChange)="handleBatchSelectChange($event)">\n                    <span sa-checkbox-label>\n                      <span>&nbsp;</span>\n                      <strong>ID</strong>\n                    </span>\n                  </sa-checkbox>\n                </th>\n                <th width="50%">\u5185\u5bb9</th>\n                <th class="text-center">\u72b6\u6001</th>\n                <th class="text-center">\u64cd\u4f5c</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngIf="!announcements.data.length;else dataList">\n                <td colspan="7">\n                  <p class="text-muted text-center announcement-err-msg">\n                    <span>{{ fetching[Loading.List] ? \'\u6570\u636e\u8bf7\u6c42\u4e2d...\' : \'\u6682\u65e0\u6570\u636e\' }}</span>\n                  <p>\n                </td>\n              </tr>\n              <ng-template #dataList>\n                <tr *ngFor="let announcement of announcements.data">\n                  <td class="batch-checkbox">\n                    <sa-checkbox [(ngModel)]="announcement.selected" (ngModelChange)="handleItemSelectChange()">\n                      <span sa-checkbox-label>\n                        <span>&nbsp;</span>\n                        <strong>{{ announcement.id }}</strong>\n                      </span>\n                    </sa-checkbox>\n                  </td>\n                  <td>\n                    <div\n                      class="content ql-editor" \n                      [innerHTML]="parseMarkdown(announcement.content)"\n                    ></div>\n                  </td>\n                  <td align="center">\n                    <span>{{ announcement.state === PublishState.Published ? \'\u5df2\u53d1\u5e03\' : \'\u8349\u7a3f\' }}</span>\n                    <span>&nbsp;&nbsp;</span>\n                    <i class="ion-md-checkmark text-success" *ngIf="announcement.state === PublishState.Published"></i>\n                    <i class="ion-md-create text-warning" *ngIf="announcement.state === PublishState.Draft"></i>\n                  </td>\n                  <td>\n                    <div class="text-center">\n                      <div class="btn-group" role="group">\n                        <button\n                          type="button"\n                          class="btn btn-sm btn-warning btn-with-icon"\n                          (click)="editAnnouncement(announcement)"\n                        >\n                          <i class="ion-md-create"></i>\n                          <span>\u7f16\u8f91</span>\n                        </button>\n                        <button\n                          type="button"\n                          class="btn btn-sm btn-danger btn-with-icon"\n                          (click)="openDelModal(announcement)"\n                        >\n                          <i class="ion-md-trash"></i>\n                          <span>\u5220\u9664</span>\n                        </button>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </tbody>\n          </table>\n          <br>\n          <div class="text-center" *ngIf="announcements.pagination">\n            <pagination\n              class="pagination-xs"\n              firstText="\u9996\u9875"\n              lastText="\u672b\u9875"\n              nextText="\u4e0b\u4e00\u9875"\n              previousText="\u4e0a\u4e00\u9875"\n              pageBtnClass="btn-primary"\n              [totalItems]="announcements.pagination.total"\n              [itemsPerPage]="announcements.pagination.per_page"\n              [(ngModel)]="announcements.pagination.current_page"\n              [maxSize]="7"\n              [boundaryLinks]="true"\n              [rotate]="false"\n              (pageChanged)="handlePageChanged($event)"\n            ></pagination>\n          </div>\n        </div>\n      </div>\n    </sa-card>\n  </div>\n  \x3c!-- \u5220\u9664\u786e\u8ba4\u5f39\u7a97 --\x3e\n  <div bsModal #delModal="bs-modal" class="modal fade" tabindex="1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button class="close" aria-label="Close" (click)="canceldDelModal()">\n            <span aria-hidden="true">&times;</span>\n          </button>\n          <h4 class="modal-title">\u786e\u8ba4\u64cd\u4f5c</h4>\n        </div>\n        <div class="modal-body">\n          <div class="message">\n            <span class="icon text-danger">\n              <i class="ion-md-information-circle-outline"></i>\n            </span>\n            <span>\u786e\u5b9a\u8981\u5220\u9664{{ activeAnnouncement ? \'\u8fd9\u6761\' : \'\u9009\u4e2d\' }}\u516c\u544a\u5417\uff1f</span>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button\n            class="btn btn-danger confirm-btn"\n            (click)="(activeAnnouncement ? doDelAnnouncement() : doDelAnnouncements())"\n          >\u786e\u8ba4\u5220\u9664</button>\n          <span>&nbsp;&nbsp;</span>\n          <button class="btn btn-default confirm-btn" (click)="canceldDelModal()">\u53d6\u6d88</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'}}]);