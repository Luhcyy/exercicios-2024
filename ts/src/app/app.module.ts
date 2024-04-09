import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { MenuItemComponent } from './components/sidebar/menu-item/menu-item.component';
import { TopicCardComponent } from './components/main/topic-card/topic-card.component';
import { AnsweredTopicComponent } from './components/main/topic-card/answered-topic/answered-topic.component';
import { TopicFormComponent } from './components/main/topic-card/topic-form/topic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    MenuItemComponent,
    TopicCardComponent,
    AnsweredTopicComponent,
    TopicFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
