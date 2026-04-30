"use client";

import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";

export default function Availability() {
  const form = useForm({
    defaultValues: {
      avilable_start_time: "",
      avilable_end_time: "",
    },
    onSubmit: async ({ value }) => {},
  });
  return (
    <div className="w-2xl mx-auto">
      <Card className="p-5">
        <h4 className="text-center text-xl font-semibold">
          Update Availablity
        </h4>
        <div className="flex items-center space-x-2">
          <form
            id="availablity_form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="start"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Start Time</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  );
                }}
              />
              <form.Field
                name="end"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>End Time</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </div>
      </Card>
    </div>
  );
}
