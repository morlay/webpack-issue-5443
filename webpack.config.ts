import * as path from "path"
import {
  Configuration,
  optimize,
} from "webpack"

const conf: Configuration = {
  context: __dirname,
  entry: {
    app: "./index.ts",
  },
  output: {
    path: path.resolve("./__built__"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                "module": "es6",
                "target": "es5",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new optimize.ModuleConcatenationPlugin(),
  ],
}

export = conf
