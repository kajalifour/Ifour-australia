"use client"

import React from "react";
import HireDetailsArea from "@/components/hire/HireDetailsArea";

type Props = React.ComponentProps<typeof HireDetailsArea>;

// Wrapper to keep Technologies separated from Hire while reusing the same layout/sections
const TechnologyDetailsArea: React.FC<Props> = (props) => {
    return <HireDetailsArea {...props} />;
};

export default TechnologyDetailsArea;


