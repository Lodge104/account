import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressiveProfileComponent } from './views/progressive-profile/progressive-profile.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: 'you', component: ProgressiveProfileComponent },
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
