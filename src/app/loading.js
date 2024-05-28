import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image  src="loading.svg" alt="loading..." height={100} width={100} />
    </div>
  );
};

export default loading;
