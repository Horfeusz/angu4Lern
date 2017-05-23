import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {MyDataService} from '../my-data.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css'],
  providers: [MyServiceService]
})
export class MyFirstCompComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  @Input() private searchText: string;

  @Output() selected = new EventEmitter();

  persons: Array<any>;

  constructor(private myService: MyServiceService,
              private dataService: MyDataService) {

    dataService.data$.subscribe(value => {
      console.log('dostałem z serwisu', value);
      this.searchText = value;
    });
  }

  ngOnInit() {
    console.log('ngOnInit', this.searchText);
    this.persons = this.myService.data();
  }

  select(person) {
    this.selected.emit(person);
  }

  setsearchText(searchText: string) {
    console.log('setsearchText', searchText);
    this.searchText = searchText;
  }


  ngOnChanges() {
    console.log('ngOnChanges' + this.searchText);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.persons.forEach(person => console.log(person.lastName));
  }


  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
