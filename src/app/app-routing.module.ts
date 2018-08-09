import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';

const appRoutes: Routes = [
  { path: 'timeline', component: TimelineComponent },
  { path: '', component: TimelineComponent },
  // TODO: This should be 404Component
  // { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}


