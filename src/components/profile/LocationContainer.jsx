import React from "react";

const LocationContainer = () => {
  return (
    <div className="w-[100%] h-[67%] flex flex-col items-center justify-center lg:mt-8">
      <p className="text-black md:text-lg text-xs font-semibold">
        LearnFactory office beside MTN office, Aba-Owerri Road
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127159.85468831066!2d7.239401765913729!3d5.14462320229938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042999cbb6c332f%3A0x2ff04a6aa0a2a5d2!2sMTN%20Service%20Center%20Aba!5e0!3m2!1sen!2sng!4v1706104530573!5m2!1sen!2sng"
        width="1100"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="md:h-[90%]"
      ></iframe>
    </div>
  );
};

export default LocationContainer;
