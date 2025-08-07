import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {MatSnackBar} from "@angular/material/snack-bar";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const _snackBar = inject(MatSnackBar);

  if (authService.getIsLoggedIn()) {
    return true;
  } else {
    _snackBar.open('Для доступа необходимо авторизоваться!')
    return router.createUrlTree(['login'], {
      queryParams: { returnUrl: state.url }
    });
  }
};

// import {Injectable} from "@angular/core";
// import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree} from "@angular/router";
// import {Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivateFn {
//
//   constructor() {
//
//   }
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       return
//   }
//
// }
