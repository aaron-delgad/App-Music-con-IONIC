import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';
import {IonicStorageModule} from '@ionic/storage-angular';
import {HttpClientModule} from '@angular/common/http';
import {SongsModalPageModule} from './songs-modal/songs-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRouting, IonicStorageModule.forRoot(), HttpClientModule, SongsModalPageModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
