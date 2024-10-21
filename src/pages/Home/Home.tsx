import NewsCard from "../../components/NewsCard/NewsCard";
import { news } from "../../data/news";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
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
          FROGを通して、そんな愛くるしいパートナーたちが織りなす賑やかで温かな{" "}
          <br />
          『雨ノ島』の生活に飛び込み、彼らとの絆を深めてみませんか？
        </p>

        <button className="beta-invite w-[557px] h-[108px] backdrop-blur-30 bg-white/30 rounded-full text-[31px] text-primary tracking-[12px] font-light">
          事前登録はコチラ！
        </button>

        <p className="intro-text my-32 tracking-[15px] text-white text-[25px] font-light leading-[42px]">
          現在、α版の配布を行っておりますが順次β版のご案内を送り致します。
          <br />
          事前予約から、フォームを記入の上もう少々お待ちくださいませ。
        </p>
      </section>

      <section className="block-frog-cover-1">
        <img src="/assets/BlockFrogCover1.png" alt="Cover 1" />
      </section>

      <section className="nft-collection flex flex-col justify-center items-center">
        <img src="/assets/Logo3.png" className="mt-36 mb-40" alt="Logo 3" />

        <img src="/assets/CollectionHeading.png" alt="Collection Heading" />
      </section>

      <section className="block-frog-cover-2">
        <img src="/assets/BlockFrogCover2.png" alt="Cover 2" />
      </section>

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

        <button className="more-news w-[560px] h-28 mt-40 backdrop-blur-30 bg-white/30 rounded-full text-footer leading-footer text-primary">
          もっと見る
        </button>
      </section>
    </main>
  );
};

export default Home;
