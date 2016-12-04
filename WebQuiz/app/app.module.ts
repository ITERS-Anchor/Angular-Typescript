import { NgModule, ApplicationRef, Component, ErrorHandler, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Location, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { routing } from "./routes/app.routing";
import { AppComponent } from "./app.component";
import { DefaultComponent } from "./components/default";
import { ProfileComponent } from "./components/profile";
import { UsersComponent } from "./components/users";
import { SearchPipe } from "./search-pipe";

enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing
    ],
    declarations: [
        AppComponent,
        DefaultComponent,
        ProfileComponent,
        UsersComponent,
        SearchPipe
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }