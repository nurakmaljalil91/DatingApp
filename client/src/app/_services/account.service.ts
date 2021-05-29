import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'
import {User} from "../_models/user";
import {Observable, ReplaySubject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1)
  currentUser$ = this.currentUserSource.asObservable()

  constructor(private http: HttpClient) {
  }

  login(model: any): Observable<void> {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response) => {
        const user = response as User
        if (user) {
          localStorage.setItem('user', JSON.stringify(user) ?? '{}')
          this.currentUserSource.next(user)
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user) ?? '{}')
          this.currentUserSource.next(user)
        }
        return user
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem('user')
    this.currentUserSource.next(undefined)
  }

}
