import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.router);
    console.log(this.route);
    console.log('Navbar initialized');
  }

}
