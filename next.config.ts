import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto',
  },
});

const nextConfig: NextConfig = {
  turbopack: {},
};

export default withVanillaExtract(nextConfig);
