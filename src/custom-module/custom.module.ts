import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./custom.routes";
import {CustomComponent} from "./custom.component";
import {GithubService} from "./github/shared/github.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [CustomComponent, AboutComponent, RepoBrowserComponent, RepoListComponent, RepoDetailComponent, HomeComponent],
  imports     : [CommonModule, FormsModule, HttpModule, RouterModule.forChild(rootRouterConfig)],
  providers   : [GithubService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [CustomComponent, RouterModule]
})
export class CustomModule {

}
