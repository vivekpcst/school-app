import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NavController } from '@ionic/angular';
import { UtilityService } from '../services/utility.service';
import { ApiService } from '../services/api.service';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private themes: ThemeService,
    private navCtrl: NavController,
    private ut: UtilityService,
    private api: ApiService
    ) {}

  changeTheme(theme){
    this.themes.setTheme(themes[theme]);
  }

  goToDashboard(){
    this.ut.presentLoading();
    this.api.testApi().then(data=>{
      this.ut.hideLoading();
      this.navCtrl.navigateForward(['/dashboard']);
    }).catch(er=>{
      this.ut.hideLoading();
      console.log(JSON.stringify(er));
    });
  }
}
