import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage implements OnInit {
    asistencias = [
      {nombre: "Programacion", fecha: "martes 03 de septiembre", asistencia: "presente"},
      {nombre: "Ingles", fecha: "lunes 09 de septiembre", asistencia: "ausente"},
      {nombre: "Calidad de Software", fecha: "viernes 13 de septiembre", asistencia: "presente"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
