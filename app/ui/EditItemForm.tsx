"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from "@nextui-org/react";
import { Key, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { editItem } from "../lib/actions";
import { Item } from "../lib/types";

type Props = Pick<Item, "id" | "name" | "serialNumber" | "type">;

export function EditItemForm({ id, name, serialNumber, type }: Props) {
  const initialState = { errors: {}, message: null };
  const editItemWithId = editItem.bind(null, id);
  const [state, dispatch] = useFormState(editItemWithId, initialState);

  const [typeInputValue, setTypeInputValue] = useState<Key>(type.toLowerCase());

  return (
    <div className="mx-auto max-w-screen-sm px-4">
      <form action={dispatch} className="flex flex-col gap-6 pt-4">
        <h1 className="text-3xl font-bold">Edit Item</h1>
        <Input
          defaultValue={name}
          errorMessage={state.errors?.name}
          isRequired
          label="Name"
          name="name"
          type="text"
        />
        <Input
          defaultValue={serialNumber}
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
          defaultSelectedKey={type.toLowerCase()}
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
      Edit Invoice
    </Button>
  );
};
