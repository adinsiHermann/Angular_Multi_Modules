import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { GestionComponent } from './gestion.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  { path: '', component: GestionComponent },
  { path: 'playlists', component : PlaylistsComponent },
  { path: 'playlist-details', component : PlaylistDetailsComponent },
  { path: 'create-playlist', component : CreatePlaylistComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
