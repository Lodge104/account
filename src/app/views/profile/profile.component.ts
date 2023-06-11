import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { concatMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService, private http: HttpClient) {}

  faTimes = faTimes;
  profile: any;

  ngOnInit(): void {
    this.auth.user$
      .pipe(
        concatMap((user) =>
          // Use HttpClient to make the call
          this.http.get(
            encodeURI(`https://lodge104.auth0.com/api/v2/users/${user?.sub}`)
          )
        ),
        map((user: any) => user),
        tap((meta) => (this.profile = meta))
      )
      .subscribe();
  }
}
