export default function FormHeader({ title, subtitle }) {
  return (
    <>
      <h1 className="text-[34px] lg:text-[40px] font-semibold mb-2">{title}</h1>
      <p className="text-sm lg:text-base text-[#636364] mb-10">{subtitle}</p>
    </>
  );
}
