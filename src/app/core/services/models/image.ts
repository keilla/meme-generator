export class Image {
  id: number;
  name: string;
  url: string;

  constructor(params) {
    this.id = params.imageID;
    this.name = params.displayName;
    this.url = params.imageUrl;
  }
}
