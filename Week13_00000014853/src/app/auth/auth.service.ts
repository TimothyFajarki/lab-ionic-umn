import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userId = 'null';
  private _user = new BehaviorSubject<User>(null);

  constructor(private httpC: HttpClient) { }
  get isAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if(user) {
        return !!user.token; 
      }
      else {
        return null;
      }
    }));
  }

  signup(email: string, password: string) {
    return this.httpC.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      tap(userData => {
        const expireTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));

        this._user.next(new User(userData.localId, userData.email, userData.idToken, expireTime));
      })
    )
  }

  login(email: string, password: string) {
    return this.httpC.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }

  logout() {
    this._user.next(null);
  }
}
