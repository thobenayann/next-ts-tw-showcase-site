import Image from "next/image";
import { ApiResponse, Article } from "typing";

type ArticleProps = {
  params: {
    articleId: string
  }
}

// Because i'm in a server component
// I need to fetch every element instead of using props as usual
const fetchArticle = async (articleId: string) => {
  const res = await fetch(
    `${process.env.API_URL}/posts/${articleId}?populate=*`,
  );

  const { data: article }: ApiResponse = await res.json();
  return article;
};

async function Article({ params: { articleId } }: ArticleProps) {
  const article: Article = await fetchArticle(articleId);
  console.log(article);
  const dateFormated = new Date(article.attributes.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <article className="px-96 py-20 min-h-[80vh]">
      {
        // Since we have only 2 templates we can use ternary but i will change this in the future
        article.attributes.template.data.attributes.name === 'template-1'
          ? (
            <>
              {/* Title */}
              <h2 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{article.attributes.title}</h2>
              <p className="text-sm md:text-base font-normal text-gray-600">Publié le {dateFormated}</p>

              {/* Article content */}
              {
                article.attributes.Content.map((content) => (
                  <section key={content.id}>
                    <h3 className="prose pt-6 pb-2 font-sans font-bold text-xl ml-10">{content.subtitle}</h3>
                    <p className="py-2 whitespace-pre-line prose lg:prose-lg w-full ml-10">{content.paragraph}</p>
                  </section>
                ))
              }

              {/* Illustration  */}
              <div className="ml-20 py-10">
                <Image
                  alt="article-image"
                  src={article.attributes.image.data.attributes.url}
                  width={150}
                  height={100}
                />
              </div>
            </>
          ) : (
            <>
              {/* Title */}
              <h2 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{article.attributes.title}</h2>
              <p className="text-sm md:text-base font-normal text-gray-600">Publié le {dateFormated}</p>

              {/* Illustration  */}
              <div className="float-left pt-8 mr-10">
                <Image
                  alt="article-image"
                  src={article.attributes.image.data.attributes.url}
                  width={250}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              {/* Article content */}
              {
                article.attributes.Content.map((content) => (
                  <section key={content.id}>
                    <h3 className="prose pt-6 pb-2 font-sans font-bold text-xl ml-10">{content.subtitle}</h3>
                    <p className="py-2 whitespace-pre-line prose lg:prose-lg w-full ml-10">{content.paragraph}</p>
                  </section>
                ))
              }
            </>
          )
      }

    </article >
  )
}

export default Article;