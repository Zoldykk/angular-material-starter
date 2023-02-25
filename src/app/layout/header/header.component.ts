import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Layout } from '../layout-routing.service';
import { SidebarService } from '../sidebar/sidebar-service/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarState: boolean;
  moduleTitle: string
  userData: any;
  items = [
    { label: 'Logout', icon: 'pi pi-fw pi-plus' },
    { label: 'Arabic', icon: 'pi pi-fw pi-download' },
  ];
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
    private sidebarService: SidebarService,
    private layoutService: Layout) { }

  ngOnInit() {
    this.sidebarService.sidebarState.subscribe(res => {
      this.sidebarState = res
    })


    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    // Change page title on navigation or language change, based on route data
    onNavigationEnd
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route: any) => route.outlet === 'primary'),
        switchMap((route: any) => route.data)
      )
      .subscribe((event: any) => {
        this.moduleTitle = event.title
      });
  }

  // logout() {
  //   this.userService.clear();
  //   this.router.navigateByUrl('/login')
  // }

  // getCurrentUserData() {
  //   return this.userService.getCurrentUserData()
  // }

  // displaySettings() {
  //   return this.userService.isUserAllowedTo('ManageSettings')
  // }

  // switchLanguage() {
  //   this.translationService.handleLanguageChange()
  // }

  toggleSidebar() {
    this.sidebarService.saveSidebarState(!this.sidebarState)
  }
}
