import { Component, Input, OnInit } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import { Layout } from "../layout-routing.service";
import { SidebarService } from "./sidebar-service/sidebar.service";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
    @Input() sidebarState: boolean;
    public isCollapsed = false;
    menus: any;
    lang: string = '';
    status: boolean = false;
    userData: any;
    constructor(
        private router: Router,
        private sidebarService: SidebarService,) {

    }

    ngOnInit(): void {
        // this.lang = this.translationService.language
        this.menus = this.sidebarService.buildMenu()
        // this.userData = this.userService.getCurrentUserData()
    }

    clickEvent() {
        this.status = !this.status;
    }
}



