import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoadingInterceptor } from './core/Interceptors/loading.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './core/Interceptors/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusPipePipe } from './tax/pipes/status-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    HomeModule,
  ],
  providers: [  {
    provide:HTTP_INTERCEPTORS,
    useClass : LoadingInterceptor,
    multi:true
  } ,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : JwtInterceptor,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
