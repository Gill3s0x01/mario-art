import { Component } from '@angular/core';
import { FeedPageModule } from '../feed/feed.module';
import { HomePage } from '../home/home.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = Tab1Page;
  tab3Root = Tab2Page;
  tab5Root = FeedPageModule;

  constructor() {}
}
