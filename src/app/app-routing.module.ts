import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressiveProfileComponent } from './views/progressive-profile/progressive-profile.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SecondfactorComponent } from './views/secondfactor/secondfactor.component';
import { SecondfactorregisterComponent } from './views/secondfactorregister/secondfactorregister.component';

const routes: Routes = [
  { path: 'you', component: ProgressiveProfileComponent },
  { path: '', component: ProfileComponent },
  {
    path: '2fa',
    component: SecondfactorComponent,
  },
  { path: 'register', component: SecondfactorregisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
