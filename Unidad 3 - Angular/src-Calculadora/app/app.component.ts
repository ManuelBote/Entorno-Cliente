import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 visor:string="";
 operador:number=0;
 guardar:string="";
 total:number = 0;

 anteriorS:boolean=true;
 igual:boolean=false;
 primeraOp:boolean=false;



 vNumeros:Array<number> = [];
 vOperacion:Array<String> = [];


   operar(valor:string){

    if(valor!="="){
      this.visor+=valor;
    }


     if (Number(valor)>=0 || (valor=="." && !this.visor.includes('.'))){
      if(this.igual==true){
        this.visor=valor;
        this.vNumeros=[];
        this.guardar="";
      }
        this.guardar+=valor;
        this.anteriorS=false;
        this.igual=false;


     }else {
      if(this.anteriorS==false){
        if(valor=="+" || valor=="-" || valor=="*" || valor=="/" ){
          this.igual=false;
          this.anteriorS=true;
          console.log(this.guardar);

          if(this.guardar!=""){
            this.vNumeros.push(Number(this.guardar));
          }

          this.guardar="";
          this.vOperacion.push(valor);

        }
      }


      if(valor=="="){
        this.vNumeros.push(Number(this.guardar));
        this.igual=true;

        this.total = this.vNumeros[0];
        console.log(this.total);

        for(let i = 0; i<this.vOperacion.length;i++){
          switch(this.vOperacion[i]){
            case "+":{
              console.log(this.vNumeros)
              console.log(this.vNumeros[i+1]);
              this.total = this.total+this.vNumeros[i+1];

              break;
            }
            case "-":{
              this.total = this.total-this.vNumeros[i+1];
              break;
            }
            case "*":{
              this.total = this.total*this.vNumeros[i+1];
              break;
            }
            case "/":{
              this.total = this.total/this.vNumeros[i+1];
              break;
            }
          }
        }

        this.vOperacion = [];
        this.vNumeros = [];
        this.vNumeros.push(this.total);
        this.visor= String(this.total);
        this.guardar="";
      }

      if(valor=="borrar" || valor=="reiniciar"){
        //reseteo total
        this.visor="";
        this.guardar="";
        this.anteriorS=true;
        this.igual=false;
        this.total=0;
        this.vOperacion = [];
        this.vNumeros = [];
      }
      
    }
  }
}


