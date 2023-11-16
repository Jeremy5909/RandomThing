import { writable, type Writable } from "svelte/store";

export const selectedId = writable<number>();

export let lastId = -1;
export const allExistingThings  = writable<existingThing[]>([]);

export class existingThing {
    itsclass;
    itsname;
    itsleft;
    itscolor: string;
    itstop;
  itsid;
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
        this.itscolor = "#525252"
        lastId = lastId + 1;
        this.itsid = lastId;

      }
    }