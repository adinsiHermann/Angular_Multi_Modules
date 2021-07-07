import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CreatePlaylistComponent } from './pages/gestion/create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './pages/gestion/playlist-details/playlist-details.component';
import { PlaylistsComponent } from './pages/gestion/playlists/playlists.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo : 'connexion'},
  { path: 'gestion', loadChildren: () => import('./pages/gestion/gestion.module').then(m => m.GestionModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'signin', component : SigninComponent },
  { path: 'signup', component : SignupComponent },
  { path: 'playlists', component : PlaylistsComponent },
  { path: 'playlist-details', component : PlaylistDetailsComponent },
  { path: 'create-playlist', component : CreatePlaylistComponent },

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
