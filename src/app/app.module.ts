import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
    declarations: [
        AppComponent,
        MultiSelectComponent,
        DemoFormComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [MultiSelectComponent, DemoFormComponent]
})
export class AppModule { }
