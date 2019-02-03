import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Event } from "../models/event.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event
  ) {}
}
