import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Term } from "../models/term.model";
import { config } from "../config";

const baseURL = config.baseURL;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class TermService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Term[]>(`${baseURL}/terms`, httpOptions);
  }

  createOne(term: object) {
    return this.http.post<Term>(`${baseURL}/terms`, term, httpOptions);
  }

  deleteOne(id: string) {
    return this.http.delete<Term>(`${baseURL}/terms/manage/${id}`, httpOptions);
  }

  updateOne(term: object) {
    return this.http.put<Term>(`${baseURL}/terms`, term, httpOptions);
  }
}
