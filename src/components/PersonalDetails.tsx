import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/stepperSlice";
import { RootState } from "../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalSchema } from "../schema/formSchema";
import { personalInfo } from "../redux/slices/userSlice";

const PersonalDetails = () => {
  // const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
    mode: "all",
  });

  const submitPersonalDetails = (data: any) => {
    console.log("data", data);
    dispatch(increment());
    dispatch(personalInfo(data));
    // Handle form submission logic here
  };


  return (
    <>
      <form onSubmit={handleSubmit(submitPersonalDetails)} autoComplete="off">
        <Grid container spacing={2}>
          {/* display='flex' direction='row' */}
          <Grid item xs={6}>
            {/* <Typography maxWidth={400}>Name</Typography> */}
            <TextField
              label="Name *"
              {...register("name", { required: true })}
              size="small"
              placeholder="Enter Name"
              variant="outlined"
              fullWidth
            />

            {errors?.name && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.name?.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date of Birth or Age *"
              placeholder="dd/mm/yyyy or Age in years"
              {...register("age", { required: true })}
              size="small"
              variant="outlined"
              type="text"
              fullWidth
            />

            {errors?.age && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.age?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={6}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small-label">Sex *</InputLabel>
              <Select
                {...register("sex", { required: true })}
                labelId="demo-select-small-label"
                id="demo-select-small"
                placeholder="Enter Sex"
                // value={sex}
                input={<OutlinedInput label="Sex *" />}
                // onChange={handleSex}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            {errors?.sex && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.sex?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Mobile"
              {...register("mobile")}
              size="small"
              placeholder="Enter mobile"
              variant="outlined"
              type="tel"
              fullWidth
            />
            {errors?.mobile && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.mobile?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={6}>
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small-label">
                Govt Issued ID Type
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                {...register("govtIdType")}
                id="demo-select-small"
                placeholder="Enter ID Type"
                // value={sex}
                input={<OutlinedInput label="Govt Issued ID Type" />}
                // onChange={handleSex}
              >
                <MenuItem value={"Aadhar"}>Aadhar</MenuItem>
                <MenuItem value={"Pan"}>Pan</MenuItem>
              </Select>
            </FormControl>
            {errors?.govtIdType && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.govtIdType?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Govt Issued Id"
              {...register("govtId")}
              size="small"
              placeholder="Enter ID"
              variant="outlined"
              type="text"
              fullWidth
            />
            {errors?.govtId && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.govtId?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} textAlign="right">
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PersonalDetails;
