import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoFormComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [DemoFormComponent]
})
export class AppModule { }
