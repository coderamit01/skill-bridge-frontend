"use client";

import { useForm } from "@tanstack/react-form";
import { useState, useTransition } from "react";
import { FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IAvailabilityPayload } from "@/types/availability.types";
import { createAvailability } from "@/services/availabilityservice";
import { toast } from "sonner";
import * as z from "zod";

const availabilitySchema = z
  .object({
    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
  })
  .refine(
    (data) => {
      const startDateTime = new Date(`${data.date}T${data.startTime}`);
      return startDateTime > new Date();
    },
    { message: "Availability cannot be in the past" },
  )
  .refine(
    (data) => {
      const start = new Date(`${data.date}T${data.startTime}`);
      const end = new Date(`${data.date}T${data.endTime}`);
      return start < end;
    },
    {
      message: "End time must be after start time",
    },
  );

const AvailabilityForm = () => {
  const [isPending, starTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      date: "",
      startTime: "",
      endTime: "",
    },
    validators: {
      onSubmit: ({ value }) => {
        const result = availabilitySchema.safeParse(value);
        if (!result.success) {
          return result.error.message;
        }
        return null;
      },
    },
    onSubmitInvalid: () => {
      const errors = form.state.errors;
      console.log(errors);
      if (errors && typeof errors === "object") {
        const allErr = Object.values(errors).flat().filter(Boolean);
        console.log(allErr[0]);
      }
    },
    onSubmit: async ({ value }) => {
      starTransition(async () => {
        try {
          const start = new Date(`${value.date}T${value.startTime}:00.000Z`);
          const end = new Date(`${value.date}T${value.endTime}:00.000Z`);

          const result = await createAvailability({
            startTime: start,
            endTime: end,
          });
          console.log(result);
          if (result.success) {
            toast.success("Availability created successfuly", {
              position: "top-right",
            });
          }
        } catch (error: any) {
          toast.error(error.message || "Failed to create availability", {
            position: "top-right",
          });
        }
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <form.Field name="date">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div>
                <FieldLabel className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </FieldLabel>
                <Input
                  type="date"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </div>
            );
          }}
        </form.Field>

        <form.Field name="startTime">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div>
                <FieldLabel className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </FieldLabel>
                <Input
                  type="time"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </div>
            );
          }}
        </form.Field>

        <form.Field name="endTime">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <div>
                <FieldLabel className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </FieldLabel>
                <Input
                  type="time"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </div>
            );
          }}
        </form.Field>
        <form.Subscribe selector={(a) => a.isSubmitting}>
          {(isSubmitting) => (
            <Button
              type="submit"
              disabled={isSubmitting || isPending}
              className="w-full bg-brand hover:bg-brand-dark text-white cursor-pointer"
            >
              {isPending || isSubmitting
                ? "Creating..."
                : "Create Availability"}
            </Button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
};
export default AvailabilityForm;
