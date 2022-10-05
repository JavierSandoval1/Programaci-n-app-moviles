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

  
  user : any = {
    name:'',
    password:''
  }

  field : string = ''

  constructor(private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validarRegla(this.user)){
      this.presentToast('Bienvenido ' + this.user.name);
      this.router.navigate(['/bienvenida']);
    }
    else{
      this.presentToast("Datos incorrectos " + this.field);
    }
  }

  validarRegla(model:any){
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
