import { writable, type Writable } from "svelte/store";

export const selectedId = writable<number>();

export let lastId = -1;
export const allExistingThings  = writable<existingThing[]>([]);

export enum IOKind {
  String,
  Number,
  Boolean,
  Vector
}
export class existingThing {
  itsclass;
  itsname;
  itsleft;
  itscolor: string;
  itstop;
  itsid;
  itsInputs;
  itsOutputs;
  constructor(
    itsclass: string,
    itsname: string,
    itsleft: number,
    itstop: number,
    itsInputs: IOKind[],
    itsOutputs: IOKind[]
    ) {
    this.itsclass = itsclass;
    this.itsname = itsname;
    this.itsleft = itsleft;
    this.itstop = itstop;
    this.itscolor = "#525252"
    lastId = lastId + 1;
    this.itsid = lastId;
    this.itsInputs = itsInputs;
    this.itsOutputs = itsOutputs;
  }
}