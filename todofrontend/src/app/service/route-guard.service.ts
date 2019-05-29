import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
//CanActive เรียกเอาที่เป็น interface มาใช้
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private router : Router) { }

//บรรทัดนี้ก็อปมาใช้
//Auto import กด ctrl+spacebar
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  if(this.hardcodedAuthenticationService.isUserLoggedIn()){
    return true;
  }
  this.router.navigate(['login']);
  return false;
}

}
