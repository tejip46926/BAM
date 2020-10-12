import { Injectable } from "@angular/core";
import { Visitor } from "../interfaces/visitor";
import { map } from "rxjs/operators";

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  visitorListRef: AngularFireList<any>;
  visitorRef: AngularFireObject<any>;
  jsonURL = "assets/data/appData.json";

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.visitorListRef = this.db.list("/RUAGH_BB_W_INT/INF/");
  }

  createVisitor(visitor) {
    return this.visitorListRef.push({
      gender: visitor.gender,
      firstName: visitor.firstName,
      lastName: visitor.lastName,
      street: visitor.street,
      zip: visitor.zip,
      city: visitor.city,
      email: visitor.email,
      phone: visitor.phone,
      birthday: visitor.birthday,
      class: visitor.class,
      apprenticeStart: visitor.apprenticeStart,
      selectedCourse: visitor.selectedCourse,
      heardAboutThis: visitor.heardAboutThis,
      whyThisJob: visitor.whyThisJob,
      mySkills: visitor.mySkills,
      legalAccepted: true,
    });
  }
}
