class Paragraph {
  constructor({ 
    id,
    content,
   } = {}) {
      this.id = id;
      this.content = content;
      this.type = 'paragraph';
  }
}

export default Paragraph