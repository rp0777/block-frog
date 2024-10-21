
import { useNavigate } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import { collectionColors } from "../../data/collectionColors";
import { news } from "../../data/news";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home relative">
      <img
        className=" absolute z-[12] top-[165px] right-[1264px]"
        src="/assets/HeroFrogs.png"
        alt="Hero Frogs"
      />

      <img
        className=" absolute z-[15] top-[722px] left-[1520px]"
        src="/assets/FrogStepsGreen.png"
        alt="Frog Steps"
      />

      <img
        className=" absolute z-[15] top-[1960px] right-[1570px]"
        src="/assets/FrogStepsGreen.png"
        alt="Frog Steps"
      />

      <img
        className=" absolute z-[15] top-[4822px] left-[1641px]"
        src="/assets/FrogStepsGreen.png"
        alt="Frog Steps"
      />

      <img
        className=" absolute z-[15] top-[6612px] right-[1620px]"
        src="/assets/FrogStepsGreen.png"
        alt="Frog Steps"
      />
      <section className="hero relative">
        <img
          className=" absolute z-10 top-24 left-72"
          src="/assets/HeroText1.png"
          alt="Hero Text 1"
        />

        <img
          className=" absolute z-10 top-60 right-60"
          src="/assets/Logo1.png"
          alt="Logo 1"
        />

        <img
          className=" absolute z-10 top-[602px] right-[582px]"
          src="/assets/HeroText2.png"
          alt="Hero Text 2"
        />

        <img
          className=" absolute z-10 bottom-[183px] right-[531px]"
          src="/assets/HeroTag.png"
          alt="Hero Tag"
        />

        <img src="/assets/Hero.png" alt="Hero Image" />
      </section>

      <section className="intro mt-12 mb-36 flex flex-col justify-center items-center text-center">
        <p className="heading text-[55px] text-white">#すとーりーらいん</p>

        <p className="intro-text my-32 tracking-[15px] text-white text-[27px] leading-[87px]">
          肥沃な湿地帯と世界随一の降雨量が織りなす神秘の地、『雨ノ島』。
          <br />
          この島では、想像を超える新たなカエルの生態系が広がっています。 <br />
          まるで犬や猫のように大きく育ち、人間のように知恵を巡らせ、時には笑い、時には涙を流す彼ら。
          <br />
          自然と共に息づき、豊かな感情を持つカエルたちは、まさにこの島の魂そのものです。
          <br />
          BLOCK
          FROGを通して、そんな愛くるしいパートナーたちが織りなす賑やかで温かな
          <br />
          『雨ノ島』の生活に飛び込み、彼らとの絆を深めてみませんか？
        </p>

        <button className="beta-invite cursor-pointer relative w-[557px] h-[108px] backdrop-blur-30 bg-white/30 rounded-full text-[31px] text-primary tracking-[12px] font-light">
          事前登録はコチラ！
          <img className=" absolute right-[33px] top-2" src="/assets/FrogStepsYellow.png" alt="Frog Steps Yellow" />
        </button>

        <p className="intro-text mt-32 tracking-[15px] text-white text-[25px] font-light leading-[42px]">
          現在、α版の配布を行っておりますが順次β版のご案内を送り致します。
          <br />
          事前予約から、フォームを記入の上もう少々お待ちくださいませ。
        </p>
      </section>

      <section className="block-frog-cover-1 relative">
        <img className=" absolute top-9 left-9" src="/assets/LogoCover.png" alt="Logo Cover" />

        <img src="/assets/BlockFrogCover1.png" alt="Cover 1" />
      </section>

      <section className="nft-collection flex flex-col justify-center items-center">
        <img src="/assets/Logo3.png" className="mt-36 mb-40" alt="Logo 3" />

        <img src="/assets/CollectionHeading.png" alt="Collection Heading" />

        <p className=" mt-40 mb-28 text-primary text-[40px] tracking-[17px]">
          多彩な技や遊び方を工夫して相手を倒そう！
        </p>

        <img
          className=" mb-40"
          src="/assets/VideoImage.png"
          alt="Video Image"
        />

        <p className=" mb-44 text-primary text-[40px] tracking-[20px] font-light">
          コレクションカードデッキも発売中！
        </p>

        <div className="collection-cards mb-52 flex flex-col justify-center items-center gap-10">
          {collectionColors.map((color: any) => {
            return (
              <div
                key={color.id}
                className=" flex justify-center items-center gap-6"
              >
                {color.images
                  .slice(0, 5)
                  .map((image: string, index: number) => (
                    <img
                      key={index}
                      src={`/assets/${color.title.toLowerCase()}/${image}`}
                      alt={`${color.title} Collection Image`}
                    />
                  ))}
              </div>
            );
          })}
        </div>

        <button className="more-collections cursor-pointer relative w-[560px] h-28 mb-32 backdrop-blur-30 bg-white/30 rounded-full text-footer leading-footer text-primary" onClick={() => navigate("/collections")}>
          詳細はコチラ！
          <img className=" absolute right-[33px] top-2" src="/assets/FrogStepsYellow.png" alt="Frog Steps Yellow" />
        </button>
      </section>

      <section className="block-frog-cover-2 relative">
      <img className=" absolute top-9 left-9" src="/assets/LogoCover.png" alt="Logo Cover" />

        <img src="/assets/BlockFrogCover2.png" alt="Cover 2" />
      </section>w

      <section className="news flex flex-col justify-center items-center mb-44 mt-48">
        <div className="news-title text-primary mb-16">
          <p className="subheading text-[37px]">ニュース</p>

          <p className="heading text-[130px] flex justify-center items-center">
            NEWS <hr className=" w-[60vh] text-primary" />
          </p>
        </div>

        <div className="news-cards grid grid-cols-3 gap-7">
          {news.map((item: any) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              subTitle={item.subTitle}
              description={item.description}
            />
          ))}
        </div>

        <button className="more-news cursor-pointer relative w-[560px] h-28 mt-40 backdrop-blur-30 bg-white/30 rounded-full text-footer leading-footer text-primary">
          もっと見る
          <img className=" absolute right-[33px] top-2" src="/assets/FrogStepsYellow.png" alt="Frog Steps Yellow" />
        </button>
      </section>
    </main>
  );
};

export default Home;
