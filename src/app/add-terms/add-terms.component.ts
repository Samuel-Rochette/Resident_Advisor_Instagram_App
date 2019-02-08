import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TermService } from "../services/term.service";
import { Term } from "../models/term.model";
import { Event } from "../models/event.model";

function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

@Component({
  selector: "app-add-terms",
  templateUrl: "./add-terms.component.html",
  styleUrls: ["./add-terms.component.scss"]
})
export class AddTermsComponent implements OnInit {
  termInput: string = "";
  terms: any[] = [];
  additionalInputs: object[] = [];
  suplimentaryTerms: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddTermsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event,
    private termService: TermService
  ) {}

  ngOnInit() {
    this.termService.getAll().subscribe(res => {
      if (this.data.location) {
        let index = findWithAttr(res, "name", this.data.location);
        let term = { name: this.data.location, extensions: [] };
        if (index > -1) {
          term.extensions = res[index].extensions;
        }

        this.terms.push(term);
      }

      this.data.artists.forEach(artist => {
        let term = { name: artist, extensions: [] };
        let index = findWithAttr(res, "name", artist);
        if (index > -1) {
          term.extensions = res[index].extensions;
        }
        this.terms.push(term);
      });
    });
  }

  addTerm() {
    if (this.termInput.indexOf("/") === -1) {
      this.suplimentaryTerms.push("tags/" + this.termInput);
      this.termInput = "";
    } else {
      this.suplimentaryTerms.push(this.termInput);
      this.termInput = "";
    }
  }

  submitTerms() {
    this.dialogRef.close({
      terms: this.terms,
      suplimentaryTerms: this.suplimentaryTerms
    });
  }

  removeExtension(termIndex: string, extensionsIndex: number) {
    this.terms[termIndex].extensions.splice(extensionsIndex, 1);
  }

  addExtension(name: string, index: number) {
    if (this.additionalInputs[name].indexOf("/") === -1) {
      this.terms[index].extensions.push("tags/" + this.additionalInputs[name]);
      this.additionalInputs[name] = "";
    } else {
      this.terms[index].extensions.push(this.additionalInputs[name]);
      this.additionalInputs[name] = "";
    }
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
