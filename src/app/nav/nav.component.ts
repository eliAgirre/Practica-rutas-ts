import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }
}
