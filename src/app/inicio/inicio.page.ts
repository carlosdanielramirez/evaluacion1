import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario: string = 'Usuario1'; 

  constructor(private router: Router) { } 

  ngOnInit() {
    this.nombreUsuario = this.obtenerNombreUsuario(); 
  }

  obtenerNombreUsuario(): string {
    return 'Usuario1'; 
  }

  cerrarSesion() {
    this.router.navigate(['/ingresousuario']);
  }
}