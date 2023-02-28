import styles from "../../styles/index";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <div
    className={`relative ${
      active === id ? 'lg:flex-[6.5] flex-[10]' : 'lg:flex[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[10px] rounded-[24px] glassmorphism`}>
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Enter the Metaverse
        </p>
      </div>
    )}
  </div>
);

export default ExploreCard;
