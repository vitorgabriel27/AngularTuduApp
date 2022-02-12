import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  public form = [
    { val: 'Desafio UX Design', isChecked: true, description:'lorem ipsum dolor sit amet',color: 'tertiary' },
    { val: 'Sausage', isChecked: false, description:'lorem ipsum dolor sit amet', color: 'success' },
    { val: 'Mushroom', isChecked: false,description:'lorem ipsum dolor sit amet', color: 'secondary' }
  ];

  public form2 = [
    { val: 'Desafio UX Design', isChecked: true, description:'lorem ipsum dolor sit amet',color: 'tertiary' },
    { val: 'Entrevista', isChecked: false, description:'lorem ipsum dolor sit amet', color: 'success' },
    { val: 'Contratação', isChecked: false,description:'lorem ipsum dolor sit amet', color: 'secondary' },
    { val: 'Estudar', isChecked: false,description:'lorem ipsum dolor sit amet', color: 'tertiary' },
    { val: 'Terminar front-end', isChecked: false,description:'lorem ipsum dolor sit amet', color: 'tertiary' }
  ];

  public slideOpts: any = {
    speed: 400, slidesPerView: 3, freeMode: true,}


}
