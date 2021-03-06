import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Video } from "../models/video.model";
import { config } from "../config";

const baseURL = config.baseURL;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  updateOne(id: string, update: object) {
    return this.http.put<Video>(
      `${baseURL}/videos/manage/${id}`,
      update,
      httpOptions
    );
  }

  deleteOne(id: string) {
    return this.http.delete<Video>(
      `${baseURL}/videos/manage/${id}`,
      httpOptions
    );
  }
}
