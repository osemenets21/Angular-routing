import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './pages/works/tasklist/table/table.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WorksComponent,
        HeaderComponent,
        FooterComponent,
        CenzorComponent,
        TasklistComponent,
        UserlistComponent,
        TableComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ]
})
export class AppModule { }
