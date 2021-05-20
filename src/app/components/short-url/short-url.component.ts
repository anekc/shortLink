import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';


@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string = '';
  urlShort: string = '';
  urlProcesada: boolean = false ;
  loading: boolean = false;
  mostrarError: boolean = false;
  textError: string = '';
  constructor(private shorUrlService: ShortUrlService,
    ) {
 

   }

  ngOnInit(): void {
  }

  procesarUrl(){
    // validar si la url esta vacia
    if(this.nombreUrl === ''){
    this.error('Por favor ingrese una Url')
      return;
    }
    this.urlProcesada = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlShort()
    }, 2000);

  }

  obtenerUrlShort(){
    this.shorUrlService.getUrlShort(this.nombreUrl)
    .subscribe(data => {
      this.loading = false;
      this.urlProcesada = true;
      this.urlShort = data.link;
      console.log(data);
    }, error => {
      this.loading = false;
      this.nombreUrl = '';
      console.log(error.error.description);
      if(error.error.description === 'The value provided is invalid.')
      this.error('La url es inválida')
    })
  }

  error(valor: string){
    this.mostrarError = true;
    this.textError = valor;
    // duracion del mensaje
    setTimeout(() => {
      this.mostrarError = false
    }, 5000);

  }



}
