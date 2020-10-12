import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { Platform } from "@ionic/angular";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "page-company",
  templateUrl: "company.html",
  styleUrls: ["./company.scss"],
})
export class CompanyPage implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {}

  moreAboutRUAG() {
    window.open("https://ruag.ch", "_blank");
  }
}
