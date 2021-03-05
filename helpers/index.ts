export const getFilterOptions = (jobs) => {
  const category = [];
  const jobType = [];
  const location = [];

  jobs.forEach((job) => {
    if (job.category && category.indexOf(job.category) === -1) {
      category.push(job.category);
    }
    if (job.jobType && jobType.indexOf(job.jobType) === -1) {
      jobType.push(job.jobType);
    }
    if (
      job.candidateRequiredLocation &&
      location.indexOf(job.candidateRequiredLocation) === -1
    ) {
      location.push(job.candidateRequiredLocation);
    }
  });
  category.sort();
  jobType.sort();
  location.sort();
  console.log('Filter options', category, jobType, location);

  return { category, jobType, location };
};
