import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MainComponent } from './layouts/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FintobotComponent } from './pages/fintobot/fintobot.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsFiveComponent } from './pages/news-five/news-five.component';
import { NewsFourComponent } from './pages/news-four/news-four.component';
import { NewsOneComponent } from './pages/news-one/news-one.component';
import { NewsSixComponent } from './pages/news-six/news-six.component';
import { NewsThreeComponent } from './pages/news-three/news-three.component';
import { NewsTwoComponent } from './pages/news-two/news-two.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductComponent } from './pages/product/product.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'news/show/1',
        component: NewsOneComponent,
      },
      {
        path: 'news/show/2',
        component: NewsTwoComponent,
      },
      {
        path: 'news/show/3',
        component: NewsThreeComponent,
      },
      {
        path: 'news/show/4',
        component: NewsFourComponent,
      },
      {
        path: 'news/show/5',
        component: NewsFiveComponent,
      },
      {
        path: 'news/show/6',
        component: NewsSixComponent,
      },
      {
        path: 'service/fintobot',
        component: FintobotComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
