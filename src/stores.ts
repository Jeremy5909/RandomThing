import { writable } from "svelte/store";

export const currentId = writable(0);

export const names = writable(Array);
export const class_names = writable(Array);
export const colors = writable(Array(20).fill("#525252"));
