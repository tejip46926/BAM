import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MenuController, IonSlides } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';


import { Storage } from "@ionic/storage";

@Component({
  selector: "page-tutorial",
  templateUrl: "tutorial.html",
  styleUrls: ["./tutorial.scss"],
})
export class TutorialPage {
  showSkip = true;

  @ViewChild("slides", { static: true }) slides: IonSlides;
  
  
  
  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private activatedRoute: ActivatedRoute
    ) {}
    
    next() {
    this.slides.slideNext();
  }

  ngOnInit() {
    /*this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        localStorage.setItem('region', params['region']);
        localStorage.setItem('standort', params['standort']);
      }
    })*/
    if(localStorage.getItem('cleanUp') !== 'true') {
      localStorage.clear();
      localStorage.setItem('region', 'west');
      localStorage.setItem('standort', 'interlaken');
    }
    
  }

  startApp() {
    this.router
      .navigateByUrl("/app/tabs/apprenticeship", { replaceUrl: true })
      .then(() => this.storage.set("ion_did_tutorial", true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then((isEnd) => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get("ion_did_tutorial").then((res) => {
      if (res === true) {
        this.router.navigateByUrl("/app/tabs/apprenticeship", {
          replaceUrl: true,
        });
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
