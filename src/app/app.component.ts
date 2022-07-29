import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('ref') para!: ElementRef;
  title = 'sample-user';
  showComponent = true;
  userData = 'Leela';
  itemData = 'Items';

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.para);
  }

  onChangeData() {
    this.userData = 'user value changed';
  }

  onDestroyComponent() {
    this.showComponent = false;
  }
}
