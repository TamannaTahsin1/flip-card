import cardImg from "../src/valorant.jpg";

const Card = () => {
  return (
    <div className="w-full  min-h-screen bg-[#090909] grid place-content-center ">
      <div className="w-[350px] h-[590px] bg-transparent cursor-pointer group rounded-3xl">
        <div className="relative w-full h-full duration-500 group-hover:rotate-y-180">
          <div className="w-full h-full absolute rounded-3xl overflow-hidden">
            <img src={cardImg} className="" alt="" />
          </div>
          <div className="bg-opacity-95 absolute w-full h-full bg-[#0F1823] rounded-3xl text-neutral-300 p-10 space-y-5 overflow-hidden">
            <div>
              <span className="font-bold text-3xl">Agent | Killjoy</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold">/ Role</span>
              <span className="text-3xl font-bold">Sentinel</span>
            </div>
            <div className="flex flex-col space-y-5">
    <span className="font-bold"> / Biography</span>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam eos deserunt debitis aliquam perspiciatis.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
