import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetStep } from "../redux/slices/stepperSlice";
import { RootState } from "../redux/store";
import { addressSchema } from "../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressInfo } from "../redux/slices/userSlice";

const AddressDetails = () => {
  const userData = useSelector((state: RootState) => state.userDetails.personalData);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema),
    mode: "all",
  });

  const submitAddressDetails = (data: any) => {
    const mergeObject = {...data, ...userData}
    console.log("data", data, userData, mergeObject);
    dispatch(resetStep());
    dispatch(addressInfo(mergeObject))
    // Handle form submission logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitAddressDetails)} autoComplete="off">
        <Grid container spacing={2}>
          {/* display='flex' direction='row' */}
          <Grid item xs={6}>
            <TextField
              label=" Address"
              {...register("address")}
              size="small"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="State"
              {...register("state")}
              size="small"
              variant="outlined"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="City"
              {...register("city")}
              size="small"
              variant="outlined"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Country"
              {...register("country")}
              size="small"
              variant="outlined"
              type="text"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Pincode"
              {...register("pincode")}
              size="small"
              variant="outlined"
              type="text"
              fullWidth
            />
            {errors?.pincode && (
              <Typography variant="subtitle2" gutterBottom color="red">
                {errors?.pincode?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} textAlign="right">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AddressDetails;
