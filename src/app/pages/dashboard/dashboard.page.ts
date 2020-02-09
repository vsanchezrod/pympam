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
      url: '/dashboard/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/dashboard/list',
      icon: 'list'
    },
    {
      title: 'Prepuestos',
      url: '/dashboard/presupuestos',
      icon: 'list'
    }

  ];

  constructor() { }

  ngOnInit() {
  
  }
}
