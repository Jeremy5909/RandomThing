import { writable, type Writable } from "svelte/store";

export const selectedId = writable();

// export const names : Writable<string[]> = writable([]);
// export const class_names : Writable<string[]> = writable([]);
// export const colors : Writable<string[]> = writable(Array(20).fill("#525252"));

export let lastId = 0;
export const allExistingThings  = writable<existingThing[]>([]);

export class existingThing {
    itsclass;
    itsname;
    itsleft;
    itscolor;
    itstop;
    itsid;
    selected:boolean = false;
    constructor(
      itsclass: string,
      itsname: string,
      itsleft: number,
      itstop: number
      ) {
        this.itsclass = itsclass;
        this.itsname = itsname;
        this.itsleft = itsleft;
        this.itstop = itstop;
        this.itscolor = "525252"
      lastId = lastId + 1;
      this.itsid = lastId;

      }
    }