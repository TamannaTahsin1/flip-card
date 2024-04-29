const FlipCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-3xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img src="../src/valorant.jpg" alt="" />
          </div>
          {/* backside */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">Jane Doe</h1>
              <p className="text-lg">Photographer</p>
              <p className="text-lg">Photographer</p>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
