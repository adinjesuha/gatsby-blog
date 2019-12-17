import { graphql, useStaticQuery } from 'gatsby';

const useBlog = () => {
  const result = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            excerpt
            author
            slug
            image
            tags
          }
          id
          body
        }
      }
    }
  `);

  return result.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    tags: post.frontmatter.tags,
    id: post.id,
    body: post.body
  }));
};

export default useBlog;