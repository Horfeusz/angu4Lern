import {Component, OnInit, ViewChild} from '@angular/core';
import {MyFirstCompComponent} from '../my-first-comp/my-first-comp.component';
import {MyDataService} from '../my-data.service';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @ViewChild(MyFirstCompComponent) myFirstCompComponent: MyFirstCompComponent;

  searchString: string = null;

  isTable: boolean = false;

  selected: string;

  constructor(private dataService: MyDataService,
              private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    this.isTable = true;

    this.dataService.setData(this.searchString);

    if (!isNullOrUndefined(this.myFirstCompComponent)) {
      this.myFirstCompComponent.select(this.searchString);
    }
  }

  selectRow(person) {
    this.selected = person.firstName + ' ' + person.lastName;
  }

  go() {
    this.router.navigate(['/comp2']);
  }

}
