import {
  AfterContentChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css'],
})
export class LifeCycleMethodsComponent
  implements OnInit, OnChanges, AfterContentChecked
{
  @Input() user: string = '';
  @Input() item: string = '';
  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanged called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOninit Called');
  }

  ngDoCheck() {
    console.log('ngDocheck called');
  }

  ngAfterContentInit() {
    console.log('ngAFter Content Init Called');
  }

  ngAfterContentChecked() {
    console.log('ngAFter Content checked Called');
  }

  ngAfterViewInit() {
    console.log('ngAFter View Init initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAFter View Checked initialized');
  }

  ngOnDestroy() {
    console.log('On COmponent Destro');
  }
}
