import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then((res) => {
      res.json().then((data) => {
        setJobs(data);
      });
    });
  }, []);
  console.log(jobs);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
      </div>
      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
        non!
      </p>
      <div className="grid grid-cols-2 gap-24">
        {jobs.map((job) => {
          return <Job key={job.id} job={job}></Job>;
        })}
      </div>
    </div>
  );
};

export default FeaturedJobs;
