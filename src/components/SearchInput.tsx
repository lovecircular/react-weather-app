import type { SetStateAction } from "react";

export type SearchInputProps = {
  value: string;
  setValue: (newValue: SetStateAction<string>) => void;
};

export default function SearchInput({ value, setValue }: SearchInputProps) {
  return (
    <input
      type="search"
      aria-label="Search for a city"
      placeholder="London"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
