import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModerationService } from "../services/moderation.service";
import { Video } from "../models/video.model";
import { DetailComponent } from "../detail/detail.component";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  p: number = 1;
  videos: Video[];

  constructor(
    public dialog: MatDialog,
    private moderationService: ModerationService
  ) {
    this.moderationService.getPublic().subscribe(data => {
      this.videos = data;
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
