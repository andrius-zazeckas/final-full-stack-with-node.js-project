import { Dispatch, SetStateAction } from "react";
import type { TEvent, TEventVisitors } from "../Events/types";
import type { TVisitors } from "../Visitors/types";

export type TEventsContext = {
  events: TEvent[];
  setEvents: Dispatch<SetStateAction<TEvent[]>>;
  eventVisitors: TEventVisitors[];
  setEventVisitors: Dispatch<SetStateAction<TEventVisitors[]>>;
  visitors: TVisitors[];
  setVisitors: Dispatch<SetStateAction<TVisitors[]>>;
};
