import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Video } from "../models/video.model";
import { Event } from "../models/event.model";
import { DetailComponent } from "../detail/detail.component";
import { EventService } from "../services/event.service";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"]
})
export class PublicComponent implements OnInit {
  p: number = 1;
  events: Event[];
  videos: Video[];
  currentEvent: Event;

  constructor(public dialog: MatDialog, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAll().subscribe(res => {
      this.events = res;
      this.currentEvent = res[0];
      this.eventService.getPublic(this.currentEvent._id).subscribe(res => {
        this.videos = res.videos;
        this.videos.forEach(video => {
          video.description = video.description.replace(/\\n/g, "\n");
        });
      });
    });
  }

  onChange(event) {
    this.eventService.getPublic(event.target.value).subscribe(res => {
      this.videos = res.videos;
      this.currentEvent = res;
      this.videos.forEach(video => {
        video.description = video.description.replace(/\\n/g, "\n");
      });
    });
  }

  openDetail() {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: "300px",
      height: "500px",
      data: this.currentEvent
    });
  }
}
