import { Component } from "react/cjs/react.production.min";
import ViewComponent from "./components/ViewComponent";
import SafeAreaViewComponent from "./components/SafeAreaViewComponent";
import ImageViewComponent from "./components/ImageViewComponent";
import ScrollViewComponent from "./components/ScrollViewComponent";

export default class App extends Component{
    render(){
        return(
            <ScrollViewComponent />
        )
    }
}

