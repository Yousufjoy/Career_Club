import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // This is not the best way to load show all data we have to use pagination in best way

  const [dataLength, setDataLength] = useState(4);

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
        {jobs.slice(0, dataLength).map((job) => {
          return <Job key={job.id} job={job}></Job>;
        })}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => {
            setDataLength(jobs.length);
          }}
          className="btn btn-primary"
        >
          See All Jobs!
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
