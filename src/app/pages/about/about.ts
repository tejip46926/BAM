import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-about",
  templateUrl: "about.html",
  styleUrls: ["./about.scss"],
})
export class AboutPage {
  location = "berufsbildung";

  selectOptions = {
    header: "Wähle die Ortschaft aus",
  };

  regionalDetails: any = [];
  regionalIdentifier = "west";
  appDetails: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.regionalIdentifier = localStorage.getItem('region');
    this.httpClient.get("assets/data/appData.json").subscribe((data) => {
      for (var i = 0; i < data["regionalContacts"].length; i++) {
        if (this.regionalIdentifier.toLowerCase() == (data["regionalContacts"][i].identifier).toLowerCase()) {
          this.regionalDetails = data["regionalContacts"][i];
        }
      }

      this.appDetails = data["appDetails"];
    });
  }

  call() {
    document.location.href = "tel:" + this.regionalDetails.phone;
  }

  sendMail() {
    document.location.href = "mailto:" + this.regionalDetails.email;
  }
}
