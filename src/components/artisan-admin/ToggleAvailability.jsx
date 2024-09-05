import React, { useState } from "react";
import { useToggleArtisanAvailability } from "../../services/mutation";
import { Loader2 } from "lucide-react";
import { Switch, Tooltip } from "@radix-ui/themes";

const ToggleAvailability = () => {
  const { mutate, isPending } = useToggleArtisanAvailability();

  const [isAvailable, setIsAvailable] = useState(false);

  const handleAvailability = () => {
    mutate({
      isAvailable: isAvailable,
    });
  };
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
        {isPending ? (
          <span className="text-green-600 hidden md:inline-block">
            Available
          </span>
        ) : (
          <span className="text-red-600 hidden md:inline-block">
            Not Available
          </span>
        )}
      </div>

      <div className="flex md:hidden">
        <Tooltip content={isPending ? "Available" : "Not Available"}>
          <div>
            <Switch
              color="#3498db"
              checked={isPending ? true : false}
              onClick={handleAvailability}
            />
          </div>
        </Tooltip>
      </div>
      <div className="md:flex hidden">
        <Switch
          color="#3498db"
          checked={isPending ? true : false}
          onClick={handleAvailability}
        />
      </div>
    </div>
  );
};

export default ToggleAvailability;
