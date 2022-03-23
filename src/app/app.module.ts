import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { Routes,RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './myContainer/databind/databind.component';
import { ClassStyleComponent } from './myContainer/databind/class-style/class-style.component';
import { EventbindComponent } from './myContainer/databind/eventbind/eventbind.component';
import { NgifComponent } from './myContainer/databind/ngif/ngif.component';
import { NgswitchComponent } from './myContainer/databind/ngswitch/ngswitch.component';
import { NgforComponent } from './myContainer/databind/ngfor/ngfor.component';
import { HomeComponent } from './myContainer/home/home.component';
import { AboutComponent } from './myContainer/about/about.component';
import { ContactComponent } from './myContainer/contact/contact.component';
import { ProductsComponent } from './myContainer/products/products.component';


const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'products',component: ProductsComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
