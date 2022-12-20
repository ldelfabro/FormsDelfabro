import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(private elemento : ElementRef,private renderer : Renderer2) { 
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '25px');
    this.renderer.setStyle(this.elemento.nativeElement, 'font-weight', 'bold');

  }

}
