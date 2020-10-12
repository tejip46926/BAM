import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { JobdetailPage } from "../../modals/jobdetail/jobdetail.page";
import { DataService } from "../../services/data.service";

@Component({
  selector: "page-apprenticeship",
  templateUrl: "apprenticeship.html",
  styleUrls: ["./apprenticeship.scss"],
})
export class ApprenticeshipPage implements OnInit {
  jobs = [];
  location;
  locationJobSet = [];

  dataSet: any = [];

  constructor(
    public modalController: ModalController,
    private dataService: DataService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.location = localStorage.getItem("standort");
    this.httpClient.get("assets/data/appData.json").subscribe((data) => {
      this.dataSet = data;
      for (var i = 0; i < this.dataSet.jobs.length; i++) {
        if (localStorage.getItem("standort").toLowerCase() == (this.dataSet.jobs[i].location).toLowerCase()) {
          this.locationJobSet = this.dataSet.jobs[i];
          this.jobs = this.locationJobSet["listing"];
        }
      }
    });
  }

  openHomePage() {
    window.open(
      "https://www.ruag.ch/arbeiten-bei-uns/karriere/schuelerinnen-und-schueler"
    );
  }

  jobLocationChanged(): void {
    if ((this.location = "interlaken")) {
      this.jobs = this.dataSet.jobsInterlaken;
    } else if ((this.location = "full")) {
      this.jobs = this.dataSet.jobsSwitzerland;
    }
  }

  async openModal(job) {
    for (var i = 0; i < this.jobs.length; i++) {
      var jobDetail = this.jobs[i];
      if (jobDetail.linking == job) {
        const modal = await this.modalController.create({
          component: JobdetailPage,
          componentProps: {
            jobDetail: jobDetail,
          },
        });
        return await modal.present();
      }
    }
  }
}
