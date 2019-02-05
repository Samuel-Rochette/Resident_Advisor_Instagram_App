import { Component, OnInit } from "@angular/core";
import { Event } from "../models/event.model";
import { EventService } from "../services/event.service";
import { MatDialog } from "@angular/material";
import { DetailComponent } from "../detail/detail.component";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(public dialog: MatDialog, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAll().subscribe(res => {
      this.events = res;
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
}
