import Image from "next/image";
import { notFound } from 'next/navigation';
import { ApiResponse, Article } from "typing";

// by default, this params is true
// we can explode this to dynamicly know if an article exist or not
// and render the article OR the notFound page
export const dynamicParams = true;

type ArticleProps = {
  params: {
    articleId: string
  }
}

// Because i'm in a server component
// I need to fetch every element instead of using props as usual
const fetchArticle = async (articleId: string) => {
  const res = await fetch(
    `${process.env.API_URL}/posts/${articleId}?populate=*`, {
    // To force server-side rendering, use :
    // 'no-cache'
    // To force static-site generation, use :
    // 'force-cache'
    // To use ISR wich allow us to revalidate the cache after a certain time :
    next: { revalidate: 60 }
    // How it works
    // When a request is made to the route that was statically rendered at build time, it will initially show the cached data.
    // Any requests to the route after the initial request and before 60 seconds are also cached and instantaneous.
    // After the 60-second window, the next request will still show the cached (stale) data.
    // Next.js will trigger a regeneration of the data in the background.
    // Once the route generates successfully, Next.js will invalidate the cache and show the updated route. If the background regeneration fails, the old data would still be unaltered.
  });

  const { data: article }: ApiResponse = await res.json();
  return article;
};

async function Article({ params: { articleId } }: ArticleProps) {
  const article: Article = await fetchArticle(articleId);
  // notFound
  if (!article) return notFound();

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

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const { data: articles }: ApiResponse = await res.json();
  return articles.map((article: Article) => ({
    articleId: article.id.toString(),
  }));
}