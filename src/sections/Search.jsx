const Search = () => {
  return (
    <>
      <div className="w-[216px] h-[38px]">
        <div
          className="w-[216px] h-[38px] absolute left-[1128.5px] top-[39.5px] rounded-xl bg-white"
          style={{ boxShadow: "0px 10px 60px 0 rgba(226,236,249,0.5)" }}
        />
        <p className="absolute left-[1169px] top-[50px] text-sm text-left text-[#b5b7c0]">
          Search
        </p>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 absolute left-[1137px] top-[47px]"
          preserveAspectRatio="none"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#7E7E7E"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="#7E7E7E"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      ;
    </>
  );
};

export default Search;
