import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // SIDE BAR CODE
  sidebarOpen = false;
  dropdownArr = [false, false, false];

  constructor() {}

  ngOnInit(): void {}

  openDropdown(index: number) {
    this.dropdownArr[index] = !this.dropdownArr[index];
    console.log(this.dropdownArr);
    if (index === 0) {
      this.dropdownArr[1] = false;
      this.dropdownArr[2] = false;
    } else if (index === 1) {
      this.dropdownArr[0] = false;
      this.dropdownArr[2] = false;
    } else if (index === 2) {
      this.dropdownArr[0] = false;
      this.dropdownArr[1] = false;
    }
  }
}
