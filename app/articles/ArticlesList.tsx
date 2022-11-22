import Image from "next/image";
import Link from "next/link";
import { ApiResponse, Article } from "typing";

const fetchArticles = async () => {
  const res = await fetch(`${process.env.API_URL}/posts?populate=*`);
  const { data: articles }: ApiResponse = await res.json();
  return articles;
}

async function ArticlesList() {
  const articles: Article[] = await fetchArticles();
  console.log(articles);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Découvrez toute notre actualité</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Au travers de nos récits et témoignages. Vivez les événements marquants de notre quotidien, comme si vous y étiez!</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            articles.map((article) => (
              <div className="p-4 m-4 md:w-1/3" key={article.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl bg-base-200">
                  <div className="w-full h-36 relative">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={article.attributes.image ? article.attributes.image?.data.attributes.url : "https://placeimg.com/720/400/any"}
                      alt="blog"
                      fill
                      objectFit={article.attributes.image?.data.attributes.ext === '.svg' ? 'contain' : 'cover'}
                      objectPosition="center"
                      sizes="(min-width: 66em) 33vw,
                      (min-width: 44em) 50vw,
                      100vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{article.attributes.tag}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{article.attributes.title}</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div className="flex items-center flex-wrap ">
                      <Link key={article.id} href={`/articles/${article.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn more
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default ArticlesList;