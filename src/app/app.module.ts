import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForumComponent } from './forum/forum.component';
import { AstucesComponent } from './astuces/astuces.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { VetilistComponent } from './vetilist/vetilist.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetCreateComponent } from './vet-create/vet-create.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForumComponent,
    AstucesComponent,
    NewsletterComponent,
    LoginComponent,
    VetilistComponent,
    VetListComponent,
    VetCreateComponent,
    VetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
