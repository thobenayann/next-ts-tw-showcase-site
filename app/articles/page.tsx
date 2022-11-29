import ArticlesList from "./ArticlesList";

function Articles() {
  return (
    <main>
      {/* This is a little hack because of a TS error from a known bug wich will be fix in the future*/}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ArticlesList />
    </main>
  )
}

export default Articles;