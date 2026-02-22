import { Page } from "../types/Page";

import HomePage from "./Home";
// import SchedulePage from "./SchedulePage";
// import AccommodationsPage from "./AccommodationsPage";
// import FaqPage from "./FaqPage";

export const pages: Page[] = [
  { id: "home", title: "", label: "Home", Component: HomePage },
  // { id: "schedule", label: "Schedule", Component: SchedulePage },
  // { id: "accommodations", label: "Accommodations", Component: AccommodationsPage },
  // { id: "faq", label: "FAQ", Component: FaqPage },
];
