import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ingresousuario',
  templateUrl: './ingresousuario.page.html',
  styleUrls: ['./ingresousuario.page.scss'],
})
export class IngresousuarioPage implements OnInit {
  nombre = '';
  clave = '';
  constructor(private toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  async ingresar()
  {
    if(this.nombre === 'Usuario1' && this.clave === 'MiClav3')
    {
      this.nombre = '';
      this.clave = '';
      this.router.navigate(['/inicio']);
    }
  else {

    const alert = await this.alertController.create({
 
     message : "los datos son incorrectos ",
 
     buttons : ['Ok']
 
    });
    await alert.present();
 
    }
 
   }
   async restablecerclave() {
    const alerta = await this.alertController.create({
      header: 'Restablecer Clave',
      message: `Se ha enviado un correo para restablecer la clave del usuario ${this.nombre}.`,
      buttons: ['OK']
    });
    await alerta.present();
  }
}
  