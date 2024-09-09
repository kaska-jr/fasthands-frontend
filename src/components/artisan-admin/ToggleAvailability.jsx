import React, { useState } from "react";
import { useToggleArtisanAvailability } from "../../services/mutation";
import { Loader2 } from "lucide-react";
import { Switch, Tooltip } from "@radix-ui/themes";
import { useEffect } from "react";
import { useGetArtisanAvailability } from "../../services/queries";

const ToggleAvailability = () => {
  const { mutate, isPending } = useToggleArtisanAvailability();

  const { data: availabilityData } = useGetArtisanAvailability();

  const db_availability = availabilityData?.data?.is_available;

  const [isAvailable, setIsAvailable] = useState(db_availability);

  useEffect(() => {
    if (availabilityData) {
      setIsAvailable(availabilityData?.data?.is_available);
    }
  }, [availabilityData]);

  const handleAvailability = () => {
    mutate({
      is_available: !isAvailable,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
        {isAvailable ? (
          <span className="text-green-600 hidden md:inline-block">
            Available
          </span>
        ) : (
          <span className="text-red-600 hidden md:inline-block">
            Not Available
          </span>
        )}
      </div>

      <Tooltip content={isAvailable ? "Available" : "Not Available"}>
        <div>
          <Switch
            color="#3498db"
            checked={isAvailable ? true : false}
            onClick={handleAvailability}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default ToggleAvailability;
