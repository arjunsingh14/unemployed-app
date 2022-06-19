import React, {useEffect} from 'react'
import { useAppContext } from '../context/appContext'
import Loading from './Loading'
import Job from './Job'
import PageBtnContainer from './PageBtnContainer'
import Wrapper from '../assets/wrappers/JobsContainer'
const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    numOfPages,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
  } = useAppContext();
 
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, sort, searchType]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs saved</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer