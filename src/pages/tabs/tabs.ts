import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = "TasksListPage";
  tab2Root = "ProjectsPage";
  tab3Root = "TeamPage";

  constructor() {
  }

}
