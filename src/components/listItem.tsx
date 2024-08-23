interface ListItemProps {
  number: number;
  text: string;
}

export function ListItem({ number, text }: ListItemProps) {
  return (
    <div className="flex gap-2">
      <div className="size-[30px] border border-[#007BFF] rounded-[4px] flex items-center justify-center">
        <p className="text-[#212529] text-[20px]">{number}</p>
      </div>
      <p className="text-[#6C757D] text-[20px]">{text}</p>
    </div>
  )
}