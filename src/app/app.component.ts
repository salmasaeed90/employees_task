import { Component ,inject} from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentLang!:string;
  toggleLang:boolean = true

  constructor(private translate:TranslateService){
    translate.setDefaultLang('en');
      translate.use('en');
      this.currentLang = localStorage.getItem('currentLang') || 'en';
  }
  ngOnInit():void{
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.adjustTextDirection(event.lang);
    });
  }
  adjustTextDirection(lang: string) {
    const htmlTag = document.getElementsByTagName('html')[0];
  
    if (lang === 'ar') { 
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    }
  }

  chooseLang(){
    this.toggleLang=!this.toggleLang;
    if(this.toggleLang ){
      this.translate.use('en')
    }else{
      this.translate.use('ar')
    }
  }


  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang)
  }
}
