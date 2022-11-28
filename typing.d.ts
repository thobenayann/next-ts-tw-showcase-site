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
    image: {
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

export type Product = {
  id: number,
  attributes: {
    label: string,
    short_description: string,
    detail: string,
    price: number,
    discount: number,
    isNew: boolean,
    slug: string,
    publishedAt: Date,
    image: {
      data: {
        id: number,
        attributes: {
          ext: string,
          url: string,
          alternativeText: string,
          width: number,
          height: number,
        }
      }
    }
    product_category: {
      data: {
        id: number,
        attributes: {
          label: string,
          description: string,
          slug: string,
          publishedAt: Date,
          icon_source: string,
        }
      }
    }
  }
}

export type ProductCategory = {
  id: number,
  attributes: {
    label: string,
    description: string,
    slug: string,
    icon: {
      data: {
        id: number,
        attributes: {
          url: string,
          alternativeText: string,
          width: number,
          height: number,
        }
      }
    }
    products: {
      data: Product[]
    }
  },
}
