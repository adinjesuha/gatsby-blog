exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: { id: post.id },
    });
  });
};