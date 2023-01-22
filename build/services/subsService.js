"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesWithoutSensivityInfo = exports.findById = exports.getEntries = void 0;
const subs_json_1 = __importDefault(require("./subs.json"));
const subs = subs_json_1.default;
const getEntries = () => subs;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = subs.find(d => d.id === id);
    if (entry != null) {
        const restOfSubs = __rest(entry, []);
        return restOfSubs;
    }
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensivityInfo = () => subs.map(({ nick, months, profileUrl, description }) => ({
    nick,
    months,
    profileUrl,
    description
}));
exports.getEntriesWithoutSensivityInfo = getEntriesWithoutSensivityInfo;
/*
export const addSubs = (newSubsEntry: NewSubsEntry): SubsEntry => {
  const newSubs = {
    id: Math.max(...subs.map(d => d.id)) + 1,
    ...newSubsEntry
  }

  subs.push(newSubs)
  return newSubs
}
*/
//  const diariesWithoutSensitiveInfo = getEntriesWithoutSensivityInfo()
//  diariesWithoutSensitiveInfo[0].comment
