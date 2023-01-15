const Logos = () => {
  const images = [
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-woolworths.7d730bf4.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-loreal.f20b451e.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-google.486fad57.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-deloitte.f667d2c8.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-bupa.c4811777.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-anz.66af2cb5.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-amazon.6e72a488.png&w=1920&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-commonwealth-bank.88e9eb16.png&w=1920&q=75",
  ];
  return (
    <div className="flex justify-center border-b pb-6">
      <div className="text-red-400 mt-16 flex w-3/6 justify-between">
        {images.map((e) => {
          return <img className="w-14 h-6" src={e}></img>;
        })}
      </div>
    </div>
  );
};

export default Logos;
