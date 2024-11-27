const Stack = () => {
  const skillSet = [
    "Wireframing",
    "Interviews",
    "User testing",
    "Figma",
    ...Array(10).fill("Empathy mapping"),
  ];
  return (
    <div className="p-4 shadow mx-auto w-[90%] sm:w-[310px]">
      <div className="">
        <h2 className="text-[#333333] text-[13px]">Stack</h2>
        <h2 className="text-lg font-[700] text-[#FBA04B] mb-2">UI/UX</h2>
      </div>
      <hr className=" mb-4" />
      <ul className="grid gap-[16px]">
        {skillSet.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;
