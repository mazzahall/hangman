interface HangmanDrawProps {
  attempt: number;
}

const HangmanHead = () => {
  return (
    <div className="absolute -right-6 top-10 h-15 w-15 rounded-full border-6 border-black"></div>
  );
};

const HangmanBody = () => {
  return (
    <div className="absolute right-0 top-25 h-32 w-2 bg-black"></div>
  );
};

const RightArm = () => {
  return (
    <div className="absolute -right-20 top-32 h-2 w-20 origin-left -rotate-30 bg-black"></div>
  );
};

const LeftArm = () => {
  return (
    <div className="absolute right-2 top-32 h-2 w-20 origin-right rotate-30 bg-black"></div>
  );
};

const RightLeg = () => {
  return (
    <div className="absolute -right-20 top-55 h-2 w-20 origin-left rotate-60 bg-black"></div>
  );
};

const LeftLeg = () => {
  return (
    <div className="absolute right-2 top-55 h-2 w-20 origin-right -rotate-60 bg-black"></div>
  );
};

const hangmanFullBody = [
  HangmanHead,
  HangmanBody,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
];

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <section className="relative">
      {hangmanFullBody.slice(0, attempt).map((Component, index) => (
        <Component key={index} />
      ))}

      <div className="absolute right-0 h-10 w-2 bg-black"></div>

      <div className="ml-32 h-2 w-40 bg-black"></div>

      <div className="ml-32 h-129 w-2 bg-black"></div>

      <div className="h-2 w-64 bg-black"></div>
    </section>
  );
}

export default HangmanDraw;