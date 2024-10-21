interface NewsCardPropTypes {
  title: string;
  date: string;
  subTitle: string;
  description: string;
}

const NewsCard = ({
  title,
  date,
  subTitle,
  description,
}: NewsCardPropTypes) => {
  return (
    <div className="news-card w-[500px] h-[311px] bg-secondary pt-9 px-6 text-md">
      <p className="title-container h-10 flex justify-start items-center text-white tracking-widest">
        <span className=" px-4 py-3 bg-newsTitle text-black mr-4">{title}</span>
        {date}
      </p>

      <p className=" py-8 text-white tracking-widest">{subTitle}</p>

      <p className=" text-white font-light tracking-widest">{description}</p>
    </div>
  );
};

export default NewsCard;
