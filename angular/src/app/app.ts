import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import { NavComponent } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
