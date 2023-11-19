import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SearchComponent } from './pages/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MaterialModule } from './modules/material/material.module';
import { AuthInterceptorProvider } from './auth/interceptors/cookies.interceptor';

//Client module

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SearchComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
