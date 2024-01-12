import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, take } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  $users = computed(() => this.#state().users);
  $loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(take(1), delay(1500))
      .subscribe(res => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(i => i.data)
      );
  }
}
