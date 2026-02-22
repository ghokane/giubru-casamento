import React from "react";

export type Page = {
  id: string;           // hotlink id (#rsvp)
  label: string;        // drawer label
  title?: string;        // title
  Component: React.FC;  // actual page component
};
