import { writable } from "svelte/store";

export const currentId = writable(0);
export const names = writable(["", ""]);
export const class_names = writable(["", ""]);
export const colors = writable(["#525252", "#525252"]);
