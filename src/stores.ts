import { writable } from "svelte/store";

export const currentId = writable(0);
export const color = writable("#525252");