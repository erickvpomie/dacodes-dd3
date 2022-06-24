import React from 'react'

type Props = {
  children: any;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="bg-[#8f7a66] rounded-[8px] p-2 text-[16px] font-bold text-[#f9f6f2]" onClick={onClick}>
      {children}
    </button>
  )
}
