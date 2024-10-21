import { collectionColors } from "../../data/collectionColors";

const Collections = () => {
  return (
    <div className="collections flex flex-col justify-center items-center">
      <section className=" navigation mb-36 flex flex-col justify-center items-center">
        <p className="title mt-[245px] text-white text-[31px]">
          カード全種一覧
        </p>

        <div className="nav-buttons flex justify-center items-center gap-2">
          <button className="all py-3 px-6 text-black text-[17px] bg-primary">
            全部
          </button>

          {collectionColors.map((color: any) => (
            <button
              key={color.id}
              className="color-button p-4 text-white text-[17px] bg-white/5"
            >
              {color.japaneseTitle}
            </button>
          ))}
        </div>
      </section>

      <section className="color-collections mb-32 flex flex-col justify-center items-center gap-40">
        {collectionColors.map((color: any) => (
          <div key={color.id} className="color-container flex flex-col justify-center items-center">
            <p
              style={{ color: color.titleColor }}
              className={`title w-full text-[65px] mb-16 tracking-wider text-start font-extrabold`}
            >
              {color.title}
            </p>

            <div className="image-container grid grid-cols-5 gap-[23px]">
              {color.images.map((item: any) => (
                <img
                  src={`/assets/${color.title.toLowerCase()}/${item}`}
                  alt="Card Image"
                />
              ))}
            </div>

            <button className="more-nfts mt-28 px-32 py-7 cursor-pointer text-[30px] rounded-full text-white backdrop-blur-30 bg-white/30">もっと見る</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Collections;
