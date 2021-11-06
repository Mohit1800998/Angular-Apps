import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calApp';
  sum:number;
  mul:number;
  fac:string[] = [];
  constructor(){
    this.sum=0;
    this.mul=0;
    this.fac = ["Get Factors"];

  }

  doSum(v1:string,v2:string){
    let v11 = parseInt(v1);
    let v22 = parseInt(v2);
    this.sum  = v11 + v22;
    console.log(v11+v22);
  }
  
  doMul(v3:string,v4:string){
    let v33 = parseInt(v3);
    let v44 = parseInt(v4);
    this.mul = v33 * v44;
    console.log(v33+v44);
  }

  getc(v5:string){
    let num = parseInt(v5);
    for (let i = 1; i <= num; ++i) {
        if (num % i == 0) {
          let a = i.toString();
          this.fac.push(a);
        }
    }
    console.log(this.fac);
  }
  
}

