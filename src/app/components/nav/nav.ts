import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ApiService } from '../../services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  isAuthenticated = false;
  isPatient = false;
  isDoctor = false;

  showLogoutModal = false;

  private routerSubscription: Subscription;

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkAuthStatus();
      });
  }

  ngOnInit(): void {
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    this.isAuthenticated = this.apiService.isAuthenticated();
    this.isPatient = this.apiService.isPatient();
    this.isDoctor = this.apiService.isDoctor();
  }

  handleLogoutClick(): void {
    this.showLogoutModal = true;
  }

  handleConfirmLogout(): void {
    this.apiService.logout();
    this.showLogoutModal = false;
    this.router.navigate(['/']);
    this.checkAuthStatus();
  }

  handleCancelLogout(): void {
    this.showLogoutModal = false;
  }

  isActiveLink(path: string): string {
    return this.router.url === path ? 'nav-link active' : 'nav-link';
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
