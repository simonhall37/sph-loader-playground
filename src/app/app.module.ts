import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderDotsComponent } from './components/loader-dots/loader-dots.component';
import { LoaderCogComponent } from './components/letter-dash/letter-dash.component';
import { PictureDrawComponent } from './components/picture-draw/picture-draw.component';
import { CogSpinComponent } from './components/cog-spin/cog-spin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoaderComponent,
    LoaderDotsComponent,
    LoaderCogComponent,
    PictureDrawComponent,
    CogSpinComponent,
    LoadingCircleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
