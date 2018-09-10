import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:any;
  gender :any;
  someCondition:any;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    this.gender  = "f";
    this.someCondition = true;

   }
    presentActionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        buttons: [
          {
            text: 'Destructive',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },
          {
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
   
      actionSheet.present();
    }
   }