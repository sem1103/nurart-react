import { create } from "zustand";
import { devtools } from "zustand-devtools";

 const createWithDevtools = create(devtools);

 export default createWithDevtools;