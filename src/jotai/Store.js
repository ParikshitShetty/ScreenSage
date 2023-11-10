import { atom } from "jotai";
import {atomWithStorage} from 'jotai/utils';

export const searchResults = atom([]);

export const favourites = atomWithStorage('fav',[])
// export const favourites = atom([ ])

export const modalObj = atom({});