import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  Experiences : Experience [] = [
    {id: 1, function: "CAD-Designer",company:"Dentsply Implants",startDate:"feb 2011",endDate:"dec 2013"},
    {id: 2, function: "Design Coordinator",company:"Dentsply Implants",startDate:"jan 2014",endDate:"dec 2015"},
    {id: 3, function: "Teamleader Scanning",company:"Dentsply Implants",startDate:"jan 2016",endDate:"nov 2017"},
    {id: 4, function: "Process Engineer",company:"Dentsply Sirona Implants",startDate:"nov 2017",endDate:"apr 2023"},
    {id: 5, function: "Microsoft Cloud Consultant",company:"Qubix",startDate:"may 2023",endDate:""}
  ]

  constructor() { }

  getExperiences(){
    return this.Experiences
  }
}
