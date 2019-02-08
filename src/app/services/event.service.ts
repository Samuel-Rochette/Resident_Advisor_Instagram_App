import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Event } from "../models/event.model";
import { config } from "../config";

const baseURL = config.baseURL;

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

  getWatching() {
    return this.http.get<Event[]>(`${baseURL}/events/watching`, httpOptions);
  }

  getFuture() {
    return this.http.get<Event[]>(`${baseURL}/events/future`, httpOptions);
  }

  getPast() {
    return this.http.get<Event[]>(`${baseURL}/events/past`, httpOptions);
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

  updateOne(id: string, update: object) {
    return this.http.put<Event>(
      `${baseURL}/events/manage/${id}`,
      update,
      httpOptions
    );
  }
}
