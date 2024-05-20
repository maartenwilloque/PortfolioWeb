import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isCollapsed: boolean = true;
  public currentPage: string = ''
  private resizeListener!: () => void;

  constructor(private router: Router,private renderer: Renderer2) {
    this.router.events.subscribe(() => {
      this.currentPage = this.formatRoute(this.router.url);
    });
  }

  formatRoute(route: string): string {
    const formattedRoute = route.replace('/', '');
    return formattedRoute.charAt(0).toUpperCase() + formattedRoute.slice(1);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  toggleCollapse() {
    if (window.innerWidth < 768) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  onResize() {
    if (window.innerWidth >= 768) {
      this.isCollapsed = true;
    }
  }


}
