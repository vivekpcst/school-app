import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  loading;
  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController
    ) { }

  
  async presentLoading(loadingMsg='Please wait...') {
    this.loading = await this.loadingController.create({
      message: loadingMsg      
    });   
    await this.loading.present();
  }
  hideLoading(){
    if(this.loading){
      this.loading.dismiss();
      this.loading = null;
    }
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      // position:'middle'
    });
    toast.present();
  }

}
