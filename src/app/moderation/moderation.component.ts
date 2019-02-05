import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Video } from "../models/video.model";
import { Event } from "../models/event.model";
import { DetailComponent } from "../detail/detail.component";
import { EventService } from "../services/event.service";
import { VideoService } from "../services/video.service";

@Component({
  selector: "app-moderation",
  templateUrl: "./moderation.component.html",
  styleUrls: ["./moderation.component.scss"]
})
export class ModerationComponent implements OnInit {
  p: number = 1;
  events: Event[];
  videos: Video[];
  currentEvent: Event;

  constructor(
    public dialog: MatDialog,
    private eventService: EventService,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.eventService.getAll().subscribe(res => {
      this.events = res;
      this.currentEvent = res[0];
      this.eventService.getManage(this.currentEvent._id).subscribe(res => {
        this.videos = res.videos;
        this.videos.forEach(video => {
          video.description = video.description.replace(/\\n/g, "\n");
        });
      });
    });
  }

  onChange(event) {
    this.eventService.getManage(event.target.value).subscribe(res => {
      this.videos = res.videos;
      this.currentEvent = res;
      this.videos.forEach(video => {
        video.description = video.description.replace(/\\n/g, "\n");
      });
    });
  }

  approveVideo(id: string, index: number) {
    this.videoService.updateOne(id, { public: true }).subscribe(res => {
      this.videos.splice(index, 1);
    });
  }

  deleteVideo(id: string, index: number) {
    this.videoService.updateOne(id, { show: false }).subscribe(res => {
      this.videos.splice(index, 1);
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
