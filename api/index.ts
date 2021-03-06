export const getJobs = (category, companyName, search, limit) => {
  const categoryStr = category ? '&category=' + category : '';
  const companyNameStr = companyName
    ? '&company_name=' + encodeURIComponent(companyName)
    : '';
  const searchStr = search ? '&search=' + encodeURIComponent(search) : '';
  const limitStr = limit ? '&limit=' + limit : '';
  return fetch(
    'https://remotive.io/api/remote-jobs?' +
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
      const jobs = json.jobs.map((job) => {
        delete Object.assign(job, { ['companyName']: job['company_name'] })[
          'company_name'
        ];
        delete Object.assign(job, { ['jobType']: job['job_type'] })['job_type'];
        job.jobType =
          job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1);
        delete Object.assign(job, {
          ['candidateRequiredLocation']: job['candidate_required_location'],
        })['candidate_required_location'];
        job.candidateRequiredLocation = job.candidateRequiredLocation.trim();
        delete Object.assign(job, {
          ['companyLogoUrl']: job['company_logo_url'],
        })['company_logo_url'];
        delete Object.assign(job, {
          ['publicationDate']: job['publication_date'],
        })['publication_date'];
        return job;
      });
      return jobs;
    })
    .catch((e) => console.error(e));
};
