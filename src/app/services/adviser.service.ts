import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdviserService {
  private adviser = new BehaviorSubject(false);
  advice = this.adviser.asObservable();

  constructor() {}

  setAdvice(advice: boolean) {
    this.adviser.next(advice);
  }
}
