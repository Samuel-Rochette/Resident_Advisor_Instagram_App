import { Component, OnInit } from "@angular/core";
import { TermService } from "../services/term.service";
import { Term } from "../models/term.model";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.scss"]
})
export class TermsComponent implements OnInit {
  terms: Term[];
  nameInput: string;
  extensionInput: string;

  constructor(private termService: TermService) {}

  ngOnInit() {
    this.termService.getAll().subscribe(res => {
      this.terms = res;
    });
  }

  createNew() {
    let term = {
      name: this.nameInput,
      extension: this.extensionInput
    };
    this.termService.createOne(term).subscribe(res => {
      this.terms.push(res);
      this.nameInput = "";
      this.extensionInput = "";
    });
  }

  deleteOne(id: string, index: number) {
    this.termService.deleteOne(id).subscribe(res => {
      this.terms.splice(index, 1);
    });
  }
}
