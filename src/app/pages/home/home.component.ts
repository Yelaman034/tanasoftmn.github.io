import { Component, OnInit } from '@angular/core';
declare function slider(): any;
declare function particlesFunc(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      particlesFunc();
    }, 500);
  }
  // ngAfterContentInit() {
  //   console.log("ng after Init -------");
  //   this.invokeParticles();
  // }
  // ngAfterViewInit(){
  //   console.log("ng after view Init -------");
  //   this.invokeParticles();
  // }

  go() {
    slider();
  }

  invokeParticles() {
    particlesFunc();
  }
}
