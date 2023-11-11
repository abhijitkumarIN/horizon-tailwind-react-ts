const FreeCard = () => {
  return (
    <div className="relative mt-14 flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
   

      <div className="mt-16 flex h-fit flex-col items-center">
        <p className="text-3xl font-bold text-white">Krish-Mart</p>
        <p className="mt-1 px-4 text-center text-sm text-white">
        </p>

        <a
          target="blank"
          className="text-medium mt-7 block rounded-full bg-gradient-to-b from-white/50 to-white/10 py-[12px] px-11 text-center text-base text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          href="Krish-Mart"
        >
          Krish-Mart
        </a>
      </div>
    </div>
  );
};

export default FreeCard;
