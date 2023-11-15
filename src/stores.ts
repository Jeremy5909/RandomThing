import { writable, type Writable } from "svelte/store";

export const selectedId = writable();

export const names : Writable<string[]> = writable([]);
export const class_names : Writable<string[]> = writable([]);
export const colors : Writable<string[]> = writable(Array(20).fill("#525252"));

export class existingThing {
    itsclass;
    itsleft;
    itstop;
    constructor(itsclass: string, itsleft:number, itstop:number)
    {
        this.itsclass = itsclass;
        this.itsleft = itsleft;
        this.itstop = itstop;
    }
}
export const allExistingThings = writable([]);
