import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter.jsx";
import { Page2DteialC } from "../Page2DetailC.jsx";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  },
  {
    path: "/detailC",
    exact: false,
    children: <Page2DteialC />
  }
];
