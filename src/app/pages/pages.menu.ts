/**
 * @file 页面边栏菜单组件
 * @author Surmon <https://github.com/surmon-china>
 */

import { BLOG_SITE } from '@/config';

export const PAGES_MENU = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '仪表盘',
            icon: 'ion-md-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'announcement',
        data: {
          menu: {
            title: '公告管理',
            icon: 'ion-md-sunny',
            selected: false,
            expanded: false,
            order: 1,
          }
        }
      },
      {
        path: 'article',
        data: {
          menu: {
            title: '文章管理',
            icon: 'ion-md-albums',
            order: 2,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                icon: 'ion-md-list',
                title: '所有文章',
              }
            }
          },
          {
            path: 'category',
            data: {
              menu: {
                icon: 'ion-md-folder',
                title: '分类目录',
              }
            }
          },
          {
            path: 'post',
            data: {
              menu: {
                icon: 'ion-md-create',
                title: '发布文章',
              }
            }
          },
          {
            path: 'tag',
            data: {
              menu: {
                icon: 'ion-md-pricetags',
                title: '文章标签',
              }
            }
          },
        ]
      },
      {
        path: 'comment',
        data: {
          menu: {
            title: '评论管理',
            icon: 'ion-md-text',
            order: 3
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: '所有评论',
                icon: 'ion-md-list'
              }
            }
          },
          {
            path: 'post',
            data: {
              menu: {
                title: '留言评论',
                icon: 'ion-md-list'
              }
            }
          }
         ]
      },
      {
        path: 'options',
        data: {
          menu: {
            title: '全局设置',
            icon: 'ion-md-settings',
            order: 4,
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Blog',
            url: BLOG_SITE,
            icon: 'ion-md-ribbon',
            target: '_blank',
            order: 9
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Github',
            url: 'https://github.com/surmon-china/angular-admin',
            icon: 'ion-logo-github',
            target: '_blank',
            order: 10
          }
        }
      },
      {
        path: 'demo',
        data: {
          menu: {
            title: 'Demo 开发',
            icon: 'ion-logo-angular',
            selected: false,
            expanded: false,
            order: 11,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: '官方文档',
                url: 'https://akveo.github.io/ng2-admin/',
                icon: 'ion-md-school',
                order: 800,
                target: '_blank'
              }
            }
          },
          {
            path: 'ui',
            data: {
              menu: {
                title: 'UI 展示',
                icon: 'ion-md-color-fill',
                selected: false,
                expanded: false,
                order: 300,
              }
            },
            children: [
              {
                path: 'typography',
                data: {
                  menu: {
                    title: '排版',
                  }
                }
              },
              {
                path: 'buttons',
                data: {
                  menu: {
                    title: '按钮',
                  }
                }
              },
              {
                path: 'modals',
                data: {
                  menu: {
                    title: '弹窗',
                  }
                }
              },
              {
                path: 'grid',
                data: {
                  menu: {
                    title: '栅格',
                  }
                }
              },
              {
                path: 'icons',
                data: {
                  menu: {
                    title: '图标',
                  }
                }
              },
              {
                path: 'other',
                data: {
                  menu: {
                    title: '其他',
                  }
                }
              },
            ]
          },
          {
            path: 'forms',
            data: {
              menu: {
                title: '表单组件',
                icon: 'ion-md-clipboard',
                selected: false,
                expanded: false,
                order: 400,
              }
            },
            children: [
              {
                path: 'inputs',
                data: {
                  menu: {
                    title: '表单元素',
                  }
                }
              },
              {
                path: 'layouts',
                data: {
                  menu: {
                    title: '表单布局',
                  }
                }
              }
            ]
          },
          {
            path: 'tables',
            data: {
              menu: {
                title: '表格',
                icon: 'ion-md-grid',
                selected: false,
                expanded: false,
                order: 500,
              }
            },
            children: [
              {
                path: 'basictables',
                data: {
                  menu: {
                    title: '基本表格',
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
