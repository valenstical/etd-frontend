import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { DocumentComponent } from "./reusable/document/document.component";
import { HeroComponent } from "./hero/hero.component";
import { ContentComponent } from "./content/content.component";
import { HttpClientModule } from "@angular/common/http";
import { RadioButtonComponent } from "./reusable/radiobutton/radio-button.component";
import { SortComponent } from "./reusable/sort/sort.component";
import { PaginationComponent } from "./reusable/pagination/pagination.component";
import { LoaderComponent } from './reusable/loader/loader.component';
import { EmptyComponent } from './reusable/empty/empty.component';
import { ErrorComponent } from './reusable/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    FooterComponent,
    DocumentComponent,
    ContentComponent,
    RadioButtonComponent,
    SortComponent,
    PaginationComponent,
    LoaderComponent,
    EmptyComponent,
    ErrorComponent
  ],
  imports: [HttpClientModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
