import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistInfoComponent } from './todolist-info/todolist-info.component';


// app.module.ts
// app.module.ts
const routes: Routes = [
  { path: 'todos', component: TodolistComponent },
  { path: 'todolist-info', component: TodolistInfoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
