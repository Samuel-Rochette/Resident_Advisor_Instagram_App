import { Video } from "./video.model";

export interface Event {
  _id: string;
  location: string;
  artists: string[];
  region: string;
  eventNum: string;
  participants: string;
  promoters: string[];
  name: string;
  date: string;
  videos: Video[];
  terms: string[];
  watch: boolean;
}
