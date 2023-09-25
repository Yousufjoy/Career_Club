// Age store ase naki check kora jodi thake tahole dekhabo!

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  //Local storage e shey string chara save korte pare na!!

  const storedJobApplications = getStoredJobApplication();

  const exists = storedJobApplications.find((jobId) => jobId == id);

  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { saveJobApplication, getStoredJobApplication };
