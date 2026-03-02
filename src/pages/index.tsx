import { Page } from "../types/Page";
import HomePage from "./Home";
import AccommodationsPage from "./Hoteis";
import AddressPage from "./Address"
import BoaTarde from "./BoaTarde"
import DressCode from "./DressCode"
import Transporte from "./Transporte";
// import FaqPage from "./FaqPage";

import SchedulePage from "./Schedule";

export const pages: Page[] = [
  
  { id: "BoaTarde", title: "", label: "Home", Component: BoaTarde },
  { id: "home", title: "", label: "RSVP", Component: HomePage },
  { id:"Address", label: "Endereço", Component:AddressPage},
  { id: "schedule", label: "Cronograma", Component: SchedulePage },
  { id: "DressCode", label: "Dress Code", Component: DressCode },
  { id: "Hoteis", label: "Hospedagem", Component: AccommodationsPage },
  { id: "Transporte", label: "Transporte", Component: Transporte },
  // { id: "faq", label: "FAQ", Component: FaqPage },
];
