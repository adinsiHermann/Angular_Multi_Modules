import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';


@NgModule({
  declarations: [
    GestionComponent,
    PlaylistsComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
