import { Devvit } from '@devvit/public-api';

export const LoadingComponent = (): JSX.Element => (
    <image
      url="loading.gif"
      description="Loading ..."
      imageHeight={60}
      imageWidth={60}
      width="60px"
      height="60px"
      resizeMode="scale-down"
    />
);