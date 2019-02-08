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
  additionalInputs: object[] = [];

  constructor(private termService: TermService) {}

  ngOnInit() {
    this.termService.getAll().subscribe(res => {
      this.terms = res;
    });
  }

  createNew() {
    let extension = this.extensionInput;
    if (this.extensionInput.indexOf("/") === -1) {
      extension = "tags/" + this.extensionInput;
    }
    let term = {
      name: this.nameInput,
      extensions: [extension]
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

  removeExtension(termIndex: string, extensionsIndex: number) {
    this.terms[termIndex].extensions.splice(extensionsIndex, 1);

    this.termService.updateOne(this.terms[termIndex]).subscribe(res => {});
  }

  addExtension(name: string, index: number) {
    if (this.additionalInputs[name].indexOf("/") === -1) {
      this.terms[index].extensions.push("tags/" + this.additionalInputs[name]);
    } else {
      this.terms[index].extensions.push(this.additionalInputs[name]);
    }

    this.termService.updateOne(this.terms[index]).subscribe(res => {
      this.additionalInputs[name] = "";
    });
  }
}
