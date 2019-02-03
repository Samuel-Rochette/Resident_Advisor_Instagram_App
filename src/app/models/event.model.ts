import { Video } from "./video.model";

export interface Event {
  _id: string;
  location: string;
  artists: string[];
  region: string;
  termName: string;
  termUrl: string;
  eventNum: string;
  participants: string;
  promoters: string[];
  name: string;
  videos: Video[];
}
