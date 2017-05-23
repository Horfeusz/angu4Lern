import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-comp2',
  templateUrl: './my-comp2.component.html',
  styleUrls: ['./my-comp2.component.css']
})
export class MyComp2Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/start']);
  }
}
