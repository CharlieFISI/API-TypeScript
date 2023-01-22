"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subsServices = __importStar(require("../services/subsService"));
// import toNewSubsEntry from '../_utils'
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(subsServices.getEntriesWithoutSensivityInfo());
});
router.get('/:id', (req, res) => {
    const subs = subsServices.findById(+req.params.id);
    return (subs != null)
        ? res.send(subs)
        : res.sendStatus(404);
});
/* router.post('/', (req, res) => {
  try {
    const newSubsEntry = toNewSubsEntry(req.body)

    const addedSubsEntry = subsServices.addSubs(newSubsEntry)

    res.json(addedSubsEntry)
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)

    res.status(400).send(message)
  }
}) */
exports.default = router;
