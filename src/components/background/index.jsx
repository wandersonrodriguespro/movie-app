import { BackgroundImage, BackgroundGradiente } from "./style";

export const Background = ({ children, imageBanner }) => {
  return (
    <BackgroundImage bgImage={imageBanner}>
      <BackgroundGradiente>{children}</BackgroundGradiente>
    </BackgroundImage>
  );
};
