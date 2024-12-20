import Home from "@/src/screens/Home";
import React from "react";
import { StatusBar } from "react-native";

export default function App() {
 return (
    <>
    <StatusBar
    barStyle='dark-content'
    backgroundColor='transparent'
    translucent={true}
    />
    <Home />
    </>
 );
}

