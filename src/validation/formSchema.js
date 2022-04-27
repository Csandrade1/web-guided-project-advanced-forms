// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required ya jerk!")
    .min(3, "C'mon, chump, gotta have 3 characters here!"),
  email: yup
    .string()
    .email("Gotta use a valid email address, whattuh you on? aol")
    .required("Email is required!!"),
  role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "Role is required bud!"),
  civil: yup
    .string()
    .oneOf(["married", "single"], "Who do you think you are? You're either married or single kid!"),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;