import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pagetitle='login';
  isNotHome=true;

  //modelo
  user : any = {
    name:'',
    password: ''
  }

  field : string = '';

  constructor(private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validarModelo(this.user)){
      this.presentToast('Bienivenido ' + this.user.name);
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast("Datos incorrectos " + this.field);
    }
  }

  validarModelo(model:any){
    for(var[key,value]  of Object.entries(model)){
      if(value == 'User'){
        this.field = key;
        return true;
      }
      if(value == 'Admin'){
        this.field = key;
        return true;
      }
    }
    return false;
  }

  async presentToast(message: string, duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2000,
      position: 'bottom'
    });
    await toast.present();
  }

}
