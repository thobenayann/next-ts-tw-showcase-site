export type ApiResponse = {
  data: Array;
  meta: object;
}

export type Article = {
  id: number;
  attributes: {
    title: string;
    tag: string;
    publishedAt: Date;
    locale: string;
    image?: {
      data: {
        id: number,
        attributes: {
          ext: string,
          url: string
        }
      }
    };
    Content: [
      {
        id: number,
        subtitle: string,
        paragraph: string,
        image?: object
      }
    ];
    template: {
      data: {
        id: number,
        attributes: {
          name: string
        }
      }
    }
  }
}
