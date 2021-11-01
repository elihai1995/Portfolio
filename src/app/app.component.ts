import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  myDate = new Date();
  public isActive: boolean = false;
  constructor(){
  }

  ngOnInit(){
    timer(0, 1000).subscribe(() => {
      this.myDate = new Date()
    }
  )}

  public toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
