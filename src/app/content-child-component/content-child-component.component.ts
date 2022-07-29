import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-content-child-component',
  templateUrl: './content-child-component.component.html',
  styleUrls: ['./content-child-component.component.css'],
})
export class ContentChildComponentComponent implements OnInit {
  @ContentChild('ref') para!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log(this.para);
  }
}
