import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressiveProfileComponent } from './views/progressive-profile/progressive-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './views/profile/profile.component';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AuthComponent } from './component/auth/auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProgressiveProfileComponent,
    ProfileComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'lodge104.auth0.com',
      clientId: '1InPPjKIY5NIkHHyabz73yaRjg6IfpS2',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://lodge104.auth0.com/api/v2/',
        scope: 'read:current_user',
      },
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://{yourDomain}/api/v2/' (note the asterisk)
            uri: 'https://lodge104.auth0.com/api/v2/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: 'https://lodge104.auth0.com/api/v2/',

                // The attached token should have these scopes
                scope: 'read:current_user',
              },
            },
          },
        ],
      },
    }),
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
