{
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            exportLocalsConvention: 'camelCase',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            parser: 'postcss-js',
          },
          execute: true,
        },
      },
    ],
  },