import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { AlertController, IonSlides } from "@ionic/angular";
import { DataService } from "../../services/data.service";
import { Visitor } from "./../../interfaces/visitor";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
  styleUrls: ["./signup.scss"],
})
export class SignupPage {
  viewIndex = 0;
  submitted = true;
  showProceedBtn = false;
  showPrevBtn = true;
  showSendBtn = false;
  loading = true;
  success = false;
  error = false;
  newUser = true;
  humanVerification;
  number1;
  number2;
  operation;
  operationSign;
  legalAccepted;
  selectedJob = "null";
  addressSearch: HTMLElement;

  @ViewChild("slides", { static: true }) slides: IonSlides;

  anwsers = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
    q16: "",
    q17: "",
    q18: "",
  };

  constructor(
    private dataService: DataService,
    private alertController: AlertController,
    private http: HttpClient
  ) {}

  ionViewDidEnter() {}

  ngOnInit() {
    if (localStorage.getItem("signedUp") === null) {
      this.slides.lockSwipes(true);
    } else {
      this.newUser = false;
    }

    this.number1 = Math.floor(Math.random() * 11);
    this.number2 = Math.floor(Math.random() * 11);
  }

  backward() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);

    this.viewIndex--;

    this.inputChanged(null);
  }

  forward() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.showProceedBtn = false;
    this.viewIndex++;
  }

  startNow() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  async jobChanged(): Promise<void> {
    if (this.selectedJob == "informatik") {
      this.startNow();
    } else {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Danke für das Interesse!",
        message:
          "Wir untersützen aktuell nur die Mobile-Registrierung für Informatik-Interessierte.<br><br>Informationen zum Beruf, wie auch zum Schnuppertag bekommst Du am jeweiligen Stand.<br><br>Besuche<br><b>schnuppern.berufsbildung.ga</b><br>mit deinem PC um dich für einen Schnuppertag anzumelden.",
        buttons: [
          {
            text: "Schliessen",
            handler: () => {},
          },
        ],
      });

      await alert.present();
    }
  }

  inputChanged(value) {
    value;
    switch (this.viewIndex) {
      case 0:
        if (
          this.anwsers.q1 == "Cpu" || this.anwsers.q1 == "cpu" || this.anwsers.q1 == "CPU" || this.anwsers.q1 == "Prozessor"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q1"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q1"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 1:
        if (
          this.anwsers.q2 == "Festplatte" || this.anwsers.q2 == "Hdd" || this.anwsers.q2 == "HDD" || this.anwsers.q2 == "Harddisk" || this.anwsers.q2 == "hdd"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q2"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q2"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 2:
        if (
          this.anwsers.q3 == "Grafikkarte" || this.anwsers.q3 == "gpu" || this.anwsers.q3 == "GPU" || this.anwsers.q3 == "Gpu"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q3"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q3"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 3:
        if (
          this.anwsers.q4 == "Mainboard" || this.anwsers.q4 == "Motherboard" || this.anwsers.q4 == "Hauptplatine"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q4"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q4"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 4:
        if (
          this.anwsers.q5 == "Netzkarte"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q5"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q5"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 5:
        if (
          this.anwsers.q6 == "Netzteil"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q6"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q6"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 6:
        if (
          this.anwsers.q7 == "RAM" || this.anwsers.q7 == "ram" || this.anwsers.q7 == "Ram" || this.anwsers.q7 == "Arbeitsspeicher"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q7"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q7"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 7:
        if (
          this.anwsers.q8 == "SSD" || this.anwsers.q8 == "Ssd" || this.anwsers.q8 == "ssd"
        ) {
          this.showProceedBtn = true;
          this.addressSearch= document.querySelector('[name="q8"]');
          this.addressSearch.style.border = "1px solid lime"
        } else {
          this.showProceedBtn = false;
          this.addressSearch= document.querySelector('[name="q8"]');
          this.addressSearch.style.border = "1px solid red"
          this.addressSearch.style.borderRadius = "25px"
        }
        break;

      case 8:
        if (
          this.anwsers.q9 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 9:
        if (
          this.anwsers.q10 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 10:
        if (
          this.anwsers.q11 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 11:
        if (
          this.anwsers.q12 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 12:
        if (
          this.anwsers.q13 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 13:
        if (
          this.anwsers.q14 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;
      
      case 14:
        if (
          this.anwsers.q15 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 15:
        if (
          this.anwsers.q16 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 16:
        if (
          this.anwsers.q17 == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 17:
        if (
          this.anwsers.q == "1"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 18:
        if (
          this.anwsers.mySkills !== "" &&
          this.anwsers.mySkills.length > 15
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 19:
        if (
          this.humanVerification == this.number1 + this.number2 &&
          this.legalAccepted
        ) {
          this.showSendBtn = true;
        } else {
          this.showSendBtn = false;
        }
        break;
    }
  } /*

  processData() {
    this.forward();
    this.showProceedBtn = false;
    this.showSendBtn = false;
    this.showPrevBtn = false;

    this.dataService
      .createVisitor(this.visitorData)
      .then((res) => {
        this.loading = false;
        this.success = true;
        localStorage.setItem("signedUp", "true");
      })
      .catch((error) => {
        this.loading = false;
        this.error = true;
      });
  }*/

  processData() {
    this.forward();
    this.showProceedBtn = false;
    this.showSendBtn = false;
    this.showPrevBtn = false;

    var returnValue = false;
    this.http
      .post("https://app.berufsbildung.ga/api/insert.php", {
        vorname: this.anwsers.firstName,
        nachname: this.anwsers.lastName,
        geschlecht: this.anwsers.gender,
        strasse: this.anwsers.street,
        plz: this.anwsers.zip,
        ort: this.anwsers.city,
        email: this.anwsers.email,
        natel: this.anwsers.phone,
        geburtsdatum: this.anwsers.birthday,
        schuljahr: this.anwsers.class,
        lehrstart: this.anwsers.apprenticeStart,
        schnupperdatum: this.anwsers.selectedCourse,
        aufmerksam_geworden: this.anwsers.heardAboutThis,
        wieso_dieser_beruf: this.anwsers.whyThisJob,
        das_kenne_ich_bereits: this.anwsers.mySkills,
        verified_legal_acceptance: "OK",
      })
      .subscribe(
        (val) => {
          returnValue = true;
        },
        (response) => {
          returnValue = false;
        },
        () => {
          if (returnValue) {
            this.success = true;
            this.error = false;
            this.loading = false;
            localStorage.setItem("signedUp", "true");
          } else {
            this.success = false;
            this.error = true;
            this.loading = false;
          }
        }
      );
  }
}
