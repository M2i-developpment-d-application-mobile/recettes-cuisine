import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
      if(!this.authService.userIsAuthenticated)
      {
        this.router.navigateByUrl('/auth');
      }
      return this.authService.userIsAuthenticated;
    }

}
