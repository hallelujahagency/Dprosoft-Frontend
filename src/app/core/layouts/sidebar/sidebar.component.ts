import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import menuItems, { IMenuItem } from 'src/app/core/constantes/menu';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

menuItems: IMenuItem[] = menuItems;
selectedParentMenu = '';
viewingParentMenu = '';
currentUrl: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

   
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        })
      ).subscribe((event) => {
        const path = this.router.url.split('?')[0];
        const paramtersLen = Object.keys(event.snapshot.params).length;
        const pathArr = path.split('/').slice(0, path.split('/').length - paramtersLen);
        this.currentUrl = pathArr.join('/');
      });

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
     const toParentUrl = this.currentUrl.split('/')[1];
      if (toParentUrl !== undefined || toParentUrl !== null) {
        this.selectedParentMenu = toParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = 'tableau-de-bord';
      }
      this.selectMenu();
      window.scrollTo(0, 0);
    });

  }



  ngOnInit(): void {
  }

  
  selectMenu() {
    const currentParentUrl = this.currentUrl.split('/')[1];
    if (currentParentUrl !== undefined || currentParentUrl !== null) {
      this.selectedParentMenu = currentParentUrl.toLowerCase();
    } else {
      this.selectedParentMenu = 'tableau-de-bord';
    }

  }

  openMenu(parentMenu: string) {
    this.selectedParentMenu = parentMenu;
    this.viewingParentMenu = parentMenu;
  }

}
