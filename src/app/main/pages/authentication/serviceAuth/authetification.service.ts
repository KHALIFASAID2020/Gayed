import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthetificationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'X-Requested-With':'XMLHttpRequest'})
  };
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>
  url = environment.baseUrl; //'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('session_id')));
    this.currentUser = this.currentUserSubject.asObservable();
   }
   
   public get currentUserValue(): any{
    return this.currentUserSubject.value;
  }

  login(formLogin){
    return this.http.post<any>(`${this.url}/auth/login`,formLogin).pipe(map(res=>{
      localStorage.setItem('session_id',JSON.stringify(res));
      return res
    }))
  }
  Register(formRegister){
    return this.http.post<any>(`${this.url}/auth/register`,formRegister).pipe(map(res=>{
        return res
    }))
  }
  onSendToRest(onSendToRestForm){
    return this.http.post<any>(`${this.url}/password/create`,onSendToRestForm).pipe(map(res=>{
      return res
    }))
  }

  onResetPassword(resetPasswordForm){
    console.log(resetPasswordForm);
    
    return this.http.post<any>(`${this.url}/password/reset`,resetPasswordForm).pipe(map(res=>{
      return res
   }))
  }

  logout(){
    localStorage.removeItem('session_id');
    //this.currentUserSubject.next(null);
    }
}
