// Set a variable that contains all the fields needed for work experiences when a fetch for
// content is performed
const WORK_EXPERIENCES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  description
  date
  company
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for work experiences with a "workExperiences" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["workExperiences"] },
    }
  ).then((response) => response.json());
}

function extractWorkExperiencesEntries(fetchResponse) {
  return fetchResponse?.data?.workExperiencesCollection?.items;
}

export async function getAllWorkExperiences(
  // For this demo set the default limit to always return 3 work experiences.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing work experiences before they are live
  isDraftMode = false
) {
  const workExperiences = await fetchGraphQL(
    `query {
        workExperiencesCollection(order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${WORK_EXPERIENCES_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractWorkExperiencesEntries(workExperiences);
}
