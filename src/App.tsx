import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Dialog, DialogCloseTrigger, DialogContainer, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@ark-ui/solid";

const App: Component = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <button>Open</button>
            </DialogTrigger>
            <DialogContainer>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                    <DialogCloseTrigger>Close</DialogCloseTrigger>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
};

export default App;
