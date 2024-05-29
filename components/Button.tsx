import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_dark_green_outline"
    | "btn_green"
    | "btn_white_text"
    | "btn_white";
  className?: string;
};

export default function Button({
  type = "button",
  title,
  icon,
  variant,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`flexCenter gap-3 rounded-full border ${variant} ${className}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </button>
  );
}
