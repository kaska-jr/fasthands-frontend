import {
  Badge,
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import { BookmarkIcon, CalendarIcon, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { formatPriceInNaira } from "../../../../lib/helpers";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useCreateBooking } from "../../../../services/mutation";

const Service = ({ service, artisanId }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const {
    mutate: createBooking,
    isPending: isBookingPending,
    isSuccess,
  } = useCreateBooking(artisanId);

  const handleBooking = () => {
    const formattedStartDate = startDate.toISOString().replace(/\.000Z$/, "Z");
    createBooking({
      service: service?.service_name,
      booking_date: formattedStartDate,
      status: "pending",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);

  return (
    <Box className="w-full h-full">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>

        <Strong as="h1" size="3">
          {service?.service_name}
        </Strong>
        <Text as="p" size="3">
          {service?.description}
        </Text>
        <div className="flex items-end justify-between my-3">
          <Badge color="green">{formatPriceInNaira(service?.price)}</Badge>
          <Dialog.Root
            open={open}
            onOpenChange={setOpen}
            className="overflow-visible"
          >
            <Dialog.Trigger>
              <button className="hover:stroke-white cursor-pointer stroke-[#3498db] border border-skyBlue900 bg-white hover:bg-skyBlue900 hover:text-white w-fit px-3 rounded-md h-8 flex justify-center items-center">
                <BookmarkIcon className="w-4 h-4" /> Book
              </button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Book this Service</Dialog.Title>
              <Dialog.Title size="2" mb="4">
                Service Name:
                <span className="font-normal px-2">
                  {service?.service_name}
                </span>
              </Dialog.Title>

              <Dialog.Title size="2" mb="4">
                Service Description:
                <span className="font-normal px-2">{service?.description}</span>
              </Dialog.Title>

              <Dialog.Title size="2" mb="4">
                Service Price:
                <span className="font-normal px-2">
                  {formatPriceInNaira(service?.price)}
                </span>
              </Dialog.Title>

              <Dialog.Title size="2" mb="4">
                Booking Date: dd/mm/yyyy
                <span className="font-normal border rounded-md flex items-center gap-3 w-fit py-2 px-2 mt-2">
                  <CalendarIcon className="w-4 h-4 text-skyBlue900" />
                  <DatePicker
                    selected={startDate}
                    isClearable
                    iconPosition="left"
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Select Booking date"
                    className="w-full focus-within:outline-none focus-within:first-letter:outline-none focus-within:bg-[#F5F5F5] bg-[#F5F5F5] h-10 rounded-md p-3 text-black"
                  />
                </span>
              </Dialog.Title>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>

                <Button
                  className="bg-skyBlue900 text-white flex items-center"
                  onClick={handleBooking}
                >
                  {isBookingPending && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  Confirm Booking
                </Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </Card>
    </Box>
  );
};

export default Service;
