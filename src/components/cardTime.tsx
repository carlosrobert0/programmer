interface CardTimeProps {
  quantity: number;
  unity: string;
}

export function CardTime({ quantity, unity }: CardTimeProps) {
  return (
    <div className="bg-[#6C757D] size-[60px] rounded-lg flex flex-col items-center justify-center">
      <p className="text-[28px] text-[#F8F9FA] text-end">{quantity}</p>
      <p className="text-xs text-[#F8F9FA] m-0">{unity}</p>
    </div>
  )
}