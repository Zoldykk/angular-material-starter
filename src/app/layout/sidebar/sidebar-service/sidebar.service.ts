import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  entityUserMenusItems = [
    {
      id: 1,
      order: 1,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'My Entity',
      ar: 'لوحة الإحصائيات',
      icon: 'dashboard.svg',
      routerLink: '/my-entity',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 2,
      order: 2,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Requests',
      ar: 'الطلبات',
      icon: 'requests.svg',
      routerLink: '/requests',
      claims: ['ManageUsers'],
      hasCounter: true
    },
    {
      id: 3,
      order: 3,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Reports',
      ar: 'التقارير',
      icon: 'requests.svg',
      routerLink: '/reports',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 4,
      order: 4,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Main Services',
      ar: 'الخدمات الرئيسية',
      icon: 'main-services.svg',
      routerLink: '/main-services',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 5,
      order: 5,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Sub Services',
      ar: 'الخدمات الفرعية',
      icon: 'main-services.svg',
      routerLink: '/sub-services',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 5,
      order: 5,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Service Channels',
      ar: 'قنوات الخدمة',
      icon: 'service-channels.svg',
      routerLink: '/service-channels',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 4,
      order: 4,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Users',
      ar: 'المستخدمون',
      icon: 'users.svg',
      routerLink: '/users',
      claims: ['ManageUsers'],
      hasCounter: false
    },
  ]
  pmoMenusItems = [
    {
      id: 1,
      order: 1,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Dashboard',
      ar: 'لوحة الإحصائيات',
      icon: 'dashboard.svg',
      routerLink: '/dashboard',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 2,
      order: 2,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Requests',
      ar: 'الطلبات',
      icon: 'requests.svg',
      routerLink: '/requests',
      claims: ['ManageUsers'],
      hasCounter: true
    },
    {
      id: 3,
      order: 3,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Entities',
      ar: 'الجهات',
      icon: 'entities.svg',
      routerLink: '/entities',
      claims: ['ReadEntities'],
      hasCounter: false
    },
    {
      id: 4,
      order: 4,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Main Services',
      ar: 'الخدمات الرئيسية',
      icon: 'main-services.svg',
      routerLink: '/main-services',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 5,
      order: 5,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Sub Services',
      ar: 'الخدمات الفرعية',
      icon: 'main-services.svg',
      routerLink: '/sub-services',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 5,
      order: 5,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Service Channels',
      ar: 'قنوات الخدمة',
      icon: 'service-channels.svg',
      routerLink: '/service-channels',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 6,
      order: 6,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Reports',
      ar: 'التقارير',
      icon: 'requests.svg',
      routerLink: '/reports',
      claims: ['ManageUsers'],
      hasCounter: false
    },
    {
      id: 7,
      order: 7,
      categoryTitle: {
        en: 'admin',
        ar: 'إدارة'
      },
      en: 'Users',
      ar: 'المستخدمون',
      icon: 'users.svg',
      routerLink: '/users',
      claims: ['ManageUsers'],
      hasCounter: false
    },
  ]
  constructor(private router: Router) { }
  // constructor(private userService: UserService, private router: Router) { }

  buildMenu() {
    let menus;
    // Get Users Claims
    let claims = ['ManageUsers'];
    if (!claims) {
      return
    }
    //  Check if user is pmo or entity user
    // menus = this.userService.getCurrentUserData().type === 'EntityUser' ? this.entityUserMenusItems : this.pmoMenusItems
    // //  Filter menu items allowed for user
    // menus.filter((item: any) => item.claims.some((c: any) => claims.includes(c))).sort((a, b) => a.order - b.order)
    // function groupBy(menus) {
    //   const newObj = menus.reduce(function (acc, currentValue) {
    //     let title = currentValue.categoryTitle.en
    //     let category = acc.find(item => item.en == title)
    //     if (!category) {
    //       category = {
    //         en: title,
    //         ar: currentValue.categoryTitle.ar,
    //         menus: [currentValue]
    //       }
    //       acc.push(category)
    //     } else {
    //       category.menus.push(currentValue)
    //     }
    //     return acc;
    //   }, []);
    //   return newObj;
    // }

    // let groupedMenus = groupBy(menus)
    return menus
  }

  navigateToFirstMenu() {
    // if (this.buildMenu()) {
    //   let firstCategory = this.buildMenu()[0]
    //   let firstMenu = firstCategory?.menus[0]
    //   this.router.navigateByUrl(firstMenu.routerLink)
    // } else {
    //   this.router.navigateByUrl('/login')
    // }
  }


  private sidebarStateSource = new BehaviorSubject<any>(true);
  sidebarState = this.sidebarStateSource.asObservable();

  saveSidebarState(state: boolean) {
    this.sidebarStateSource.next(state)
  }

}
