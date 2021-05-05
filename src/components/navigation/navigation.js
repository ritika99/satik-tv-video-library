import "./navigation.css";
import { useState } from "react";
import {Header} from "./header/header";
import { Sidebar } from "./sidebar/sidebar";

export function Navigation() {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <>
    <Header headerToggle={headerToggle} setHeaderToggle={setHeaderToggle}/>
    <Sidebar headerToggle={headerToggle}/>
    </>
  )
}