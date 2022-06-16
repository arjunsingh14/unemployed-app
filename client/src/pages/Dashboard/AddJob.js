import React from "react";
import { FormRow, Alert, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}, ${value}`);
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation){
        displayAlert();
        return
    }
    if (isEditing){
        editJob();
        return
    }
    createJob();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit job" : "Add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleInput}
          ></FormRow>
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleInput}
          ></FormRow>
          <FormRow
            type="text"
            label="Job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleInput}
          ></FormRow>
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleInput}
            list={statusOptions}
          ></FormRowSelect>
          <FormRowSelect
            name="jobTypr"
            label="Job type"
            value={jobType}
            handleChange={handleInput}
            list={jobTypeOptions}
          ></FormRowSelect>
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >Clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
