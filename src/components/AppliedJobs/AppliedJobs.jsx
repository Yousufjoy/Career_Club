import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData;
  useEffect(() => {
    const storedJobIDs = getStoredJobApplication();
  }, []);
  return <div></div>;
};

export default AppliedJobs;
