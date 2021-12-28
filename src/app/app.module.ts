import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './dir/footer/footer.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SidebarComponent } from './dir/sidebar/sidebar.component';
import { NewsOneComponent } from './pages/news-one/news-one.component';
import { NewsTwoComponent } from './pages/news-two/news-two.component';
import { NewsThreeComponent } from './pages/news-three/news-three.component';
import { NewsFourComponent } from './pages/news-four/news-four.component';
import { NewsFiveComponent } from './pages/news-five/news-five.component';
import { NewsSixComponent } from './pages/news-six/news-six.component';
import { FintobotComponent } from './pages/fintobot/fintobot.component';
import { FooterHomecComponent } from './dir/footer-homec/footer-homec.component';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    FooterComponent,
    ServiceComponent,
    ProductComponent,
    NewsComponent,
    ContactComponent,
    SidebarComponent,
    NewsOneComponent,
    NewsTwoComponent,
    NewsThreeComponent,
    NewsFourComponent,
    NewsFiveComponent,
    NewsSixComponent,
    FintobotComponent,
    FooterHomecComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
