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

  @ViewChild("slides", { static: true }) slides: IonSlides;

  visitorData = {
    gender: "null",
    firstName: "",
    lastName: "",
    street: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    birthday: "2009-01-01",
    class: "null",
    apprenticeStart: "null",
    selectedCourse: "null",
    heardAboutThis: "null",
    whyThisJob: "",
    mySkills: "",
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
          this.visitorData.firstName !== "" &&
          this.visitorData.firstName.length >= 3 &&
          this.visitorData.lastName !== "" &&
          this.visitorData.lastName.length >= 3 &&
          this.visitorData.gender !== "null"
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 1:
        if (
          this.visitorData.street !== "" &&
          this.visitorData.firstName.length >= 2 &&
          this.visitorData.zip !== "" &&
          this.visitorData.zip.length == 4 &&
          this.visitorData.city !== "" &&
          this.visitorData.city.length >= 2
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 2:
        if (
          this.visitorData.email !== "" &&
          this.visitorData.email.length >= 5 &&
          this.visitorData.phone !== "" &&
          this.visitorData.phone.length >= 9
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 3:
        if (this.visitorData.birthday !== "") {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 4:
        if (this.visitorData.class !== "") {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 5:
        if (this.visitorData.apprenticeStart !== "null") {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 6:
        if (this.visitorData.selectedCourse !== "null") {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 7:
        if (this.visitorData.heardAboutThis !== "null") {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 8:
        if (
          this.visitorData.whyThisJob !== "" &&
          this.visitorData.whyThisJob.length > 15
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 9:
        if (
          this.visitorData.mySkills !== "" &&
          this.visitorData.mySkills.length > 15
        ) {
          this.showProceedBtn = true;
        } else {
          this.showProceedBtn = false;
        }
        break;

      case 10:
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
        vorname: this.visitorData.firstName,
        nachname: this.visitorData.lastName,
        geschlecht: this.visitorData.gender,
        strasse: this.visitorData.street,
        plz: this.visitorData.zip,
        ort: this.visitorData.city,
        email: this.visitorData.email,
        natel: this.visitorData.phone,
        geburtsdatum: this.visitorData.birthday,
        schuljahr: this.visitorData.class,
        lehrstart: this.visitorData.apprenticeStart,
        schnupperdatum: this.visitorData.selectedCourse,
        aufmerksam_geworden: this.visitorData.heardAboutThis,
        wieso_dieser_beruf: this.visitorData.whyThisJob,
        das_kenne_ich_bereits: this.visitorData.mySkills,
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
