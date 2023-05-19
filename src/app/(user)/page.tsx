import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'



const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 60

export default async function Home() {

  if(previewData()) {
    return (<PreviewSuspense fallback={
      <div role="status">
        <p className="text-center text-lg animate-pulse text-primary-color">
          Loading Preview Data...
        </p>
      </div>
    }>
      <PreviewBlogList query={query} />
    </PreviewSuspense>
  )}
  const posts = await client.fetch(query)
  // console.log(posts);
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}
