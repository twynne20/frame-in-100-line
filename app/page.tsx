import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0x09e2d2037F8b88Dc787308C5184071491Afa5875?ref=0x0F61d0AEBb908592aBC6F159b2a48D968a3B6C80',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/DALLE2.jpg`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'testing test',
  description: 'LFG',
  openGraph: {
    title: 'testing test',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/DALLE2.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>testing test</h1>
    </>
  );
}
