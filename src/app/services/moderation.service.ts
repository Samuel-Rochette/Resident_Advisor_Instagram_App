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
      `https://safe-ridge-39617.herokuapp.com/videos/manage`,
      httpOptions
    );
  }

  getPublic() {
    return this.http.get<Video[]>(
      `https://safe-ridge-39617.herokuapp.com//videos/public`,
      httpOptions
    );
  }

  deleteOne(id: string) {
    return this.http.delete<Video>(
      `https://safe-ridge-39617.herokuapp.com/videos/manageone/${id}`,
      httpOptions
    );
  }

  updateOne(video: Video) {
    return this.http.put<Video>(
      `https://safe-ridge-39617.herokuapp.com/videos/manageone/${video._id}`,
      video,
      httpOptions
    );
  }
}
