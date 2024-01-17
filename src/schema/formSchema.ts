import * as yup from "yup";
import { ValidationPattern } from "../constant/validationMessage";

export const personalSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(3, "Min 3 character required")
    .test("name", "Please enter your name.", function (values: any) {
      if (values?.trim().length > 0) {
        return true;
      } else {
        return false;
      }
    }),

  age: yup
    .string()
    .required("Please enter your age or date of birth.")
    .matches(
      ValidationPattern.numberWithDateOnly,
      "Plaese enter valid age or date of birth."
    )
    .test(
      "age",
      "Please enter your age or date of birth.",
      function (values: any) {
        if (values?.trim().length > 0) {
          return true;
        } else {
          return false;
        }
      }
    ),

  sex: yup.string().required("Plese select your sex."),

  mobile: yup
    .string()
    .matches(
      ValidationPattern.mobilePattern,
      "Plaese enter valid indian mobile number."
    ),

  govtIdType: yup.string(),
  govtId: yup.string().when("govtIdType", {
    is: "Aadhar",
    then: (schema) =>
      schema
        .notRequired()
        .matches(
          ValidationPattern.aadharPattern,
          "Please enter valid aadhar number."
        ),
    otherwise: (schema) =>
      schema
        .notRequired()
        .matches(ValidationPattern.panPattern, "Please enter valid govt ID."),
  }),
});

export const addressSchema = yup.object().shape({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
      pincode: yup.string()
      .matches(ValidationPattern.pinCodePattern, 'Plaese enter valid pin code.')
      .optional(),
    //   .when("pincode", (value: any) => {
    //       if (value) {
    //         return yup
    //           .string()
    //           .matches(ValidationPattern.pinCodePattern, 'Plaese enter valid pin code.'),
    //       } else {
    //         return false;
    //       }
    // }),

});
