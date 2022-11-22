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
  console.log(article);
  return article;
};

async function Article({ params: { articleId } }: ArticleProps) {
  const article: Article = await fetchArticle(articleId);
  const dateFormated = new Date(article.attributes.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <article className="px-96 py-20 min-h-[80vh]">
      {/* Title */}
      <h2 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{article.attributes.title}</h2>
      <p className="text-sm md:text-base font-normal text-gray-600">Publié le {dateFormated}</p>

      {/* Article content */}
      {
        article.attributes.Content.map((content) => (
          <section key={content.id}>
            <h3 className="prose pt-6 pb-2 font-sans font-bold text-xl ml-10">{content.subtitle}</h3>
            <p className="py-2 whitespace-pre-line prose lg:prose-lg w-full m-auto">{content.paragraph}</p>
          </section>
        ))
      }
    </article>
  )
}

export default Article;