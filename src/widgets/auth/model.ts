import { createEvent, createStore } from "effector";

export const $isAuth = createStore(false);
export const setIsAuth = createEvent<boolean>();

$isAuth.on(setIsAuth, (_, state) => state);
