"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { Key, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createItem } from "../lib/actions";

export function CreateItemForm() {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createItem, initialState);

  const [typeInputValue, setTypeInputValue] = useState<Key>("");

  return (
    <div className="mx-auto max-w-screen-sm px-4">
      <form action={dispatch} className="flex flex-col gap-6 pt-4">
        <h1 className="text-3xl font-bold">Create Item</h1>
        <Input
          errorMessage={state.errors?.name}
          isRequired
          label="Name"
          name="name"
          type="text"
        />
        <Input
          errorMessage={state.errors?.serialNumber}
          label="Serial number"
          name="serialNumber"
          type="text"
        />
        <Autocomplete
          defaultItems={[
            { label: "Laptop", value: "laptop" },
            { label: "Book", value: "book" },
            { label: "Misc", value: "misc" },
          ]}
          errorMessage={state.errors?.type}
          label="Type"
          onSelectionChange={setTypeInputValue}
        >
          {item => (
            <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
        <input
          className="hidden"
          name="type"
          readOnly
          value={typeInputValue?.toString() ?? ""}
        />
        <div>
          <SubmitButton />
          {state.message ? (
            <p className="p-1 text-xs text-danger">{state.message}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button fullWidth isLoading={pending} type="submit">
      Create Invoice
    </Button>
  );
};
