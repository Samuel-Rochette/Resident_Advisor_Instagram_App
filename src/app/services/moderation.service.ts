import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Video } from "../models/video.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class ModerationService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Video[]>(
      `http://localhost:3000/videos/manage`,
      httpOptions
    );
  }

  getPublic() {
    return this.http.get<Video[]>(
      `http://localhost:3000/videos/public`,
      httpOptions
    );
  }

  deleteOne(id: string) {
    return this.http.delete<Video>(
      `http://localhost:3000/videos/manageone/${id}`,
      httpOptions
    );
  }

  updateOne(video: Video) {
    return this.http.put<Video>(
      `http://localhost:3000/videos/manageone/${video._id}`,
      video,
      httpOptions
    );
  }
}
