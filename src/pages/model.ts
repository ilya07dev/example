import { createEvent, createStore } from "effector";

export const $name = createStore<number>(0);
export const setName = createEvent<number>();

$name.on(setName, (_, state) => state);
