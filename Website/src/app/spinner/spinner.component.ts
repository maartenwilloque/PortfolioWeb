// import { Component } from "@angular/core";
// import { SpinnerService } from "../_services/spinner.service";

// @Component({
//   selector: 'app-spinner',
//   templateUrl: './spinner.component.html',
//   styleUrls: ['./spinner.component.css']
// })
// export class SpinnerComponent {
//   isLoading: boolean = false;

//   constructor(private spinnerService: SpinnerService) {}

//   ngOnInit() {
//     this.spinnerService.loadingChange.subscribe((loading: boolean) => {
//       this.isLoading = loading;
//       console.log('Spinner loading:', loading);
//     });
//   }
// }
import { Component, OnDestroy } from "@angular/core";
import { SpinnerService } from "../_services/spinner.service";
import { Subscription, timer } from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {
  hideSpinnerb: boolean = true;
  private loadingSubscription: Subscription | undefined;

  constructor(private spinnerService: SpinnerService) {
    this.loadingSubscription = this.spinnerService.loadingChange.subscribe((loading: boolean) => {
      if (loading) {
        this.showSpinner();
      } else {
        this.hideSpinner();
      }
    });
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  private showSpinner() {
    this.hideSpinnerb = false;
  }

  private hideSpinner() {
    timer(1000).subscribe(() => {
      this.hideSpinnerb = true;
    });
  }
}
