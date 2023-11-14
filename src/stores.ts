import { writable } from "svelte/store";

export const currentId = writable();

export const names = writable([]);
export const class_names = writable([]);
export const colors = writable(Array(20).fill("#525252"));

export class existingThing {
    itsclass: string;
    itsleft: number;
    itstop: number;
    constructor(itsclass: string, itsleft:number, itstop:number)
    {
        this.itsclass = itsclass;
        this.itsleft = itsleft;
        this.itstop = itstop;
    }
}
export const allExistingThings = writable([]);
