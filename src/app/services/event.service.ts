import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Event } from "../models/event.model";

const baseURL = "https://safe-ridge-39617.herokuapp.com";
// const baseURL = "http://localhost:3000";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Event[]>(`${baseURL}/events`, httpOptions);
  }

  getManage(id: string) {
    return this.http.get<Event>(`${baseURL}/events/manage/${id}`, httpOptions);
  }

  getPublic(id: string) {
    return this.http.get<Event>(`${baseURL}/events/public/${id}`, httpOptions);
  }

  deleteOne(id: string) {
    return this.http.delete<Event>(
      `${baseURL}/events/manage/${id}`,
      httpOptions
    );
  }
}
