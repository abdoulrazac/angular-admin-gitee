/**
 * @file 文章编辑页面分类选择组件
 * @module app/page/article/component/category
 * @author Surmon <https://github.com/surmon-china>
 */

import * as API_PATH from '@app/constants/api';
import { Component, ViewEncapsulation, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { ICategory, TResponsePaginationCategory, buildLevelCategories } from '@/app/pages/article/article.service';
import { TApiPath, IFetching } from '@app/pages/pages.constants';
import { SaHttpRequesterService } from '@app/services';

@Component({
  selector: 'box-article-edit-category',
  encapsulation: ViewEncapsulation.None,
  template: require('./category.html'),
  styles: [require('./category.scss')]
})

export class ArticleEditCategoryComponent implements OnInit, OnChanges {

  @Input() category;
  @Output() categoryChange: EventEmitter<any> = new EventEmitter();

  private apiPath: TApiPath = API_PATH.CATEGORY;

  public categories: ICategory[] = [];
  public originalCategories: ICategory[] = [];
  public fetching: IFetching = { get: false };

  constructor(private httpService: SaHttpRequesterService) {}

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes) {
    this.buildLevelCategories();
  }

  buildLevelCategories() {
    this.categories = buildLevelCategories(this.originalCategories, this.category);
  }

  // 勾选动作
  public itemSelectChange() {
    this.category = this.categories
      .filter(category => category.checked)
      .map(category => category._id);
    this.categoryChange.emit(this.category);
  }

  // 获取所有分类
  public getCategories() {
    this.fetching.get = true;
    this.httpService
    .get<TResponsePaginationCategory>(this.apiPath)
    .then(categories => {
      this.fetching.get = false;
      this.originalCategories = categories.result.data;
      this.buildLevelCategories();
    })
    .catch(_ => {
      this.fetching.get = false;
    });
  }
}
