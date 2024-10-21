const Footer = () => {
  return (
    <section className="footer bg-secondary flex flex-col justify-center items-center pt-14 pb-44">
      <img src="/assets/FooterText.png" alt="Footer Text" />

      <div className="logo-container mb-28">
        <img src="/assets/FooterLogo.png" alt="Footer Logo" />
      </div>

      <div className="tags-container flex justify-center items-center gap-14">
        <img src="/assets/GooglePlayTag.png" alt="Google Play Tag" />
        <img src="/assets/AppleStoreTag.png" alt="Apple Store Tag" />
      </div>
    </section>
  )
}

export default Footer