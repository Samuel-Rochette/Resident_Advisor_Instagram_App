import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ModerationService } from "../services/moderation.service";
import { Video } from "../models/video.model";
import { DetailComponent } from "../detail/detail.component";

@Component({
  selector: "app-moderation",
  templateUrl: "./moderation.component.html",
  styleUrls: ["./moderation.component.scss"]
})
export class ModerationComponent {
  p: number = 1;
  videos: Video[];

  constructor(
    public dialog: MatDialog,
    private moderationService: ModerationService
  ) {
    this.moderationService.getAll().subscribe(data => {
      this.videos = data;
    });
  }

  toggleShow(video: Video) {
    video.show = !video.show;
    this.moderationService.updateOne(video).subscribe(() => {
      console.log("Video Saved " + video.vidUrl);
    });
  }

  openDialog(video: Video) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: "300px",
      height: "500px",
      data: video
    });
  }
}
