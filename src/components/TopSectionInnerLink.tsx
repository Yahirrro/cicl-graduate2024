"use client";

export const TopSectionInnerLink: React.FC<{
  className?: string;
}> = ({ className }) => {
  const onClickInnerLink = () => {
    const target = document.getElementById("overview");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={className} onClick={onClickInnerLink}>
      ACCESS & OVERVIEW<span>↓</span>
    </button>
  );
};
