class Image {
  constructor({ 
    id,
    caption = '',
    path,
    gps = {}
   } = {}) {
      this.id = id;
      this.type = 'image';
      this.path = path;
      this.caption = caption;
      this.gps = gps;
  }
}

export default Image