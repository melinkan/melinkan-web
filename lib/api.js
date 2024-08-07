const WORK_EXPERIENCES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  description
  date
  company
`;

const WHAT_I_DO_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  description
`;

const HEADER_HOME_GRAPHQL_FIELDS = `
  sys {
    id
  }
  greeting
  title
  image {
    url
    title
    description
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["workExperiences", "whatIDo", "headerHome"] },
    }
  ).then((response) => response.json());
}

function extractWorkExperiencesEntries(fetchResponse) {
  return fetchResponse?.data?.workExperiencesCollection?.items;
}

function extractWhatIDoEntries(fetchResponse) {
  return fetchResponse?.data?.whatIDoCollection?.items;
}

function extractHeaderHomeEntries(fetchResponse) {
  return fetchResponse?.data?.headerHomeCollection?.items;
}

export async function getAllWorkExperiences(isDraftMode = false) {
  const workExperiences = await fetchGraphQL(
    `query {
        workExperiencesCollection(order: date_DESC, preview: ${
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

export async function getAllWhatIDo(isDraftMode = false) {
  const whatIDo = await fetchGraphQL(
    `query {
        whatIDoCollection(order: title_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${WHAT_I_DO_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractWhatIDoEntries(whatIDo);
}

export async function getAllHeaderHome(isDraftMode = false) {
  const headerHome = await fetchGraphQL(
    `query {
        headerHomeCollection(order: title_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${HEADER_HOME_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );

  return extractHeaderHomeEntries(headerHome);
}
