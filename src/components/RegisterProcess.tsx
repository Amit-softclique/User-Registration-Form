import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/stepperSlice";
import { RootState } from "../redux/store";
import AddressDetails from "./AddressDetails";
import PersonalDetails from "./PersonalDetails";

const steps = ["Add Personal Details", "Add Address Details"];

const data = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 30 },
  // Add more data as needed
];

const columns = [
  { name: "ID", selector: "id", sortable: true },
  { name: "Name", selector: "name", sortable: true },
  { name: "Age", selector: "age", sortable: true },
  // Add more columns as needed
];

const RegisterProcess = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(count);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [userInfo, setUserInfo] = useState<any>([]);

  const allData = useSelector(
    (state: RootState) => state.userDetails.addressData
  );



  useEffect(() => {
    console.log("count from process", allData);
    if (Object.keys(allData).length) {
      setUserInfo((prev: any) => [...prev, allData]);
      // userInfo.push(allData)
    }
  }, [allData]);
  console.log("allUser", userInfo);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);

    dispatch(increment());
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={count}>
          {steps.map((label: any, index: number) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {count === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {count === 0 && (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {count + 1}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <PersonalDetails />
                  <Box sx={{ flex: "1 1 auto" }} />
                </Box>
              </>
            )}

            {count === 1 && (
              <>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {count + 1}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <AddressDetails />
                  <Box sx={{ flex: "1 1 auto" }} />
                </Box>
              </>
            )}

          </React.Fragment>
        )}
      </Box>
    </>
  );
};

export default RegisterProcess;
