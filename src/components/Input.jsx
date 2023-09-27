import { memo } from "react";

const Input = ({
  nameLabel,
  name,
  placeholder,
  value,
  setValue,
  type,
}) => {
  return (
    <label>
      <span className="block text-md font-mono ml-3 font-medium text-slate-300">
        {nameLabel}
      </span>
      <input
        className="h-8 p-5 mt-2 w-full border border-gray-200 bg-slate-500 rounded-xl outline-none text-white  "
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
    </label>
  );
};

export default memo(Input);
