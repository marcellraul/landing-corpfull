import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  //public date: any;
  //public datehour: any;

  public hash;
  public isValid: boolean = true;

  constructor(private ruta: ActivatedRoute) {
    /* this.date = new Date();
    this.date.getFullYear();
    this.datehour = new Date();
    this.datehour.getFullYear() */
  }

  ngOnInit(): void {
    //console.log(this.ruta.snapshot.params);

    this.hash = this.ruta.snapshot.params.hash;

    if (
      this.hash &&
      this.hash ===
        '9b285df7e32f5d206d6ffb42637fd915148846408f74a98aaf402510304acae3'
    ) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
