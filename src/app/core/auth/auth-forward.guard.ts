import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authForwardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getIsLoggedIn()) {
    return router.createUrlTree(['/']);
  }

  return true;
};

// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthForwardGuard implements CanActivate {
//
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {}
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.getIsLoggedIn()) {
//       return this.router.createUrlTree(['/']);
//     }
//     return true;
//   }
// }
