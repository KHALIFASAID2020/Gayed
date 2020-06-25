import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthetificationService } from './authetification.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{


  constructor(private router : Router,private authservice : AuthetificationService){
    }
    canActivate(){
      
      const currentUser = this.authservice.currentUserValue;
      
      if(currentUser){
        
          this.router.navigate(['/']);
         
        return true;
      }
      this.router.navigate(['/pages/auth/login']);
      //,{queryParams: {returnUrl: state.url}}
      return false;
    }
}