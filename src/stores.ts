import { writable } from "svelte/store";

export const currentId = writable();

export const names = writable(Array);
export const class_names = writable(Array);
export const colors = writable(["#525252", "#525252"]);
