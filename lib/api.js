const GRAPHQL_FIELDS = {
  WORK_EXPERIENCES: `
    sys {
      id
    }
    title
    description
    date
    company
  `,
  WHAT_I_DO: `
    sys {
      id
    }
    title
    description
  `,
  HEADER_HOME: `
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
  `,
};

async function fetchGraphQL(query, preview = false) {
  try {
    const response = await fetch(
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
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GraphQL data:", error);
    throw error; // Hatanın üst katmana iletilmesi
  }
}

function extractEntries(fetchResponse, collectionName) {
  return fetchResponse?.data?.[collectionName]?.items;
}

export async function getAllWorkExperiences(isDraftMode = false) {
  const workExperiences = await fetchGraphQL(
    `query {
        workExperiencesCollection(order: date_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${GRAPHQL_FIELDS.WORK_EXPERIENCES}
          }
        }
      }`,
    isDraftMode
  );
  return extractEntries(workExperiences, "workExperiencesCollection");
}

export async function getAllWhatIDo(isDraftMode = false) {
  const whatIDo = await fetchGraphQL(
    `query {
        whatIDoCollection(order: title_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${GRAPHQL_FIELDS.WHAT_I_DO}
          }
        }
      }`,
    isDraftMode
  );
  return extractEntries(whatIDo, "whatIDoCollection");
}

export async function getAllHeaderHome(isDraftMode = false) {
  const headerHome = await fetchGraphQL(
    `query {
        headerHomeCollection(order: title_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${GRAPHQL_FIELDS.HEADER_HOME}
          }
        }
      }`,
    isDraftMode
  );

  return extractEntries(headerHome, "headerHomeCollection");
}
