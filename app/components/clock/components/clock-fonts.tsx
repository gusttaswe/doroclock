import { fonts } from '@/app/fonts';
import Slider from 'react-slick';

type ClockFontsProps = {
  currentFont: string,
  updateFont(newFont: string): void;
};

export function ClockFonts({
  currentFont,
  updateFont
}: ClockFontsProps) {
  const fontValues = Object.values(fonts);

  const fontIndex = fontValues.findIndex((font) => font.className === currentFont);
  const currentSlideIndex = fontIndex === -1 ? 0 : fontIndex;
  
  const settings = {
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 500,
    initialSlide: currentSlideIndex, 
    afterChange: (index: number) => updateFont(fontValues[index].className)
  };

  return (
    <div 
      id="color-settings" 
      data-testid="clock-fonts"
      className='h-28'
    >
      <Slider {...settings}>
        { fontValues.map((font, index) => (
          <div className={font.className} key={font.variable}>
            <p className={`
              font-option
              mx-auto w-16 h-16 rounded-full flex items-center justify-center border
              text-white
              ${currentSlideIndex === index ? 'bg-slate-700/40' : 'bg-slate-300/20'}
            `}>Aa</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}