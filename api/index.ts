export const getJobs = (category, companyName, search, limit) => {
  const categoryStr = category ? '?category=' + category : '';
  const companyNameStr = companyName
    ? '?company_name=' + encodeURIComponent(companyName)
    : '';
  const searchStr = search ? '?search=' + encodeURIComponent(search) : '';
  const limitStr = limit ? '?limit=' + limit : '';

  return fetch(
    'https://remotive.io/api/remote-jobs' +
      categoryStr +
      companyNameStr +
      searchStr +
      limitStr,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((json) => {
      return json.jobs;
    })
    .catch((e) => console.error(e));
};

export const getCategories = () => {
  return fetch('https://remotive.io/api/remote-jobs/categories', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((e) => console.error(e));
};
