import { Component, OnInit } from "@angular/core";
import { Event } from "../models/event.model";
import { EventService } from "../services/event.service";
import { TermService } from "../services/term.service";
import { MatDialog } from "@angular/material";
import { DetailComponent } from "../detail/detail.component";
import { AddTermsComponent } from "../add-terms/add-terms.component";

function concatFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i)
    output = output.concat(input[i][field]);
  return output;
}

@Component({
  selector: "app-past",
  templateUrl: "./past.component.html",
  styleUrls: ["./past.component.scss"]
})
export class PastComponent implements OnInit {
  events: Event[];
  searchInput: string = "";

  constructor(
    public dialog: MatDialog,
    private eventService: EventService,
    private termService: TermService
  ) {}

  ngOnInit() {
    this.eventService.getPast().subscribe(res => {
      this.events = res;
      this.sortEvents();
    });
  }

  openDetail(index: number) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: "300px",
      height: "500px",
      data: this.events[index]
    });
  }

  endEvent(index: number) {
    this.eventService.deleteOne(this.events[index]._id).subscribe(res => {
      this.events.splice(index, 1);
    });
  }

  toggleWatch(index: number) {
    if (this.events[index].watch) {
      this.eventService
        .updateOne(this.events[index]._id, { watch: false })
        .subscribe(res => {
          this.events[index].watch = false;
        });
    } else {
      const dialogRef = this.dialog.open(AddTermsComponent, {
        width: "900px",
        height: "600px",
        data: this.events[index]
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          result.terms.forEach(term => {
            if (term.extensions.length > 0) {
              this.termService.updateOne(term).subscribe(res => {});
            }
          });

          let eventTerms = concatFields(result.terms, "extensions").concat(
            result.suplimentaryTerms
          );

          this.eventService
            .updateOne(this.events[index]._id, {
              watch: true,
              terms: eventTerms
            })
            .subscribe(res => {
              this.events[index].watch = true;
            });
        }
      });
    }
  }

  onChange(event) {
    let events = [];
    let counter = 0;
    console.log(event.target.value);
    this.eventService.getPast().subscribe(res => {
      res.forEach(item => {
        counter += 1;
        if (
          item.name.toUpperCase().indexOf(event.target.value.toUpperCase()) !=
          -1
        ) {
          events.push(item);
        }
        if (counter === res.length) {
          this.events = events;
        }
      });
    });
  }

  sortEvents() {
    this.events.sort((a, b) => {
      let keyA = parseInt(a.participants);
      let keyB = parseInt(b.participants);

      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }
}
