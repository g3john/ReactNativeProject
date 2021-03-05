export const getFilterOptions = (jobs) => {
  const categoryMap = new Map();
  const jobTypeMap = new Map();
  const locationMap = new Map();

  jobs.forEach((job) => {
    if (job.category) {
      categoryMap.set(job.category, job.category);
    }
    if (job.jobType) {
      const replaced = job.jobType.replace('_', ' ');
      jobTypeMap.set(replaced, replaced);
    }
    if (job.candidateRequiredLocation) {
      locationMap.set(
        job.candidateRequiredLocation,
        job.candidateRequiredLocation,
      );
    }
  });
  const category = Array.from(categoryMap, ([key, value]) => ({
    item: key,
    id: value,
  }));
  const jobType = Array.from(jobTypeMap, ([key, value]) => ({
    item: key,
    id: value,
  }));
  const location = Array.from(locationMap, ([key, value]) => ({
    item: key,
    id: value,
  }));

  category.sort((a, b) => {
    return a.item < b.item ? -1 : 1;
  });
  // category.unshift({ item: ' ', id: 'none' });
  jobType.sort((a, b) => {
    return a.item < b.item ? -1 : 1;
  });
  // jobType.unshift({ item: ' ', id: 'none' });
  location.sort((a, b) => {
    return a.item < b.item ? -1 : 1;
  });
  return { category, jobType, location };
};
