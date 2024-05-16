function Intro({ handleAnimationEnd }) {
  return (
    <div className="flex min-h-[842px] min-w-[1080px] justify-center items-center bg-dark-violet overflow-x-hidden">
      <div className="absolute text-white font-satisfy text-intro">
        VibeVault
      </div>

      <div
        className="relative bg-dark-violet w-[956px] h-[270px] top-0 left-0 animate-drawErase"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}

export default Intro;
