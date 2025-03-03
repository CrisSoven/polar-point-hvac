import { useState, useEffect } from "react";

const useFormattedPhoneNumber = (phoneNumber) => {
  const [formattedPhone, setFormattedPhone] = useState("");

  useEffect(() => {
    const formatPhoneNumber = (phone) => {
      const match = phone.match(/^\+1(\d{3})(\d{3})(\d{4})$/);
      return match ? `+1 (${match[1]}) ${match[2]}-${match[3]}` : phone;
    };

    setFormattedPhone(formatPhoneNumber(phoneNumber));
  }, [phoneNumber]);

  return formattedPhone;
};

export default useFormattedPhoneNumber;
