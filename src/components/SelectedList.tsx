
import type { Service } from "../shared/types";

import React from "react";

type Props = {
    selectedServices: Service[];
  };
const SelectedList = ({selectedServices}: Props) =>{
    return(
        selectedServices.map((service) => (
            <div key={service.id} className="summary-item">
              <span>{service.title}</span>
              <span>{service.price} ₽</span>
            </div>
          ))
    )
}

export default React.memo(SelectedList)