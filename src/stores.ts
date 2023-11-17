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

export enum IOType {
  Input,
  Output
}

export class IO {
  kind;
  type;
  constructor(kind: IOKind, type: IOType) {
    this.kind = kind;
    this.type = type;
  }
}

export class existingThing {
  itsclass;
  itsname;
  itsleft;
  itscolor: string;
  itstop;
  itsid;
  itsIO;
  constructor(
    itsclass: string,
    itsname: string,
    itsleft: number,
    itstop: number,
    itsIO: IO[]
    ) {
    this.itsclass = itsclass;
    this.itsname = itsname;
    this.itsleft = itsleft;
    this.itstop = itstop;
    this.itscolor = "#525252"
    lastId = lastId + 1;
    this.itsid = lastId;
    this.itsIO = itsIO;
  }
}