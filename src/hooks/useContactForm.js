import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContactInfo } from "../features/contactSlice";

const useContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    dispatch(updateContactInfo(formData));
    setFormData({ name: "", email: "", phone: "", message: "" }); 
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
