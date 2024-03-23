import initYoga from "./index.js";
import { file } from "bun";

// .wasm files currently not working  in bun with --compile
import yogaFile from './yoga.bun';

const Yoga = await initYoga(
  await file(yogaFile).arrayBuffer()
);

export * from "../yoga/javascript/src_js/generated/YGEnums.js";
export default Yoga;