import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, RouterOutlet, BrowserModule, AuthModule, AppRoutingModule, RouterOutlet],
    bootstrap: [AppComponent]
})
export class AppModule {}
