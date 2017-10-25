import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'horizontal-navigation',
  templateUrl: 'horizontal-navigation.html',
})
export class HorizontalNavigationComponent implements AfterViewChecked {

  navItems: any;

  scrollChange: number;

  prevMaxScrollOffset = 0;

  @ViewChild('scrollArea') scrollArea: ElementRef;
  @ViewChild('scrollLeft') scrollLeft: ElementRef;
  @ViewChild('scrollRight') scrollRight: ElementRef;

  constructor (
    private dataService: DataService,
  ) {
    this.scrollChange = 20;
  }

  ngOnInit() {
    this.receiverInputInputs();

    this.scrollArea.nativeElement.onscroll = (function() {
      this.checkScroll();
    }).bind(this);
  }

  ngOnDestroy() {
    // remove scroll listener
  }

  ngAfterViewChecked() {
    let scrollElement = this.scrollArea.nativeElement;
    let maxScrollOffset = scrollElement.scrollWidth - scrollElement.clientWidth;
    if (maxScrollOffset === this.prevMaxScrollOffset) {
    } else {
      this.prevMaxScrollOffset = maxScrollOffset;
      this.checkScroll();
    }
  }

  checkScroll() {
    let scrollElement = this.scrollArea.nativeElement;
    let scrollOffset = scrollElement.scrollLeft;
    if (scrollOffset <= 0) {
      this.scrollLeft.nativeElement.classList.add("disabled");
    } else {
      this.scrollLeft.nativeElement.classList.remove("disabled");
    }
    let maxScrollOffset = scrollElement.scrollWidth - scrollElement.clientWidth;
    if (scrollOffset >= maxScrollOffset) {
      this.scrollRight.nativeElement.classList.add("disabled");
    } else {
      this.scrollRight.nativeElement.classList.remove("disabled");
    }
  }

  receiverInputInputs() {
    this.dataService.receiverInputInputs().subscribe(response => {
      this.navItems = response;
    });
  }

  navAction(input) {
    this.dataService.receiverInputSet(input).subscribe(response => {

    });
  }

  scrollTowardsEnd() {
    this.scrollArea.nativeElement.scrollLeft += this.scrollChange;
  }

  scrollTowardsStart() {
    this.scrollArea.nativeElement.scrollLeft -= this.scrollChange;
  }
}
