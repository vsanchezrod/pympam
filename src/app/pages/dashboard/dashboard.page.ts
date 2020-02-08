import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'List',
      url: 'list',
      icon: 'list'
    },
    {
      title: 'Prepuestos',
      url: 'presupuestos',
      icon: 'list'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
