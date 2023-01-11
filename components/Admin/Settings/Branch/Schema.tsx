import * as yup from "yup";
export const schema = yup.object().shape({
    name: yup.string().required("Required!"),
    description: yup.string().required("Required!"),
    location: yup.string().required("Required!").min(6, "Must be 6 Character"),
});
