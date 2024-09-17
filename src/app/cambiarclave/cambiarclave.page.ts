import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.page.html',
  styleUrls: ['./cambiarclave.page.scss'],
})
export class CambiarclavePage implements OnInit {
  claveActual = '';
  nuevaClave = '';
  confirmarClave = '';

  claveAlmacenada = 'MiClav3';
  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  async cambiarClave() {
    if (this.claveActual !== this.claveAlmacenada) {
      const alert = await this.alertController.create({
        message: 'La clave actual no es correcta.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.nuevaClave !== this.confirmarClave) {
      const alert = await this.alertController.create({
        message: 'La nueva clave y la confirmación no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    if (this.nuevaClave = this.confirmarClave) {
      const alert = await this.alertController.create({
        message: 'La clave ha sido cambiada exitosamente.',
        buttons: ['OK']
      });
      await alert.present();

    }

   
  }

}
